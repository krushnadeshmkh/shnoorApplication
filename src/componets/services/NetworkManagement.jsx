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
useEffect(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) setInView(true);
  }, { threshold });

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

const nmServices = [
  {
    title: "Security Management",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
    desc: "Protects your network from threats with proactive measures and rapid response to security.",
    icon: "🔐",
    tag: "Security",
  },
  {
    title: "Network Monitoring",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    desc: "Constantly tracks your network health to catch issues before they affect your business operations.",
    icon: "📡",
    tag: "Monitoring",
  },
];

const whyUs = [
  { icon: "👨‍💻", title: "Expert Support", desc: "Get help from knowledgeable professionals anytime you need it, 24/7 around the clock." },
  { icon: "⏰", title: "Reliable Uptime", desc: "Keep your systems running smoothly without interruptions and costly downtime." },
  { icon: "💰", title: "Cost Efficiency", desc: "Reduce expenses with smart network resource management and proactive maintenance." },
];

const faqs = [
  { q: "What is network management?", a: "It involves monitoring and maintaining computer networks to ensure smooth operation and prevent disruptions." },
  { q: "Why is it important?", a: "Effective network management prevents downtime and improves overall business productivity and security posture." },
  { q: "What services do you offer?", a: "We provide monitoring, configuration, performance, security, and fault management tailored to your needs." },
  { q: "Which tools do you use?", a: "We use industry-standard tools to ensure reliable and efficient network management across all environments." },
  { q: "Who benefits most?", a: "Businesses across industries that rely on stable and secure network infrastructure to deliver their services." },
  { q: "Why choose your solutions?", a: "Our expertise and personalized approach ensure your network runs smoothly, securely, and optimally at all times." },
];

