import React, { useEffect, useRef, useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const C = {
  primary: "#6366F1",
  secondary: "#22C55E",
  bg: "#0F172A",
  surface: "#1E293B",
  text: "#E2E8F0",
  muted: "#64748B",
  border: "rgba(99,102,241,0.18)",
};

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
const thresholdRef = useRef(0.3);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setInView(true);
    },
    { threshold: thresholdRef.current }
  );

  if (ref.current) observer.observe(ref.current);

  return () => observer.disconnect();
}, []);
  return [ref, inView];
}

function FadeUp({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style
    }}>{children}</div>
  );
}

const services = [
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80",
    title: "IT & Technology Consulting",
    tag: "Technology",
    desc: "We bring deep expertise in enterprise systems, cloud solutions, cybersecurity, and application development. Our consultants work alongside your team to ensure technology becomes a driver of efficiency, competitiveness, and innovation.",
  },
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80",
    title: "Temporary & Permanent Staffing",
    tag: "Staffing",
    desc: "Our recruitment specialists leverage industry expertise and advanced screening processes, maintaining a vast talent network to ensure every candidate is a perfect match for your requirements — from IT specialists to business leaders.",
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80",
    title: "Talent Acquisition & Workforce Management",
    tag: "Talent",
    desc: "At SHNOOR International LLC, we help organizations attract, hire, and retain the best talent while ensuring efficient workforce management to drive business success. Our analysts are tailored to meet the unique needs of each client.",
  },
];

const capabilities = [
  { icon: "👥", title: "Workforce Management", desc: "Optimizing workforce efficiency to enhance productivity and performance." },
  { icon: "🎯", title: "Talent Acquisition", desc: "Finding skilled professionals tailored to your business needs." },
  { icon: "📦", title: "Project-Based Staffing", desc: "Flexible staffing solutions for your specific project requirements." },
];

