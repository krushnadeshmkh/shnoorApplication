import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');

  :root {
    --primary: #6366F1;
    --primary-light: #818CF8;
    --secondary: #22C55E;
    --bg: #0F172A;
    --surface: #1E293B;
    --text: #E2E8F0;
    --text-muted: #94A3B8;
    --border: rgba(99,102,241,0.18);
  }

  .shn-pp * { box-sizing: border-box; margin: 0; padding: 0; }
  .shn-pp { font-family: 'Ubuntu', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }

  .shn-pp-hero {
    position: relative; overflow: hidden; padding: 80px 24px 60px; text-align: center;
    border-bottom: 1px solid var(--border);
  }
  .shn-pp-hero-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,197,94,0.12) 0%, transparent 70%);
  }

  .shn-pp-hero-content { position: relative; z-index: 1; }
  .shn-pp-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.25);
    color: var(--secondary); border-radius: 999px;
    padding: 6px 18px; font-size: 13px; font-weight: 500; margin-bottom: 22px;
  }
  .shn-pp-hero h1 {
    font-size: clamp(2rem, 5vw, 3rem); font-weight: 700;
    letter-spacing: -0.02em; margin-bottom: 14px;
  }
  .shn-pp-hero h1 span { color: var(--secondary); }
  .shn-pp-hero p { color: var(--text-muted); font-size: 0.95rem; }

  .shn-pp-layout {
    max-width: 1100px; margin: 0 auto; padding: 48px 24px 80px;
  }
  @media (max-width: 768px) { .shn-pp-layout { grid-template-columns: 1fr; } }

  .shn-pp-toc {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 14px; padding: 20px; position: sticky; top: 24px;
  }
  @media (max-width: 768px) { .shn-pp-toc { position: static; } }
  .shn-pp-toc h4 {
    font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
    color: var(--secondary); text-transform: uppercase; margin-bottom: 16px;
  }
  .shn-pp-toc a {
    display: block; padding: 7px 10px; border-radius: 8px;
    color: var(--text-muted); text-decoration: none; font-size: 0.83rem;
    transition: color 0.15s, background 0.15s; margin-bottom: 2px;
  }
  .shn-pp-toc a:hover { color: var(--text); background: rgba(34,197,94,0.08); }
  .shn-pp-updated {
    margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border);
    font-size: 0.78rem; color: var(--text-muted);
  }
  .shn-pp-updated span { display: block; color: var(--text); font-weight: 500; margin-top: 3px; }
  .shn-pp-section { margin-bottom: 40px; }
  .shn-pp-section-header {
    display: flex; align-items: center; gap: 14px; margin-bottom: 18px;
    padding-bottom: 14px; border-bottom: 1px solid var(--border);
  }
  .shn-pp-icon {
    width: 40px; height: 40px; border-radius: 10px;
    background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
  }
  .shn-pp-section h2 { font-size: 1.15rem; font-weight: 700; }
  .shn-pp-section p {
    color: var(--text-muted); font-size: 0.9rem; line-height: 1.75; margin-bottom: 12px;
  }
  .shn-pp-section p:last-child { margin-bottom: 0; }
  .shn-pp-section a { color: var(--primary-light); text-decoration: none; }
  .shn-pp-section a:hover { text-decoration: underline; }

  .shn-pp-list {
    list-style: none; padding: 0; margin: 12px 0;
  }
  .shn-pp-list li {
    display: flex; align-items: flex-start; gap: 10px;
    color: var(--text-muted); font-size: 0.9rem; line-height: 1.65;
    margin-bottom: 8px; padding: 10px 14px;
    background: rgba(34,197,94,0.04); border-radius: 8px;
    border-left: 2px solid rgba(34,197,94,0.3);
  }
  .shn-pp-list li::before { content: "•"; color: var(--secondary); font-weight: 700; flex-shrink: 0; }

  .shn-pp-rights {
    display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 16px 0;
  }
  @media (max-width: 480px) { .shn-pp-rights { grid-template-columns: 1fr; } }
  .shn-pp-right-item {
    background: var(--surface); border: 1px solid var(--border); border-radius: 10px;
    padding: 14px 16px; font-size: 0.85rem;
    display: flex; align-items: center; gap: 10px; color: var(--text-muted);
  }
  .shn-pp-right-item::before { content: attr(data-icon); font-size: 16px; flex-shrink: 0; }

  .shn-pp-highlight {
    background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2);
    border-radius: 12px; padding: 18px 20px; margin: 14px 0;
  }
  .shn-pp-highlight p { color: var(--text-muted) !important; margin-bottom: 0; }

  .shn-pp-contact-box {
    background: linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(99,102,241,0.08) 100%);
    border: 1px solid rgba(34,197,94,0.2); border-radius: 14px; padding: 24px;
    margin-top: 16px;
  }
  .shn-pp-contact-box h4 { font-size: 1rem; font-weight: 600; margin-bottom: 10px; }
  .shn-pp-contact-box p { color: var(--text-muted); font-size: 0.88rem; line-height: 1.65; margin-bottom: 0; }
  .shn-pp-contact-box a { color: var(--secondary); font-weight: 600; }
