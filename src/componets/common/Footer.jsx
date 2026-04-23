import React from "react";
import logo from "../../assets/logo.avif";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .footer {
          background: #0F172A;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 80px 20px 30px;
          color: #94A3B8;
          position: relative;
          overflow: hidden;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px; /* reduced gap */
        }

        .footer-grid > div {
          min-width: 0;
        }

        .footer-logo img {
          width: 140px;
          margin-bottom: 12px;
          max-width: 100%;
          height: auto;
        }

        .footer-desc {
          font-size: 14px;
          line-height: 1.6;
          max-width: 100%;
        }

        .footer-title {
          font-size: 14px;
          font-weight: 700;
          color: #E2E8F0;
          margin-bottom: 12px; /* reduced */
        }

        .footer-title::after {
          content: "";
          display: block;
          width: 50%;
          height: 2px;
          background: linear-gradient(90deg, #6366F1, #22C55E);
          margin-top: 6px;
        }

        .footer-link {
          display: block;
          font-size: 13.5px;
          color: #94A3B8;
          text-decoration: none;
          margin-bottom: 6px; /* reduced */
          transition: 0.3s;
        }

        .footer-link:hover {
          color: #22C55E;
          transform: translateX(4px);
        }

        .footer-text {
          font-size: 13.5px;
          margin-bottom: 6px; /* reduced */
          word-break: break-word;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: 40px;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-bottom a {
          color: #94A3B8;
          font-size: 13px;
          margin-right: 12px;
          text-decoration: none;
        }

        .footer-copy {
          font-size: 13px;
          color: #64748B;
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 600px) {
          .footer {
            padding: 60px 16px 20px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom div {
            width: 100%;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid gap-5">
            <div>
              <div className="footer-logo">
                <img src={logo} alt="logo" />
              </div>
              <p className="footer-desc">
                Delivering modern cloud, AI, and enterprise solutions for businesses worldwide.
              </p>
            </div>

            <div>
              <div className="footer-title">Contacts</div>
              <p className="footer-text">info@shnoor.com</p>
              <p className="footer-text">proc@shnoor.com</p>
            </div>

            <div>
              <div className="footer-title">Location</div>
              <p className="footer-text">
                10009 Mount Tabor Road,<br />
                Odessa, Missouri,<br />
                United States
              </p>
            </div>

<div>
  <div className="footer-title">Services</div>

  {[
    { name: "Cloud Management", path: "/cloudManagement" },
    { name: "Enterprise Management", path: "/enterpriseManagement" },
    { name: "Data & AI", path: "/dataAI" },
    { name: "Consulting & Staffing", path: "/consultingStaffing" },
    { name: "Background Verification", path: "/backgroundVerification" },
    { name: "Network Management", path: "/networkManagement" }
  ].map((item, i) => (
    <Link key={i} to={item.path} className="footer-link">
      {item.name}
    </Link>
  ))}
</div>

<div>
  <div className="footer-title">Our Websites</div>

  {[
    {
      name: "Official Website",
      link: "https://shnoor.com"
    },
    {
      name: "Learning Management System (LMS)",
      link: "https://lms.shnoor.com/"
    },
    {
      name: "SHNOOR Invoicing",
      link: "https://www.invoicecloud.in/"
    },
    {
      name: "HR Management (SAAS)",
      link: "https://hrm.shnoor.com/",
    },
  ].map((item, i) => (
    <div key={i} style={{ marginBottom: "12px" }}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        {item.name}
      </a>
    </div>
  ))}
</div>
          </div>

          <div className="footer-bottom">
            <div>
              <a href="/privacypolicy">Privacy Policy</a>
              <a href="/termandconditions">Terms & Conditions</a>
            </div>

            <div className="footer-copy">
              © 2025 SHNOOR INTERNATIONAL LLC. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;