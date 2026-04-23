
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');

  :root {
    --primary: #6366F1;
    --primary-light: #818CF8;
    --primary-dark: #4F46E5;
    --secondary: #22C55E;
    --secondary-dark: #16A34A;
    --bg: #0F172A;
    --surface: #1E293B;
    --surface2: #253348;
    --text: #E2E8F0;
    --text-muted: #94A3B8;
    --border: rgba(99,102,241,0.18);
  }

  .shn-home * { box-sizing: border-box; margin: 0; padding: 0; }
  .shn-home { font-family: 'Ubuntu', sans-serif; background: var(--bg); color: var(--text); overflow-x: hidden; }

  .shn-hero {
    position: relative;
    min-height: 92vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--bg);
  }
  .shn-hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background:
      radial-gradient(ellipse 80% 60% at 60% 30%, rgba(99,102,241,0.18) 0%, transparent 70%),
      radial-gradient(ellipse 50% 40% at 20% 80%, rgba(34,197,94,0.10) 0%, transparent 60%);
  }

  .shn-hero-content {
    position: relative; z-index: 1;
    text-align: center; max-width: 800px; padding: 0 24px;
    animation: shn-fadeup 0.9s ease both;
  }
  .shn-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(99,102,241,0.13); border: 1px solid var(--border);
    color: var(--primary-light); border-radius: 999px;
    padding: 6px 18px; font-size: 13px; font-weight: 500;
    margin-bottom: 28px; letter-spacing: 0.04em;
  }
  .shn-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--secondary); }
  .shn-hero h1 {
    font-size: clamp(2.6rem, 6vw, 4.2rem); font-weight: 700;
    line-height: 1.12; margin-bottom: 22px; letter-spacing: -0.02em;
  }
  .shn-hero h1 span { color: var(--primary-light); }
  .shn-hero h1 em { color: var(--secondary); font-style: normal; }
  .shn-hero-sub {
    font-size: clamp(1rem, 2vw, 1.18rem); color: var(--text-muted);
    line-height: 1.7; max-width: 600px; margin: 0 auto 40px;
  }
  .shn-btn-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .shn-btn-primary {
    background: var(--primary); color: #fff;
    border: none; border-radius: 10px;
    padding: 14px 34px; font-size: 15px; font-weight: 600;
    cursor: pointer; transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    font-family: 'Ubuntu', sans-serif;
    box-shadow: 0 4px 24px rgba(99,102,241,0.3);
  }
  .shn-btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(99,102,241,0.45); }
  .shn-btn-secondary {
    background: transparent; color: var(--text);
    border: 1.5px solid var(--border); border-radius: 10px;
    padding: 14px 34px; font-size: 15px; font-weight: 500;
    cursor: pointer; transition: border-color 0.2s, background 0.2s, transform 0.15s;
    font-family: 'Ubuntu', sans-serif;
  }
  .shn-btn-secondary:hover { border-color: var(--primary); background: rgba(99,102,241,0.07); transform: translateY(-2px); }
  .shn-stats {
    background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
    padding: 32px 24px;
  }
  .shn-stats-inner {
    max-width: 900px; margin: 0 auto;
    display: flex; justify-content: space-around; flex-wrap: wrap; gap: 24px;
  }
  .shn-stat { text-align: center; }
  .shn-stat-num { font-size: 2rem; font-weight: 700; color: var(--primary-light); }
  .shn-stat-label { font-size: 13px; color: var(--text-muted); margin-top: 4px; }
  .shn-section { padding: 90px 24px; max-width: 1100px; margin: 0 auto; }
  .shn-section-label {
    display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: 0.12em;
    color: var(--secondary); text-transform: uppercase; margin-bottom: 14px;
  }
  .shn-section-title {
    font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 700;
    line-height: 1.2; margin-bottom: 16px; letter-spacing: -0.01em;
  }
  .shn-section-sub { color: var(--text-muted); font-size: 1.05rem; line-height: 1.7; max-width: 580px; }
  .shn-services-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 22px; margin-top: 52px;
  }
  .shn-card {
    background: var(--surface); border: 1px solid var(--border); border-radius: 16px;
    padding: 32px 28px; transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    cursor: default;
  }
  .shn-card:hover { border-color: var(--primary); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(99,102,241,0.15); }
  .shn-card-icon {
    width: 52px; height: 52px; border-radius: 12px;
    background: rgba(99,102,241,0.13); display: flex; align-items: center; justify-content: center;
    font-size: 24px; margin-bottom: 20px;
    border: 1px solid rgba(99,102,241,0.2);
  }
  .shn-card h3 { font-size: 1.12rem; font-weight: 600; margin-bottom: 10px; }
  .shn-card p { color: var(--text-muted); font-size: 0.93rem; line-height: 1.65; }
  .shn-card-tag {
    display: inline-block; margin-top: 16px;
    font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
    color: var(--secondary); text-transform: uppercase;
    background: rgba(34,197,94,0.09); border-radius: 6px; padding: 3px 10px;
  }

  .shn-markets-wrap { display: flex; gap: 48px; align-items: flex-start; flex-wrap: wrap; margin-top: 52px; }
  .shn-markets-left { flex: 1; min-width: 260px; }
  .shn-markets-right { flex: 1; min-width: 260px; }
  .shn-market-item {
    display: flex; align-items: center; gap: 14px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 12px; padding: 16px 20px; margin-bottom: 14px;
    transition: border-color 0.2s;
  }
  .shn-market-item:hover { border-color: var(--primary); }
  .shn-market-flag { font-size: 24px; }
  .shn-market-name { font-weight: 600; font-size: 0.95rem; }
  .shn-market-desc { font-size: 0.82rem; color: var(--text-muted); margin-top: 2px; }
  .shn-markets-visual {
    background: var(--surface); border: 1px solid var(--border); border-radius: 16px;
    padding: 32px; text-align: center;
  }
  .shn-globe { font-size: 72px; display: block; margin-bottom: 16px; }
  .shn-markets-visual p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }

  .shn-process-bg { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .shn-process-steps {
    display: flex; gap: 0; flex-wrap: wrap; margin-top: 52px; position: relative;
  }
  .shn-step {
    flex: 1; min-width: 180px; text-align: center; padding: 0 16px; position: relative;
  }
  .shn-step-num {
    width: 48px; height: 48px; border-radius: 50%;
    background: var(--primary); color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; font-weight: 700; margin: 0 auto 16px;
    position: relative; z-index: 1;
    box-shadow: 0 0 0 6px rgba(99,102,241,0.15);
  }
  .shn-step-connector {
    position: absolute; top: 24px; left: calc(50% + 24px);
    width: calc(100% - 48px); height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--border));
  }
  .shn-step:last-child .shn-step-connector { display: none; }
  .shn-step h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 8px; }
  .shn-step p { font-size: 0.83rem; color: var(--text-muted); line-height: 1.55; }
  .shn-cta {
    background: linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(34,197,94,0.08) 100%);
    border: 1px solid var(--border); border-radius: 20px;
    padding: 64px 40px; text-align: center; margin: 80px 24px;
    max-width: 1100px; margin-left: auto; margin-right: auto;
  }
  .shn-cta h2 { font-size: clamp(1.6rem, 3.5vw, 2.2rem); font-weight: 700; margin-bottom: 14px; }
  .shn-cta p { color: var(--text-muted); font-size: 1rem; margin-bottom: 32px; }

  @keyframes shn-fadeup {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 640px) {
    .shn-process-steps { flex-direction: column; align-items: center; }
    .shn-step-connector { display: none; }
    .shn-step { margin-bottom: 28px; }
  }
