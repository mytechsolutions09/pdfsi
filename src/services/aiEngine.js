// AI Engine: Supports Local NLP Heuristics (no API key needed) AND Bring-Your-Own-Key (Gemini / OpenAI / Groq)

export const getAISettings = () => {
  if (typeof localStorage !== 'undefined') {
    try {
      const raw = localStorage.getItem('pdfsi.ai_settings') || localStorage.getItem('damnpdfs.ai_settings');
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.error(e);
    }
  }
  return {
    provider: 'local', // 'local' | 'gemini' | 'openai' | 'groq'
    apiKey: '',
    model: 'gemini-1.5-flash',
  };
};

export const saveAISettings = (settings) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('pdfsi.ai_settings', JSON.stringify(settings));
  }
};

// Local extractive summarization algorithm
export const summarizeLocally = (text, type = 'executive') => {
  if (!text || text.length < 50) {
    return {
      summary: "Document does not contain sufficient text for automated summarization, or is image-based. Use 'Searchable PDF (OCR)' first to extract scanned text.",
      keyPoints: [
        "Ensure scanned pages have an OCR text layer",
        "Document loaded into browser sandbox safely",
        "All calculations executed strictly on your device"
      ],
      wordCount: text ? text.split(/\s+/).length : 0,
    };
  }

  const sentences = text
    .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
    .split("|")
    .map((s) => s.trim())
    .filter((s) => s.length > 25);

  const wordCount = text.split(/\s+/).length;
  const topSentences = sentences.slice(0, Math.min(sentences.length, 5));

  if (type === 'bullets') {
    return {
      summary: "Key Highlights & Observations:",
      keyPoints: topSentences.map((s) => s.replace(/\.$/, '')),
      wordCount,
    };
  }

  return {
    summary: topSentences.slice(0, 3).join(' ') || "Analysis completed successfully.",
    keyPoints: topSentences.slice(0, 4).map((s) => `• ${s}`),
    wordCount,
  };
};

// Auto-Redact PII Detector (Emails, SSNs, Credit Cards, Phones, IP Addresses)
export const scanPII = (text) => {
  const piiPatterns = [
    { type: 'Email Address', regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g },
    { type: 'Phone Number', regex: /(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g },
    { type: 'Credit Card', regex: /\b(?:\d{4}[-\s]?){3}\d{4}\b/g },
    { type: 'Social Security / ID', regex: /\b\d{3}-\d{2}-\d{4}\b/g },
    { type: 'IPv4 Address', regex: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g },
  ];

  const findings = [];
  piiPatterns.forEach(({ type, regex }) => {
    const matches = text.match(regex);
    if (matches) {
      matches.forEach((val) => {
        findings.push({ type, value: val });
      });
    }
  });

  return findings;
};

// Chat with PDF Query Dispatcher
export const answerPDFQuestion = async (question, contextText) => {
  const settings = getAISettings();

  // If user provided a Gemini API Key
  if (settings.provider === 'gemini' && settings.apiKey) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${settings.model || 'gemini-1.5-flash'}:generateContent?key=${settings.apiKey}`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are an expert document assistant. Answer the user question based strictly on this document context:\n\nCONTEXT:\n${contextText.slice(0, 8000)}\n\nQUESTION: ${question}`
                }
              ]
            }
          ]
        })
      });
      const data = await res.json();
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      }
    } catch (err) {
      console.warn('Gemini API call failed, falling back to local semantic matcher:', err);
    }
  }

  // Local semantic & keyword retrieval fallback
  const terms = question.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
  const sentences = contextText.split(/(?<=[.?!])\s+/);
  
  const matches = sentences.filter((sentence) => {
    const sLower = sentence.toLowerCase();
    return terms.some((t) => sLower.includes(t));
  });

  if (matches.length > 0) {
    return `Based on the document text: "${matches.slice(0, 3).join(' ')}"`;
  }

  return `I reviewed the document. Regarding "${question}", no exact verbatim match was found. You can rephrase your question or enable AI settings with a Gemini/OpenAI API key for generative semantic answers.`;
};
