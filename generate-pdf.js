import { jsPDF } from 'jspdf';
import fs from 'fs';

const doc = new jsPDF({
  unit: 'pt',
  format: 'a4'
});

// A4 dimensions in pt: 595.28 x 841.89
const margin = 40;
let y = 50;

// Header
doc.setFont('times', 'bold');
doc.setFontSize(24);
doc.setTextColor(26, 26, 26);
doc.text('MAHIN ALAM', margin, y);

y += 18;
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.setTextColor(204, 85, 0); // #CC5500
doc.text('SOFTWARE ENGINEER & AI/ML RESEARCHER', margin, y);

y += 14;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(80, 80, 80);
doc.text('Daffodil International University • Final Year Student (Graduating Late 2026)', margin, y);

y += 12;
doc.text('Email: alammahin301@gmail.com | Location: Dhaka, Bangladesh | GitHub: github.com | LinkedIn: linkedin.com', margin, y);

y += 15;
doc.setLineWidth(1);
doc.setDrawColor(26, 26, 26);
doc.line(margin, y, 595 - margin, y);

// Professional Summary
y += 20;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(26, 26, 26);
doc.text('PROFESSIONAL SUMMARY', margin, y);

y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(50, 50, 50);
const summary = "Final year Software Engineering student at Daffodil International University with a passion for building scalable web applications and applying explainable machine learning to solve real-world human behavioral problems. Strong foundation in full-stack engineering, algorithms, and data science.";
const splitSummary = doc.splitTextToSize(summary, 515);
doc.text(splitSummary, margin, y);
y += splitSummary.length * 12 + 10;

// Education
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(26, 26, 26);
doc.text('ACADEMIC QUALIFICATIONS', margin, y);

y += 14;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(26, 26, 26);
doc.text('B.Sc. in Software Engineering', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('2022 — 2026 (Final Year)', 595 - margin - 120, y);

y += 12;
doc.setTextColor(80, 80, 80);
doc.text('Daffodil International University | Enrolled - Final Semester (4 Months Remaining)', margin, y);

y += 12;
doc.setFont('helvetica', 'bold');
doc.setTextColor(204, 85, 0);
doc.text('Higher Secondary Certificate (HSC): GPA 5.00 / 5.00 (Golden GPA)', margin, y);

y += 12;
doc.setTextColor(80, 80, 80);
doc.setFont('helvetica', 'normal');
doc.text('Secondary School Certificate (SSC): GPA 4.89 / 5.00', margin, y);

// Research Thesis
y += 20;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(26, 26, 26);
doc.text('UNDERGRADUATE THESIS RESEARCH', margin, y);

y += 14;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(204, 85, 0);
doc.text('Beyond Detection: Behavioral Phenotyping of Problematic Social Media Use', margin, y);

y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(50, 50, 50);
const thesisObj = "Developed an interpretable ML framework achieving 94.2% classification accuracy across 1,200+ survey records. Utilized SHAP and LIME for model explainability to map behavioral risk factors into targeted digital health intervention strategies.";
const splitThesis = doc.splitTextToSize(thesisObj, 515);
doc.text(splitThesis, margin, y);
y += splitThesis.length * 12 + 10;

// Technical Skills
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(26, 26, 26);
doc.text('TECHNICAL COMPETENCIES', margin, y);

y += 14;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('Languages & Frameworks:', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('Python, JavaScript, TypeScript, React.js, Node.js, Express.js, Tailwind CSS, HTML5, CSS3', margin + 140, y);

y += 14;
doc.setFont('helvetica', 'bold');
doc.text('Machine Learning & AI:', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('Scikit-learn, TensorFlow, PyTorch, SHAP, LIME, Pandas, NumPy, OpenCV, Data Visualization', margin + 140, y);

y += 14;
doc.setFont('helvetica', 'bold');
doc.text('Databases & Tools:', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('PostgreSQL, MySQL, MongoDB, Git, GitHub, Docker, Postman, LaTeX, VS Code', margin + 140, y);

// Projects
y += 20;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(26, 26, 26);
doc.text('FEATURED PROJECTS', margin, y);

y += 14;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.text('1. XAI Social Media Phenotype Visualizer (React, Python, SHAP, FastAPI)', margin, y);
y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(50, 50, 50);
doc.text('Interactive dashboard displaying feature attribution waterfalls and individual risk scores.', margin + 10, y);

y += 14;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(26, 26, 26);
doc.text('2. MedIntervene Healthcare Portal (Node.js, PostgreSQL, Tailwind, React)', margin, y);
y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(50, 50, 50);
doc.text('Full-stack clinical management tool mapping ML risk flags directly into medical interventions.', margin + 10, y);

y += 14;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(26, 26, 26);
doc.text('3. MindTrack Sentiment Analyzer (Python, PyTorch, Hugging Face, D3.js)', margin, y);
y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(50, 50, 50);
doc.text('Real-time NLP sentiment & emotion detection pipeline with visual longitudinal analytics.', margin + 10, y);

// Footer
y = 800;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8);
doc.setTextColor(120, 120, 120);
doc.text('Mahin Alam • Official Curriculum Vitae • Daffodil International University', margin, y);

if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync('public/Mahin_Alam_CV.pdf', pdfBuffer);
console.log('PDF successfully written to public/Mahin_Alam_CV.pdf');
