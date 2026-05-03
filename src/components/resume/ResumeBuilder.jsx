"use client";

import React, { useRef, useState, useEffect } from "react";
import { toJpeg } from "html-to-image";
import jsPDF from "jspdf";
import { Eye, EyeOff } from "lucide-react";

export default function OverleafResumeTemplate() {
  const resumeRef = useRef();
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isClient, setIsClient] = useState(false);

  const [data, setData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    leetcode: "",
    education: [{ college: "", date: "", degree: "", city: "" }],
    coursework: [""],
    objective: "",
    projects: [{ title: "", tech: "", date: "", desc: "" }],
    experience: [{ company: "", role: "", date: "", desc: "" }],
    languages: "",
    tools: "",
    frameworks: "",
    certifications: [""]
  });

  useEffect(() => setIsClient(true), []);

  const update = (field, value) => setData({ ...data, [field]: value });
  
  const updateList = (section, i, field, value) => {
    const arr = [...data[section]];
    if (typeof arr[i] === "object") {
      arr[i] = { ...arr[i], [field]: value };
    } else {
      arr[i] = value;
    }
    setData({ ...data, [section]: arr });
  };

  const addItem = (section, template) => setData({ ...data, [section]: [...data[section], template] });
  
  const removeItem = (section, i) => {
    const arr = [...data[section]];
    arr.splice(i, 1);
    setData({ ...data, [section]: arr });
  };

  const downloadPDF = async () => {
    if (!resumeRef.current || isDownloading) return;
    setIsDownloading(true);
    try {
      const element = resumeRef.current;
      
      const links = element.querySelectorAll('a');
      const linkPositions = [];
      
      links.forEach(link => {
        const rect = link.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const relativeX = rect.left - elementRect.left;
        const relativeY = rect.top - elementRect.top;
        const pxToMm = (px) => (px * 25.4) / 96;
        
        linkPositions.push({
          url: link.href,
          x: pxToMm(relativeX),
          y: pxToMm(relativeY),
          width: pxToMm(rect.width),
          height: pxToMm(rect.height)
        });
      });
      
      const dataUrl = await toJpeg(element, {
        quality: 0.95,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        cacheBust: true,
      });
      
      const img = new Image();
      img.src = dataUrl;
      await new Promise(resolve => { img.onload = resolve; });
      
      const imgWidth = img.width;
      const imgHeight = img.height;
      
      const a4WidthPx = 794;
      const a4HeightPx = 1123;
      const topMarginPx = 38;
      const bottomMarginPx = 40;
      
      const scale = a4WidthPx / imgWidth;
      const scaledHeight = imgHeight * scale;
      
      const firstPageHeight = a4HeightPx - bottomMarginPx;
      const otherPageHeight = a4HeightPx - topMarginPx - bottomMarginPx;
      
      let pages = [];
      let remainingHeight = scaledHeight;
      let isFirstPage = true;
      
      while (remainingHeight > 0) {
        const pageHeightPx = isFirstPage ? firstPageHeight : otherPageHeight;
        const pageHeightOriginal = (pageHeightPx * imgWidth) / a4WidthPx;
        pages.push({
          heightOriginal: pageHeightOriginal,
          isFirst: isFirstPage
        });
        remainingHeight -= pageHeightPx;
        isFirstPage = false;
      }
      
      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
      const pdfWidthMM = 210;
      let yOffsetOriginal = 0;
      const topMarginMM = (topMarginPx * 210) / a4WidthPx;
      
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const sliceHeight = Math.min(page.heightOriginal, imgHeight - yOffsetOriginal);
        
        const sliceCanvas = document.createElement('canvas');
        sliceCanvas.width = imgWidth;
        sliceCanvas.height = sliceHeight;
        const ctx = sliceCanvas.getContext('2d');
        ctx.drawImage(img, 0, yOffsetOriginal, imgWidth, sliceHeight, 0, 0, imgWidth, sliceHeight);
        const sliceData = sliceCanvas.toDataURL('image/jpeg', 0.9);
        
        const sliceHeightMM = (sliceHeight * pdfWidthMM) / imgWidth;
        
        if (i > 0) pdf.addPage();
        
        if (page.isFirst) {
          pdf.addImage(sliceData, 'JPEG', 0, 0, pdfWidthMM, sliceHeightMM);
          linkPositions.forEach(link => {
            const linkYmm = link.y;
            const pageHeightMM = (firstPageHeight * pdfWidthMM) / a4WidthPx;
            
            if (linkYmm < pageHeightMM) {
              pdf.link(link.x, link.y, link.width, link.height, { url: link.url });
            }
          });
        } else {
          pdf.addImage(sliceData, 'JPEG', 0, topMarginMM, pdfWidthMM, sliceHeightMM);
          linkPositions.forEach(link => {
            const linkYmm = link.y;
            const prevPagesHeight = i * ((otherPageHeight * pdfWidthMM) / a4WidthPx);
            
            if (linkYmm >= prevPagesHeight && linkYmm < prevPagesHeight + sliceHeightMM) {
              const adjustedY = linkYmm - prevPagesHeight + topMarginMM;
              pdf.link(link.x, adjustedY, link.width, link.height, { url: link.url });
            }
          });
        }
        
        yOffsetOriginal += sliceHeight;
      }
      
      pdf.save(`${data.name || 'resume'}.pdf`);
    } catch (error) {
      console.error(error);
      alert('PDF generation failed.');
    } finally {
      setIsDownloading(false);
    }
  };

  const ResumeContent = () => (
    <div
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "8mm",
        fontFamily: "'Times New Roman', Times, serif",
        fontSize: "10pt",
        lineHeight: "1.3",
        color: "#000",
        backgroundColor: "#fff",
        boxSizing: "border-box",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "8px", borderBottom: "0.5px solid #000", paddingBottom: "4px" }}>
        <div style={{ fontSize: "18pt", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>
          {data.name || "YOUR NAME"}
        </div>
        <div style={{ fontSize: "9pt" }}>{data.location || "City, Country"}</div>
        <div style={{ fontSize: "9pt", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "3px" }}>
          <span>{data.phone || "Phone"}</span> 
          <span>| {data.email || "Email"}</span>
          
          {data.linkedin && (
            <span>| <a href={data.linkedin.startsWith('http') ? data.linkedin : `https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5", textDecoration: "none" }}>🔗 LinkedIn</a></span>
          )}
          
          {data.github && (
            <span>| <a href={data.github.startsWith('http') ? data.github : `https://${data.github}`} target="_blank" rel="noopener noreferrer" style={{ color: "#333", textDecoration: "none" }}>🐙 GitHub</a></span>
          )}

          {data.leetcode && (
            <span>| <a href={data.leetcode.startsWith('http') ? data.leetcode : `https://${data.leetcode}`} target="_blank" rel="noopener noreferrer" style={{ color: "#FFA116", textDecoration: "none" }}>⚡ LeetCode</a></span>
          )}
        </div>
      </div>

      <OverleafSection title="EDUCATION" />
      {data.education.map((e, i) => (
        <div key={i} style={{ marginBottom: "6px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
            <span>{e.college || "University Name"}</span>
            <span>{e.date || "Date"}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontStyle: "italic", fontSize: "9pt" }}>
            <span>{e.degree || "Degree Details"}</span>
            <span>{e.city || "Location"}</span>
          </div>
        </div>
      ))}

      <OverleafSection title="SKILLS / COURSEWORK" />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 15px", fontSize: "9pt", marginBottom: "6px" }}>
        {data.coursework.map((skill, i) => skill && <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>• {skill}</span>)}
      </div>

      <OverleafSection title="OBJECTIVE" />
      <p style={{ textAlign: "justify", fontSize: "9pt", marginBottom: "8px" }}>
        {data.objective || "Your professional summary goes here..."}
      </p>

      <OverleafSection title="PROJECTS" />
      {data.projects.map((p, i) => (
        <div key={i} style={{ marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
            <span>{p.title || "Project Title"} {p.tech && `| ${p.tech}`}</span>
            <span>{p.date || "Date"}</span>
          </div>
          <div style={{ marginLeft: "12px", fontSize: "9pt", display: "flex", gap: "6px" }}>
            <span>•</span>
            <span>{p.desc || "Project description..."}</span>
          </div>
        </div>
      ))}

      <OverleafSection title="EXPERIENCE / INTERNSHIP" />
      {data.experience.map((e, i) => (
        <div key={i} style={{ marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
            <span>{e.company || "Company Name"}</span>
            <span>{e.date || "Date"}</span>
          </div>
          <div style={{ fontStyle: "italic", fontSize: "9pt", marginBottom: "2px" }}>{e.role || "Job Role"}</div>
          <div style={{ marginLeft: "12px", fontSize: "9pt", display: "flex", gap: "6px" }}>
            <span>•</span>
            <span>{e.desc || "Responsibilities..."}</span>
          </div>
        </div>
      ))}

      <OverleafSection title="TECHNICAL SKILLS" />
      <div style={{ fontSize: "9pt" }}>
        <div><strong>Languages:</strong> {data.languages || "—"}</div>
        <div><strong>Tools:</strong> {data.tools || "—"}</div>
        <div><strong>Frameworks:</strong> {data.frameworks || "—"}</div>
      </div>

      <OverleafSection title="CERTIFICATIONS" />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 15px", fontSize: "9pt" }}>
        {data.certifications.map((c, i) => c && <span key={i} style={{ display: "flex", alignItems: "center", gap: "4px" }}>• {c}</span>)}
      </div>
    </div>
  );

  if (!isClient) return null;

  return (
    <div className="flex flex-col md:flex-row bg-linear-to-br from-gray-800 to-gray-800">
      
      {/* LEFT PANEL - FORM */}
      <div className={`${showMobilePreview ? 'hidden md:block' : 'block'} w-full md:w-1/2 overflow-y-auto custom-scrollbar pb-10 md:pb-8`}>
        
        {/* Header */}
        {/* <div className="top-0 z-10 bg-linear-to-br from-[#0A0A0A] to-[#0A0A0A] pt-0 pb-6 px-4 border-b border-gray-700/50 backdrop-blur-sm">
          <h1 className="text-xl md:text-2xl font-bold bg-linear-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent">
            Resume Builder
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">Create your professional resume</p>
        </div> */}

        {/* Form Content */}
        <div className="p-4 space-y-5">
          
          <div className="premium-section">
            <h2 className="section-title">Personal Information</h2>
            <input className="premium-input" placeholder="Full Name" value={data.name} onChange={e => update("name", e.target.value)} />
            <div className="grid grid-cols-1 gap-2 mt-2">
              <input className="premium-input" placeholder="Location" value={data.location} onChange={e => update("location", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <input className="premium-input" placeholder="Phone" value={data.phone} onChange={e => update("phone", e.target.value)} />
              <input className="premium-input" placeholder="Email" value={data.email} onChange={e => update("email", e.target.value)} />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <input className="premium-input" placeholder="LinkedIn URL" value={data.linkedin} onChange={e => update("linkedin", e.target.value)} />
              <input className="premium-input" placeholder="GitHub URL" value={data.github} onChange={e => update("github", e.target.value)} />
              <input className="premium-input" placeholder="LeetCode URL" value={data.leetcode} onChange={e => update("leetcode", e.target.value)} />
            </div>
          </div>

          <textarea className="premium-input" placeholder="Professional Objective / Summary" rows={3} value={data.objective} onChange={e => update("objective", e.target.value)} />

          <div className="premium-section">
            <h2 className="section-title">🎓 Education</h2>
            {data.education.map((e, i) => (
              <div key={i} className="premium-card">
                <input className="premium-input" placeholder="College/University" value={e.college} onChange={v => updateList("education", i, "college", v.target.value)} />
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <input className="premium-input" placeholder="Degree" value={e.degree} onChange={v => updateList("education", i, "degree", v.target.value)} />
                  <input className="premium-input" placeholder="Year" value={e.date} onChange={v => updateList("education", i, "date", v.target.value)} />
                </div>
                <input className="premium-input mt-2" placeholder="City" value={e.city} onChange={v => updateList("education", i, "city", v.target.value)} />
                <button onClick={() => removeItem("education", i)} className="remove-btn">Remove</button>
              </div>
            ))}
            <button onClick={() => addItem("education", { college: "", date: "", degree: "", city: "" })} className="add-btn">+ Add Education</button>
          </div>

          <div className="premium-section">
            <h2 className="section-title">📚 Skills / Coursework</h2>
            {data.coursework.map((skill, i) => (
              <div key={i} className="flex gap-2 mb-2 items-center">
                <input className="premium-input flex-1" placeholder="e.g., Operating Systems, DBMS" value={skill} onChange={v => updateList("coursework", i, null, v.target.value)} />
                <button onClick={() => removeItem("coursework", i)} className="remove-icon">✕</button>
              </div>
            ))}
            <button onClick={() => addItem("coursework", "")} className="add-btn">+ Add Skill/Course</button>
          </div>

          <div className="premium-section">
            <h2 className="section-title">🚀 Projects</h2>
            {data.projects.map((p, i) => (
              <div key={i} className="premium-card">
                <div className="grid grid-cols-2 gap-2">
                  <input className="premium-input" placeholder="Project Title" value={p.title} onChange={v => updateList("projects", i, "title", v.target.value)} />
                  <input className="premium-input" placeholder="Tech Stack" value={p.tech} onChange={v => updateList("projects", i, "tech", v.target.value)} />
                </div>
                <input className="premium-input mt-2" placeholder="Date" value={p.date} onChange={v => updateList("projects", i, "date", v.target.value)} />
                <textarea className="premium-input mt-2" placeholder="Description" rows={2} value={p.desc} onChange={v => updateList("projects", i, "desc", v.target.value)} />
                <button onClick={() => removeItem("projects", i)} className="remove-btn">Remove</button>
              </div>
            ))}
            <button onClick={() => addItem("projects", { title: "", tech: "", date: "", desc: "" })} className="add-btn">+ Add Project</button>
          </div>

          <div className="premium-section">
            <h2 className="section-title">💼 Experience / Internship</h2>
            {data.experience.map((e, i) => (
              <div key={i} className="premium-card">
                <div className="grid grid-cols-2 gap-2">
                  <input className="premium-input" placeholder="Company" value={e.company} onChange={v => updateList("experience", i, "company", v.target.value)} />
                  <input className="premium-input" placeholder="Role" value={e.role} onChange={v => updateList("experience", i, "role", v.target.value)} />
                </div>
                <input className="premium-input mt-2" placeholder="Duration" value={e.date} onChange={v => updateList("experience", i, "date", v.target.value)} />
                <textarea className="premium-input mt-2" placeholder="Description" rows={2} value={e.desc} onChange={v => updateList("experience", i, "desc", v.target.value)} />
                <button onClick={() => removeItem("experience", i)} className="remove-btn">Remove</button>
              </div>
            ))}
            <button onClick={() => addItem("experience", { company: "", role: "", date: "", desc: "" })} className="add-btn">+ Add Experience</button>
          </div>

          <div className="premium-section">
            <h2 className="section-title">📜 Certifications</h2>
            {data.certifications.map((c, i) => (
              <div key={i} className="flex gap-2 mb-2 items-center">
                <input className="premium-input flex-1" placeholder="e.g., AWS Certified Developer" value={c} onChange={v => updateList("certifications", i, null, v.target.value)} />
                <button onClick={() => removeItem("certifications", i)} className="remove-icon">✕</button>
              </div>
            ))}
            <button onClick={() => addItem("certifications", "")} className="add-btn">+ Add Certification</button>
          </div>

          <div className="premium-section">
            <h2 className="section-title">⚡ Technical Skills</h2>
            <input className="premium-input mb-2" placeholder="Languages (e.g., Python, Java, SQL)" value={data.languages} onChange={e => update("languages", e.target.value)} />
            <input className="premium-input mb-2" placeholder="Tools (e.g., VS Code, Git, Docker)" value={data.tools} onChange={e => update("tools", e.target.value)} />
            <input className="premium-input" placeholder="Frameworks (e.g., React, Node.js)" value={data.frameworks} onChange={e => update("frameworks", e.target.value)} />
          </div>

          <button onClick={downloadPDF} disabled={isDownloading} className="download-btn">
            {isDownloading ? "Generating PDF..." : "📥 Download PDF Resume"}
          </button>
        </div>
      </div>

      {/* RIGHT PANEL - PREVIEW */}
      <div className={`${showMobilePreview ? 'flex' : 'hidden md:flex'} w-full md:w-1/2 bg-gray-100 flex-col items-center overflow-auto p-4 pb-24 md:pb-8`}>
        <div className="sticky top-2 z-10 flex gap-3 bg-white px-4 py-2 rounded-full shadow-md">
          <button onClick={() => setZoomLevel(z => Math.max(z - 0.1, 0.5))} className="text-gray-800 font-bold px-2">−</button>
          <span className="text-gray-800 text-sm font-medium">{Math.round(zoomLevel * 100)}%</span>
          <button onClick={() => setZoomLevel(z => Math.min(z + 0.1, 1.5))} className="text-gray-800 font-bold px-2">+</button>
        </div>
        <div ref={resumeRef} style={{ transform: `scale(${zoomLevel})`, transformOrigin: "top center" }} className="mt-6 shadow-2xl">
          <ResumeContent />
        </div>
      </div>

      {/* Mobile Toggle Button - Simple Icon */}
      <div className="md:hidden fixed bottom-24 right-4 z-50">
        <button
          onClick={() => setShowMobilePreview(!showMobilePreview)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg active:scale-95 transition-all duration-200"
        >
          {showMobilePreview ? <EyeOff size={22} /> : <Eye size={22} />}
        </button>
      </div>

      <style jsx>{`
        .premium-input {
          width: 100%;
          padding: 12px 14px;
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 12px;
          color: #f1f5f9;
          font-size: 14px;
          outline: none;
          transition: all 0.2s ease;
        }
        .premium-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
        }
        .premium-input::placeholder {
          color: #64748b;
        }
        textarea.premium-input {
          resize: vertical;
          font-family: inherit;
        }
        .premium-section {
          background: rgba(30,41,59,0.5);
          border-radius: 16px;
          padding: 16px;
          border: 1px solid #334155;
        }
        .section-title {
          font-size: 14px;
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }
        .premium-card {
          background: #0f172a;
          border-radius: 12px;
          padding: 14px;
          margin-bottom: 12px;
          border: 1px solid #334155;
        }
        .add-btn {
          width: 100%;
          padding: 10px;
          background: #1e293b;
          border: 1px dashed #475569;
          border-radius: 10px;
          color: #94a3b8;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 8px;
        }
        .add-btn:hover {
          background: #334155;
          color: #cbd5e1;
          border-color: #3b82f6;
        }
        .remove-btn {
          font-size: 11px;
          color: #ef4444;
          background: transparent;
          border: none;
          cursor: pointer;
          margin-top: 8px;
          padding: 4px 8px;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .remove-btn:hover {
          background: rgba(239,68,68,0.1);
        }
        .remove-icon {
          background: transparent;
          border: none;
          color: #ef4444;
          cursor: pointer;
          font-size: 14px;
          padding: 8px;
          border-radius: 8px;
        }
        .remove-icon:hover {
          background: rgba(239,68,68,0.1);
        }
        .download-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          border-radius: 14px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          font-size: 15px;
          margin-top: 8px;
          margin-bottom: 20px;
          transition: all 0.2s;
        }
        .download-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59,130,246,0.4);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 10px;
        }
        
        @media (max-width: 768px) {
          .premium-input {
            padding: 11px 12px;
            font-size: 15px;
          }
          .premium-section {
            padding: 14px;
          }
          .section-title {
            font-size: 13px;
            margin-bottom: 10px;
          }
          .premium-card {
            padding: 12px;
          }
          .add-btn, .download-btn {
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
}

function OverleafSection({ title }) {
  return (
    <div style={{ marginBottom: "4px", marginTop: "8px" }}>
      <div style={{ fontSize: "11pt", fontWeight: "bold", textTransform: "uppercase" }}>{title}</div>
      <div style={{ borderBottom: "0.8px solid #000", marginTop: "1px" }} />
    </div>
  );
}