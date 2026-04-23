// import React, { useState } from "react";
// import Footer from "./common/Footer";
// import Navbar from "./common/Navbar";
// import user from "../assets/user.webp";
// const heroBg    = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80";
// const teamImg   = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";
// const exploreImg= "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80";

// const openings = [
//   { title: "SAP Consultant",       type: "Full-time", location: "Muscat, Oman",   dept: "SAP Outsourcing" },
//   { title: "IT Business Analyst",  type: "Full-time", location: "Dubai, UAE",     dept: "IT Consulting"  },
//   { title: "Trade Operations Exec",type: "Full-time", location: "Mumbai, India",  dept: "Import & Export"},
//   { title: "Software Developer",   type: "Full-time", location: "Remote",         dept: "Product Dev"    },
//   { title: "SAP FICO Specialist",  type: "Contract",  location: "Bahrain",        dept: "SAP Outsourcing"},
//   { title: "Logistics Coordinator",type: "Full-time", location: "Doha, Qatar",    dept: "Import & Export"},
// ];

// const values = [
//   { title: "Innovation",    desc: "We push boundaries and embrace new ideas that drive real-world impact." },
//   { title: "Collaboration", desc: "We grow together — across teams, borders, and industries."             },
//   { title: "Global Reach",  desc: "Work on projects spanning India, UAE, Bahrain, Qatar, Oman & Malaysia."},
//   { title: "Growth",        desc: "Every career here is a journey of learning, impact, and advancement."  },
// ];

// const Careers = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const filters = ["All", "SAP Outsourcing", "IT Consulting", "Import & Export", "Product Dev"];

//   const filtered = activeFilter === "All"
//     ? openings
//     : openings.filter(o => o.dept === activeFilter);

//   return (
//     <>
//       <style>{`
//         .job-card {
//           background: #fff;
//           border-radius: 12px;
//           overflow: hidden;
//           box-shadow: 0 6px 18px rgba(0,0,0,0.08);
//           transition: all 0.3s ease;
//           height: 100%;
//           padding: 24px;
//         }
//         .job-card:hover { transform: translateY(-6px); box-shadow: 0 12px 28px rgba(0,0,0,0.13); }

//         .value-card {
//           background: #fff;
//           border-radius: 12px;
//           box-shadow: 0 6px 18px rgba(0,0,0,0.08);
//           padding: 30px 24px;
//           text-align: center;
//           transition: all 0.3s ease;
//           height: 100%;
//         }
//         .value-card:hover { transform: translateY(-6px); box-shadow: 0 12px 28px rgba(0,0,0,0.13); }

//         .filter-btn {
//           border: 1.5px solid #2f4770;
//           background: transparent;
//           color: #2f4770;
//           border-radius: 50px;
//           padding: 7px 20px;
//           font-size: 13px;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.25s ease;
//           margin: 4px;
//         }
//         .filter-btn:hover,
//         .filter-btn.active {
//           background: #2f4770;
//           color: #fff;
//         }

//         .badge-dept {
//           display: inline-block;
//           background: #eef2ff;
//           color: #2f4770;
//           font-size: 11px;
//           font-weight: 600;
//           padding: 4px 12px;
//           border-radius: 50px;
//           margin-bottom: 10px;
//           letter-spacing: 0.4px;
//         }

//         .badge-type {
//           display: inline-block;
//           background: #fff8e1;
//           color: #b8860b;
//           font-size: 11px;
//           font-weight: 600;
//           padding: 3px 10px;
//           border-radius: 50px;
//           margin-left: 8px;
//         }

//         .apply-btn {
//           background: #f4b400;
//           border: none;
//           color: #222;
//           font-weight: 600;
//           font-size: 13px;
//           padding: 8px 22px;
//           border-radius: 50px;
//           cursor: pointer;
//           transition: background 0.25s;
//         }
//         .apply-btn:hover { background: #e0a500; }

//         .section-divider {
//           width: 60px;
//           height: 3px;
//           background: #f4b400;
//           margin: 12px auto 0;
//           border-radius: 2px;
//         }

