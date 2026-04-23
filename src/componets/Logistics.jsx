import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

function Logistics() {
  return (
    <>
      <Navbar />

      <style>{`
        * {
          font-family: 'Ubuntu', sans-serif;
        }
        .hero {
          background-image: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d');
          background-size: cover;
          background-position: center;
          min-height: 80vh;
          position: relative;
          display: flex;
          align-items: flex-start; 
          padding-top: 140px;     
          color: #E2E8F0;
          overflow: hidden;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(15,23,42,0.95) 20%,
            rgba(15,23,42,0.85) 40%,
            rgba(99,102,241,0.25) 100%
          );
          top: 0;
          left: 0;
        }
        .hero::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%);
          top: -100px;
          right: -100px;
          filter: blur(80px);
        }

        .hero::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(34,197,94,0.25), transparent 70%);
          bottom: -100px;
          left: -100px;
          filter: blur(80px);
        }

        .hero-content {
          position: relative;
        }
        .hero-box {
          max-width: 520px;
          backdrop-filter: blur(10px);
          background: rgba(30,41,59,0.4);
          padding: 30px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .hero-title {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 18px;
        }

        .hero-desc {
          color: #CBD5F5;
          line-height: 1.8;
          margin-bottom: 25px;
          font-size: 15px;
        }

        .highlight {
          color: #6366F1;
        }

        .btn-primary-custom {
          background: #6366F1;
          border: none;
          border-radius: 30px;
          padding: 10px 25px;
          color: white;
          transition: 0.3s;
        }

        .btn-primary-custom:hover {
          background: #4f46e5;
          transform: translateY(-2px);
        }

        .tags div {
          background: rgba(30,41,59,0.7);
          padding: 7px 16px;
          border-radius: 20px;
          font-size: 13px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .section {
          background: #0F172A;
          padding: 70px 20px;
          color: #E2E8F0;
        }

        .section-title {
          font-size: 32px;
          font-weight: 700;
        }

        .section-subtitle {
          color: #94A3B8;
        }

        .card {
          background: rgba(30,41,59,0.7);
          padding: 25px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: 0.3s;
          height: 100%;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }

        .text-muted-custom {
          color: #94A3B8;
          line-height: 1.8;
        }

        .check {
          color: #22C55E;
          margin-right: 10px;
        }

        .light-section {
          background: #020617;
          padding: 70px 20px;
        }

        .cta-box {
          background: #1E293B;
          border-radius: 16px;
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>
      <div className="hero">
        <div className="overlay"></div>

        <div className="container hero-content">
          <div className="row">
            <div className="col-lg-7">

              <div className="">
                <h1 className="hero-title">
                  Logistics & <span className="highlight">Transportation</span>
                </h1>

                <p className="hero-desc">
                  Reliable, secure and fast logistics solutions designed to move
                  your business globally with confidence and efficiency.
                </p>

                <div className="tags mt-4 d-flex gap-3 flex-wrap">
                  <div>Fast Delivery</div>
                  <div>Secure Handling</div>
                  <div>Global Reach</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="section text-center">
        <div className="container">
          <h2 className="section-title">
            Smart <span className="highlight">Logistics Management</span>
          </h2>

          <p className="section-subtitle mx-auto mt-3" style={{ maxWidth: "700px" }}>
            We simplify international trade with efficient logistics solutions.
            Our services ensure safe, reliable and timely delivery across global markets.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h3 className="fw-bold mb-3">Why Choose Us</h3>

              <p className="text-muted-custom">
                We ensure every shipment is handled with precision, helping your
                business scale globally without operational stress.
              </p>

              <p><span className="check">✔</span> Strong presence at Mumbai & Mundra ports</p>
              <p><span className="check">✔</span> Reliable container availability</p>
              <p><span className="check">✔</span> Fast & secure delivery process</p>
              <p><span className="check">✔</span> Complete trade support</p>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                alt="logistics"
                style={{ maxHeight: "260px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="light-section">
        <div className="container text-center">
          <h2 className="section-title">
            <span style={{color:"white"}}>Our</span> <span className="highlight">Services</span>
          </h2>

          <div className="row g-4 mt-4">
            {[
              "Dry Container Supply",
              "Cargo Handling & Packing",
              "Customs Clearance",
              "Multi-Modal Transport",
              "Real-Time Tracking",
              "End-to-End Supply Chain",
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card">
                  <h5 className="mb-2" style={{color:"white"}}>{item}</h5>
                  <p className="text-muted-custom">
                    Professional logistics service designed for efficiency and reliability.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="cta-box row align-items-center g-4">
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Your Trusted Logistics Partner</h3>

              <p className="text-muted-custom">
                We go beyond transportation — delivering reliability,
                performance and growth with complete compliance at every step.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                alt="transport"
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Logistics;