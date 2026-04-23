import React from "react";
import img from "../assets/tech.jpg";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

function About() {
  return (
    <>
      <Navbar />

      <style>{`
        * {
          font-family: 'Ubuntu', sans-serif;
        }

        .about-hero {
          background-image: url(${img});
          height: 420px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #E2E8F0;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(15,23,42,0.8), rgba(15,23,42,0.95));
          top: 0;
          left: 0;
        }

        .hero-title {
          position: relative;
          font-size: 48px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .section {
          background: #0F172A;
          padding: 70px 20px;
          color: #E2E8F0;
        }

        .card-custom {
          background: rgba(30, 41, 59, 0.7);
          border-radius: 16px;
          padding: 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
          height: 100%;
        }

        .card-custom:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .section-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .section-subtitle {
          color: #94A3B8;
          margin-bottom: 40px;
        }

        .highlight {
          color: #6366F1;
        }

        .text-muted-custom {
          color: #94A3B8;
          line-height: 1.8;
        }

        .why-box {
          background: #1E293B;
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .list-item {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .check {
          color: #22C55E;
          font-weight: bold;
        }
      `}</style>

      <div className="about-hero">
        <div className="overlay"></div>
        <h1 className="hero-title">
          Get to <span className="highlight">Know Us</span>
        </h1>
      </div>
      <div className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <p className="text-muted-custom text-center">
            SHNOOR International LLC is a dynamic organization bridging the worlds
            of technology and trade. With expertise spanning IT Consulting &
            Staffing, IT Product Development, Application Designing &
            Development, and SAP Outsourcing, we empower businesses with
            cutting-edge digital solutions.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">
              Who <span className="highlight">We Are</span>
            </h2>
            <p className="section-subtitle">
              Driving innovation through technology and global trade
            </p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card-custom">
                <h4 className="mb-3">🚀 Our Mission</h4>
                <p className="text-muted-custom">
                  To provide innovative IT solutions and seamless global trade
                  services that empower our clients to grow, adapt, and succeed.
                </p>
                <p className="text-muted-custom mb-0">
                  We deliver excellence through expertise, reliability, and
                  customer-centric service.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-custom">
                <h4 className="mb-3">🌍 Our Vision</h4>
                <p className="text-muted-custom">
                  To be a global leader in uniting technology and trade—
                  transforming businesses with smart IT solutions.
                </p>
                <p className="text-muted-custom mb-0">
                  We aim to drive economic growth and mutual success worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className="why-box mb-5">
            <h4 className="mb-4">Why Choose Us</h4>

            <div className="row">
              <div className="col-md-6">
                <div className="list-item">
                  <span className="check">✔</span> Proven record in multiple IT domains
                </div>
                <div className="list-item">
                  <span className="check">✔</span> Strong international trade network
                </div>
              </div>

              <div className="col-md-6">
                <div className="list-item">
                  <span className="check">✔</span> Commitment to innovation & quality
                </div>
                <div className="list-item">
                  <span className="check">✔</span> Seamless global service delivery
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <p className="text-muted-custom">
                At SHNOOR International LLC, we don’t just offer services—we build
                long-term partnerships that help businesses thrive.
              </p>
              <p className="text-muted-custom">
                We empower organizations to innovate faster and reach new markets
                with confidence.
              </p>
            </div>

            <div className="col-md-6">
              <p className="text-muted-custom">
                Our expertise in cross-border trade ensures smooth operations and
                compliance with international standards.
              </p>
              <p className="text-muted-custom">
                We bring technology, trust, and trade together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;