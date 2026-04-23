import React, { useState, useRef } from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import user from "../assets/user.webp";
import { useNavigate } from "react-router-dom";

const teamImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";
const heroBg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80";

const openings = [
  {
    title: "Software Engineer Trainee - Gen AI",
    dept: "Gen AI",
    type: "Internship",
    location: "Work From Home",
    duration: "3 Months",
    stipend: "10K–12K/month",
    ppo: "6 LPA",
    whoWeAreLookingFor:
      "Final-year students or recent graduates (B.E/B.Tech – CS, IT, AI, DS) with a passion for cutting-edge AI technologies and a strong desire to develop real-world applications using Generative AI and Agentic systems.",
    responsibilities: [
      "Design and develop applications using Generative AI models (OpenAI, Claude, Gemini, etc.)",
      "Work on Agentic AI systems that can reason, plan, and act autonomously in enterprise workflows.",
      "Build prototypes and proof-of-concepts using LLM APIs, prompt engineering, vector databases, and embeddings.",
      "Collaborate with solution teams to create smart assistants, copilots, and automation agents.",
      "Stay updated with the latest in Gen AI, LLM fine-tuning, RAG pipelines, and open-source frameworks (LangChain, LlamaIndex, etc.)",
    ],
    skills: [
      "Strong foundation in Python and APIs",
      "Understanding of AI/ML concepts, LLMs, and NLP fundamentals",
      "Exposure to tools like LangChain, OpenAI, HuggingFace, or Pinecone",
      "Curiosity to explore how AI agents can simulate human reasoning and automate tasks",
    ],
  },
  {
    title: "Software Engineer Trainee - SAP",
    dept: "SAP",
    type: "Internship",
    location: "Work From Home",
    duration: "3 Months",
    stipend: "10K–12K/month",
    ppo: "6 LPA",
    whoWeAreLookingFor:
      "Engineering graduates (B.E/B.Tech – CS, IT, AI, DS, or equivalent) with a strong foundation in programming and a keen interest in building enterprise-level applications on the SAP platform.",
    responsibilities: [
      "Collaborate with functional consultants to understand business requirements and deliver effective technical solutions.",
      "Participate in code reviews, debugging, and performance optimization activities.",
      "Ensure high-quality deliverables and adherence to SAP development standards.",
      "Design, develop, and maintain applications using SAP ABAP.",
    ],
    skills: [
      "Strong understanding of Object-Oriented Programming (OOP) concepts",
      "Hands-on with Java / C++ / Python or any object-oriented language",
      "Familiarity with SQL and RDBMS concepts",
      "Good to Have: Exposure to SAP BTP, CDS Views, RAP, Fiori/UI5, or SAP CAP",
    ],
  },
  {
    title: "Software Engineer Trainee - Application Development",
    dept: "Application Development",
    type: "Internship",
    location: "Work From Home",
    duration: "3 Months",
    stipend: "10K–12K/month",
    ppo: "6 LPA",
    whoWeAreLookingFor:
      "Fresh graduates (B.E/B.Tech – CS/IT) with a solid foundation in web technologies and hands-on project experience in both front-end and back-end development.",
    responsibilities: [
      "Design and develop dynamic web applications using React/Angular (front-end) and .NET/Node.js (back-end).",
      "Contribute to API design, UI/UX discussions, and deployment processes.",
      "Collaborate with cross-functional teams in agile sprints to deliver high-quality software solutions.",
    ],
    skills: [
      "Proficiency in HTML, CSS, JavaScript, and React or Angular frameworks",
      "Working knowledge of Node.js or .NET Core for backend development",
      "Understanding of SQL and NoSQL database concepts",
      "Client-server architecture understanding",
    ],
  },
  {
    title: "Software Engineer Trainee - Salesforce Developer",
    dept: "Salesforce",
    type: "Internship",
    location: "Work From Home",
    duration: "3 Months",
    stipend: "10K–12K/month",
    ppo: "6 LPA",
    whoWeAreLookingFor:
      "Fresh graduates (B.E/B.Tech) with a strong passion for cloud platforms and a desire to build expertise in cloud technologies.",
    responsibilities: [
      "Build and customize Salesforce applications using Apex, Visualforce, and Lightning Components.",
      "Configure and automate business processes through Flows, Process Builder, Validation Rules, and Approval Processes.",
      "Develop and maintain REST/SOAP-based integrations with external systems.",
      "Participate in the complete SDLC — from design and development to testing and deployment.",
      "Collaborate with functional teams to translate business requirements into scalable Salesforce solutions.",
    ],
    skills: [
      "Understanding of OOP concepts and programming fundamentals",
      "Basics of SQL and RDBMS",
      "Knowledge of CRM concepts (Leads, Opportunities, Accounts, Contacts)",
      "Good to Have: Salesforce Trailhead exposure, Apex triggers, SOQL, Lightning App Builder",
    ],
  },
];