`;

const services = [
  {
    icon: "📦",
    title: "Product Sourcing & Procurement",
    desc: "With our deep understanding of global markets and complex supply chains, we offer complete management of your procurement process — from identifying suppliers to coordinating logistics.",
    tag: "Core Service",
  },
  {
    icon: "🚢",
    title: "International Shipping & Logistics",
    desc: "We make global trade simple by delivering reliable, efficient, and cost-effective international shipping solutions. Your goods reach their destination safely, on time, and in compliance.",
    tag: "Core Service",
  },
  {
    icon: "✅",
    title: "Quality Control & Compliance",
    desc: "Every product we source, export, or import meets international standards. We work with certified inspection agencies and follow stringent testing procedures for every shipment.",
    tag: "Core Service",
  },
];

const markets = [
  { flag: "🇮🇳", name: "India", desc: "Primary sourcing hub" },
  { flag: "🇦🇪", name: "United Arab Emirates", desc: "Key export destination" },
  { flag: "🇧🇭", name: "Bahrain", desc: "Gulf trade corridor" },
  { flag: "🇶🇦", name: "Qatar", desc: "Premium market access" },
  { flag: "🇴🇲", name: "Oman", desc: "Strategic GCC partner" },
  { flag: "🇲🇾", name: "Malaysia", desc: "Southeast Asia gateway" },
];


export default function ExportManagement() {
  return (
    <>
      <style>{styles}</style>
      <div className="shn-home">
       <Navbar/>
        <section className="shn-hero">
          <div className="shn-hero-bg" />
          <div className="shn-hero-grid" />
          <div className="shn-hero-content">
            <h1>
              Connecting <span>Markets.</span>
              <br />
              Driving <em>Growth.</em>
            </h1>
            <p className="shn-hero-sub">
              We bridge markets by delivering high-quality products from India to global
              destinations including the UAE, Bahrain, Qatar, Oman, and Malaysia — built on
              trust, transparency, and timely delivery.
            </p>
          </div>
        </section>
        <div className="shn-stats">
          <div className="shn-stats-inner">
            {[
              { num: "6+", label: "Markets Served" },
              { num: "500+", label: "Shipments Delivered" },
              { num: "100%", label: "Compliance Rate" },
              { num: "5★", label: "Client Satisfaction" },
            ].map((s) => (
              <div className="shn-stat" key={s.label}>
                <div className="shn-stat-num">{s.num}</div>
                <div className="shn-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="shn-section">
          <span className="shn-section-label">What We Do</span>
          <h2 className="shn-section-title">
            End-to-end trade solutions,<br />built for global scale
          </h2>
          <p className="shn-section-sub">
            We specialize in sourcing, packaging, and shipping a wide range of products
            while complying with international trade standards.
          </p>
          <div className="shn-services-grid">
            {services.map((s) => (
              <div className="shn-card" key={s.title}>
                <div className="shn-card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="shn-card-tag">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="shn-section" style={{ paddingTop: 0 }}>
          <span className="shn-section-label">Our Reach</span>
          <h2 className="shn-section-title">From India to the world,<br />Seamlessly</h2>
          <p className="shn-section-sub">
            Our import and export services connect India's finest suppliers with growing
            markets across Asia and the Middle East.
          </p>
          <div className="shn-markets-wrap">
            <div className="shn-markets-left">
              {markets.map((m) => (
                <div className="shn-market-item" key={m.name}>
                  <span className="shn-market-flag">{m.flag}</span>
                  <div>
                    <div className="shn-market-name">{m.name}</div>
                    <div className="shn-market-desc">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="shn-markets-right">
              <div className="shn-markets-visual">
                <span className="shn-globe">🌏</span>
                <h3 style={{ marginBottom: 12 }}>Global Trade Network</h3>
                <p>
                  Whether you're looking to export premium products from India or import
                  goods into growing markets, SHNOOR International is your trusted partner
                  in global trade.
                </p>
                <div
                  style={{
                    marginTop: 24,
                    padding: "12px 16px",
                    background: "rgba(99,102,241,0.09)",
                    borderRadius: 10,
                    border: "1px solid rgba(99,102,241,0.2)",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    textAlign: "left",
                  }}
                >
                  <strong style={{ color: "var(--text)", display: "block", marginBottom: 8 }}>
                    Trade Solutions Include:
                  </strong>
                  {[
                    "Product Sourcing & Procurement",
                    "International Shipping & Logistics",
                    "Quality Control & Compliance",
                    "Market Expansion Support",
                    "Customized Export Strategies",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}
                    >
                      <span style={{ color: "var(--secondary)", fontSize: 10 }}>●</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
