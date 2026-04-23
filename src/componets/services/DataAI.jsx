import React, { useEffect, useRef, useState } from "react";
import ai  from "../../assets/ai.jpg"
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
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
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
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

const aiServices = [
  {
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=80",
    title: "Intelligent Automation With AI & RPA",
    tag: "Automation",
    desc: "Our intelligent automation solutions go beyond basic task automation — by integrating AI, we enable your systems to learn, adapt, and make smart decisions. From document processing and data entry to complex decision-making and predictive analysis, AI-powered bots work around the clock to ensure speed, accuracy, and efficiency.",
  },
  {
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80",
    title: "Machine Learning Model Development",
    tag: "ML",
    desc: "From concept to deployment, we handle every stage of the ML model lifecycle — including data preparation, feature engineering, model training, testing, and optimization. Whether you need a recommendation engine, fraud detection system, demand forecasting model, or intelligent automation, our experts deliver tailored solutions that meet your specific needs.",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
    title: "AI Driven Predictive Analysis",
    tag: "Analytics",
    desc: "SHNOOR International LLC utilizes AI and advanced machine learning for predictive analytics. We help businesses stay ahead by forecasting trends, identifying risks, and uncovering new opportunities. Our analysts analyze historical data and patterns to generate highly accurate, actionable forecasts that drive improved decision-making.",
  },
];

const aiCapabilities = [
  { icon: "⚙️", title: "Automation Solutions", desc: "Implement automation to streamline processes and enhance operational performance." },
  { icon: "📊", title: "Data Strategy", desc: "Craft tailored data strategies that drive business growth and efficiency." },
  { icon: "🔮", title: "Predictive Modeling", desc: "Leverage predictive analytics to anticipate market trends and customer needs." },
];

const aiSections = [
  {
    heading: "Data & Artificial Intelligence: Drive Innovation",
    body: "Unlock the power of your data with our specialized AI services. We transform raw information into predictive models and intelligent automation that directly boost your business efficiency and growth. Our structured approach ensures a seamless, ethical AI transformation — from initial strategy to successful enterprise-wide deployment. Partner with us to future-proof your business.",
    accent: C.primary,
  },
  {
    heading: "Data & AI: Intelligent Transformation",
    body: "Stop relying on guesswork. We empower your business with AI-driven intelligence to make faster, smarter decisions and gain a competitive edge. Our expert team ensures your data foundation is robust, secure, and ready to deploy high-impact predictive and generative AI solutions. It's time to turn potential into performance.",
    accent: C.secondary,
  },
  {
    heading: "AI: Your Competitive Edge",
    body: "The future is now. We provide the data architecture and AI expertise required to keep your business ahead of the curve. From custom machine learning models to ensuring your systems are ready for the next wave of innovation, we deliver solutions that are secure, scalable, and built for lasting impact. Don't just adapt — lead your efficiency with strategic AI.",
    accent: C.primary,
  },
];