const values = [
  { title: "Innovation", desc: "We push boundaries and embrace new ideas that drive real-world impact." },
  { title: "Collaboration", desc: "We grow together — across teams, borders, and industries." },
  { title: "Global Reach", desc: "Work on projects spanning multiple countries." },
  { title: "Growth", desc: "Every career here is a journey of learning and advancement." },
];

const ShnoorCareers = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const openingsRef = useRef(null);

  const filters = ["All", "Gen AI", "SAP", "Application Development", "Salesforce"];

  const filtered =
    activeFilter === "All"
      ? openings
      : openings.filter((o) => o.dept === activeFilter);

  const scrollToOpenings = () => {
    openingsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; font-family: 'Ubuntu', sans-serif; }
        body { background: #0F172A; color: #E2E8F0; }
        h1,h2,h3,h4,h5 { color: #E2E8F0; }
        p { color: #94A3B8; }

        .hero-overlay { background: rgba(15,23,42,0.75); }

        .job-card {
          background: #1E293B;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(99,102,241,0.2);
          transition: 0.3s;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .job-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(99,102,241,0.3);
        }

        .value-card {
          background: #1E293B;
          border-radius: 16px;
          padding: 25px;
          border: 1px solid rgba(34,197,94,0.2);
          text-align: center;
          transition: 0.3s;
        }
        .value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(34,197,94,0.3);
        }

        .apply-btn {
          background: #6366F1;
          border: none;
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          cursor: pointer;
          font-size: 14px;
          transition: 0.2s;
        }
        .apply-btn:hover { background: #4F46E5; }

        .view-btn {
          background: transparent;
          border: 1px solid #6366F1;
          color: #6366F1;
          padding: 8px 20px;
          border-radius: 50px;
          cursor: pointer;
          font-size: 14px;
          transition: 0.2s;
          margin-right: 8px;
        }
        .view-btn:hover { background: rgba(99,102,241,0.15); }

        .filter-btn {
          border: 1px solid #334155;
          background: transparent;
          color: #94A3B8;
          border-radius: 50px;
          padding: 6px 16px;
          margin: 4px;
          cursor: pointer;
          transition: 0.2s;
        }
        .filter-btn.active, .filter-btn:hover {
          background: #6366F1;
          color: white;
          border-color: #6366F1;
        }

        .badge-dept {
          background: rgba(99,102,241,0.2);
          color: #6366F1;
          padding: 4px 10px;
          border-radius: 50px;
          font-size: 11px;
        }
        .badge-type {
          background: rgba(34,197,94,0.2);
          color: #22C55E;
          padding: 3px 8px;
          border-radius: 50px;
          margin-left: 6px;
          font-size: 11px;
        }

        .scam-box {
          background: rgba(30,41,59,0.9);
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 14px;
          padding: 30px;
        }

        .testimonial-section { background: #1E293B; }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          backdrop-filter: blur(4px);
        }
        .modal-box {
          background: #1E293B;
          border-radius: 20px;
          border: 1px solid rgba(99,102,241,0.3);
          max-width: 720px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          padding: 36px;
          position: relative;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
        }
        .modal-box::-webkit-scrollbar { width: 6px; }
        .modal-box::-webkit-scrollbar-track { background: #0F172A; border-radius: 10px; }
        .modal-box::-webkit-scrollbar-thumb { background: #6366F1; border-radius: 10px; }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          color: #94A3B8;
          font-size: 26px;
          cursor: pointer;
          line-height: 1;
          transition: 0.2s;
        }
        .modal-close:hover { color: #E2E8F0; }

        .modal-section-title {
          color: #6366F1;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 24px 0 10px;
        }
        .modal-info-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .info-chip {
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.25);
          color: #A5B4FC;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 13px;
        }
        .info-chip span { color: #6366F1; font-weight: 700; margin-right: 4px; }

        .modal-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .modal-list li {
          color: #CBD5E1;
          font-size: 14.5px;
          line-height: 1.75;
          padding: 6px 0 6px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        .modal-list li::before {
          content: "▸";
          color: #6366F1;
          position: absolute;
          left: 0;
        }
        .modal-footer-btns {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
      `}</style>

      <Navbar />
      <div style={{ backgroundImage: `url(${heroBg})`, height: "420px", backgroundSize: "cover" }}>
        <div className="hero-overlay d-flex align-items-center justify-content-center text-center h-100">
          <div>
            <h2>Find Your Future at SHNOOR International LLC</h2>
            <p>Join innovators shaping the future of technology.</p>
            <button className="btn btn-warning me-2" onClick={scrollToOpenings}>
              View Openings
            </button>
          </div>
        </div>
      </div>
      <div className="container" style={{ padding: "100px 0", fontFamily: "Ubuntu, sans-serif" }}>
        <div
          className="row align-items-center"
          style={{
            rowGap: "40px",
            background: "#1E293B",
            borderRadius: "22px",
            padding: "50px 30px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            border: "1px solid rgba(99,102,241,0.15)",
          }}
        >
          <div className="col-md-6" style={{ padding: "0 30px" }}>
            <h2 style={{ fontWeight: "800", marginBottom: "22px", color: "#E2E8F0", fontSize: "34px", lineHeight: "1.2" }}>
              Are You Ready to Take on the Challenge?
            </h2>
            <p style={{ fontSize: "15.5px", color: "#94A3B8", lineHeight: "1.9" }}>
              At SHNOOR International LLC, we believe that great companies are built by great people. We're looking for
              innovators, problem-solvers, and go-getters who are passionate about making an impact in the worlds of
              technology and global trade.
            </p>
            <p style={{ fontSize: "15.5px", color: "#94A3B8", lineHeight: "1.9" }}>
              Whether you're an IT expert, software developer, SAP consultant, business strategist, or trade professional
              — this is your chance to be part of a company that values creativity, collaboration, and continuous growth.
            </p>
            <p style={{ fontSize: "15.5px", color: "#94A3B8", lineHeight: "1.9" }}>
              At SHNOOR International, you won't just be doing a job — you'll be building a career where your skills make
              a difference.
            </p>
            <p style={{ fontSize: "16px", fontWeight: "700", color: "#6366F1", marginTop: "18px" }}>
              SHNOOR — Get the future you want. !!
            </p>
          </div>
          <div className="col-md-6 text-center" style={{ padding: "0 30px" }}>
            <div
              style={{ borderRadius: "18px", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.6)", border: "1px solid rgba(99,102,241,0.2)", transition: "0.4s ease" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={teamImg} alt="team" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 text-center">
        <h2 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "16px" }}>Recruitment Scams</h2>
        <div
          className="scam-box"
          style={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "32px 36px", maxWidth: "760px", margin: "0 auto", backdropFilter: "blur(10px)" }}
        >
          <p style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.8", color: "#fff", marginBottom: "16px" }}>
            At SHNOOR International LLC, integrity and transparency are at the heart of our recruitment process. We want
            to alert all job seekers that we never charge any fees, request payments, or ask for financial information at
            any stage of our hiring process.
          </p>
          <p style={{ fontSize: "14.5px", lineHeight: "1.9", color: "#d6dbe6" }}>
            To protect against spam, ensure emails come from <strong>@shnoor.com</strong>. If you receive any
            communication claiming to represent SHNOOR International and requesting money for job opportunities, please
            treat it as a scam.
          </p>
          <button className="btn btn-warning px-4 py-2 rounded-pill mt-4 fw-semibold" onClick={() => navigate("/recruitmentscams")}>
            Read More
          </button>
        </div>
      </div>
      <div className="container py-5" style={{ fontFamily: "Ubuntu, sans-serif" }}>
        <h2 className="text-center" style={{ color: "#E2E8F0" }}>Why Join SHNOOR?</h2>
        <div className="row mt-4 g-4">
          {values.map((v, i) => (
            <div className="col-md-3 d-flex" key={i}>
              <div
                className="value-card h-100 w-100"
                style={{ background: "#1E293B", borderRadius: "14px", padding: "25px", boxShadow: "0 10px 25px rgba(0,0,0,0.4)", border: "1px solid rgba(99,102,241,0.15)", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "0.3s", color: "#E2E8F0" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <h5 style={{ color: "#6366F1", fontWeight: "700" }}>{v.title}</h5>
                <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: "1.7" }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container py-5" ref={openingsRef}>
        <h2 className="text-center">Latest Openings</h2>
        <div className="text-center mb-4">
          {filters.map((f) => (
            <button key={f} className={`filter-btn ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="row g-4">
          {filtered.map((job, i) => (
            <div className="col-md-6" key={i}>
              <div className="job-card">
                <div>
                  <div style={{ marginBottom: "12px" }}>
                    <span className="badge-dept">{job.dept}</span>
                    <span className="badge-type">{job.type}</span>
                  </div>
                  <h5 className="mt-1 mb-1" style={{ fontSize: "16px", fontWeight: "700" }}>{job.title}</h5>
                  <p style={{ fontSize: "13px", marginBottom: "10px" }}> {job.location}</p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
                    <span style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E", fontSize: "12px", padding: "3px 10px", borderRadius: "50px" }}>
                       {job.duration}
                    </span>
                    <span style={{ background: "rgba(99,102,241,0.1)", color: "#A5B4FC", fontSize: "12px", padding: "3px 10px", borderRadius: "50px" }}>
                       {job.stipend}
                    </span>
                    <span style={{ background: "rgba(251,191,36,0.1)", color: "#FBB724", fontSize: "12px", padding: "3px 10px", borderRadius: "50px" }}>
                       PPO: {job.ppo}
                    </span>
                  </div>

                  <p style={{ fontSize: "13.5px", color: "#94A3B8", lineHeight: "1.6", marginBottom: "0" }}>
                    {job.whoWeAreLookingFor.slice(0, 120)}...
                  </p>
                </div>

                <div style={{ marginTop: "18px" }}>
                  <button className="view-btn" onClick={() => setSelectedJob(job)}>View Details</button>
                  <button className="apply-btn">Apply Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-section py-5">
        <div className="container d-flex justify-content-center">
          <div
            style={{ maxWidth: "800px", width: "100%", background: "rgba(30,41,59,0.7)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "18px", padding: "40px 30px", textAlign: "center", backdropFilter: "blur(12px)", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}
          >
            <div style={{ fontSize: "20px", color: "#22C55E", marginBottom: "15px" }}>★★★★★</div>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#CBD5F5", fontStyle: "italic", marginBottom: "30px" }}>
              "Joining SHNOOR International LLC was the best career decision I made. The work is challenging, the team is
              brilliant, and the growth opportunities are unlike anything I've seen elsewhere. From day one, I felt valued
              and empowered to make a real difference."
            </p>
            <div className="d-flex flex-column align-items-center">
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", border: "3px solid #6366F1", marginBottom: "12px" }}>
                <img src={user} alt="user" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h6 style={{ margin: 0, color: "#E2E8F0", fontWeight: "600" }}>John Doe</h6>
              <small style={{ color: "#22C55E", marginBottom: "6px" }}>Software Developer</small>
              <small style={{ color: "#94A3B8" }}>Rajan Mehta — Senior SAP Consultant</small>
              <small style={{ color: "#64748B", marginTop: "6px" }}>SHNOOR International LLC — Muscat, Oman</small>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedJob(null)}>×</button>
            <div style={{ marginBottom: "8px" }}>
              <span className="badge-dept">{selectedJob.dept}</span>
              <span className="badge-type">{selectedJob.type}</span>
            </div>
            <h3 style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "22px", marginTop: "10px", marginBottom: "4px" }}>
              {selectedJob.title}
            </h3>
            <p style={{ color: "#64748B", fontSize: "13px", marginBottom: "16px" }}>📍 {selectedJob.location}</p>
            <div className="modal-info-row">
              <div className="info-chip"><span>Duration:</span>{selectedJob.duration}</div>
              <div className="info-chip"><span>Stipend:</span>₹{selectedJob.stipend}</div>
              <div className="info-chip"><span>PPO:</span>{selectedJob.ppo}</div>
              <div className="info-chip"><span>Mode:</span>Work From Home</div>
            </div>
            <div className="modal-section-title">Who We're Looking For</div>
            <p style={{ color: "#CBD5E1", fontSize: "14.5px", lineHeight: "1.8" }}>{selectedJob.whoWeAreLookingFor}</p>
            <div className="modal-section-title">Key Responsibilities</div>
            <ul className="modal-list">
              {selectedJob.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            <div className="modal-section-title">Preferred Skills</div>
            <ul className="modal-list">
              {selectedJob.skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <div className="modal-footer-btns">
              <button className="apply-btn" style={{ padding: "10px 28px", fontSize: "15px" }}>Apply Now</button>
              <button className="view-btn" style={{ padding: "10px 24px", fontSize: "15px" }} onClick={() => setSelectedJob(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShnoorCareers;