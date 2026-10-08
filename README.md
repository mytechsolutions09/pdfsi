# PDFSI — PDF Super Intelligence

<div align="center">
  <h3>70 Free Client-Side Tools for PDFs & Files with Local AI Intelligence</h3>
  <p><strong>100% Client-Side • Zero Server Ingress • No Account Needed • No Watermarks</strong></p>
</div>

---

## 🌟 Overview

**PDFSI (PDF Super Intelligence)** is a modern, privacy-first web platform inspired by DamnPDFs, delivering **70 free tools** for viewing, editing, converting, signing, protecting, and automating PDF and document workflows.

Every document transformation executes **100% locally in your browser** via WebAssembly, JavaScript, HTML5 Canvas, and WebCrypto. Your files never touch a remote server.

---

## ⚡ Highlights

- 🔒 **Zero Data Ingress**: Files never leave your browser sandbox. Complete privacy guaranteed.
- ⚡ **70 Working Tools**: From daily tasks like Compress, Merge, and Split to advanced Bates numbering, PII redaction, and ATS resume generation.
- 🎨 **Sleek Aesthetic**: Neon green branding, glassmorphic dark/light UI, custom scrollbars, and fluid micro-animations.
- 🧠 **Dual AI Architecture**: Out-of-the-box local extractive semantic NLP analyzer + optional Bring-Your-Own-Key (BYOK) for Google Gemini, OpenAI, or Groq.
- ⛓️ **Workflow Pipeline Builder**: Visually chain tools into multi-step batch automations (e.g., `Merge -> Compress -> Watermark`).
- ⌨️ **Command Palette**: Instant tool discovery with `Ctrl + K` / `Cmd + K`.
- ⭐ **Local Workspace**: Pinned favourites and recent operations saved strictly in browser `localStorage`.

---

## 🛠️ Complete Toolkit Directory (70 Tools)

### 📑 Page Management (14 tools)
- **Merge PDFs**: Collate multiple PDF files in any chosen sequence.
- **Split PDF**: Extract page ranges, custom sets, or burst all pages into individual files.
- **Compress PDF**: Lossless and visual compression to meet upload size limits.
- **Organize Pages**: Visual grid to reorder, delete, and rotate pages.
- **Rotate Pages**: Rotate 90°, 180°, or 270°.
- **Flip Pages**: Mirror pages horizontally or vertically.
- **Alternate & Mix**: Interleave pages from alternating scan batches.
- **Split in Half**: Cut two-up booklet scans into individual pages.
- **Split by Size**: Divide documents to stay under attachment limits.
- **Split by Text**: Start new documents wherever target keywords appear.
- **Split by Bookmarks**: Divide documents by table of contents outline.
- **Pages per Sheet (N-Up)**: Format 2, 4, or 8 pages per sheet for printing.
- **Crop & Resize**: Adjust margins and rescale to standard paper formats.
- **PDF to ZIP**: Archive documents and extracted pages into a single ZIP file.

### ✍️ Edit & Annotate (15 tools)
- **Edit PDF**: Add text annotations, shapes, drawings, and highlights.
- **Sign PDF**: Interactive signature canvas pad (draw, type, or upload) and stamp pages.
- **Add Watermark**: Apply custom diagonal text or logos with opacity controls.
- **Remove PDF Watermark**: Clean watermarks and stamp overlays.
- **Page Numbers**: Format page numbers with custom positions and starting indices.
- **Bates Numbering**: Sequential legal discovery identifiers across document batches.
- **Headers & Footers**: Add running headers, footers, dates, and notices.
- **Flatten PDF**: Bake interactive form fields and annotations into static page content.
- **Change PDF Colours**: Night mode inverted reading, sepia, and high contrast.
- **Fill PDF Forms**: Fill interactive form fields and export finalized documents.
- **Redact PDF**: Permanently blackout sensitive areas and text.
- **Text to Handwriting**: Render text onto notebook ruled paper with organic ink.
- **PDF to Handwriting**: Give printed PDF documents an authentic handwritten feel.
- **Handwriting to PDF**: Clean and sharpen scanned lecture notes.
- **Thumbmark Maker**: Clean ink thumb impressions into transparent cutout stamps.

