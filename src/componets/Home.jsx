import React, { useEffect } from "react";
import heroBg from "../assets/skyline.webp";
import aboutImg from "../assets/about.avif";
import trust from "../assets/trust.jpg";
import imp from "../assets/import.jpg";
import sap from "../assets/sap.webp";
import user from "../assets/user.webp";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

const Home = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

        :root {
          --primary: #6366F1;
          --primary-light: #818CF8;
          --primary-dim: rgba(99,102,241,0.15);
          --green: #22C55E;
          --green-dim: rgba(34,197,94,0.15);
          --bg: #0F172A;
          --surface: #1E293B;
          --surface2: #263348;
          --border: rgba(255,255,255,0.07);
          --border-h: rgba(99,102,241,0.4);
          --text: #E2E8F0;
          --text-muted: #94A3B8;
          --text-dim: #475569;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--bg); color: var(--text); font-family: 'Plus Jakarta Sans', sans-serif; }

        .reveal {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.d1 { transition-delay: 0.1s; }
        .reveal.d2 { transition-delay: 0.2s; }
        .reveal.d3 { transition-delay: 0.3s; }
        .reveal.in { opacity: 1; transform: translateY(0); }

        .hero {
          position: relative; min-height: 92vh;
          display: flex; align-items: center;
          overflow: hidden; padding: 120px 5% 80px;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center; opacity: 0.08;
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events: none;
        }
        .glow-1 {
          position: absolute; top: -120px; right: -80px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .glow-2 {
          position: absolute; bottom: -100px; left: 10%;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        @media (max-width: 900px) { .hero-inner { grid-template-columns: 1fr; } }

        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--primary-dim); border: 1px solid rgba(99,102,241,0.3);
          border-radius: 100px; padding: 6px 16px 6px 8px;
          font-size: 12px; font-weight: 600; color: var(--primary-light);
          margin-bottom: 28px; width: fit-content;
        }
        .badge-dot {
          width: 6px; height: 6px; background: var(--green);
          border-radius: 50%; animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        .hero-title {
          font-family: 'Syne', sans-serif; font-size: clamp(36px,5.5vw,70px);
          font-weight: 800; line-height: 1.05; color: var(--text); margin-bottom: 24px;
        }
        .c-indigo { color: var(--primary-light); }
        .c-green { color: var(--green); }
        .hero-sub {
          font-size: 15.5px; color: var(--text-muted);
          line-height: 1.78; margin-bottom: 40px; max-width: 460px;
        }
        .hero-btns { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; background: var(--primary); color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 600;
          border: none; border-radius: 8px; cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(99,102,241,0.35);
        }
        .btn-primary:hover { background: var(--primary-light); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(99,102,241,0.5); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 24px; background: transparent; color: var(--text-muted);
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 500;
          border: 1px solid var(--border); border-radius: 8px;
          cursor: pointer; text-decoration: none; transition: border-color 0.2s, color 0.2s;
        }
        .btn-ghost:hover { border-color: var(--border-h); color: var(--text); }

        .card-stack { display: grid; gap: 12px; }
        .hcard {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 12px; padding: 18px 22px;
          display: flex; align-items: center; gap: 16px;
          transition: border-color 0.3s;
        }
        .hcard:hover { border-color: var(--border-h); }
        .hcard-icon {
          width: 44px; height: 44px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }
        .bg-indigo { background: var(--primary-dim); }
        .bg-green  { background: var(--green-dim); }
        .hcard-label { font-size: 11px; color: var(--text-dim); font-weight: 500; margin-bottom: 3px; }
        .hcard-val { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; color: var(--text); }
        .pill {
          margin-left: auto; font-size: 11px; font-weight: 700;
          padding: 4px 10px; border-radius: 100px;
        }
        .pill-green { background: var(--green-dim); color: var(--green); }
        .pill-indigo { background: var(--primary-dim); color: var(--primary-light); }
        .mini-bars { margin-left: auto; display: flex; gap: 3px; align-items: flex-end; height: 26px; }
        .mini-bar { width: 5px; background: var(--primary); border-radius: 2px; opacity: 0.5; }
        .mini-bar:last-child { opacity: 1; }


        .stats-band { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .stats-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 5%;
          display: grid; grid-template-columns: repeat(4,1fr);
        }
        @media (max-width: 700px) { .stats-inner { grid-template-columns: repeat(2,1fr); } }
        .stat-cell {
          padding: 36px 20px; border-right: 1px solid var(--border); text-align: center;
        }
        .stat-cell:last-child { border-right: none; }
        .stat-num {
          font-family: 'Syne', sans-serif; font-size: 38px; font-weight: 800;
          background: linear-gradient(135deg, var(--primary-light), var(--green));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; margin-bottom: 8px;
        }
        .stat-lbl { font-size: 11px; font-weight: 600; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.5px; }

        .sec { padding: 100px 5%; }
        .sec-inner { max-width: 1280px; margin: 0 auto; }
        .tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--primary-light); margin-bottom: 14px;
        }
        .tag::before { content:''; display:inline-block; width:18px; height:2px; background:var(--primary); border-radius:2px; }
        .sec-title {
          font-family: 'Syne', sans-serif; font-size: clamp(28px,3.5vw,44px);
          font-weight: 800; color: var(--text); line-height: 1.15; margin-bottom: 14px;
        }
        .sec-title span { color: var(--primary-light); }
        .sec-sub { font-size: 15px; color: var(--text-muted); line-height: 1.78; max-width: 540px; }
        .divider { width: 36px; height: 2px; background: linear-gradient(90deg,var(--primary),var(--green)); border-radius:2px; margin: 22px 0; }

        .about-grid { display: grid; grid-template-columns:1fr 1fr; gap:72px; align-items:center; }
        @media (max-width:900px) { .about-grid { grid-template-columns:1fr; gap:48px; } }
        .img-wrap { position: relative; }
        .img-wrap::before {
          content:''; position:absolute; inset:-1px; border-radius:16px;
          background: linear-gradient(135deg,rgba(99,102,241,0.45),rgba(34,197,94,0.2),transparent 60%); z-index:0;
        }
        .about-img { position:relative; z-index:1; width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:14px; display:block; }
        .img-badges {
          position:absolute; bottom:-18px; right:-18px; z-index:2;
          background:var(--surface); border:1px solid var(--border);
          border-radius:12px; padding:14px 20px; display:flex; gap:20px;
        }
        .img-badge { text-align:center; }
        .img-badge-num { font-family:'Syne',sans-serif; font-size:20px; font-weight:800; color:var(--primary-light); }
        .img-badge-lbl { font-size:10px; color:var(--text-dim); text-transform:uppercase; letter-spacing:.5px; }
        .about-text p { font-size:14.5px; color:var(--text-muted); line-height:1.85; margin-bottom:14px; }
        .marquee-band { overflow:hidden; background:var(--surface); border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:14px 0; }
        .marquee-track { display:inline-flex; white-space:nowrap; animation:scroll 32s linear infinite; }
        .marquee-item {
          font-family:'Syne',sans-serif; font-size:12px; font-weight:700;
          color:var(--text-dim); padding:0 32px;
          display:inline-flex; align-items:center; gap:32px; letter-spacing:.5px; text-transform:uppercase;
        }
        .mdot { width:4px; height:4px; background:var(--primary); border-radius:50%; }
        @keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        .svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        @media (max-width:900px) { .svc-grid { grid-template-columns:1fr; } }
        @media (min-width:600px) and (max-width:900px) { .svc-grid { grid-template-columns:repeat(2,1fr); } }
        .svc-card {
          background:var(--surface); border:1px solid var(--border);
          border-radius:14px; padding:32px 28px;
          transition:border-color .3s,transform .3s,box-shadow .3s;
          cursor:default; position:relative; overflow:hidden;
        }
        .svc-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,var(--primary),var(--green));
          transform:scaleX(0); transition:transform .4s; transform-origin:left;
        }
        .svc-card:hover { border-color:rgba(99,102,241,.35); transform:translateY(-6px); box-shadow:0 20px 40px rgba(0,0,0,.35); }
        .svc-card:hover::before { transform:scaleX(1); }
        .svc-icon { width:48px; height:48px; border-radius:10px; background:var(--primary-dim); display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:20px; }
        .svc-title { font-family:'Syne',sans-serif; font-size:17px; font-weight:700; color:var(--text); margin-bottom:10px; }
        .svc-desc { font-size:13.5px; color:var(--text-muted); line-height:1.75; }
        .svc-num { position:absolute; bottom:20px; right:22px; font-family:'Syne',sans-serif; font-size:40px; font-weight:800; color:rgba(99,102,241,.06); line-height:1; user-select:none; }
        .insights-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        @media (max-width:900px) { .insights-grid { grid-template-columns:1fr; } }
        .ic {
          background:var(--surface); border:1px solid var(--border);
          border-radius:14px; overflow:hidden;
          transition:border-color .3s,transform .3s;
        }
        .ic:hover { border-color:rgba(99,102,241,.35); transform:translateY(-6px); }
        .ic:hover .ic-img { transform:scale(1.06); }
        .ic-img-wrap { overflow:hidden; height:190px; }
        .ic-img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s; }
        .ic-body { padding:22px; }
        .ic-tag { font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--primary-light); background:var(--primary-dim); padding:3px 10px; border-radius:100px; display:inline-block; margin-bottom:12px; }
        .ic-title { font-family:'Syne',sans-serif; font-size:16px; font-weight:700; color:var(--text); line-height:1.35; margin-bottom:10px; }
        .ic-desc { font-size:13px; color:var(--text-muted); line-height:1.7; margin-bottom:16px; }
        .ic-meta { font-size:11px; color:var(--text-dim); display:flex; align-items:center; gap:6px; }
        .ic-meta::before { content:''; display:inline-block; width:12px; height:1px; background:var(--text-dim); }
        .testi { background:var(--surface); border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:100px 5%; }
        .testi-inner { max-width:780px; margin:0 auto; text-align:center; }
        .testi-stars { color:var(--green); font-size:20px; letter-spacing:4px; margin-bottom:30px; }
        .testi-q { font-family:'Syne',sans-serif; font-size:clamp(18px,2.5vw,25px); font-weight:400; color:var(--text); line-height:1.65; margin-bottom:40px; }
        .testi-q em { font-style:italic; color:var(--primary-light); }
        .testi-avatar { width:56px; height:56px; border-radius:50%; object-fit:cover; border:2px solid var(--primary); margin-bottom:14px; box-shadow:0 0 0 4px var(--primary-dim); }
        .testi-name { font-weight:700; font-size:15px; color:var(--text); margin-bottom:4px; }
        .testi-role { font-size:12px; color:var(--text-dim); }
        .cta-wrap { padding: 0 5% 80px; }
        .cta-banner {
          border-radius:20px;
          background:linear-gradient(135deg,#1e1b4b 0%,#1e293b 50%,#14201a 100%);
          border:1px solid rgba(99,102,241,.25);
          padding:64px 56px;
          display:flex; align-items:center; justify-content:space-between; gap:40px;
          position:relative; overflow:hidden;
        }
        .cta-banner::before {
          content:''; position:absolute; top:-80px; right:-80px;
          width:320px; height:320px;
          background:radial-gradient(circle,rgba(99,102,241,.22) 0%,transparent 70%);
          pointer-events:none;
        }
        @media (max-width:700px) { .cta-banner { flex-direction:column; text-align:center; padding:48px 28px; } }
        .cta-title { font-family:'Syne',sans-serif; font-size:clamp(22px,3vw,34px); font-weight:800; color:var(--text); position:relative; }
        .cta-title span { color:var(--primary-light); }
      `}</style>

      <Navbar />
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="hero-inner">
          <div>
            <h1 className="hero-title reveal in">
              Bridging<br />
              <span className="c-indigo">Innovation</span> &<br />
              <span className="c-green">Global Trade</span>
            </h1>
            <p className="hero-sub reveal in d1">
              Expert IT solutions, SAP outsourcing, and seamless import-export services across India, UAE, Bahrain, Qatar, Oman & Malaysia.
            </p>
          </div>
          <div className="card-stack reveal in d2">
            <div className="hcard">
              <div><div className="hcard-label">Countries Served</div><div className="hcard-val">6 Nations</div></div>
              <span className="pill pill-green">↑ Active</span>
            </div>
            <div className="hcard">
              <div><div className="hcard-label">Trade Volume</div><div className="hcard-val">Import & Export</div></div>
              <div className="mini-bars">
                {[40,55,48,70,65,88].map((h,i)=><div key={i} className="mini-bar" style={{height:`${h}%`}} />)}
              </div>
            </div>
            <div className="hcard">
              <div><div className="hcard-label">Client Satisfaction</div><div className="hcard-val">98%</div></div>
              <span className="pill pill-green">★★★★★</span>
            </div>
          </div>
        </div>
      </section>
      <div className="stats-band">
        <div className="stats-inner">
          {[{num:"100+",lbl:"Global Clients"},{num:"6",lbl:"Countries"},{num:"10+",lbl:"Years Active"},{num:"98%",lbl:"Satisfaction"}].map((s,i)=>(
            <div className="stat-cell reveal" key={i}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
      <section className="sec" style={{background:"var(--bg)"}}>
        <div className="sec-inner">
          <div className="about-grid">
            <div className="img-wrap reveal">
              <img src={aboutImg} alt="About SHNOOR" className="about-img" />
              <div className="img-badges">
                <div className="img-badge"><div className="img-badge-num">EST.</div><div className="img-badge-lbl">2014</div></div>
                <div style={{width:"1px",background:"var(--border)"}} />
                <div className="img-badge"><div className="img-badge-num">6+</div><div className="img-badge-lbl">Countries</div></div>
              </div>
            </div>
            <div className="reveal d1">
              <div className="tag">About Us</div>
              <h2 className="sec-title">Technology Meets <span>Global Commerce</span></h2>
              <div className="divider" />
              <div className="about-text">
                <p>SHNOOR International LLC is a dynamic organization formed to work progressively across IT Consulting & Staffing, IT Product Development, Application Designing & Development, and SAP Outsourcing.</p>
                <p>Headquartered in Muscat, Oman, we specialize in import and export of quality products from India to UAE, Bahrain, Qatar, and Malaysia—building strong trade bridges and lasting global partnerships.</p>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      <div className="marquee-band">
        <div className="marquee-track">
          {["IT Consulting","SAP Outsourcing","App Development","Import & Export","IT Staffing","Global Trade","Background Verification","Product Development",
            "IT Consulting","SAP Outsourcing","App Development","Import & Export","IT Staffing","Global Trade","Background Verification","Product Development"
          ].map((item,i)=>(
            <span className="marquee-item" key={i}>{item}<span className="mdot" /></span>
          ))}
        </div>
      </div>
      <section className="sec" style={{background:"var(--bg)"}}>
        <div className="sec-inner">
          <div style={{textAlign:"center",maxWidth:580,margin:"0 auto 56px"}} className="reveal">
            <div className="tag" style={{justifyContent:"center"}}>What We Do</div>
            <h2 className="sec-title">Our <span>Core Capabilities</span></h2>
            <p className="sec-sub" style={{margin:"0 auto"}}>From digital transformation to cross-border trade—end-to-end solutions that move businesses forward.</p>
          </div>
          <div className="svc-grid">
            {[
              {title:"IT Consulting & Staffing",desc:"Expert advisors and skilled professionals placed where your business needs them most."},
              {title:"SAP Outsourcing",desc:"End-to-end SAP implementation, support, and optimization across MM, SD, FI, and more."},
              {title:"App Design & Development",desc:"Scalable applications from concept to deployment built for your digital journey."},
              {title:"Import & Export",desc:"Seamless logistics and compliance for products across India, UAE, Gulf & Malaysia."},
              {title:"Background Verification",desc:"Comprehensive screening services to protect your organization and ensure integrity."},
              {title:"Global Partnerships",desc:"Connecting buyers and sellers across 6+ nations with relationships built on trust."},
            ].map((s,i)=>(
              <div className={`svc-card reveal d${(i%3)+1}`} key={i}>
                <div className="svc-title">{s.title}</div>
                <p className="svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" style={{background:"var(--bg)",paddingTop:0}}>
        <div className="sec-inner">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"44px",flexWrap:"wrap",gap:"16px"}} className="reveal">
            <div>
              <div className="tag">Latest Insights</div>
              <h2 className="sec-title" style={{margin:0}}>News & <span>Updates</span></h2>
            </div>
            
          </div>
          <div className="insights-grid">
            {[
              {img:sap,tag:"Technology",title:"SAP MM: A Comprehensive Overview",desc:"How SAP Materials Management helps businesses master procurement, inventory, and vendor processes.",date:"Dec 16, 2025",read:"2 min"},
              {img:imp,tag:"Trade",title:"Import & Export Solutions for India & UAE",desc:"Reliable cross-border logistics with seamless compliance and end-to-end handling.",date:"Dec 15, 2025",read:"3 min"},
              {img:trust,tag:"Compliance",title:"Building Trust Through Background Verification",desc:"Protect your organization with comprehensive verification services ensuring safety.",date:"Oct 14, 2025",read:"2 min"},
            ].map((c,i)=>(
              <div className={`ic reveal d${i+1}`} key={i}>
                <div className="ic-img-wrap"><img src={c.img} alt={c.title} className="ic-img" /></div>
                <div className="ic-body">
                  <div className="ic-tag">{c.tag}</div>
                  <h3 className="ic-title">{c.title}</h3>
                  <p className="ic-desc">{c.desc}</p>
                  <div className="ic-meta">{c.date} · {c.read} read</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="testi">
        <div className="testi-inner reveal">
          <div className="testi-stars">★★★★★</div>
          <p className="testi-q">"Working with SHNOOR has been a <em>game-changer</em>. Their IT consulting team delivered a custom solution that improved our efficiency by leaps and bounds—and their import services were smooth, reliable, and hassle-free."</p>
          <img src={user} alt="Amita Khanna" className="testi-avatar" />
          <div className="testi-name">Amita Khanna</div>
          <div className="testi-role">Delivery Head · SF Technologies, Singapore</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
