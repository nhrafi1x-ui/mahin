import { jsPDF } from 'jspdf';
import { PERSONAL_INFO } from '../data/portfolioData';

export function downloadEuropassPDF() {
  try {
    const doc = new jsPDF({
      unit: 'pt',
      format: 'a4'
    });

    const pageWidth = 595.28;
    const margin = 36;
    let y = 30;

    // Colors - Europass Brand Palette
    const europassBlue: [number, number, number] = [14, 71, 101];     // #0E4765
    const europassAccent: [number, number, number] = [0, 102, 161];    // #0066A1
    const europassGray: [number, number, number] = [240, 244, 248];    // #F0F4F8
    const textDark: [number, number, number] = [26, 32, 44];          // #1A202C
    const textMuted: [number, number, number] = [100, 116, 139];       // #64748B

    // 1. EUROPASS HEADER BANNER
    doc.setFillColor(...europassBlue);
    doc.rect(0, 0, pageWidth, 72, 'F');

    // Europass logo text
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('europass', margin, 38);

    // Yellow accent dot
    doc.setFillColor(255, 204, 0);
    doc.circle(margin + 98, 32, 3.5, 'F');

    // Right label
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('CURRICULUM VITAE', pageWidth - margin - 110, 38);

    y = 88;

    // 2. PERSONAL INFORMATION BOX
    doc.setFillColor(...europassGray);
    doc.rect(margin, y, pageWidth - (margin * 2), 70, 'F');
    doc.setDrawColor(...europassBlue);
    doc.setLineWidth(1.5);
    doc.line(margin, y, margin, y + 70);

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
    doc.text(`Email: ${PERSONAL_INFO.email}  |  Location: ${PERSONAL_INFO.location}`, margin + 12, py);

    py += 11;
    doc.setFont('helvetica', 'normal');
    doc.text('GitHub: github.com/mahin221  |  LinkedIn: linkedin.com/in/mahin-alam-153653428', margin + 12, py);

    y += 84;

    // Helper for section headers
    function drawSectionHeader(title: string) {
      doc.setFillColor(...europassBlue);
      doc.rect(margin, y, pageWidth - (margin * 2), 18, 'F');
      
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.text(title.toUpperCase(), margin + 8, y + 12);
      y += 24;
    }

    // 3. WORK EXPERIENCE & RESEARCH ACTIVITIES
    drawSectionHeader('WORK EXPERIENCE & RESEARCH ACTIVITIES');

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
    const thesisDesc = "• Research: 'Beyond Detection: Behavioral Phenotyping of Problematic Social Media Use Using Explainable Machine Learning (XAI)'.\n• Built predictive models (94.2% ROC-AUC) using XGBoost, Random Forest, SHAP, and LIME on 1,200+ student records.\n• Developed interactive web dashboards to convert ML risk scores into digital health interventions.";
    const splitThesis = doc.splitTextToSize(thesisDesc, 415);
    doc.text(splitThesis, margin + 100, y);
    y += (splitThesis.length * 11) + 12;

    // 4. EDUCATION AND TRAINING
    drawSectionHeader('EDUCATION AND TRAINING');

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

    // 5. DIGITAL SKILLS
    drawSectionHeader('DIGITAL SKILLS');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...textDark);

    doc.text('Programming Languages:', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Python, TypeScript, JavaScript, C++, SQL, HTML5, CSS3', margin + 130, y);

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
    drawSectionHeader('LANGUAGE SKILLS');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...textDark);

    doc.text('Mother Tongue(s):', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text('Bengali', margin + 130, y);

    y += 14;
    doc.setFont('helvetica', 'bold');
    doc.text('Other Language(s):', margin, y);

    y += 12;
    doc.setFillColor(...europassGray);
    doc.rect(margin + 130, y, 320, 16, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...europassBlue);
    doc.text('English', margin + 135, y + 11);
    doc.text('Listening: C1', margin + 195, y + 11);
    doc.text('Reading: C2', margin + 265, y + 11);
    doc.text('Writing: C1', margin + 335, y + 11);
    doc.text('Speaking: C1', margin + 395, y + 11);

    y += 24;

    // 7. KEY PROJECTS
    drawSectionHeader('PROJECTS & DEVELOPMENT');

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

    // Save PDF directly to user's downloads folder in browser
    doc.save('Mahin_Alam_CV.pdf');
  } catch (err) {
    console.error('Error generating PDF with jsPDF:', err);
    // Fallback if client generation hits an error:
    const link = document.createElement('a');
    link.href = '/Mahin_Alam_CV.pdf';
    link.download = 'Mahin_Alam_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
