import { jsPDF } from 'jspdf';
import fs from 'fs';

const doc = new jsPDF({
  unit: 'pt',
  format: 'a4'
});

// A4 dimensions: 595.28 x 841.89 pt
const pageWidth = 595.28;
const margin = 36;
let y = 30;

// Colors - Europass Brand Palette
const europassBlue = [14, 71, 101];     // #0E4765 - Main Europass Deep Blue
const europassAccent = [0, 102, 161];    // #0066A1 - Lighter Blue accent
const europassGray = [240, 244, 248];    // #F0F4F8 - Background tint
const textDark = [26, 32, 44];          // #1A202C - Dark body text
const textMuted = [100, 116, 139];       // #64748B - Secondary text

// 1. EUROPASS HEADER BANNER
doc.setFillColor(...europassBlue);
doc.rect(0, 0, pageWidth, 72, 'F');

// Top-left "europass" badge
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.text('europass', margin, 38);

// Yellow accent dot for Europass visual identity
doc.setFillColor(255, 204, 0);
doc.circle(margin + 98, 32, 3.5, 'F');

// Top-right "CURRICULUM VITAE" label
doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.text('CURRICULUM VITAE', pageWidth - margin - 110, 38);

y = 88;

// 2. PERSONAL INFORMATION
doc.setFillColor(...europassGray);
doc.rect(margin, y, pageWidth - (margin * 2), 70, 'F');
doc.setDrawColor(...europassBlue);
doc.setLineWidth(1);
doc.line(margin, y, margin, y + 70); // Left border stripe

let py = y + 16;
doc.setFont('helvetica', 'bold');
doc.setFontSize(16);
doc.setTextColor(...europassBlue);
doc.text('MAHIN ALAM', margin + 12, py);

py += 14;
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...textDark);
doc.text('JOB APPLIED FOR / POSITION:', margin + 12, py);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...europassAccent);
doc.text(' Software Engineer & AI/ML Researcher', margin + 170, py);

py += 13;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...textDark);
doc.text('Email: alammahin301@gmail.com  |  Location: Dhaka, Bangladesh', margin + 12, py);

py += 11;
doc.setFont('helvetica', 'normal');
doc.text('GitHub: github.com/mahin221  |  LinkedIn: linkedin.com/in/mahin-alam-153653428  |  Nationality: Bangladeshi', margin + 12, py);

y += 82;

// Helper section header drawer
function drawEuropassHeader(title, iconSymbol = '') {
  doc.setFillColor(...europassBlue);
  doc.rect(margin, y, pageWidth - (margin * 2), 18, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text(title.toUpperCase(), margin + 8, y + 12);
  y += 24;
}

// 3. WORK EXPERIENCE & RESEARCH
drawEuropassHeader('WORK EXPERIENCE & RESEARCH ACTIVITIES');

doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(...textDark);
doc.text('2025 – Present', margin, y);

doc.setFont('helvetica', 'bold');
doc.setTextColor(...europassBlue);
doc.text('Undergraduate Thesis Researcher & AI Developer', margin + 100, y);

y += 11;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(...textMuted);
doc.text('Daffodil International University — Department of Software Engineering', margin + 100, y);

y += 12;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...textDark);
const thesisDesc = "• Conducted research on 'Beyond Detection: Behavioral Phenotyping of Problematic Social Media Use Using Explainable Machine Learning (XAI)'.\n• Built high-accuracy predictive models (94.2% ROC-AUC) using XGBoost, Random Forest, SHAP, and LIME on 1,200+ student records.\n• Developed interactive web dashboards to map behavioral attributions into personalized digital health interventions.";
const splitThesis = doc.splitTextToSize(thesisDesc, 415);
doc.text(splitThesis, margin + 100, y);
y += (splitThesis.length * 11) + 12;

// 4. EDUCATION AND TRAINING
drawEuropassHeader('EDUCATION AND TRAINING');

// B.Sc.
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(...textDark);
doc.text('2022 – Present', margin, y);

doc.setFont('helvetica', 'bold');
doc.setTextColor(...europassBlue);
doc.text('Bachelor of Science (B.Sc.) in Software Engineering', margin + 100, y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...europassAccent);
doc.text('[EQF Level 6 / Final Year]', margin + 355, y);

y += 11;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(...textMuted);
doc.text('Daffodil International University, Dhaka, Bangladesh', margin + 100, y);

y += 11;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...textDark);
doc.text('• Focus: Software Architecture, Explainable AI, Web Engineering, Data Structures & Algorithms.', margin + 100, y);
y += 10;
doc.text('• Status: Enrolled in Final Semester (Graduating in 4 Months - Late 2026).', margin + 100, y);