export default function ConsultingStaffing() {
  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Ubuntu', sans-serif", overflowX: "hidden" }}>
        <Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
        * { font-family:'Ubuntu',sans-serif; box-sizing:border-box; }
        .cs-svc-card { background:${C.surface}; border-radius:18px; overflow:hidden; border:1px solid ${C.border}; transition:all 0.35s; height:100%; display:flex; flex-direction:column; }
        .cs-svc-card:hover { transform:translateY(-10px); box-shadow:0 24px 60px rgba(99,102,241,0.22); border-color:rgba(99,102,241,0.5); }
        .cs-cap-card { background:${C.surface}; border-radius:14px; padding:22px; border:1px solid ${C.border}; border-left:3px solid ${C.primary}; transition:all 0.3s; }
        .cs-cap-card:hover { border-left-color:${C.secondary}; background:rgba(99,102,241,0.06); transform:translateX(6px); }
        .cs-btn-primary { background:linear-gradient(135deg,${C.primary},#4F46E5); color:#fff; border:none; padding:13px 30px; border-radius:50px; font-weight:700; font-size:13px; letter-spacing:0.08em; cursor:pointer; transition:all 0.3s; box-shadow:0 0 24px rgba(99,102,241,0.35); }
        .cs-btn-primary:hover { transform:translateY(-2px); box-shadow:0 10px 36px rgba(99,102,241,0.55); }
        .cs-btn-outline { background:transparent; color:#A5B4FC; border:1px solid rgba(99,102,241,0.4); padding:13px 30px; border-radius:50px; font-weight:600; font-size:13px; cursor:pointer; transition:all 0.3s; }
        .cs-btn-outline:hover { background:rgba(99,102,241,0.1); }
        .glow-pulse { width:8px; height:8px; border-radius:50%; background:${C.secondary}; display:inline-block; margin-right:8px; animation:gp 2s infinite; box-shadow:0 0 10px ${C.secondary}; }
        @keyframes gp { 0%,100%{opacity:1}50%{opacity:0.35} }
        .diagonal-section { clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%); padding: 100px 0; }
      `}</style>
      <div style={{ position: "relative", minHeight: "520px", display: "flex", alignItems: "center", overflow: "hidden", padding: "80px 0" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80') center/cover", filter: "brightness(0.2) saturate(0.4)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(99,102,241,0.18) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: `linear-gradient(transparent,${C.bg})` }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "720px" }}>
            <h1 style={{ fontSize: "clamp(28px,6vw,58px)", fontWeight: 700, margin: "0 0 20px", lineHeight: 1.12, color: "#F1F5F9", fontStyle: "italic" }}>
              "Consulting That Delivers.{" "}
              <span style={{ background: "linear-gradient(135deg,#6366F1,#A5B4FC,#22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontStyle: "normal" }}>Staffing That Works.</span>"
            </h1>
            <p style={{ fontSize: "15px", color: "#94A3B8", lineHeight: 1.8, margin: "0 0 12px", fontWeight: 300, maxWidth: "580px" }}>
              At SHNOOR International LLC, we provide expert IT consulting and specialized staffing solutions to help businesses achieve their goals faster.
            </p>
            <p style={{ fontSize: "12px", color: C.muted, letterSpacing: "0.12em", fontWeight: 600, margin: "0 0 32px" }}>Smart people. Smarter solutions.</p>
          </div>
        </div>
      </div>
      <div style={{ background: "linear-gradient(135deg,#1a1035,#0F1D2E)", padding: "90px 0" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.primary, fontWeight: 700, marginBottom: "10px" }}>OUR EXPERTISE</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 14px" }}>What we do</h2>
            <p style={{ fontSize: "14px", color: C.muted, maxWidth: "620px", margin: "0 auto", lineHeight: 1.8 }}>
              At SHNOOR International LLC, we deliver end-to-end consulting and staffing services that empower businesses to scale efficiently, innovate faster, and achieve sustainable growth.
            </p>
          </FadeUp>
          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-md-4" key={i}>
                <FadeUp delay={i * 0.1}>
                  <div className="cs-svc-card">
                    <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                      <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) saturate(0.7)", transition: "transform 0.5s" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 30%,rgba(15,23,42,0.92))" }} />
                      <span style={{ position: "absolute", top: 12, right: 12, background: "rgba(99,102,241,0.88)", borderRadius: "50px", padding: "4px 12px", fontSize: "10px", color: "#fff", fontWeight: 700, letterSpacing: "0.08em" }}>{s.tag}</span>
                    </div>
                    <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h5 style={{ fontSize: "15px", fontWeight: 700, color: C.text, margin: "0 0 10px" }}>{s.title}</h5>
                      <p style={{ fontSize: "13px", color: C.muted, lineHeight: 1.75, margin: 0, flex: 1 }}>{s.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container py-5" style={{ paddingTop: "80px !important", paddingBottom: "80px !important" }}>
        <FadeUp style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.secondary, fontWeight: 700, marginBottom: "10px" }}>CAPABILITIES</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 10px" }}>Consulting & Staffing</h2>
          <p style={{ color: C.muted, fontSize: "14px" }}>Expert IT consulting and strategic staffing solutions for business efficiency and growth.</p>
        </FadeUp>
        <div className="row align-items-center g-5">
          <div className="col-md-5">
            <FadeUp>
              <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(99,102,241,0.22)" }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="team" style={{ width: "100%", display: "block", filter: "brightness(0.6) saturate(0.6)" }} />
              </div>
            </FadeUp>
          </div>
          <div className="col-md-7">
            {capabilities.map((cap, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="cs-cap-card" style={{ marginBottom: "14px" }}>
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>{cap.icon}</div>
                    <div>
                      <h5 style={{ margin: "0 0 5px", fontSize: "15px", fontWeight: 700, color: C.text }}>{cap.title}</h5>
                      <p style={{ margin: 0, fontSize: "13px", color: C.muted, lineHeight: 1.7 }}>{cap.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: C.surface, borderTop: "1px solid rgba(99,102,241,0.12)", borderBottom: "1px solid rgba(99,102,241,0.12)" }}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <FadeUp>
                <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.secondary, fontWeight: 700, marginBottom: "14px" }}>OUR MISSION</div>
                <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 16px", lineHeight: 1.25 }}>
                  Empowering Your<br />
                  <span style={{ color: C.primary }}>Business Success</span>
                </h2>
                <p style={{ fontSize: "14px", color: C.muted, lineHeight: 1.8, margin: "0 0 28px" }}>
                  At Shnoor International LLC, we specialize in tailored consulting solutions and expert staffing to foster long-term partnerships that drive client success.
                </p>
              </FadeUp>
            </div>
            <div className="col-md-6">
              <FadeUp delay={0.15}>
                <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(99,102,241,0.22)", position: "relative" }}>
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80" alt="success" style={{ width: "100%", display: "block", filter: "brightness(0.55) saturate(0.6)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(99,102,241,0.2),transparent)" }} />
                  <div style={{ position: "absolute", bottom: 20, right: 20 }}>
                    {[
                      { val: "500+", label: "Clients" },
                      { val: "98%", label: "Satisfaction" },
                    ].map((s, i) => (
                      <div key={i} style={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "12px", padding: "12px 18px", marginTop: "10px", textAlign: "center" }}>
                        <div style={{ fontSize: "22px", fontWeight: 700, background: "linear-gradient(135deg,#6366F1,#22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.val}</div>
                        <div style={{ fontSize: "11px", color: C.muted, letterSpacing: "0.08em" }}>{s.label.toUpperCase()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "90px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 50% 50%,rgba(99,102,241,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
        <FadeUp>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.primary, fontWeight: 700, marginBottom: "14px" }}>READY TO SCALE?</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 16px" }}>Let's Build Something Great Together</h2>
          <p style={{ fontSize: "15px", color: C.muted, maxWidth: "480px", margin: "0 auto 32px", lineHeight: 1.8 }}>Partner with SHNOOR International for consulting and staffing solutions that actually deliver.</p>
          <button className="cs-btn-primary" style={{ fontSize: "14px", padding: "14px 40px" }}>CONTACT US TODAY</button>
        </FadeUp>
      </div>
      <Footer/>
    </div>
  );
}
