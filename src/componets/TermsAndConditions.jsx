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

  .shn-tnc * { box-sizing: border-box; margin: 0; padding: 0; }
  .shn-tnc { font-family: 'Ubuntu', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }

  .shn-tnc-hero {
    position: relative; overflow: hidden; padding: 80px 24px 60px; text-align: center;
    border-bottom: 1px solid var(--border);
  }
  .shn-tnc-hero-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.14) 0%, transparent 70%);
  }
  .shn-tnc-hero-content { position: relative; z-index: 1; }
  .shn-tnc-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(99,102,241,0.12); border: 1px solid var(--border);
    color: var(--primary-light); border-radius: 999px;
    padding: 6px 18px; font-size: 13px; font-weight: 500; margin-bottom: 22px;
  }
  .shn-tnc-hero h1 {
    font-size: clamp(2rem, 5vw, 3rem); font-weight: 700;
    letter-spacing: -0.02em; margin-bottom: 14px;
  }
  .shn-tnc-hero h1 span { color: var(--primary-light); }
  .shn-tnc-hero p { color: var(--text-muted); font-size: 0.95rem; }

  .shn-tnc-layout {
    max-width: 1100px; margin: 0 auto; padding: 48px 24px 80px;
  }
  @media (max-width: 768px) { .shn-tnc-layout { grid-template-columns: 1fr; } }

  .shn-tnc-toc {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 14px; padding: 20px; position: sticky; top: 24px;
  }
  @media (max-width: 768px) { .shn-tnc-toc { position: static; } }
  .shn-tnc-toc h4 {
    font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
    color: var(--secondary); text-transform: uppercase; margin-bottom: 16px;
  }
  .shn-tnc-toc a {
    display: block; padding: 7px 10px; border-radius: 8px;
    color: var(--text-muted); text-decoration: none; font-size: 0.83rem;
    transition: color 0.15s, background 0.15s; margin-bottom: 2px;
  }
  .shn-tnc-toc a:hover { color: var(--text); background: rgba(99,102,241,0.1); }

  .shn-tnc-updated {
    margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border);
    font-size: 0.78rem; color: var(--text-muted);
  }
  .shn-tnc-updated span { display: block; color: var(--text); font-weight: 500; margin-top: 3px; }
  .shn-tnc-content {}
  .shn-tnc-section { margin-bottom: 40px; }
  .shn-tnc-section-header {
    display: flex; align-items: center; gap: 14px; margin-bottom: 18px;
    padding-bottom: 14px; border-bottom: 1px solid var(--border);
  }
  .shn-tnc-section-num {
    width: 36px; height: 36px; border-radius: 10px;
    background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.25);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.78rem; font-weight: 700; color: var(--primary-light); flex-shrink: 0;
  }
  .shn-tnc-section h2 { font-size: 1.15rem; font-weight: 700; }
  .shn-tnc-section p {
    color: var(--text-muted); font-size: 0.9rem; line-height: 1.75; margin-bottom: 12px;
  }
  .shn-tnc-section p:last-child { margin-bottom: 0; }
  .shn-tnc-list {
    list-style: none; padding: 0; margin: 12px 0;
  }
  .shn-tnc-list li {
    display: flex; align-items: flex-start; gap: 10px;
    color: var(--text-muted); font-size: 0.9rem; line-height: 1.65;
    margin-bottom: 8px; padding: 10px 14px;
    background: rgba(99,102,241,0.04); border-radius: 8px;
    border-left: 2px solid rgba(99,102,241,0.3);
  }
  .shn-tnc-list li::before { content: "×"; color: #f87171; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
  .shn-tnc-list.shn-allowed li::before { content: "✓"; color: var(--secondary); }

  .shn-tnc-highlight {
    background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2);
    border-radius: 12px; padding: 18px 20px; margin: 14px 0;
  }
  .shn-tnc-highlight p { margin-bottom: 0; }

  .shn-tnc-disclaimer {
    background: rgba(248,113,113,0.07); border: 1px solid rgba(248,113,113,0.2);
    border-radius: 12px; padding: 18px 20px; margin: 14px 0;
  }
  .shn-tnc-disclaimer p { color: #fca5a5 !important; margin-bottom: 0; }
`;



export default function TermsAndConditions() {
  return (
    <>
      <style>{styles}</style>
      <div className="shn-tnc">
        <Navbar/>
        <div className="shn-tnc-hero">
          <div className="shn-tnc-hero-bg" />
          <div className="shn-tnc-hero-grid" />
          <div className="shn-tnc-hero-content">
            <h1>Terms &amp; <span>Conditions</span></h1>
            <p>Please read these terms carefully before using www.shnoor.com</p>
          </div>
        </div>
        <div className="shn-tnc-layout">
          <div className="shn-tnc-content">
            <div className="shn-tnc-section">
              <p>
                Welcome to <strong>www.shnoor.com</strong>! These terms and conditions outline
                the rules and regulations for the use of SHNOOR INTERNATIONAL's Website. By
                accessing this website, we assume you accept these terms and conditions. Do not
                continue to use www.shnoor.com if you do not agree to all the terms stated on
                this page.
              </p>
            </div>

            <div className="shn-tnc-section" id="tnc-cookies">
              <div className="shn-tnc-section-header">
                <div className="shn-tnc-section-num">01</div>
                <h2>Cookies</h2>
              </div>
              <p>
                The website uses cookies to help personalize your online experience. By
                accessing www.shnoor.com, you agreed to use the required cookies.
              </p>
              <p>
                A cookie is a text file that is placed on your hard disk by a web page server.
                Cookies cannot be used to run programs or deliver viruses to your computer.
                Cookies are uniquely assigned to you and can only be read by a web server in the
                domain that issued the cookie to you.
              </p>
              <div className="shn-tnc-highlight">
                <p>
                  We may use cookies to collect, store, and track information for statistical or
                  marketing purposes. You have the ability to accept or decline optional Cookies.
                  Some required Cookies are necessary for the operation of our website and do not
                  require your consent.
                </p>
              </div>
            </div>

            <div className="shn-tnc-section" id="tnc-license">
              <div className="shn-tnc-section-header">
                <div className="shn-tnc-section-num">02</div>
                <h2>License</h2>
              </div>
              <p>
                Unless otherwise stated, SHNOOR INTERNATIONAL and/or its licensors own the
                intellectual property rights for all material on www.shnoor.com. All intellectual
                property rights are reserved.
              </p>
              <p>You must not:</p>
              <ul className="shn-tnc-list">
                <li>Copy or republish material from www.shnoor.com</li>
                <li>Sell, rent, or sub-license material from www.shnoor.com</li>
                <li>Reproduce, duplicate or copy material from www.shnoor.com</li>
                <li>Redistribute content from www.shnoor.com</li>
              </ul>
            </div>

            <div className="shn-tnc-section" id="tnc-comments">
              <div className="shn-tnc-section-header">
                <div className="shn-tnc-section-num">03</div>
                <h2>Comments</h2>
              </div>
              <p>
                Parts of this website offer users an opportunity to post and exchange opinions
                and information. SHNOOR INTERNATIONAL does not filter, edit, publish or review
                Comments before their presence on the website.
              </p>
              <p>
                Comments do not reflect the views and opinions of SHNOOR INTERNATIONAL, its
                agents, and/or affiliates. SHNOOR INTERNATIONAL shall not be liable for the
                Comments or any liability, damages, or expenses caused as a result of any use
                of the Comments on this website.
              </p>
              <p>You warrant and represent that:</p>
              <ul className="shn-tnc-list shn-allowed">
                <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so</li>
                <li>The Comments do not invade any intellectual property right of any third party</li>
                <li>The Comments do not contain any defamatory, libelous, offensive, or otherwise unlawful material</li>
                <li>The Comments will not be used to solicit or promote business or unlawful activity</li>
              </ul>
            </div>

            <div className="shn-tnc-section" id="tnc-linking">
              <div className="shn-tnc-section-header">
                <div className="shn-tnc-section-num">04</div>
                <h2>Hyperlinking to our Content</h2>
              </div>
              <p>The following organizations may link to our Website without prior written approval:</p>
              <ul className="shn-tnc-list shn-allowed">
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
                <li>Online directory distributors</li>
                <li>System-wide Accredited Businesses</li>
              </ul>
              <p>
                No use of SHNOOR INTERNATIONAL's logo or other artwork will be allowed for
                linking absent a trademark license agreement.
              </p>
            </div>

            <div className="shn-tnc-section" id="tnc-liability">
              <div className="shn-tnc-section-header">
                <div className="shn-tnc-section-num">05</div>
                <h2>Content Liability</h2>
              </div>
              <p>
                We shall not be held responsible for any content that appears on your Website.
                You agree to protect and defend us against all claims that are raised on your
                Website. No link(s) should appear on any Website that may be interpreted as
                libelous, obscene, or criminal, or which infringes any third party rights.
              </p>
            </div>

            <div className="shn-tnc-section" id="tnc-rights">
              <div className="shn-tnc-section-header">
                <div className="shn-tnc-section-num">06</div>
                <h2>Reservation of Rights</h2>
              </div>
              <p>
                We reserve the right to request that you remove all links or any particular link
                to our Website. We also reserve the right to amend these terms and conditions and
                its linking policy at any time. By continuously linking to our Website, you agree
                to be bound to and follow these linking terms and conditions.
              </p>
            </div>

            <div className="shn-tnc-section" id="tnc-removal">
              <div className="shn-tnc-section-header">
                <div className="shn-tnc-section-num">07</div>
                <h2>Removal of Links from Our Website</h2>
              </div>
              <p>
                If you find any link on our Website that is offensive for any reason, you are
                free to contact and inform us at any moment. We will consider requests to remove
                links, but we are not obligated to do so or to respond to you directly.
              </p>
              <p>
                We do not ensure that the information on this website is correct. We do not
                warrant its completeness or accuracy, nor do we promise to ensure that the
                website remains available or that the material on the website is kept up to date.
              </p>
            </div>

            <div className="shn-tnc-section" id="tnc-disclaimer">
              <div className="shn-tnc-section-header">
                <div className="shn-tnc-section-num">08</div>
                <h2>Disclaimer</h2>
              </div>
              <p>
                To the maximum extent permitted by applicable law, we exclude all
                representations, warranties, and conditions relating to our website and the use
                of this website. Nothing in this disclaimer will:
              </p>
              <ul className="shn-tnc-list shn-allowed">
                <li>Limit or exclude our or your liability for death or personal injury</li>
                <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