`;

export default function PrivacyPolicy() {
  return (
    <>
      <style>{styles}</style>
      <div className="shn-pp">
        <Navbar/>
        <div className="shn-pp-hero">
          <div className="shn-pp-hero-bg" />
          <div className="shn-pp-hero-grid" />
          <div className="shn-pp-hero-content">
            <h1>Privacy <span>Policy</span></h1>
            <p>
              www.shnoor.com is owned by SHNOOR INTERNATIONAL LLC, which is a data controller of
              your personal data.
            </p>
          </div>
        </div>
        <div className="shn-pp-layout">
          <div>
            <div className="shn-pp-section">
              <p>
                We have adopted this Privacy Policy, which determines how we are processing the
                information collected by www.shnoor.com, which also provides the reasons why we must
                collect certain personal data about you. Therefore, you must read this Privacy Policy
                before using www.shnoor.com website.
              </p>
              <p>
                We take care of your personal data and undertake to guarantee its confidentiality and
                security.
              </p>
            </div>

            <div className="shn-pp-section" id="pp-collect">
              <div className="shn-pp-section-header">
                <h2>Personal Information We Collect</h2>
              </div>
              <p>
                When you visit www.shnoor.com, we automatically collect certain information about your
                device, including information about your web browser, IP address, time zone, and some
                of the installed cookies on your device. Additionally, as you browse the Site, we
                collect information about the individual web pages or products you view, what websites
                or search terms referred you to the Site, and how you interact with the Site.
              </p>
              <p>
                We refer to this automatically-collected information as "Device Information." Moreover,
                we might collect the personal data you provide to us (including but not limited to
                Name, Surname, Address, payment information, etc.) during registration to be able to
                fulfill the agreement.
              </p>
            </div>

            <div className="shn-pp-section" id="pp-process">
              <div className="shn-pp-section-header">
                <h2>Why Do We Process Your Data?</h2>
              </div>
              <p>
                Our top priority is customer data security and, as such, we may process only minimal
                user data, only as much as it is absolutely necessary to maintain the website. Information
                collected automatically is used only to identify potential cases of abuse and establish
                statistical information regarding website usage.
              </p>
              <p>
                This statistical information is not otherwise aggregated in such a way that it would
                identify any particular user of the system.
              </p>
              <div className="shn-pp-highlight">
                <p>
                  You can visit the website without telling us who you are or revealing any information
                  by which someone could identify you as a specific, identifiable individual. If, however,
                  you wish to use some of the website's features, you may be asked to provide certain
                  Personal Information.
                </p>
              </div>
            </div>

            <div className="shn-pp-section" id="pp-rights">
              <div className="shn-pp-section-header">
                <h2>Your Rights</h2>
              </div>
              <p>
                If you are a European resident, you have the following rights related to your personal
                data:
              </p>
              <div className="shn-pp-rights">
                {[
                  {  text: "The right to be informed" },
                  {  text: "The right to rectification" },
                  {  text: "The right to erasure" },
                  {  text: "The right to ensure" },
                  {  text: "The right to restrict processing" },
                  {  text: "The right to data portability" },
                  {  text: "The right to object" },
                  {  text: "Rights in automated decision-making" },
                ].map((r) => (
                  <div className="shn-pp-right-item" key={r.text}>
                    {r.text}
                  </div>
                ))}
              </div>
              <p>
                If you would like to exercise this right, please contact us through the contact
                information below.
              </p>
              <p>
                Additionally, if you are a European resident, we note that we are processing your
                information in order to fulfil contracts we might have with you, or otherwise to pursue
                our legitimate business interests. Please be aware that your information might be
                transferred outside of Europe, including to Canada and the United States.
              </p>
            </div>

            <div className="shn-pp-section" id="pp-links">
              <div className="shn-pp-section-header">
                <h2>Links to Other Websites</h2>
              </div>
              <p>
                Our website may contain links to other websites that are not owned or controlled by us.
                Please be aware that we are not responsible for such other websites or third parties'
                privacy practices.
              </p>
              <p>
                We encourage you to be aware when you leave our website and read the privacy statements
                of each website that may collect personal information.
              </p>
            </div>

            <div className="shn-pp-section" id="pp-security">
              <div className="shn-pp-section-header">
                <h2>Information Security</h2>
              </div>
              <p>
                We secure information you provide on computer servers in a controlled, secure environment,
                protected from unauthorized access, use, or disclosure. We keep reasonable administrative,
                technical, and physical safeguards in order to protect against unauthorized access, use,
                alteration, and personal data disclosure in its control and custody.
              </p>
              <p>
                However, no data transmission over the Internet or wireless network can be guaranteed.
              </p>
            </div>

            <div className="shn-pp-section" id="pp-legal">
              <div className="shn-pp-section-header">
                <h2>Legal Disclosure</h2>
              </div>
              <p>
                We will disclose any information we collect, use or receive if required or permitted by
                law, such as to comply with a subpoena or similar legal process, and when we believe in
                good faith that disclosure is necessary to protect our rights, protect your safety or the
                safety of others, investigate fraud, or respond to a government request.
              </p>
            </div>

            <div className="shn-pp-section" id="pp-contact">
              <div className="shn-pp-section-header">
                <h2>Contact Information</h2>
              </div>
              <p>
                If you would like to contact us to understand more about this Policy or wish to contact
                us concerning any matter relating to individual rights and your Personal Information,
                you may send an email to:
              </p>
              <div className="shn-pp-contact-box">
                <h4> Get in touch about your privacy</h4>
                <p>
                  Email us at{" "}
                  <a href="mailto:info@shnoor.com">info@shnoor.com</a>{" "}
                  and our data protection team will respond within 2–3 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