//         .scam-box {
//           background: rgba(255,255,255,0.08);
//           border: 1px solid rgba(255,255,255,0.2);
//           border-radius: 12px;
//           padding: 32px 36px;
//           max-width: 760px;
//           margin: 0 auto;
//         }

//         .slant-image {
//           width: 100%;
//           max-width: 420px;
//           height: 320px;
//           overflow: hidden;
//           clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
//         }
//         .slant-image img { width: 100%; height: 100%; object-fit: cover; }

//         @media (max-width: 992px) {
//           .slant-image { max-width: 100%; height: 240px; margin-top: 30px; }
//         }
//       `}</style>

//       <div>
//         <Navbar />
//         <div
//           style={{backgroundImage: `url(${heroBg})`,height: "420px",backgroundSize: "cover",backgroundPosition: "center",position: "relative",
//             color: "#fff",
//           }}
//         >
//           <div style={{background: "rgba(0,0,0,0.55)",height: "100%",display: "flex",alignItems: "center",
//               justifyContent: "center",
//               textAlign: "center",
//               padding: "20px",
//             }}
//           >
//             <div>
//               <h2 style={{ fontSize: "36px", maxWidth: "800px", lineHeight: "1.5", marginBottom: "16px" }}>
//                 Find Your Future at SHNOOR International LLC
//               </h2>
//               <p style={{ fontSize: "16px", color: "#e0e0e0", maxWidth: "600px", margin: "0 auto 28px" }}>
//                 Join a team of innovators, problem-solvers, and go-getters shaping
//                 the future of technology and global trade.
//               </p>
//               <button className="btn btn-warning px-4 py-2 rounded-pill fw-semibold me-3">
//                 View Openings
//               </button>
//               <button className="btn btn-outline-light px-4 py-2 rounded-pill">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="container" style={{ padding: "80px 0" }}>
//           <div className="row align-items-center" style={{ rowGap: "40px" }}>
//             <div className="col-md-6" style={{ padding: "0 30px" }}>
//               <h2 style={{ fontWeight: "700", marginBottom: "20px", color: "#222" }}>
//                 Are You Ready to Take on the Challenge?
//               </h2>
//               <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.9" }}>
//                 At SHNOOR International LLC, we believe that great companies are built
//                 by great people. We're looking for innovators, problem-solvers, and
//                 go-getters who are passionate about making an impact in the worlds of
//                 technology and global trade.
//               </p>
//               <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.9" }}>
//                 Whether you're an IT expert, software developer, SAP consultant,
//                 business strategist, or trade professional — this is your chance to be
//                 part of a company that values creativity, collaboration, and continuous
//                 growth.
//               </p>
//               <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.9" }}>
//                 At SHNOOR International, you won't just be doing a job — you'll be
//                 building a career where your skills make a difference.
//               </p>
//               <p style={{ fontSize: "15px", fontWeight: "600", color: "#2f4770", marginTop: "12px" }}>
//                 SHNOOR — Get the future you want. !!
//               </p>
//             </div>
//             <div className="col-md-6 text-center" style={{ padding: "0 30px" }}>
//               <img src={teamImg} alt="team" style={{width: "100%", borderRadius: "12px",
//                   boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
//                   transition: "transform 0.3s ease",
//                 }}
//                 onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
//                 onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//               />
//             </div>
//           </div>
//         </div>
//         <div
//           style={{background: "linear-gradient(135deg, #2f4770, #3b5998)",color: "#fff",
//             padding: "70px 20px",
//             textAlign: "center",
//           }}
//         >
//           <div className="container" style={{ maxWidth: "860px" }}>
//             <h2 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "16px" }}>
//               Recruitment Scams
//             </h2>
//             <div className="section-divider" style={{ margin: "0 auto 28px" }} />
//             <div className="scam-box">
//               <p style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.8", color: "#fff", marginBottom: "16px" }}>
//                 At SHNOOR International LLC, integrity and transparency are at the heart
//                 of our recruitment process. We want to alert all job seekers that we
//                 never charge any fees, request payments, or ask for financial
//                 information at any stage of our hiring process.
//               </p>
//               <p style={{ fontSize: "14.5px", lineHeight: "1.9", color: "#d6dbe6" }}>
//                 To protect against spam, ensure emails come from <strong>@shnoor.com</strong>. 
//                 If you receive any communication — via email, phone, social media, or messaging apps — 
//                 claiming to represent SHNOOR International and requesting money for job opportunities, 
//                 please treat it as a scam. Such activities are fraudulent and have no connection with our company.
//               </p>
//               <button className="btn btn-warning px-4 py-2 rounded-pill mt-4 fw-semibold">
//                 Read More
//               </button>
//             </div>
//           </div>
//         </div>
//         <div style={{ background: "#f7f9fc", padding: "80px 0" }}>
//           <div className="container">
//             <div className="row align-items-center" style={{ rowGap: "40px" }}>
//               <div className="col-md-6" style={{ padding: "0 30px" }}>
//                 <h2 style={{ fontWeight: "700", marginBottom: "20px", color: "#222" }}>
//                   Explore SHNOOR
//                 </h2>
//                 <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.9" }}>
//                   When you join us, you become part of a passionate, diverse, and
//                   forward-thinking team that believes in pushing boundaries and delivering
//                   excellence. From IT Consulting, Product Development, and SAP Outsourcing
//                   to international import  export operations, our work spans industries,
//                   regions, and technologies.
//                 </p>
//                 <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.9" }}>
//                   At SHNOOR International LLC, every career path is a journey of growth,
//                   innovation, and impact. We are more than just a workplace — we're a
//                   dynamic hub where technology meets global trade, creating opportunities
//                   that challenge your skills and expand your horizons.
//                 </p>
//                 <button className="btn btn-warning px-4 py-2 rounded-pill fw-semibold mt-3">
//                   Latest Openings
//                 </button>
//               </div>
//               <div className="col-md-6 text-center" style={{ padding: "0 30px" }}>
//                 <img
//                   src={exploreImg}
//                   alt="explore shnoor"
//                   style={{
//                     width: "100%",
//                     borderRadius: "12px",
//                     boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
//                     transition: "transform 0.3s ease",
//                   }}
//                   onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
//                   onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container" style={{ padding: "80px 0" }}>
//           <div style={{ textAlign: "center", marginBottom: "50px" }}>
//             <h2 style={{ fontWeight: "700", color: "#222", marginBottom: "10px" }}>
//               Why Join SHNOOR?
//             </h2>
//             <div className="section-divider" />
//           </div>
//           <div className="row g-4">
//             {values.map((v, i) => (
//               <div className="col-md-3 col-sm-6" key={i}>
//                 <div className="value-card">
//                   <h5 style={{ fontWeight: "600", color: "#2f4770", marginBottom: "12px" }}>{v.title}</h5>
//                   <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.7", margin: 0 }}>{v.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div style={{ background: "#f7f9fc", padding: "80px 0" }}>
//           <div className="container">
//             <div style={{ textAlign: "center", marginBottom: "40px" }}>
//               <h2 style={{ fontWeight: "700", color: "#222", marginBottom: "10px" }}>
//                 Latest Openings
//               </h2>
//               <div className="section-divider" />
//               <p style={{ fontSize: "15px", color: "#666", marginTop: "16px" }}>
//                 Explore opportunities across our key practice areas.
//               </p>
//             </div>
//             <div style={{ textAlign: "center", marginBottom: "36px" }}>
//               {filters.map(f => (
//                 <button
//                   key={f}
//                   className={`filter-btn ${activeFilter === f ? "active" : ""}`}
//                   onClick={() => setActiveFilter(f)}
//                 >
//                   {f}
//                 </button>
//               ))}
//             </div>