y += 16;
// HSC
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(...textDark);
doc.text('2019 – 2021', margin, y);

doc.setFont('helvetica', 'bold');
doc.setTextColor(...europassBlue);
doc.text('Higher Secondary Certificate (HSC) — Science', margin + 100, y);

y += 11;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(...textMuted);
doc.text('Shaheed Bir Uttam Lt. Anwar Girls College, Dhaka', margin + 100, y);

y += 11;
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(180, 70, 0);
doc.text('• Result: GPA 5.00 / 5.00 (Golden GPA)', margin + 100, y);

y += 16;
// SSC
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.setTextColor(...textDark);
doc.text('2017 – 2019', margin, y);

doc.setFont('helvetica', 'bold');
doc.setTextColor(...europassBlue);
doc.text('Secondary School Certificate (SSC) — Science', margin + 100, y);

y += 11;
doc.setFont('helvetica', 'italic');
doc.setFontSize(8.5);
doc.setTextColor(...textMuted);
doc.text('Shaheed Bir Uttam Lt. Anwar Girls College, Dhaka', margin + 100, y);

y += 11;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(...textDark);
doc.text('• Result: GPA 4.89 / 5.00', margin + 100, y);

y += 20;

// 5. DIGITAL SKILLS & COMPETENCIES
drawEuropassHeader('DIGITAL SKILLS');

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...textDark);

doc.text('Programming Languages:', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('Python, TypeScript, JavaScript, C++, SQL (PostgreSQL/MySQL), HTML5, CSS3', margin + 130, y);

y += 13;
doc.setFont('helvetica', 'bold');
doc.text('AI & Data Science:', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('Scikit-learn, XGBoost, SHAP, LIME, PyTorch, Pandas, NumPy, OpenCV, Gemini API', margin + 130, y);

y += 13;
doc.setFont('helvetica', 'bold');
doc.text('Web & Frameworks:', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('React.js, Node.js, Express.js, Tailwind CSS, Vite, RESTful APIs, Redux', margin + 130, y);

y += 13;
doc.setFont('helvetica', 'bold');
doc.text('Tools & Software:', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('Git, GitHub, Docker, PostgreSQL, Firebase, Postman, VS Code, Linux', margin + 130, y);

y += 20;

// 6. LANGUAGE SKILLS
drawEuropassHeader('LANGUAGE SKILLS');

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...textDark);

doc.text('Mother Tongue(s):', margin, y);
doc.setFont('helvetica', 'normal');
doc.text('Bengali', margin + 130, y);

y += 14;
doc.setFont('helvetica', 'bold');
doc.text('Other Language(s):', margin, y);

// CEFR Table Header
y += 12;
doc.setFillColor(...europassGray);
doc.rect(margin + 130, y, 320, 16, 'F');

doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(...europassBlue);
doc.text('English', margin + 135, y + 11);
doc.text('Listening: C1', margin + 200, y + 11);
doc.text('Reading: C2', margin + 270, y + 11);
doc.text('Writing: C1', margin + 340, y + 11);
doc.text('Speaking: C1', margin + 400, y + 11);

y += 24;

// 7. KEY PROJECTS
drawEuropassHeader('PROJECTS & DEVELOPMENT');

doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...europassBlue);
doc.text('MediSync Healthcare Portal', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...textDark);
doc.text('— Full-Stack appointment booking, electronic prescriptions, and medical records.', margin + 140, y);

y += 12;
doc.setFont('helvetica', 'bold');
doc.setTextColor(...europassBlue);
doc.text('EduPulse Essay Analyzer', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...textDark);
doc.text('— NLP-driven automated rubric evaluator & writing feedback platform using AI.', margin + 140, y);

y += 12;
doc.setFont('helvetica', 'bold');
doc.setTextColor(...europassBlue);
doc.text('DevFlow Snippet Hub', margin, y);
doc.setFont('helvetica', 'normal');
doc.setTextColor(...textDark);
doc.text('— Developer productivity suite with Kanban board & code snippet vault.', margin + 140, y);

// Footer
doc.setFont('helvetica', 'italic');
doc.setFontSize(7.5);
doc.setTextColor(...textMuted);
doc.text('Page 1/1 — Official Europass Curriculum Vitae — Mahin Alam', margin, 822);

if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync('public/Mahin_Alam_CV.pdf', pdfBuffer);
console.log('Europass PDF successfully created at public/Mahin_Alam_CV.pdf');
