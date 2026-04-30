"use client";

import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PerfectOverleafClone() {
  const resumeRef = useRef();

  const [data, setData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",

    education: [{ college: "", date: "", degree: "", city: "" }],
    objective: "",

    projects: [{ title: "", tech: "", date: "", desc: "" }],
    experience: [{ company: "", role: "", date: "", desc: "" }],
    internships: [{ company: "", role: "", date: "", desc: "" }],

    certifications: [""],

    languages: "",
    tools: "",
    frameworks: "",
  });

  const update = (field, value) => setData({ ...data, [field]: value });

  const updateList = (section, i, field, value) => {
    const arr = [...data[section]];
    if (typeof arr[i] === "object") arr[i][field] = value;
    else arr[i] = value;
    setData({ ...data, [section]: arr });
  };

  const addItem = (section, template) => {
    setData({ ...data, [section]: [...data[section], template] });
  };

  const downloadPDF = async () => {
    const canvas = await html2canvas(resumeRef.current, { scale: 4 });
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(img, "PNG", 0, 0, 210, 297);
    pdf.save("resume.pdf");
  };

  return (
    <div className="flex h-screen bg-black text-white">

      {/* FORM */}
      <div className="w-1/2 overflow-y-auto p-6 space-y-4 bg-[#020617]">
        <h1 className="text-xl font-bold">Overleaf Resume Builder</h1>

        <input className="input" placeholder="Name" onChange={e => update("name", e.target.value)} />
        <input className="input" placeholder="Location" onChange={e => update("location", e.target.value)} />
        <input className="input" placeholder="Phone" onChange={e => update("phone", e.target.value)} />
        <input className="input" placeholder="Email" onChange={e => update("email", e.target.value)} />
        <input className="input" placeholder="LinkedIn URL" onChange={e => update("linkedin", e.target.value)} />
        <input className="input" placeholder="GitHub URL" onChange={e => update("github", e.target.value)} />

        <textarea className="input" placeholder="Objective" onChange={e => update("objective", e.target.value)} />

        <h2 className="title">Education</h2>
        {data.education.map((e, i) => (
          <div key={i} className="card">
            <input className="input" placeholder="College" onChange={v => updateList("education", i, "college", v.target.value)} />
            <input className="input" placeholder="Date" onChange={v => updateList("education", i, "date", v.target.value)} />
            <input className="input" placeholder="Degree" onChange={v => updateList("education", i, "degree", v.target.value)} />
            <input className="input" placeholder="City" onChange={v => updateList("education", i, "city", v.target.value)} />
          </div>
        ))}
        <button onClick={() => addItem("education", { college: "", date: "", degree: "", city: "" })}>+ Add</button>

        <h2 className="title">Experience</h2>
        {data.experience.map((e, i) => (
          <div key={i} className="card">
            <input className="input" placeholder="Company" onChange={v => updateList("experience", i, "company", v.target.value)} />
            <input className="input" placeholder="Role" onChange={v => updateList("experience", i, "role", v.target.value)} />
            <input className="input" placeholder="Date" onChange={v => updateList("experience", i, "date", v.target.value)} />
            <textarea className="input" placeholder="Description" onChange={v => updateList("experience", i, "desc", v.target.value)} />
          </div>
        ))}
        <button onClick={() => addItem("experience", { company: "", role: "", date: "", desc: "" })}>+ Add</button>

        <h2 className="title">Projects</h2>
        {data.projects.map((p, i) => (
          <div key={i} className="card">
            <input className="input" placeholder="Title" onChange={v => updateList("projects", i, "title", v.target.value)} />
            <input className="input" placeholder="Tech" onChange={v => updateList("projects", i, "tech", v.target.value)} />
            <input className="input" placeholder="Date" onChange={v => updateList("projects", i, "date", v.target.value)} />
            <textarea className="input" placeholder="Description" onChange={v => updateList("projects", i, "desc", v.target.value)} />
          </div>
        ))}
        <button onClick={() => addItem("projects", { title: "", tech: "", date: "", desc: "" })}>+ Add</button>

        <h2 className="title">Certifications</h2>
        {data.certifications.map((c, i) => (
          <input key={i} className="input" placeholder="Certification" onChange={v => updateList("certifications", i, null, v.target.value)} />
        ))}
        <button onClick={() => addItem("certifications", "")}>+ Add</button>

        <h2 className="title">Skills</h2>
        <input className="input" placeholder="Languages" onChange={e => update("languages", e.target.value)} />
        <input className="input" placeholder="Tools" onChange={e => update("tools", e.target.value)} />
        <input className="input" placeholder="Frameworks" onChange={e => update("frameworks", e.target.value)} />

        <button onClick={downloadPDF} className="bg-blue-600 px-4 py-2">Download PDF</button>
      </div>

      {/* PREVIEW */}
      <div className="w-1/2 bg-gray-400 flex justify-center overflow-auto">
        <div ref={resumeRef} className="bg-white text-black" style={{ width: "210mm", minHeight: "297mm", padding: "12mm", fontFamily: "Times New Roman", fontSize: "11pt", lineHeight: "1.2" }}>

          <div style={{ textAlign: "center", marginBottom: "6px" }}>
            <div style={{ fontSize: "18pt", fontWeight: "bold", textTransform: "uppercase" }}>{data.name}</div>
            <div>{data.location}</div>
            <div>
              {data.phone} | {data.email}
            </div>
            <div>
              {data.linkedin && <span>{data.linkedin} </span>}
              {data.github && <span>| {data.github}</span>}
            </div>
          </div>

          <Section title="EDUCATION" />
          {data.education.map((e, i) => e.college && (
            <div key={i} style={{ marginBottom: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                <span>{e.college}</span>
                <span>{e.date}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontStyle: "italic" }}>
                <span>{e.degree}</span>
                <span>{e.city}</span>
              </div>
            </div>
          ))}

          {data.objective && (<>
            <Section title="OBJECTIVE" />
            <p style={{ wordBreak: "break-word" }}>{data.objective}</p>
          </>)}

          {data.experience.some(e => e.company) && (<>
            <Section title="EXPERIENCE" />
            {data.experience.map((e, i) => e.company && (
              <div key={i} style={{ marginBottom: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                  <span>{e.company}</span>
                  <span>{e.date}</span>
                </div>
                <div style={{ fontStyle: "italic" }}>{e.role}</div>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span>•</span>
                  <span style={{ wordBreak: "break-word" }}>{e.desc}</span>
                </div>
              </div>
            ))}
          </>)}

          {data.projects.some(p => p.title) && (<>
            <Section title="PROJECTS" />
            {data.projects.map((p, i) => p.title && (
              <div key={i} style={{ marginBottom: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                  <span>{p.title} | {p.tech}</span>
                  <span>{p.date}</span>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                  <span>•</span>
                  <span style={{ wordBreak: "break-word" }}>{p.desc}</span>
                </div>
              </div>
            ))}
          </>)}

          {data.certifications.some(c => c) && (<>
            <Section title="CERTIFICATIONS" />
            {data.certifications.map((c, i) => c && (
              <div key={i}>• {c}</div>
            ))}
          </>)}

          <Section title="TECHNICAL SKILLS" />
          <div>
            <div><b>Languages:</b> {data.languages}</div>
            <div><b>Tools:</b> {data.tools}</div>
            <div><b>Frameworks:</b> {data.frameworks}</div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .input { width: 100%; padding: 8px; border: 1px solid #334155; background: #020617; }
        .title { font-weight: bold; margin-top: 10px; }
        .card { border: 1px solid #334155; padding: 8px; margin-bottom: 8px; }
      `}</style>

    </div>
  );
}

function Section({ title }) {
  return (
    <div style={{ marginTop: "8px", marginBottom: "4px" }}>
      <div style={{ fontWeight: "bold" }}>{title}</div>
      <div style={{ borderBottom: "1px solid black" }} />
    </div>
  );
}
