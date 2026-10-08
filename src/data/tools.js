// Complete Directory of all 70 tools categorized exactly like DamnPDFs

export const TOOL_CATEGORIES = [
  { id: 'all', name: 'All tools', icon: 'Layers' },
  { id: 'pages', name: 'Page management', count: 14, icon: 'Layers' },
  { id: 'edit', name: 'Edit & annotate', count: 15, icon: 'PenLine' },
  { id: 'convert_to', name: 'Create & convert to PDF', count: 11, icon: 'FileOutput' },
  { id: 'convert_from', name: 'Convert & extract', count: 10, icon: 'ArrowLeftRight' },
  { id: 'security', name: 'Security & privacy', count: 6, icon: 'ShieldCheck' },
  { id: 'ai', name: 'AI & analysis', count: 5, icon: 'Sparkles' },
  { id: 'business', name: 'Business & billing', count: 3, icon: 'Receipt' },
  { id: 'share', name: 'Share & workflows', count: 4, icon: 'Share2' },
  { id: 'images', name: 'Images', count: 2, icon: 'ImageMinus' },
];

export const ALL_TOOLS = [
  // --- Popular & Page Management ---
  {
    id: 'compress-pdf',
    title: 'Compress PDF',
    description: 'Reduce file size. Start with lossless compression to keep image quality.',
    category: 'pages',
    popular: true,
    badge: 'Most used',
    icon: 'Layers',
    actionType: 'compress',
    accept: '.pdf',
    tags: ['shrink', 'reduce size', 'optimize', 'lossless', 'fast', 'small']
  },
  {
    id: 'edit-pdf',
    title: 'Edit PDF',
    description: 'Edit text, move or resize PDF elements, add images, drawings, stamps and shapes.',
    category: 'edit',
    popular: true,
    icon: 'PenLine',
    actionType: 'edit',
    accept: '.pdf',
    tags: ['annotate', 'text', 'draw', 'stamp', 'highlight', 'shapes']
  },
  {
    id: 'sign-pdf',
    title: 'Sign PDF',
    description: 'Draw, type, or upload a signature and place it anywhere on your PDF.',
    category: 'edit',
    popular: true,
    icon: 'PenLine',
    actionType: 'sign',
    accept: '.pdf',
    tags: ['signature', 'e-sign', 'contract', 'stamp', 'draw']
  },
  {
    id: 'remove-background',
    title: 'Remove background',
    description: 'Make a clean cutout, refine its edges, and export transparent PNG.',
    category: 'images',
    popular: true,
    icon: 'ImageMinus',
    actionType: 'bg-remove',
    accept: 'image/*',
    tags: ['cutout', 'transparent', 'png', 'erase', 'photo']
  },
  {
    id: 'remove-pdf-watermark',
    title: 'Remove PDF watermark',
    description: 'Remove separate text or image marks while preserving the rest of the page.',
    category: 'edit',
    popular: true,
    icon: 'Eraser',
    actionType: 'remove-watermark',
    accept: '.pdf',
    tags: ['clear watermark', 'unwatermark', 'clean page', 'erase logo']
  },
  {
    id: 'remove-image-watermark',
    title: 'Remove image watermark',
    description: 'Select a mark and rebuild its background or clone clean areas.',
    category: 'images',
    popular: true,
    icon: 'ImageMinus',
    actionType: 'image-watermark-remove',
    accept: 'image/*',
    tags: ['inpainting', 'erase logo', 'clone stamp', 'clean photo']
  },
  {
    id: 'merge-pdf',
    title: 'Merge PDFs',
    description: 'Bring several PDFs together in the exact order you choose.',
    category: 'pages',
    popular: true,
    icon: 'Layers',
    actionType: 'merge',
    accept: '.pdf',
    multiple: true,
    tags: ['combine', 'join', 'append', 'collate']
  },
  {
    id: 'pdf-to-word',
    title: 'PDF to Word',
    description: 'Export editable text and layout into a Word docx document.',
    category: 'convert_from',
    popular: true,
    icon: 'FileText',
    actionType: 'pdf-to-word',
    accept: '.pdf',
    tags: ['docx', 'convert', 'doc', 'microsoft word']
  },

  // --- Scan & Workflows ---
  {
    id: 'scan-to-pdf',
    title: 'Scan documents',
    description: 'Turn your camera or photos into clean, high-contrast searchable pages.',
    category: 'share',
    icon: 'ScanLine',
    actionType: 'scan-to-pdf',
    accept: 'image/*,.pdf',
    tags: ['camera', 'scanner', 'photo to pdf', 'mobile scan']
  },
  {
    id: 'workflow',
    title: 'Build a workflow',
    description: 'Chain tools once (Merge → Compress → Watermark). Run on multiple files.',
    category: 'share',
    icon: 'Workflow',
    actionType: 'workflow',
    accept: '.pdf,image/*',
    tags: ['automate', 'chain', 'pipeline', 'batch', 'recipes']
  },

  // --- Page Management (remaining) ---
  {
    id: 'alternate-mix-pdf',
    title: 'Alternate & mix',
    description: 'Interleave pages from separate scans or front/back documents.',
    category: 'pages',
    icon: 'Shuffle',
    actionType: 'alternate-mix',
    accept: '.pdf',
    multiple: true,
    tags: ['duplex', 'interleave', 'mix scans', 'collate']
  },
  {
    id: 'split-pdf',
    title: 'Split PDF',
    description: 'Extract ranges, even/odd pages, or give every page its own file.',
    category: 'pages',
    icon: 'Scissors',
    actionType: 'split',
    accept: '.pdf',
    tags: ['separate', 'extract pages', 'cut', 'divide']
  },
  {
    id: 'split-pdf-by-text',
    title: 'Split by text',
    description: 'Start a new file wherever your matching keyword or chapter title appears.',
    category: 'pages',
    icon: 'SearchCode',
    actionType: 'split-text',
    accept: '.pdf',
    tags: ['invoice split', 'heading split', 'keyword', 'bookmark regex']
  },
  {
    id: 'split-pdf-by-bookmarks',
    title: 'Split by bookmarks',
    description: 'Use your document outline to separate distinct chapters or sections.',
    category: 'pages',
    icon: 'Bookmark',
    actionType: 'split-bookmarks',
    accept: '.pdf',
    tags: ['outline', 'chapters', 'table of contents']
  },
  {
    id: 'split-pdf-in-half',
    title: 'Split in half',
    description: 'Divide the document or cut two-page book scans into individual pages.',
    category: 'pages',
    icon: 'Columns2',
    actionType: 'split-half',
    accept: '.pdf',
    tags: ['book scan', 'halves', 'spread', 'two up']
  },
  {
    id: 'split-pdf-by-size',
    title: 'Split by file size',
    description: 'Make parts that strictly fit within email or attachment size limits.',
    category: 'pages',
    icon: 'HardDrive',
    actionType: 'split-size',
    accept: '.pdf',
    tags: ['megabytes', 'chunk', 'email limit', 'attachment']
  },
  {
    id: 'organize-pages',
    title: 'Organize pages',
    description: 'Reorder, drag-and-drop, remove, rotate, and duplicate pages visually.',
    category: 'pages',
    icon: 'LayoutGrid',
    actionType: 'organize',
    accept: '.pdf',
    tags: ['reorder', 'delete page', 'sort', 'thumbnails', 'visual grid']
  },
  {
    id: 'rotate-pdf',
    title: 'Rotate pages',
    description: 'Straighten crooked pages or turn the entire document 90°, 180°, or 270°.',
    category: 'pages',
    icon: 'RotateCw',
    actionType: 'rotate',
    accept: '.pdf',
    tags: ['orientation', 'landscape', 'portrait', 'turn']
  },
  {
    id: 'flip-pdf',
    title: 'Flip pages',
    description: 'Mirror pages horizontally, vertically, or both.',
    category: 'pages',
    icon: 'FlipHorizontal',
    actionType: 'flip',
    accept: '.pdf',
    tags: ['mirror', 'invert horizontal', 'flip upside down']
  },
  {
    id: 'multiple-pages-per-sheet',
    title: 'Pages per sheet (N-Up)',
    description: 'Arrange 2, 4, or 8 pages neatly on a single printed sheet.',
    category: 'pages',
    icon: 'Grid',
    actionType: 'n-up',
    accept: '.pdf',
    tags: ['handout', '2-up', '4-up', 'print economize', 'slides grid']
  },
  {
    id: 'crop-resize-pdf',
    title: 'Crop & resize',
    description: 'Trim white margins and fit pages to A4, Letter, Legal, or custom dimensions.',
    category: 'pages',
    icon: 'Crop',
    actionType: 'crop-resize',
    accept: '.pdf',
    tags: ['margins', 'trim', 'dimensions', 'a4', 'letter']
  },
  {
    id: 'pdf-to-zip',
    title: 'PDF to ZIP',
    description: 'Bundle multiple documents or export all page images into a single zip archive.',
    category: 'pages',
    icon: 'Archive',
    actionType: 'pdf-to-zip',
    accept: '.pdf',
    multiple: true,
    tags: ['compress archive', 'zip export', 'bulk']
  },

  // --- Edit & Annotate ---
  {
    id: 'pdf-to-handwriting',
    title: 'PDF to handwriting',
    description: 'Give digital document text a realistic organic handwritten appearance.',
    category: 'edit',
    icon: 'PenTool',
    actionType: 'pdf-to-handwriting',
    accept: '.pdf,text/*',
    tags: ['cursive', 'assignment', 'handwritten style', 'notes']
  },
  {
    id: 'thumbmark-generator',
    title: 'Thumbmark maker',
    description: 'Clean a camera photo of your ink thumb impression into a crisp cutout stamp.',
    category: 'edit',
    icon: 'Fingerprint',
    actionType: 'thumbmark',
    accept: 'image/*',
    tags: ['biometric', 'ink impression', 'signature thumb', 'stamp']
  },
  {
    id: 'text-to-handwriting',
    title: 'Text to handwriting',
    description: 'Convert typed words onto realistic ruled, plain, or grid notebook paper.',
    category: 'edit',
    icon: 'FileSpreadsheet',
    actionType: 'text-to-handwriting',
    accept: 'text/*,.pdf',
    tags: ['homework', 'ruled sheet', 'ballpoint', 'fountain pen']
  },
  {
    id: 'handwriting-to-pdf',
    title: 'Handwriting to PDF',
    description: 'Recognize cursive handwriting or clean up and enhance scanned student notes.',
    category: 'edit',
    icon: 'BookOpen',
    actionType: 'handwriting-to-pdf',
    accept: 'image/*,.pdf',
    tags: ['ocr notes', 'lecture cleanup', 'sharpen ink']
  },
  {
    id: 'fill-pdf-form',
    title: 'Fill PDF forms',
    description: 'Complete interactive AcroForm fields, checkboxes, and lock answers.',
    category: 'edit',
    icon: 'FormInput',
    actionType: 'fill-form',
    accept: '.pdf',
    tags: ['interactive fields', 'acroforms', 'tax forms', 'applications']
  },
  {
    id: 'redact-pdf',
    title: 'Redact PDF',
    description: 'Permanently blackout and erase sensitive text, areas, and hidden streams.',
    category: 'edit',
    icon: 'EyeOff',
    actionType: 'redact',
    accept: '.pdf',
    tags: ['blackout', 'censor', 'privacy', 'confidential', 'erase']
  },
  {
    id: 'add-watermark',
    title: 'Add a watermark',
    description: 'Stamp custom text or logos across pages with customizable opacity and rotation.',
    category: 'edit',
    icon: 'Stamp',
    actionType: 'watermark',
    accept: '.pdf',
    tags: ['draft', 'confidential watermark', 'logo stamp', 'copyright']
  },
  {
    id: 'page-numbers',
    title: 'Page numbers',
    description: 'Add custom numbering (Page X of Y, Roman numerals) in your preferred position.',
    category: 'edit',
    icon: 'Hash',
    actionType: 'page-numbers',
    accept: '.pdf',
    tags: ['pagination', 'footer numbers', 'numbering', 'folio']
  },
  {
    id: 'bates-numbering',
    title: 'Bates numbering',
    description: 'Apply sequential legal identifiers (e.g., CASE-000101) across document batches.',
    category: 'edit',
    icon: 'Binary',
    actionType: 'bates',
    accept: '.pdf',
    tags: ['legal discovery', 'evidence index', 'case id', 'prefix numbering']
  },
  {
    id: 'headers-footers',
    title: 'Headers & footers',
    description: 'Add running headers, dates, confidential notices, filenames, and page counters.',
    category: 'edit',
    icon: 'PanelTopBottom',
    actionType: 'headers-footers',
    accept: '.pdf',
    tags: ['running header', 'date footer', 'document header']
  },
  {
    id: 'flatten-pdf',
    title: 'Flatten PDF',
    description: 'Bake interactive forms, layers, and annotations directly into static page content.',
    category: 'edit',
    icon: 'Minimize2',
    actionType: 'flatten',
    accept: '.pdf',
    tags: ['lock fields', 'static render', 'immutable', 'prevent editing']
  },
  {
    id: 'invert-pdf',
    title: 'Change PDF colours',
    description: 'Create inverted dark mode, sepia reader, pure grayscale, or high-contrast prints.',
    category: 'edit',
    icon: 'SunMoon',
    actionType: 'invert',
    accept: '.pdf',
    tags: ['dark mode pdf', 'save black ink', 'sepia', 'night reading']
  },

  // --- Create & Convert to PDF ---
  {
    id: 'word-to-pdf',
    title: 'Word to PDF',
    description: 'Convert DOC and DOCX Word documents while preserving typography and tables.',
    category: 'convert_to',
    icon: 'FileCode',
    actionType: 'word-to-pdf',
    accept: '.doc,.docx',
    tags: ['docx to pdf', 'convert word', 'ms word']
  },
  {
    id: 'images-to-pdf',
    title: 'Images to PDF',
    description: 'Turn JPG, PNG, WEBP, or HEIC pictures into a tidy, organized PDF document.',
    category: 'convert_to',
    icon: 'Image',
    actionType: 'images-to-pdf',
    accept: 'image/*',
    multiple: true,
    tags: ['jpg to pdf', 'png to pdf', 'photo album', 'receipts']
  },
  {
    id: 'excel-to-pdf',
    title: 'Excel to PDF',
    description: 'Convert spreadsheet sheets, tables, and financial charts into formatted pages.',
    category: 'convert_to',
    icon: 'Table',
    actionType: 'excel-to-pdf',
    accept: '.xls,.xlsx,.csv',
    tags: ['xlsx to pdf', 'sheets', 'spreadsheets']
  },
  {
    id: 'pptx-to-pdf',
    title: 'PowerPoint to PDF',
    description: 'Turn presentation slides into high-resolution documents ready to present or print.',
    category: 'convert_to',
    icon: 'Presentation',
    actionType: 'pptx-to-pdf',
    accept: '.ppt,.pptx',
    tags: ['slides to pdf', 'powerpoint', 'keynote']
  },
  {
    id: 'html-to-pdf',
    title: 'HTML to PDF',
    description: 'Render HTML code, web pages, and inline CSS into vector printable PDF.',
    category: 'convert_to',
    icon: 'Code',
    actionType: 'html-to-pdf',
    accept: '.html,.htm,text/html',
    tags: ['web to pdf', 'markup', 'css print']
  },
  {
    id: 'create-pdf',
    title: 'Create a PDF',
    description: 'Start with blank canvas, rich text formatting, fonts, and make a new document.',
    category: 'convert_to',
    icon: 'FilePlus',
    actionType: 'create-pdf',
    accept: '*',
    tags: ['new document', 'blank pdf', 'write', 'author']
  },
  {
    id: 'markdown-to-pdf',
    title: 'Markdown to PDF',
    description: 'Turn Markdown files into polished documents with syntax highlighting.',
    category: 'convert_to',
    icon: 'FileCode2',
    actionType: 'markdown-to-pdf',
    accept: '.md,.markdown',
    tags: ['readme', 'docs', 'markdown compile', 'katex']
  },
  {
    id: 'latex-resume',
    title: 'Resume builder',
    description: 'Build a polished, ATS-optimized resume with modern templates and instant PDF output.',
    category: 'convert_to',
    icon: 'GraduationCap',
    actionType: 'resume-builder',
    accept: '*',
    tags: ['cv', 'resume', 'curriculum vitae', 'ats friendly']
  },
  {
    id: 'csv-to-pdf',
    title: 'CSV ↔ PDF',
    description: 'Convert data tables to styled PDFs or extract tabular pages into clean CSV.',
    category: 'convert_to',
    icon: 'FileSpreadsheet',
    actionType: 'csv-to-pdf',
    accept: '.csv,.pdf',
    tags: ['data tables', 'export spreadsheet', 'comma separated']
  },
  {
    id: 'audio-to-pdf',
    title: 'Audio to PDF',
    description: 'Make an editable, timestamped transcript summary from voice notes or audio.',
    category: 'convert_to',
    icon: 'Mic',
    actionType: 'audio-to-pdf',
    accept: 'audio/*',
    tags: ['transcribe', 'voice to text', 'speech to pdf', 'recording']
  },
  {
    id: 'ebook-to-pdf',
    title: 'Ebook to PDF',
    description: 'Convert DRM-free EPUB and MOBI ebooks with readable margins and chapter links.',
    category: 'convert_to',
    icon: 'Book',
    actionType: 'ebook-to-pdf',
    accept: '.epub,.mobi',
    tags: ['epub to pdf', 'kindle', 'reader']
  },

  // --- Convert & Extract ---
  {
    id: 'pdf-to-jpg',
    title: 'PDF to images',
    description: 'Export selected PDF pages as crisp PNGs or compressed JPGs.',
    category: 'convert_from',
    icon: 'Images',
    actionType: 'pdf-to-jpg',
    accept: '.pdf',
    tags: ['pdf to png', 'extract pages as pictures', 'render image']
  },
  {
    id: 'edit-pdf-metadata',
    title: 'Edit metadata',
    description: 'View and update Title, Author, Subject, Keywords, and Creation date.',
    category: 'convert_from',
    icon: 'Info',
    actionType: 'metadata',
    accept: '.pdf',
    tags: ['properties', 'author', 'title', 'keywords', 'xmp']
  },
  {
    id: 'extract-images',
    title: 'Extract images',
    description: 'Save all embedded photos, diagrams, and illustrations inside the document.',
    category: 'convert_from',
    icon: 'ImageDown',
    actionType: 'extract-images',
    accept: '.pdf',
    tags: ['rip pictures', 'embedded media', 'photos']
  },
  {
    id: 'pdf-to-excel',
    title: 'PDF to Excel',
    description: 'Extract document tables into editable spreadsheet cells and sheets.',
    category: 'convert_from',
    icon: 'Sheet',
    actionType: 'pdf-to-excel',
    accept: '.pdf',
    tags: ['tables to xlsx', 'financial extract', 'spreadsheets']
  },
  {
    id: 'pdf-to-pptx',
    title: 'PDF to PowerPoint',
    description: 'Turn PDF slides into editable presentation decks ready for keynote or PPTX.',
    category: 'convert_from',
    icon: 'Presentation',
    actionType: 'pdf-to-pptx',
    accept: '.pdf',
    tags: ['slides', 'presentation export', 'powerpoint']
  },
  {
    id: 'extract-text',
    title: 'Extract text',
    description: 'Get selectable, plain text directly from pages with one-click copy.',
    category: 'convert_from',
    icon: 'FileText',
    actionType: 'extract-text',
    accept: '.pdf',
    tags: ['copy all', 'plain text', 'scrape', 'unformatted']
  },
  {
    id: 'pdf-to-html',
    title: 'PDF to HTML',
    description: 'Export positioned web pages or responsive readable flowing HTML markup.',
    category: 'convert_from',
    icon: 'FileCode',
    actionType: 'pdf-to-html',
    accept: '.pdf',
    tags: ['web export', 'html5', 'embed in site']
  },
  {
    id: 'pdf-to-audio',
    title: 'PDF to audio',
    description: 'Listen to document content with high quality text-to-speech audio player.',
    category: 'convert_from',
    icon: 'Volume2',
    actionType: 'pdf-to-audio',
    accept: '.pdf,text/*',
    tags: ['tts', 'speech synthesizer', 'listen', 'read aloud', 'audiobook']
  },
  {
    id: 'pdf-to-epub',
    title: 'PDF to ebook',
    description: 'Create reflowable EPUB, Markdown, or clean study guide for e-readers.',
    category: 'convert_from',
    icon: 'BookOpenCheck',
    actionType: 'pdf-to-epub',
    accept: '.pdf',
    tags: ['ereader', 'kindle epub', 'kobo', 'reading mode']
  },

  // --- Security & Privacy ---
  {
    id: 'encrypt-pdf',
    title: 'Protect PDF',
    description: 'Lock your PDF with strong password protection and AES encryption.',
    category: 'security',
    icon: 'Lock',
    actionType: 'encrypt',
    accept: '.pdf',
    tags: ['password protect', 'aes', 'secure', 'restrict']
  },
  {
    id: 'remove-password',
    title: 'Remove password',
    description: 'Save an unencrypted, permanent copy using your current document password.',
    category: 'security',
    icon: 'Unlock',
    actionType: 'remove-password',
    accept: '.pdf',
    tags: ['decrypt', 'strip password', 'unlock']
  },
  {
    id: 'unlock-pdf',
    title: 'Remove restrictions',
    description: 'Remove annoying printing, editing, content-copying, and commenting limits.',
    category: 'security',
    icon: 'KeyRound',
    actionType: 'unlock',
    accept: '.pdf',
    tags: ['permissions', 'enable copy', 'enable print']
  },
  {
    id: 'auto-redact-pii',
    title: 'Auto-redact personal data',
    description: 'Automatically detect and censor SSNs, credit cards, emails, and phone numbers.',
    category: 'security',
    icon: 'ShieldAlert',
    actionType: 'auto-redact',
    accept: '.pdf',
    tags: ['gdpr', 'pii scanner', 'anonymize', 'censor ssn']
  },
  {
    id: 'privacy-scanner',
    title: 'Privacy scanner',
    description: 'Audit documents for hidden metadata, tracking coordinates, and revisions.',
    category: 'security',
    icon: 'SearchCheck',
    actionType: 'privacy-scanner',
    accept: '.pdf',
    tags: ['metadata check', 'audit', 'gps leak', 'clean leak']
  },
  {
    id: 'fingerprint-pdf',
    title: 'Document fingerprint',
    description: 'Compute SHA-256 cryptographic hashes to verify authenticity and tamper checks.',
    category: 'security',
    icon: 'Fingerprint',
    actionType: 'fingerprint',
    accept: '*',
    tags: ['sha256', 'hash', 'tamper detection', 'integrity']
  },

  // --- AI & Analysis ---
  {
    id: 'chat-with-pdf',
    title: 'Chat with PDFs',
    description: 'Ask questions and receive instant answers grounded directly in document text.',
    category: 'ai',
    icon: 'Bot',
    actionType: 'chat-ai',
    accept: '.pdf,text/*',
    tags: ['ai assistant', 'rag', 'ask questions', 'deep search']
  },
  {
    id: 'summarize-pdf',
    title: 'Summarize PDF',
    description: 'Get an executive briefing, bullet points, key takeaways, and action items.',
    category: 'ai',
    icon: 'Sparkles',
    actionType: 'summarize',
    accept: '.pdf,text/*',
    tags: ['tldr', 'executive summary', 'abstract', 'highlights']
  },
  {
    id: 'ocr-pdf',
    title: 'Searchable PDF (OCR)',
    description: 'Run optical character recognition on scanned pages to make them selectable.',
    category: 'ai',
    icon: 'ScanText',
    actionType: 'ocr',
    accept: '.pdf,image/*',
    tags: ['searchable text', 'scanned document', 'ocr tesseract']
  },
  {
    id: 'compare-pdfs',
    title: 'Compare PDFs',
    description: 'Inspect visual layout differences and text deletions/insertions side by side.',
    category: 'ai',
    icon: 'GitCompare',
    actionType: 'compare',
    accept: '.pdf',
    multiple: true,
    tags: ['diff', 'version check', 'side by side', 'changes']
  },
  {
    id: 'repair-pdf',
    title: 'Repair PDF',
    description: 'Rebuild damaged cross-reference tables and recover pages from corrupted files.',
    category: 'ai',
    icon: 'Wrench',
    actionType: 'repair',
    accept: '.pdf',
    tags: ['fix corrupted', 'recover', 'damaged pdf', 'rebuild xref']
  },

  // --- Business & Billing ---
  {
    id: 'gst-invoice',
    title: 'GST invoice builder',
    description: 'Build compliant tax invoices with automatic CGST, SGST, IGST totals and PDF export.',
    category: 'business',
    icon: 'Receipt',
    actionType: 'gst-invoice',
    accept: '*',
    tags: ['tax invoice', 'bill of supply', 'hsn code', 'gstin']
  },
  {
    id: 'pos-billing',
    title: 'Point-of-sale billing',
    description: 'Interactive item cart, quick tax calculation, discounts, and thermal receipt printing.',
    category: 'business',
    icon: 'CreditCard',
    actionType: 'pos-billing',
    accept: '*',
    tags: ['retail bill', 'cash register', 'thermal receipt', 'pos counter']
  },
  {
    id: 'gst-filing-prep',
    title: 'GST filing prep',
    description: 'Bundle, organize, rename, and size documents for portal tax return filing.',
    category: 'business',
    icon: 'Briefcase',
    actionType: 'gst-prep',
    accept: '.pdf',
    multiple: true,
    tags: ['gstr-1', 'gstr-3b', 'portal compress', 'tax compliance']
  },

  // --- Share & Collaborate ---
  {
    id: 'p2p-share',
    title: 'Send files directly (P2P)',
    description: 'Share encrypted files browser-to-browser with WebRTC without server storage.',
    category: 'share',
    icon: 'Share2',
    actionType: 'p2p-share',
    accept: '*',
    tags: ['webrtc', 'direct send', 'private transfer', 'airdrop clone']
  },
  {
    id: 'collab-whiteboard',
    title: 'Shared whiteboard',
    description: 'Sketch diagrams, review PDF drawings, and mark up pages together in real time.',
    category: 'share',
    icon: 'Users',
    actionType: 'collab-board',
    accept: '.pdf,image/*',
    tags: ['realtime drawing', 'team whiteboard', 'markup']
  }
];