export default function DataAI() {
  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Ubuntu', sans-serif", overflowX: "hidden" }}>
        <Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
        * { font-family:'Ubuntu',sans-serif; box-sizing:border-box; }
        .ai-card { background:${C.surface}; border-radius:18px; overflow:hidden; border:1px solid ${C.border}; transition:all 0.35s; height:100%; display:flex; flex-direction:column; }
        .ai-card:hover { transform:translateY(-10px); box-shadow:0 24px 60px rgba(99,102,241,0.22); border-color:rgba(99,102,241,0.5); }
        .ai-cap-item { background:${C.surface}; border-radius:14px; padding:22px 26px; border-left:3px solid ${C.primary}; transition:all 0.3s; margin-bottom:14px; }
        .ai-cap-item:hover { background:rgba(99,102,241,0.07); border-left-color:${C.secondary}; }
        .ai-info-block { background:${C.surface}; border-radius:16px; padding:30px; border:1px solid ${C.border}; margin-bottom:14px; transition:border-color 0.3s; }
        .ai-info-block:hover { border-color:rgba(99,102,241,0.4); }
        .ai-btn { background:linear-gradient(135deg,${C.primary},#4F46E5); color:#fff; border:none; padding:13px 30px; border-radius:50px; font-weight:700; font-size:13px; letter-spacing:0.08em; cursor:pointer; transition:all 0.3s; box-shadow:0 0 24px rgba(99,102,241,0.35); }
        .ai-btn:hover { transform:translateY(-2px); box-shadow:0 10px 36px rgba(99,102,241,0.55); }
        .gp { width:8px; height:8px; border-radius:50%; background:${C.secondary}; display:inline-block; margin-right:8px; animation:gp 2s infinite; box-shadow:0 0 10px ${C.secondary}; }
        @keyframes gp { 0%,100%{opacity:1}50%{opacity:0.35} }
        .floating-particle { position:absolute; border-radius:50%; animation:float 6s ease-in-out infinite; }
        @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)} }
      `}</style>
      <div style={{ position: "relative", minHeight: "540px", display: "flex", alignItems: "center", overflow: "hidden", padding: "80px 0" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80') center/cover", filter: "brightness(0.18) saturate(0.5)" }} />

        {[
          { w: 120, h: 120, top: "10%", left: "70%", bg: "rgba(99,102,241,0.07)", delay: "0s" },
          { w: 60, h: 60, top: "60%", left: "80%", bg: "rgba(34,197,94,0.07)", delay: "2s" },
          { w: 80, h: 80, top: "30%", left: "60%", bg: "rgba(99,102,241,0.05)", delay: "4s" },
        ].map((p, i) => (
          <div key={i} className="floating-particle" style={{ width: p.w, height: p.h, top: p.top, left: p.left, background: p.bg, border: "1px solid rgba(99,102,241,0.12)", animationDelay: p.delay }} />
        ))}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: `linear-gradient(transparent,${C.bg})` }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "700px" }}>
            <h1 style={{ fontSize: "clamp(26px,5.5vw,54px)", fontWeight: 700, margin: "0 0 20px", lineHeight: 1.15, color: "#F1F5F9" }}>
              Turning Data into Decisions.{" "}
              <span style={{ background: "linear-gradient(135deg,#6366F1,#A5B4FC,#22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Powering Ideas with Intelligence.
              </span>
            </h1>
            <p style={{ fontSize: "15px", color: "#94A3B8", lineHeight: 1.8, margin: "0 0 32px", fontWeight: 300, maxWidth: "580px" }}>
              We help organizations harness the potential of AI-powered automation, advanced analytics, and cognitive technologies to enhance efficiency, improve customer experiences, and uncover new business opportunities.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "linear-gradient(135deg,#0e0b1f,#0F172A)", padding: "90px 0" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.primary, fontWeight: 700, marginBottom: "10px" }}>OUR OFFERINGS</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 14px" }}>What we do</h2>
            <p style={{ fontSize: "14px", color: C.muted, maxWidth: "640px", margin: "0 auto", lineHeight: 1.8 }}>
              At SHNOOR International LLC, we combine the power of data with the intelligence of AI to help businesses innovate, automate, and grow. Our solutions leverage machine listening, predictive analytics, and natural language processing to transform raw data into actionable insights and intelligent decision-making.
            </p>
          </FadeUp>
          <div className="row g-4">
            {aiServices.map((s, i) => (
              <div className="col-md-4" key={i}>
                <FadeUp delay={i * 0.1}>
                  <div className="ai-card">
                    <div style={{ height: "190px", overflow: "hidden", position: "relative" }}>
                      <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) saturate(0.65)", transition: "transform 0.5s" }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 30%,rgba(15,23,42,0.92))" }} />
                      <span style={{ position: "absolute", top: 12, left: 12, background: `rgba(99,102,241,0.88)`, borderRadius: "50px", padding: "4px 12px", fontSize: "10px", color: "#fff", fontWeight: 700, letterSpacing: "0.08em" }}>{s.tag}</span>
                    </div>
                    <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h5 style={{ fontSize: "14px", fontWeight: 700, color: C.text, margin: "0 0 10px" }}>{s.title}</h5>
                      <div style={{ maxHeight: "140px", overflowY: "auto", paddingRight: "4px" }}>
                        <p style={{ fontSize: "12px", color: C.muted, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container" style={{ padding: "80px 24px" }}>
        <FadeUp style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.secondary, fontWeight: 700, marginBottom: "10px" }}>WHAT WE OFFER</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 12px" }}>Data & AI Services</h2>
          <p style={{ color: C.muted, fontSize: "14px" }}>Transform your business with innovative data strategies and AI solutions.</p>
        </FadeUp>
        <div className="row g-5 align-items-center">
          <div className="col-md-5">
            <FadeUp>
              <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(99,102,241,0.25)", position: "relative" }}>
                <img src={ai} alt="AI" style={{ width: "100%", display: "block", filter: "brightness(0.55) saturate(0.5)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(99,102,241,0.28),rgba(34,197,94,0.1))" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: "80px", fontWeight: 900, background: "linear-gradient(135deg,rgba(99,102,241,0.8),rgba(34,197,94,0.6))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Ai</div>
                </div>
              </div>
            </FadeUp>
          </div>
          <div className="col-md-7">
            {aiCapabilities.map((cap, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="ai-cap-item">
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
      <div style={{ background: "linear-gradient(180deg,#0A1120,#0F172A)", padding: "80px 0" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "44px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.primary, fontWeight: 700, marginBottom: "10px" }}>WHY AI?</div>
            <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "#F1F5F9", margin: 0 }}>The Case for Intelligent Transformation</h2>
          </FadeUp>
          <div className="row g-4">
            {aiSections.map((sec, i) => (
              <div className="col-md-4" key={i}>
                <FadeUp delay={i * 0.1}>
                  <div className="ai-info-block" style={{ height: "100%" }}>
                    <div style={{ width: "32px", height: "3px", background: sec.accent, borderRadius: "2px", marginBottom: "16px" }} />
                    <h4 style={{ fontSize: "15px", fontWeight: 700, color: C.text, margin: "0 0 12px", lineHeight: 1.4 }}>{sec.heading}</h4>
                    <p style={{ fontSize: "13px", color: C.muted, lineHeight: 1.8, margin: 0 }}>{sec.body}</p>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "90px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 50% 50%,rgba(99,102,241,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
        <FadeUp>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.secondary, fontWeight: 700, marginBottom: "14px" }}>READY TO TRANSFORM?</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 16px" }}>
            Your AI Journey Starts Here
          </h2>
          <p style={{ fontSize: "15px", color: C.muted, maxWidth: "480px", margin: "0 auto 32px", lineHeight: 1.8 }}>
            Partner with SHNOOR International for AI and data solutions that drive real, measurable results.
          </p>
        </FadeUp>
      </div>
      <Footer/>
    </div>
  );
}
