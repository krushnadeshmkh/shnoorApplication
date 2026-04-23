import { useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');

  :root {
    --primary: #6366F1;
    --primary-light: #818CF8;
    --primary-dark: #4F46E5;
    --secondary: #22C55E;
    --bg: #0F172A;
    --surface: #1E293B;
    --surface2: #253348;
    --text: #E2E8F0;
    --text-muted: #94A3B8;
    --border: rgba(99,102,241,0.18);
  }

  .shn-contact * { box-sizing: border-box; margin: 0; padding: 0; }
  .shn-contact { font-family: 'Ubuntu', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }

  /* Header */
  .shn-contact-hero {
    position: relative; overflow: hidden;
    padding: 80px 24px 60px; text-align: center;
  }
  .shn-contact-hero-bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.16) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 80% 80%, rgba(34,197,94,0.08) 0%, transparent 60%);
  }
  .shn-contact-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .shn-contact-hero-content { position: relative; z-index: 1; }
  .shn-contact-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(99,102,241,0.12); border: 1px solid var(--border);
    color: var(--primary-light); border-radius: 999px;
    padding: 6px 18px; font-size: 13px; font-weight: 500; margin-bottom: 24px;
  }
  .shn-contact-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--secondary); }
  .shn-contact-hero h1 {
    font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 700;
    line-height: 1.15; margin-bottom: 16px; letter-spacing: -0.02em;
  }
  .shn-contact-hero h1 span { color: var(--primary-light); }
  .shn-contact-hero p { color: var(--text-muted); font-size: 1.05rem; line-height: 1.7; max-width: 520px; margin: 0 auto; }
  .shn-contact-layout {
    max-width: 1100px; margin: 0 auto; padding: 0 24px 80px;
    display: grid; grid-template-columns: 1fr 1.6fr; gap: 32px;
  }
  @media (max-width: 768px) {
    .shn-contact-layout { grid-template-columns: 1fr; }
  }
  .shn-contact-info {}
  .shn-info-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 16px; padding: 28px; margin-bottom: 16px;
  }
  .shn-info-card h3 {
    font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em;
    color: var(--secondary); text-transform: uppercase; margin-bottom: 16px;
  }
  .shn-info-item {
    display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px;
  }
  .shn-info-item:last-child { margin-bottom: 0; }
  .shn-info-icon {
    width: 38px; height: 38px; border-radius: 10px;
    background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; flex-shrink: 0;
  }
  .shn-info-label { font-size: 11px; color: var(--text-muted); margin-bottom: 3px; }
  .shn-info-value { font-size: 0.9rem; font-weight: 500; color: var(--text); }

  .shn-response-card {
    background: linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(99,102,241,0.1) 100%);
    border: 1px solid rgba(34,197,94,0.2); border-radius: 16px; padding: 24px;
  }
  .shn-response-card h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 8px; }
  .shn-response-card p { font-size: 0.84rem; color: var(--text-muted); line-height: 1.6; }
  .shn-response-time {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(34,197,94,0.12); border-radius: 8px;
    padding: 6px 12px; margin-top: 12px;
    font-size: 0.82rem; font-weight: 600; color: var(--secondary);
  }
  .shn-form-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; padding: 40px 36px;
  }
  @media (max-width: 480px) {
    .shn-form-card { padding: 28px 20px; }
  }
  .shn-form-title { font-size: 1.3rem; font-weight: 700; margin-bottom: 6px; }
  .shn-form-sub { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 28px; }

  .shn-field { margin-bottom: 20px; }
  .shn-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
  @media (max-width: 480px) { .shn-field-row { grid-template-columns: 1fr; } }
  .shn-label {
    display: block; font-size: 13px; font-weight: 500; color: var(--text-muted);
    margin-bottom: 7px; letter-spacing: 0.02em;
  }
  .shn-label span { color: #f87171; margin-left: 2px; }

  .shn-input, .shn-select, .shn-textarea {
    width: 100%; background: var(--bg); border: 1.5px solid var(--border);
    color: var(--text); font-family: 'Ubuntu', sans-serif; font-size: 0.92rem;
    border-radius: 10px; padding: 12px 14px;
    outline: none; transition: border-color 0.2s, box-shadow 0.2s;
    appearance: none;
  }
  .shn-input:focus, .shn-select:focus, .shn-textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(99,102,241,0.15);
  }
  .shn-input::placeholder, .shn-textarea::placeholder { color: #475569; }
  .shn-textarea { resize: vertical; min-height: 120px; }
  .shn-select { cursor: pointer; }
  .shn-select option { background: var(--surface); }

  .shn-checkbox-group { display: flex; flex-direction: column; gap: 10px; }
  .shn-checkbox-item { display: flex; align-items: center; gap: 10px; cursor: pointer; }
  .shn-checkbox {
    width: 18px; height: 18px; border-radius: 5px;
    border: 1.5px solid var(--border); background: var(--bg);
    cursor: pointer; accent-color: var(--primary);
  }
  .shn-checkbox-label { font-size: 0.88rem; color: var(--text-muted); }

  .shn-submit {
    width: 100%; background: var(--primary); color: #fff;
    border: none; border-radius: 12px; padding: 15px;
    font-size: 1rem; font-weight: 600; cursor: pointer;
    font-family: 'Ubuntu', sans-serif; margin-top: 8px;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(99,102,241,0.3);
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .shn-submit:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(99,102,241,0.45); }
  .shn-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

  .shn-success {
    text-align: center; padding: 48px 24px;
    animation: shn-fadeup 0.5s ease both;
  }
  .shn-success-icon { font-size: 56px; display: block; margin-bottom: 18px; }
  .shn-success h3 { font-size: 1.4rem; font-weight: 700; margin-bottom: 10px; }
  .shn-success p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.65; }

  @keyframes shn-fadeup {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;


export default function Contact() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", country: "", service: "", budget: "", message: "",
    services: [],
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
    setSuccess(true);
    console.log(form)
  };

  return (
    <>
      <style>{styles}</style>
      <div className="shn-contact">
        <Navbar/>
        <div className="shn-contact-hero">
          <div className="shn-contact-hero-bg" />
          <div className="shn-contact-hero-grid" />
          <div className="shn-contact-hero-content">
            <h1>Let's <span>Connect</span> &amp; Grow Together</h1>
            <p>
              Ready to expand your trade horizons? Reach out to our team and let's build
              something remarkable together.
            </p>
          </div>
        </div>
        <div className="shn-contact-layout">
          <div className="shn-contact-info">
            <div className="shn-info-card">
              <h3>Contact Details</h3>
              {[
                { icon: "✉️", label: "Email", value: "info@shnoor.com" },
                { icon: "🌐", label: "Website", value: "www.shnoor.com" },
                { icon: "🌏", label: "Markets Served", value: "UAE · Bahrain · Qatar · Oman · Malaysia" },
              ].map((item) => (
                <div className="shn-info-item" key={item.label}>
                  <div className="shn-info-icon">{item.icon}</div>
                  <div>
                    <div className="shn-info-label">{item.label}</div>
                    <div className="shn-info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="shn-form-card">
            {success ? (
              <div className="shn-success">
                <span className="shn-success-icon">🎉</span>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out to SHNOOR International. Our team will
                  review your inquiry and get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="shn-form-title">Send Us a Message</div>
                <div className="shn-form-sub">Fill in the details below and we'll get back to you shortly.</div>

                <form onSubmit={handleSubmit}>
                  <div className="shn-field-row">
                    <div>
                      <label className="shn-label">First Name <span>*</span></label>
                      <input className="shn-input" name="firstName" value={form.firstName}
                        onChange={handleChange} placeholder="John" required />
                    </div>
                    <div>
                      <label className="shn-label">Last Name <span>*</span></label>
                      <input className="shn-input" name="lastName" value={form.lastName}
                        onChange={handleChange} placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="shn-field-row">
                    <div>
                      <label className="shn-label">Email Address <span>*</span></label>
                      <input className="shn-input" type="email" name="email" value={form.email}
                        onChange={handleChange} placeholder="john@company.com" required />
                    </div>
                    <div>
                      <label className="shn-label">Phone Number</label>
                      <input className="shn-input" name="phone" value={form.phone}
                        onChange={handleChange} placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="shn-field-row">
                    <div>
                      <label className="shn-label">Company Name</label>
                      <input className="shn-input" name="company" value={form.company}
                        onChange={handleChange} placeholder="Your Company Ltd." />
                    </div>
                    <div>
                      <label className="shn-label">Country <span>*</span></label>
                      <select className="shn-select" name="country" value={form.country}
                        onChange={handleChange} required>
                        <option value="">Select country</option>
                        {["India", "UAE", "Bahrain", "Qatar", "Oman", "Malaysia", "Other"].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>


                  <div className="shn-field">
                    <label className="shn-label">Message <span>*</span></label>
                    <textarea className="shn-textarea" name="message" value={form.message}
                      onChange={handleChange} required
                      placeholder="Tell us about your trade requirements, products of interest, or any specific questions..." />
                  </div>

                  <button className="shn-submit" type="submit" disabled={loading}>
                    {loading ? (
                      <>Sending...</>
                    ) : (
                      <> Send Message</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