//             <div className="row g-4">
//               {filtered.map((job, i) => (
//                 <div className="col-md-6" key={i}>
//                   <div className="job-card">
//                     <div style={{ marginBottom: "12px" }}>
//                       <span className="badge-dept">{job.dept}</span>
//                       <span className="badge-type">{job.type}</span>
//                     </div>
//                     <h5 style={{ fontWeight: "600", color: "#222", marginBottom: "8px" }}>
//                       {job.title}
//                     </h5>
//                     <p style={{ fontSize: "14px", color: "#888", marginBottom: "18px" }}>
//                        {job.location}
//                     </p>
//                     <button className="apply-btn">Apply Now</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundColor: "#f4b400",
//             overflow: "hidden",
//             padding: "60px 0",
//           }}
//         >
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-6" style={{ color: "#222" }}>
//                 <h1 className="display-5 fw-light mb-3">
//                   Predict your future <br />
//                   <span className="fw-bold">with SHNOOR</span>
//                 </h1>
//                 <p className="mb-3" style={{ maxWidth: "500px", fontSize: "15px" }}>
//                   Don't wait for opportunities — create them. Join our growing team and
//                   be part of something bigger.
//                 </p>
//                 <div className="d-flex align-items-center gap-4">
//                   <button className="btn btn-dark px-4 py-2 rounded-pill fw-semibold">
//                     Apply Today
//                   </button>
//                   <div>
//                     <div style={{ fontSize: "20px" }}>★★★★★</div>
//                     <small style={{ fontWeight: "500" }}>Top rated by 100+ clients</small>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
//                 <div className="slant-image">
//                   <img src={teamImg} alt="team preview" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           style={{
//             background: "#2f4770",
//             color: "#fff",
//             padding: "60px 20px",
//             textAlign: "center",
//           }}
//         >
//           <div className="container" style={{ maxWidth: "850px" }}>
//             <div style={{ fontSize: "22px", marginBottom: "20px", color: "#FFD700" }}>
//               ★★★★★
//             </div>
//             <p
//               style={{
//                 fontSize: "17px",
//                 lineHeight: "1.9",
//                 color: "#e4e7ef",
//                 marginBottom: "30px",
//               }}
//             >
//               "Joining SHNOOR International LLC was the best career decision I made.
//               The work is challenging, the team is brilliant, and the growth
//               opportunities are unlike anything I've seen elsewhere. From day one,
//               I felt valued and empowered to make a real difference."
//             </p>
//             <div
//             style={{width: "70px",height: "70px",borderRadius: "50%",background: "#f4b400",display: "flex",alignItems: "center",justifyContent: "center",margin: "0 auto 15px",overflow: "hidden", }}>
//             <img src={user} alt="user" style={{width: "100%",height: "100%", objectFit: "cover", borderRadius: "50%",}}/>
//             </div>
//             <h5 style={{ marginBottom: "5px", fontWeight: "500" }}>
//             John Doe-Software Developer
//               Rajan Mehta — Senior SAP Consultant
//             </h5>
//             <p style={{ fontSize: "14px", color: "#cfd6e6", margin: 0 }}>
//               SHNOOR International LLC — Muscat, Oman
//             </p>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Careers;



