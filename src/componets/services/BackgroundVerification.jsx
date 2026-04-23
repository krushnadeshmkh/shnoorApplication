import React, { useState, useEffect, useRef } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const COLORS = {
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

const features = [
  {
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80",
    title: "Risk Mitigation",
    desc: "Avoid costly hiring mistakes by verifying candidate backgrounds thoroughly and efficiently.",
    icon: "🛡️",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    title: "Fast Solutions",
    desc: "Experience quick turnaround times with our advanced AI-driven background check technology.",
    icon: "⚡",
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    title: "Key Features",
    desc: "Stay compliant with industry regulations while ensuring a smooth hiring process.",
    icon: "✦",
  },
];

const steps = [
  { icon: "📋", title: "Actionable Reporting", desc: "Receive a clear, compliant report in your dashboard." },
  { icon: "🔒", title: "Secure Submission", desc: "Initiate checks via our encrypted portal for safety." },
  { icon: "🤖", title: "AI-Powered Verification", desc: "Our system cross-references global data for accuracy." },
];

const faqs = [
  { q: "What is background verification?", a: "Background verification is the process of checking a candidate's history for employment, education, and criminal records." },
  { q: "Why is it important?", a: "It helps prevent bad hires, ensuring you select trustworthy candidates who fit your company culture and values." },
  { q: "How does your service work?", a: "Our service involves a simple three-step process: submit a request, we conduct checks, and receive a detailed report quickly and efficiently." },
  { q: "What checks do you offer?", a: "We offer checks on criminal records, education verification, and employment history." },
  { q: "How fast is the process?", a: "Our background checks are completed quickly, often within 24 to 48 hours." },
  { q: "Is your service compliant with regulations?", a: "Yes, we ensure all background checks comply with local and federal regulations, maintaining the highest standards of privacy and security." },
];

const reviews = [
  { stars: 5, text: "The speed and accuracy of Shnoor's checks are unmatched, making our hiring process seamless and reliable.", role: "Recruitment Lead", loc: "San Francisco" },
  { stars: 5, text: "Shnoor's background checks saved us from a costly hire.", role: "HR Manager", loc: "New York" },
];

export default function BackgroundVerification() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: COLORS.bg, color: COLORS.text, fontFamily: "'Ubuntu', sans-serif", overflowX: "hidden" }}>
        <Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
        * { font-family: 'Ubuntu', sans-serif; box-sizing: border-box; }
        .bv-hero { position: relative; min-height: 420px; background: url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1400&q=80') center/cover; display:flex; align-items:center; justify-content:center; text-align:center; overflow:hidden; }
        .bv-hero::before { content:''; position:absolute; inset:0; background: linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(99,102,241,0.25) 100%); }
        .bv-card { background:${COLORS.surface}; border-radius:16px; border:1px solid ${COLORS.border}; overflow:hidden; transition:all 0.3s; }
        .bv-card:hover { transform:translateY(-8px); box-shadow:0 20px 50px rgba(99,102,241,0.22); border-color:rgba(99,102,241,0.45); }
        .bv-step { background:${COLORS.surface}; border-radius:14px; padding:22px 26px; border-left:3px solid ${COLORS.primary}; transition:all 0.3s; margin-bottom:16px; }
        .bv-step:hover { background:rgba(99,102,241,0.08); border-left-color:${COLORS.secondary}; }
        .bv-faq { background:${COLORS.surface}; border-radius:12px; border:1px solid ${COLORS.border}; margin-bottom:10px; cursor:pointer; transition:border-color 0.3s; }
        .bv-faq:hover { border-color:rgba(99,102,241,0.45); }
        .bv-review { background:${COLORS.surface}; border-radius:16px; padding:28px; border:1px solid ${COLORS.border}; transition:all 0.3s; }
        .bv-review:hover { border-color:rgba(34,197,94,0.4); box-shadow:0 12px 40px rgba(34,197,94,0.1); }
        .bv-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(99,102,241,0.12); border:1px solid rgba(99,102,241,0.3); border-radius:50px; padding:5px 16px; font-size:11px; color:#A5B4FC; letter-spacing:0.12em; font-weight:700; }
        .bv-btn-primary { background:linear-gradient(135deg,${COLORS.primary},#4F46E5); color:#fff; border:none; padding:12px 28px; border-radius:50px; font-weight:700; font-size:13px; letter-spacing:0.08em; cursor:pointer; transition:all 0.3s; box-shadow:0 0 24px rgba(99,102,241,0.35); }
        .bv-btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 36px rgba(99,102,241,0.55); }
        .bv-btn-outline { background:transparent; color:#A5B4FC; border:1px solid rgba(99,102,241,0.4); padding:12px 28px; border-radius:50px; font-weight:600; font-size:13px; cursor:pointer; transition:all 0.3s; }
        .bv-btn-outline:hover { background:rgba(99,102,241,0.1); }
        .stat-pill { background:rgba(99,102,241,0.15); border:1px solid rgba(99,102,241,0.25); border-radius:12px; padding:18px 28px; text-align:center; }
        .glow-pulse { width:8px; height:8px; border-radius:50%; background:${COLORS.secondary}; display:inline-block; margin-right:8px; animation:gp 2s infinite; box-shadow:0 0 10px ${COLORS.secondary}; }
        @keyframes gp { 0%,100%{opacity:1}50%{opacity:0.3} }
        .grid-pattern { background-image:linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px); background-size:56px 56px; }
      `}</style>
      <div className="bv-hero">
        <div style={{ position: "relative", zIndex: 2, padding: "60px 20px", animation: "fadeIn 0.9s ease" }}>
          <h1 style={{ fontSize: "clamp(30px,6vw,56px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.15, color: "#F1F5F9" }}>
            Background <span style={{ background: "linear-gradient(135deg,#6366F1,#A5B4FC,#22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Verification</span>
          </h1>
          <p style={{ fontSize: "15px", color: "#94A3B8", maxWidth: "540px", margin: "0 auto 32px", lineHeight: 1.8, fontWeight: 300 }}>
            Ensure safe hiring with our comprehensive background verification services tailored for HR professionals.
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: `linear-gradient(transparent,${COLORS.bg})` }} />
      </div>
      <div className="container py-5">
        <FadeUp style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: COLORS.secondary, fontWeight: 700, marginBottom: "10px" }}>WHY CHOOSE US</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, color: "#F1F5F9", margin: 0 }}>Comprehensive Hiring Protection</h2>
        </FadeUp>
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-md-4" key={i}>
              <FadeUp delay={i * 0.1}>
                <div className="bv-card h-100">
                  <div style={{ height: "180px", overflow: "hidden", position: "relative" }}>
                    <img src={f.img} alt={f.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.65) saturate(0.7)", transition: "transform 0.5s" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 40%,rgba(15,23,42,0.9))" }} />
                    <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(99,102,241,0.85)", borderRadius: "50px", padding: "4px 12px", fontSize: "11px", color: "#fff", fontWeight: 700, letterSpacing: "0.08em" }}>{f.icon} {f.title}</div>
                  </div>
                  <div style={{ padding: "20px 22px" }}>
                    <h5 style={{ fontSize: "16px", fontWeight: 700, color: COLORS.text, margin: "0 0 8px" }}>{f.title}</h5>
                    <p style={{ fontSize: "13px", color: COLORS.muted, lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
      <div className="grid-pattern" style={{ padding: "80px 0" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: COLORS.primary, fontWeight: 700, marginBottom: "10px" }}>HOW IT WORKS</div>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 10px" }}>3-Step Verification Process</h2>
            <p style={{ color: COLORS.muted, fontSize: "14px" }}>Knowledge in three simple steps, not weeks.</p>
          </FadeUp>
          <div className="row align-items-center g-5">
            <div className="col-md-5">
              <FadeUp>
                <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(99,102,241,0.25)", position: "relative" }}>
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" alt="process" style={{ width: "100%", display: "block", filter: "brightness(0.6) saturate(0.6)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(99,102,241,0.3),transparent)" }} />
                  <div style={{ position: "absolute", bottom: 20, left: 20, background: "rgba(15,23,42,0.88)", borderRadius: 12, padding: "14px 18px", border: "1px solid rgba(99,102,241,0.3)" }}>
                    <div style={{ fontSize: "11px", color: COLORS.secondary, fontWeight: 700, letterSpacing: "0.1em" }}>SHNOOR 3-STEP PROCESS</div>
                    <div style={{ fontSize: "13px", color: "#E2E8F0", marginTop: 4 }}>Fast. Secure. Accurate.</div>
                  </div>
                </div>
              </FadeUp>
            </div>
            <div className="col-md-7">
              {steps.map((s, i) => (
                <FadeUp key={i} delay={i * 0.12}>
                  <div className="bv-step">
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                      <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>{s.icon}</div>
                      <div>
                        <h5 style={{ margin: "0 0 6px", fontSize: "15px", fontWeight: 700, color: COLORS.text }}>{s.title}</h5>
                        <p style={{ margin: 0, fontSize: "13px", color: COLORS.muted, lineHeight: 1.7 }}>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <FadeUp>
          <div style={{ background: COLORS.surface, borderRadius: "24px", border: "1px solid rgba(99,102,241,0.2)", overflow: "hidden" }}>
            <div className="row g-0 align-items-center">
              <div className="col-md-6" style={{ padding: "48px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: COLORS.secondary, fontWeight: 700, marginBottom: "14px" }}>FUTURE-READY</div>
                <h2 style={{ fontSize: "clamp(22px,3.5vw,34px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 16px", lineHeight: 1.25 }}>Compliance-First, Future-Ready Solutions</h2>
                <p style={{ fontSize: "14px", color: COLORS.muted, lineHeight: 1.8, margin: "0 0 28px" }}>Protect your reputation and stay ahead of regulatory requirements with our expert team and advanced AI technology, ensuring full legal compliance and data privacy.</p>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div className="stat-pill">
                    <div style={{ fontSize: "28px", fontWeight: 700, background: "linear-gradient(135deg,#6366F1,#22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>150+</div>
                    <div style={{ fontSize: "11px", color: COLORS.muted, letterSpacing: "0.08em" }}>PROVEN RESULTS</div>
                  </div>
                  <div className="stat-pill">
                    <div style={{ fontSize: "28px", fontWeight: 700, background: "linear-gradient(135deg,#22C55E,#6366F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>15</div>
                    <div style={{ fontSize: "11px", color: COLORS.muted, letterSpacing: "0.08em" }}>TRUSTED EXPERTS</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" style={{ position: "relative", minHeight: "360px" }}>
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=80" alt="compliance" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55) saturate(0.6)", position: "absolute", inset: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(99,102,241,0.25),transparent)" }} />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
      <div style={{ background: "linear-gradient(180deg,#0A1120,#0F172A)", padding: "80px 0" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "52px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: COLORS.primary, fontWeight: 700, marginBottom: "10px" }}>GOT QUESTIONS?</div>
            <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 8px" }}>Background Verification FAQs</h2>
            <p style={{ color: COLORS.muted, fontSize: "14px" }}>Ensure safe hiring with our trusted background checks.</p>
          </FadeUp>
          <div className="row g-3">
            {faqs.map((faq, i) => (
              <div className="col-md-6" key={i}>
                <FadeUp delay={i * 0.06}>
                  <div className="bv-faq" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ borderColor: openFaq === i ? "rgba(99,102,241,0.5)" : COLORS.border }}>
                    <div style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h6 style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: openFaq === i ? "#A5B4FC" : COLORS.text }}>{faq.q}</h6>
                      <span style={{ color: COLORS.primary, fontSize: "18px", transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                    </div>
                    {openFaq === i && (
                      <div style={{ padding: "0 22px 18px", fontSize: "13px", color: COLORS.muted, lineHeight: 1.75 }}>{faq.a}</div>
                    )}
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </div>
<div className="container py-5">
  <style>{`
    .bv-review {
      background: #1E293B;
      border-radius: 16px;
      padding: 24px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid rgba(99,102,241,0.15);
      transition: 0.3s;
    }

    .bv-review:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }

    .review-text {
      font-size: 14px;
      color: #94A3B8;
      line-height: 1.8;
      margin-bottom: 20px;
      font-style: italic;

      display: -webkit-box;
      -webkit-line-clamp: 4;   
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .review-avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(99,102,241,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 700;
      color: #6366F1;
    }

    .review-role {
      font-size: 13px;
      font-weight: 600;
      color: #E2E8F0;
    }

    .review-loc {
      font-size: 11px;
      color: #94A3B8;
    }
  `}</style>
  <FadeUp style={{ textAlign: "center", marginBottom: "44px" }}>
    <div
      style={{
        fontSize: "11px",
        letterSpacing: "0.15em",
        color: COLORS.secondary,
        fontWeight: 700,
        marginBottom: "10px",
      }}
    >
      CLIENT VOICES
    </div>

    <h2
      style={{
        fontSize: "clamp(24px,4vw,34px)",
        fontWeight: 700,
        color: "#F1F5F9",
        margin: 0,
      }}
    >
      Trusted Insights
    </h2>
  </FadeUp>
  <div className="row g-4 justify-content-center align-items-stretch">
    {reviews.map((r, i) => (
      <div className="col-md-5 d-flex" key={i}>
        <FadeUp delay={i * 0.1} style={{ width: "100%" }}>
          <div className="bv-review">
            <div>
              <div style={{ color: "#F59E0B", fontSize: "16px", marginBottom: "14px" }}>
                {"★".repeat(r.stars)}
              </div>

              <p className="review-text">"{r.text}"</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className="review-avatar">
                {r.role[0]}
              </div>

              <div>
                <div className="review-role">{r.role}</div>
                <div className="review-loc">{r.loc}</div>
              </div>
            </div>

          </div>
        </FadeUp>
      </div>
    ))}
  </div>
</div>
<Footer/>
    </div>
  );
}