### 📄 Create & Convert to PDF (11 tools)
- **Word to PDF**: Convert documents while maintaining layout.
- **Images to PDF**: Combine JPG, PNG, WEBP, or HEIC into formatted PDFs.
- **Excel to PDF**: Convert spreadsheets and data tables.
- **PowerPoint to PDF**: Convert presentation slides.
- **HTML to PDF**: Render HTML code and CSS layouts into vector PDFs.
- **Create a PDF**: Rich text authoring from a clean canvas.
- **Markdown to PDF**: Compile markdown with syntax highlighting into styled documents.
- **Resume Builder**: Modern ATS-optimized resume generator.
- **CSV ↔ PDF**: Convert raw data into formatted grid tables.
- **Audio to PDF**: Generate timestamped transcripts from audio recordings.
- **Ebook to PDF**: Convert EPUB and ebooks into printable PDFs.

### 🔄 Convert & Extract (10 tools)
- **PDF to Word**: Extract editable text and layout into Word documents.
- **PDF to Images**: Export pages as high-resolution PNGs or JPGs in a ZIP.
- **Edit Metadata**: View and update Title, Author, Subject, and Keywords.
- **Extract Images**: Save all embedded photos and graphics.
- **PDF to Excel**: Extract tabular data into spreadsheet cells.
- **PDF to PowerPoint**: Export presentation slides.
- **Extract Text**: One-click selectable text scraper.
- **PDF to HTML**: Export responsive flowing HTML markup.
- **PDF to Audio**: Text-to-speech reader for listening to documents aloud.
- **PDF to Ebook**: Create reflowable EPUB reading guides.

### 🔒 Security & Privacy (6 tools)
- **Protect PDF**: Add AES password protection.
- **Remove Password**: Decrypt documents using your document key.
- **Remove Restrictions**: Enable printing, copying, and modification.
- **Auto-Redact Personal Data**: Detect and censor SSNs, credit cards, emails, and phone numbers.
- **Privacy Scanner**: Audit documents for hidden tracking metadata and GPS leaks.
- **Document Fingerprint**: Generate cryptographic SHA-256 integrity verification certificates.

### 🧠 AI & Analysis (5 tools)
- **Chat with PDFs**: Ask questions grounded directly in document text.
- **Summarize PDF**: Generate executive summaries, key bullet points, and action items.
- **Searchable PDF (OCR)**: Optical character recognition for scanned pages.
- **Compare PDFs**: Side-by-side visual and text diff comparison.
- **Repair PDF**: Recover readable pages from corrupted cross-reference tables.

### 💼 Business & Billing (3 tools)
- **GST Invoice Builder**: Full tax invoice generator with automatic CGST, SGST, IGST totals and HSN codes.
- **POS Billing Counter**: Thermal receipt slip generator with cashier totals.
- **GST Filing Prep**: Prepare and size document packages for tax portal filings.

### 🔗 Share & Collaborate (4 tools)
- **Scan Documents**: Turn camera photos into high-contrast PDF pages.
- **Build a Workflow**: Automate multi-step batch tool pipelines.
- **Send Files Directly (P2P)**: Encrypted browser-to-browser WebRTC file sharing.
- **Shared Whiteboard**: Real-time collaborative canvas markup room.

### 🖼️ Images (2 tools)
- **Remove Background**: Clean transparent PNG cutouts with edge tolerance controls.
- **Remove Image Watermark**: Inpainting and clone stamp tool to erase marks.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/mytechsolutions09/pdfsi.git
cd pdfsi

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 🛡️ Privacy Guarantee

PDFSI is designed to respect your data privacy:
- No file is ever transmitted over the network.
- No third-party tracking scripts or advertising cookies.
- No document storage on external cloud servers.
- All operations execute in your local browser sandbox memory.

---

## 📄 License

MIT License. Open-source and free for personal and commercial use.
