import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const RecruitmentScamAwareness = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

        .scam-container {
          font-family: 'Ubuntu', sans-serif;
          background: #0F172A;
          color: #E2E8F0;
          padding: 60px 5%;
          line-height: 1.7;
        }

        .scam-wrapper {
          max-width: 1100px;
          margin: auto;
        }

        .scam-title {
          font-size: 36px;
          font-weight: 700;
          color: #6366F1;
          margin-bottom: 10px;
        }

        .scam-subtitle {
          font-size: 16px;
          color: #94A3B8;
          margin-bottom: 40px;
        }

        .scam-card {
          background: #1E293B;
          border-radius: 14px;
          padding: 25px;
          margin-bottom: 25px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: 0.3s;
        }

        .scam-card:hover {
          transform: translateY(-4px);
          border-color: #6366F1;
        }

        .scam-card h3 {
          color: #22C55E;
          margin-bottom: 10px;
        }

        .scam-card ul {
          padding-left: 20px;
        }

        .scam-card li {
          margin-bottom: 8px;
        }

        .highlight {
          color: #F87171;
          font-weight: 500;
        }

        .contact-box {
          background: linear-gradient(135deg, #6366F1, #05a8ed);
          padding: 25px;
          border-radius: 14px;
          margin-top: 30px;
          text-align: center;
        }

        .contact-box h3 {
          margin-bottom: 10px;
        }

        .contact-box a {
          color: #fff;
          font-weight: 500;
          text-decoration: none;
        }

        .contact-box a:hover {
          text-decoration: underline;
        }
      `}</style>
       <Navbar/>

      <div className="scam-container">
       
        <div className="scam-wrapper">
          
          <h1 className="scam-title">
            Recruitment Scams Awareness – SHNOOR International
          </h1>
          <p className="scam-subtitle">
            We are committed to transparency, trust, and ethical recruitment practices.
          </p>

          <div className="scam-card">
            <p>
              At SHNOOR International, we are committed to maintaining the highest standards 
              of transparency, trust, and ethical practices in all our recruitment and consultancy services. 
              Unfortunately, many fraudulent individuals misuse the name of reputed companies to mislead job seekers.
            </p>
          </div>

          <div className="scam-card">
            <h3>What Are Recruitment Scams?</h3>
            <p>
              Recruitment scams involve fake job advertisements, fraudulent offer letters, or 
              demands for money under the guise of employment opportunities. Scammers may use emails, 
              fake websites, or social media platforms pretending to represent SHNOOR International.
            </p>
          </div>

          <div className="scam-card">
            <h3>How to Identify a Recruitment Scam?</h3>
            <ul>
              <li>Requests for money, deposits, or processing fees.</li>
              <li>Emails from unofficial accounts (Gmail, Yahoo, etc.).</li>
              <li>Poorly written offer letters with errors.</li>
              <li>Guaranteed jobs without interviews.</li>
              <li>Fake websites or social media pages.</li>
            </ul>
            <p className="highlight">
              Important: SHNOOR International never charges any money for recruitment.
            </p>
          </div>

          <div className="scam-card">
            <h3>How We Protect Job Seekers</h3>
            <ul>
              <li>Recruitment only through official website and channels.</li>
              <li>Offer letters issued on official letterhead.</li>
              <li>Communication via verified domain email IDs.</li>
              <li>Applicants can verify offers directly with us.</li>
            </ul>
          </div>

          <div className="scam-card">
            <h3>How to Stay Safe</h3>
            <ul>
              <li>Never share personal or financial details.</li>
              <li>Verify emails and websites carefully.</li>
              <li>Report suspicious activity immediately.</li>
              <li>Confirm offers with HR before accepting.</li>
            </ul>
          </div>

          <div className="contact-box">
            <h3>Report Fraud</h3>
            <p>If you suspect any recruitment scam, contact us:</p>
            <p>
              📧 <a href="mailto:hr@shnoor.com">hr@shnoor.com</a>
            </p>
          </div>

        </div>
        <Footer/>
      </div>
    </>
  );
};

export default RecruitmentScamAwareness;