import React, { useState } from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import user from "../assets/user.webp";
import { useNavigate } from "react-router-dom";
const teamImg   = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";

const heroBg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80";

const openings = [
  { title: "SAP Consultant", type: "Full-time", location: "Muscat, Oman", dept: "SAP Outsourcing" },
  { title: "IT Business Analyst", type: "Full-time", location: "Dubai, UAE", dept: "IT Consulting" },
  { title: "Trade Operations Exec", type: "Full-time", location: "Mumbai, India", dept: "Import & Export" },
  { title: "Software Developer", type: "Full-time", location: "Remote", dept: "Product Dev" },
  { title: "SAP FICO Specialist", type: "Contract", location: "Bahrain", dept: "SAP Outsourcing" },
  { title: "Logistics Coordinator", type: "Full-time", location: "Doha, Qatar", dept: "Import & Export" },
];

const values = [
  { title: "Innovation", desc: "We push boundaries and embrace new ideas that drive real-world impact." },
  { title: "Collaboration", desc: "We grow together — across teams, borders, and industries." },
  { title: "Global Reach", desc: "Work on projects spanning multiple countries." },
  { title: "Growth", desc: "Every career here is a journey of learning and advancement." },
];

const Careers = () => {
   const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "SAP Outsourcing", "IT Consulting", "Import & Export", "Product Dev"];

  const filtered =
    activeFilter === "All"
      ? openings
      : openings.filter((o) => o.dept === activeFilter);

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
          font-family: 'Ubuntu', sans-serif;
        }

        body {
          background: #0F172A;
          color: #E2E8F0;
        }

        h1,h2,h3,h4,h5 { color: #E2E8F0; }
        p { color: #94A3B8; }

        .hero-overlay {
          background: rgba(15,23,42,0.75);
        }

        .job-card {
          background: #1E293B;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(99,102,241,0.2);
          transition: 0.3s;
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
          background:#6366F1;
          border: none;
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
        }

        .filter-btn {
          border: 1px solid #334155;
          background: transparent;
          color: #94A3B8;
          border-radius: 50px;
          padding: 6px 16px;
          margin: 4px;
        }
        .filter-btn.active,
        .filter-btn:hover {
          background: #6366F1;
          color: white;
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

        .yellow-section {
          background: linear-gradient(135deg,#6366F1,#22C55E);
          color: white;
        }

        .testimonial-section {
          background: #1E293B;
        }
      `}</style>

      <Navbar />
      <div style={{ backgroundImage: `url(${heroBg})`, height: "420px", backgroundSize: "cover" }}>
        <div className="hero-overlay d-flex align-items-center justify-content-center text-center h-100">
          <div>
            <h2>Find Your Future at SHNOOR International LLC</h2>
            <p>Join innovators shaping the future of technology.</p>
            <button className="btn btn-warning me-2">View Openings</button>
            <button className="btn btn-outline-light">Learn More</button>
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
      <h2
        style={{
          fontWeight: "800",
          marginBottom: "22px",
          color: "#E2E8F0",
          fontSize: "34px",
          lineHeight: "1.2",
          fontFamily: "Ubuntu, sans-serif",
        }}
      >
        Are You Ready to Take on the Challenge?
      </h2>

      <p style={{ fontSize: "15.5px", color: "#94A3B8", lineHeight: "1.9" }}>
        At SHNOOR International LLC, we believe that great companies are built
        by great people. We're looking for innovators, problem-solvers, and
        go-getters who are passionate about making an impact in the worlds of
        technology and global trade.
      </p>

      <p style={{ fontSize: "15.5px", color: "#94A3B8", lineHeight: "1.9" }}>
        Whether you're an IT expert, software developer, SAP consultant,
        business strategist, or trade professional — this is your chance to be
        part of a company that values creativity, collaboration, and continuous
        growth.
      </p>

      <p style={{ fontSize: "15.5px", color: "#94A3B8", lineHeight: "1.9" }}>
        At SHNOOR International, you won't just be doing a job — you'll be
        building a career where your skills make a difference.
      </p>

      <p
        style={{
          fontSize: "16px",
          fontWeight: "700",
          color: "#6366F1",
          marginTop: "18px",
        }}
      >
        SHNOOR — Get the future you want. !!
      </p>
    </div>
    <div className="col-md-6 text-center" style={{ padding: "0 30px" }}>
      <div
        style={{
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
          border: "1px solid rgba(99,102,241,0.2)",
          transition: "0.4s ease",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "scale(1.03)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <img
          src={teamImg}
          alt="team"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>

  </div>
</div>
<div className="container py-5 text-center">
    <h2 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "16px" }}>Recruitment Scams</h2>
  <div className="" style={{ margin: "0 auto 28px" }} />
  <div
    className="scam-box"
    style={{
      background: "rgba(15, 23, 42, 0.9)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "12px",
      padding: "32px 36px",
      maxWidth: "760px",
      margin: "0 auto",
      backdropFilter: "blur(10px)",
    }}
  >
    <p
      style={{
        fontSize: "15px",
        fontWeight: "600",
        lineHeight: "1.8",
        color: "#fff",
        marginBottom: "16px",
      }}
    >
      At SHNOOR International LLC, integrity and transparency are at the heart
      of our recruitment process. We want to alert all job seekers that we
      never charge any fees, request payments, or ask for financial
      information at any stage of our hiring process.
    </p>

    <p
      style={{
        fontSize: "14.5px",
        lineHeight: "1.9",
        color: "#d6dbe6",
      }}
    >
      To protect against spam, ensure emails come from <strong>@shnoor.com</strong>.
      If you receive any communication — via email, phone, social media, or messaging apps —
      claiming to represent SHNOOR International and requesting money for job opportunities,
      please treat it as a scam. Such activities are fraudulent and have no connection with our company.
    </p>

    <button
      className="btn btn-warning px-4 py-2 rounded-pill mt-4 fw-semibold"
      onClick={() => navigate("/recruitmentscams")}
    >
      Read More
    </button>
  </div>

</div>
<div className="container py-5" style={{ fontFamily: "Ubuntu, sans-serif" }}>
  
  <h2 className="text-center" style={{ color: "#E2E8F0" }}>
    Why Join SHNOOR?
  </h2>

  <div className="row mt-4 g-4">

    {values.map((v, i) => (
      <div className="col-md-3 d-flex" key={i}>
        
        <div
          className="value-card h-100 w-100"
          style={{
            background: "#1E293B",
            borderRadius: "14px",
            padding: "25px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            border: "1px solid rgba(99,102,241,0.15)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "0.3s",
            color: "#E2E8F0",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "translateY(-6px)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          
          <h5 style={{ color: "#6366F1", fontWeight: "700" }}>
            {v.title}
          </h5>

          <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: "1.7" }}>
            {v.desc}
          </p>

        </div>

      </div>
    ))}

  </div>
</div>
      <div className="container py-5">
        <h2 className="text-center">Latest Openings</h2>
        <div className=""></div>

        <div className="text-center mb-3">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="row">
          {filtered.map((job, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="job-card">
                <span className="badge-dept">{job.dept}</span>
                <span className="badge-type">{job.type}</span>
                <h5 className="mt-2">{job.title}</h5>
                <p>{job.location}</p>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="yellow-section text-center py-5">
        <h2>Predict your future with SHNOOR</h2>
        <button className="btn btn-dark mt-3">Apply Today</button>
      </div>
<div className="testimonial-section py-5">
  <div className="container d-flex justify-content-center">
    <div
      style={{
        maxWidth: "800px",
        width: "100%",
        background: "rgba(30,41,59,0.7)",
        border: "1px solid rgba(99,102,241,0.3)",
        borderRadius: "18px",
        padding: "40px 30px",
        textAlign: "center",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ fontSize: "20px", color: "#22C55E", marginBottom: "15px" }}>
        ★★★★★
      </div>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.9",
          color: "#CBD5F5",
          fontStyle: "italic",
          marginBottom: "30px",
        }}
      >
        “Joining SHNOOR International LLC was the best career decision I made.
        The work is challenging, the team is brilliant, and the growth
        opportunities are unlike anything I've seen elsewhere. From day one,
        I felt valued and empowered to make a real difference.”
      </p>
      <div className="d-flex flex-column align-items-center">
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #6366F1",
            marginBottom: "12px",
          }}
        >
          <img
            src={user}
            alt="user"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <h6 style={{ margin: 0, color: "#E2E8F0", fontWeight: "600" }}>
          John Doe
        </h6>

        <small style={{ color: "#22C55E", marginBottom: "6px" }}>
          Software Developer
        </small>

        <small style={{ color: "#94A3B8" }}>
          Rajan Mehta — Senior SAP Consultant
        </small>

        <small style={{ color: "#64748B", marginTop: "6px" }}>
          SHNOOR International LLC — Muscat, Oman
        </small>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
};

export default Careers;



