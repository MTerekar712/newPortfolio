import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Standard minimal PDF 1.4 generator with proper xref table and text streams
function createResumePdf() {
  const content = [
    "%PDF-1.4",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>",
    "endobj"
  ];

  const streamLines = [
    "BT",
    "/F2 22 Tf",
    "50 730 Td",
    "(MAYUR MANOHAR TEREKAR) Tj",
    "/F1 11 Tf",
    "0 -22 Td",
    "(Software Developer | Frontend Developer) Tj",
    "0 -16 Td",
    "(Email: terekarmayur712@gmail.com | Portfolio: https://portfolio-6wxx.vercel.app/) Tj",
    "0 -16 Td",
    "(GitHub: https://github.com/MTerekar712 | LinkedIn: https://www.linkedin.com/in/mayurterekar2306/) Tj",
    
    // Line separator
    "0 -24 Td",
    "/F2 13 Tf",
    "(EDUCATION) Tj",
    "/F1 10 Tf",
    "0 -18 Td",
    "(Bachelor of Engineering (B.E.) - Electronics & Telecommunication Engineering (EXTC)) Tj",
    "0 -15 Td",
    "(Bharati Vidyapeeth College of Engineering, Navi Mumbai, India) Tj",
    "0 -15 Td",
    "(Expected Graduation: 2026 | Focus: Software Engineering & Data Structures) Tj",

    // Skills
    "0 -24 Td",
    "/F2 13 Tf",
    "(TECHNICAL SKILLS) Tj",
    "/F1 10 Tf",
    "0 -18 Td",
    "(Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design) Tj",
    "0 -15 Td",
    "(Backend: Node.js, Express.js | Database: MongoDB) Tj",
    "0 -15 Td",
    "(Programming & Core: Java, Data Structures & Algorithms, Object-Oriented Programming) Tj",
    "0 -15 Td",
    "(Tools & Interests: Git, GitHub, RESTful APIs, AI/ML Foundations) Tj",

    // Projects
    "0 -24 Td",
    "/F2 13 Tf",
    "(PROJECTS) Tj",
    "/F2 11 Tf",
    "0 -18 Td",
    "(1. Digital Product Warranty Management System) Tj",
    "/F1 10 Tf",
    "0 -14 Td",
    "(Technologies: React.js, Node.js, Express.js, MongoDB) Tj",
    "0 -14 Td",
    "(- Web portal for tracking product guarantees, document uploads, and automated expiry alerts.) Tj",
    "0 -14 Td",
    "(- Interactive responsive dashboard providing real-time warranty status monitoring.) Tj",

    "0 -18 Td",
    "/F2 11 Tf",
    "(2. AI-Based Adaptive Noise Cancellation for Defence Communication) Tj",
    "/F1 10 Tf",
    "0 -14 Td",
    "(Technologies: Python, Digital Signal Processing, Adaptive Filtering, Audio Processing) Tj",
    "0 -14 Td",
    "(- Engineering research project utilizing adaptive algorithms to attenuate ambient noise.) Tj",
    "0 -14 Td",
    "(- Preserves vocal speech acoustic characteristics under high-noise defence scenarios.) Tj",

    "0 -18 Td",
    "/F2 11 Tf",
    "(3. Personal Developer Portfolio) Tj",
    "/F1 10 Tf",
    "0 -14 Td",
    "(Technologies: React.js, JavaScript (ES6+), CSS3 Glassmorphism, GSAP Animations) Tj",
    "0 -14 Td",
    "(- Custom crafted portfolio with responsive layouts, particle canvas, and interactive contact form.) Tj",

    // Notice
    "0 -35 Td",
    "/F1 9 Tf",
    "([Placeholder Note: Replace this file at /public/resume.pdf with your latest exported PDF]) Tj",
    "ET"
  ];

  const streamText = streamLines.join("\n");
  const streamLength = Buffer.byteLength(streamText);

  content.push(
    "4 0 obj",
    `<< /Length ${streamLength} >>`,
    "stream",
    streamText,
    "endstream",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj",
    "6 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj"
  );

  // Compute xref
  let offset = 0;
  const offsets = [];
  const fullText = [];

  for (const part of content) {
    if (part.endsWith("obj")) {
      offsets.push(offset);
    }
    offset += Buffer.byteLength(part + "\n");
    fullText.push(part);
  }

  const xrefOffset = offset;
  let xref = `xref\n0 ${offsets.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) {
    xref += String(off).padStart(10, '0') + " 00000 n \n";
  }

  const trailer = `trailer\n<< /Size ${offsets.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const finalPdf = fullText.join("\n") + "\n" + xref + trailer;
  fs.writeFileSync(path.join(__dirname, 'resume.pdf'), finalPdf);
  console.log("Created resume.pdf successfully");
}

createResumePdf();