export default function NetworkManagement() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Ubuntu', sans-serif", overflowX: "hidden" }}>
        <Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
        * { font-family:'Ubuntu',sans-serif; box-sizing:border-box; }
        .nm-svc-card { background:${C.surface}; border-radius:18px; overflow:hidden; border:1px solid ${C.border}; transition:all 0.35s; height:100%; }
        .nm-svc-card:hover { transform:translateY(-8px); box-shadow:0 22px 55px rgba(99,102,241,0.22); border-color:rgba(99,102,241,0.5); }
        .nm-why-card { background:${C.surface}; border-radius:14px; padding:24px; border:1px solid ${C.border}; border-top:3px solid ${C.primary}; transition:all 0.3s; height:100%; }
        .nm-why-card:hover { transform:translateY(-6px); box-shadow:0 14px 40px rgba(99,102,241,0.18); border-top-color:${C.secondary}; }
        .nm-faq { background:${C.surface}; border-radius:12px; border:1px solid ${C.border}; margin-bottom:10px; cursor:pointer; transition:border-color 0.3s; }
        .nm-faq:hover { border-color:rgba(99,102,241,0.4); }
        .nm-btn { background:linear-gradient(135deg,${C.primary},#4F46E5); color:#fff; border:none; padding:13px 30px; border-radius:50px; font-weight:700; font-size:13px; letter-spacing:0.08em; cursor:pointer; transition:all 0.3s; box-shadow:0 0 24px rgba(99,102,241,0.35); }
        .nm-btn:hover { transform:translateY(-2px); box-shadow:0 10px 36px rgba(99,102,241,0.55); }
        .gp { width:8px; height:8px; border-radius:50%; background:${C.secondary}; display:inline-block; margin-right:8px; animation:gp 2s infinite; box-shadow:0 0 10px ${C.secondary}; }
        @keyframes gp { 0%,100%{opacity:1}50%{opacity:0.35} }
        .network-grid { background-image:radial-gradient(rgba(99,102,241,0.12) 1px,transparent 1px); background-size:30px 30px; }
        .status-dot { width:8px; height:8px; border-radius:50%; background:${C.secondary}; box-shadow:0 0 8px ${C.secondary}; display:inline-block; animation:gp 2s infinite; }
      `}</style>
      <div style={{ position: "relative", minHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden", padding: "80px 20px" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80') center/cover", filter: "brightness(0.18) saturate(0.5)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%,rgba(99,102,241,0.15) 0%,transparent 70%)" }} />
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }} xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="30%" x2="100%" y2="70%" stroke="#6366F1" strokeWidth="1" />
          <line x1="20%" y1="0" x2="80%" y2="100%" stroke="#22C55E" strokeWidth="1" />
          <line x1="0" y1="70%" x2="100%" y2="30%" stroke="#6366F1" strokeWidth="1" />
          {[...Array(6)].map((_, i) => (
            <circle key={i} cx={`${15 + i * 14}%`} cy={`${20 + (i % 3) * 25}%`} r="3" fill="#6366F1" />
          ))}
        </svg>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: `linear-gradient(transparent,${C.bg})` }} />
        <div style={{ position: "relative", zIndex: 2 }}>

          <h1 style={{ fontSize: "clamp(30px,6vw,58px)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.15, color: "#F1F5F9" }}>
            Network{" "}
            <span style={{ background: "linear-gradient(135deg,#6366F1,#A5B4FC,#22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Management</span>
          </h1>
          <p style={{ fontSize: "15px", color: "#94A3B8", maxWidth: "520px", margin: "0 auto 32px", lineHeight: 1.8, fontWeight: 300 }}>
            Keeping your business connected, secure, and running smoothly with enterprise-grade network solutions.
          </p>
        </div>
      </div>
      <FadeUp>
        <div className="container" style={{ marginTop: "-20px", marginBottom: "40px" }}>
          <div style={{ background: C.surface, borderRadius: "16px", border: "1px solid rgba(99,102,241,0.2)", padding: "18px 28px", display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            {[
              { label: "Network Uptime", val: "99.9%" },
              { label: "Active Nodes", val: "1,200+" },
              { label: "Threats Blocked Today", val: "3,847" },
              { label: "Response Time", val: "<15min" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: 700, background: "linear-gradient(135deg,#6366F1,#22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.val}</div>
                <div style={{ fontSize: "11px", color: C.muted, letterSpacing: "0.08em" }}>{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
      <div className="container" style={{ paddingBottom: "80px" }}>
        <FadeUp style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.primary, fontWeight: 700, marginBottom: "10px" }}>WHAT WE OFFER</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 10px" }}>Our Services</h2>
          <p style={{ color: C.muted, fontSize: "14px" }}>Comprehensive network management tailored to keep your systems running smoothly.</p>
        </FadeUp>
        <div className="row g-4">
          {nmServices.map((s, i) => (
            <div className="col-md-6" key={i}>
              <FadeUp delay={i * 0.12}>
                <div className="nm-svc-card">
                  <div style={{ padding: "24px 24px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>{s.icon}</div>
                      <h5 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: C.text }}>{s.title}</h5>
                      <span style={{ marginLeft: "auto", background: "rgba(99,102,241,0.15)", borderRadius: "50px", padding: "3px 12px", fontSize: "10px", color: "#A5B4FC", fontWeight: 700, letterSpacing: "0.08em" }}>{s.tag}</span>
                    </div>
                    <p style={{ fontSize: "13px", color: C.muted, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                  </div>
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55) saturate(0.6)", transition: "transform 0.5s" }} />
                  </div>
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
      <div className="network-grid" style={{ padding: "80px 0", background: "linear-gradient(180deg,#0A1120,#0F172A)" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "52px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.secondary, fontWeight: 700, marginBottom: "10px" }}>ADVANTAGES</div>
            <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 10px" }}>Why Choose Our Network Management</h2>
            <p style={{ color: C.muted, fontSize: "14px" }}>Our network management saves time and cuts costs effectively.</p>
          </FadeUp>
          <div className="row align-items-center g-5">
            <div className="col-md-5">
              <FadeUp>
                <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(99,102,241,0.25)", position: "relative" }}>
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" alt="network" style={{ width: "100%", display: "block", filter: "brightness(0.5) saturate(0.5)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(99,102,241,0.25),transparent)" }} />
                  <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(15,23,42,0.9)", borderRadius: "10px", padding: "10px 16px", border: "1px solid rgba(99,102,241,0.3)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: C.text }}>
                      <span  />
                      All Systems Operational
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
            <div className="col-md-7">
              <div className="row g-3">
                {whyUs.map((w, i) => (
                  <div className="col-12" key={i}>
                    <FadeUp delay={i * 0.1}>
                      <div className="nm-why-card">
                        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                          <div style={{ width: "44px", height: "44px", borderRadius: "13px", background: "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{w.icon}</div>
                          <div>
                            <h5 style={{ margin: "0 0 6px", fontSize: "15px", fontWeight: 700, color: C.text }}>{w.title}</h5>
                            <p style={{ margin: 0, fontSize: "13px", color: C.muted, lineHeight: 1.75 }}>{w.desc}</p>
                          </div>
                        </div>
                      </div>
                    </FadeUp>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ padding: "80px 24px" }}>
        <FadeUp style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.primary, fontWeight: 700, marginBottom: "10px" }}>COMMON QUESTIONS</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, color: "#F1F5F9", margin: 0 }}>FAQs</h2>
        </FadeUp>
        <div className="row g-3">
          {faqs.map((faq, i) => (
            <div className="col-md-6" key={i}>
              <FadeUp delay={i * 0.06}>
                <div className="nm-faq" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ borderColor: openFaq === i ? "rgba(99,102,241,0.5)" : C.border }}>
                  <div style={{ padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h6 style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: openFaq === i ? "#A5B4FC" : C.text, paddingRight: "12px" }}>{faq.q}</h6>
                    <span style={{ color: C.primary, fontSize: "18px", transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0 }}>+</span>
                  </div>
                  {openFaq === i && (
                    <div style={{ padding: "0 22px 18px", fontSize: "13px", color: C.muted, lineHeight: 1.75 }}>{faq.a}</div>
                  )}
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: C.surface, borderTop: "1px solid rgba(99,102,241,0.14)", padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%,rgba(99,102,241,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
        <FadeUp>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: C.secondary, fontWeight: 700, marginBottom: "14px" }}>LET'S CONNECT</div>
          <h2 style={{ fontSize: "clamp(24px,4vw,42px)", fontWeight: 700, color: "#F1F5F9", margin: "0 0 16px" }}>
            Keep Your Network{" "}
            <span style={{ color: C.primary }}>Running Smoothly</span>
          </h2>
          <p style={{ fontSize: "15px", color: C.muted, maxWidth: "460px", margin: "0 auto 32px", lineHeight: 1.8 }}>
            Talk to our network specialists and discover how SHNOOR International can secure and optimize your infrastructure.
          </p>
          <button className="nm-btn" style={{ fontSize: "14px", padding: "14px 40px" }}>CONTACT US TODAY</button>
        </FadeUp>
      </div>
      <Footer/>
    </div>
  );
}
