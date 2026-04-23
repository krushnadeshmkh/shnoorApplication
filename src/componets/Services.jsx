import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

import aws from "../assets/amazon.avif";
import gcp from "../assets/cloude.avif";
import azure from "../assets/micro.avif";

import awsLogo from "../assets/amazon.avif";
import microsoftLogo from "../assets/micro.avif";
import googleLogo from "../assets/google.jpg";
import ibmLogo from "../assets/imb.jpg";
import oracleLogo from "../assets/oracle'.png";
import sapLogo from "../assets/sap.webp";

function Services() {
  const services = [
    {
      title: "AWS Cloud",
      img: aws,
      desc: "We help businesses unlock the full potential of AWS with scalable, secure, and cost-effective cloud solutions tailored to your needs.",
    },
    {
      title: "Google Cloud",
      img: gcp,
      desc: "Leverage Google Cloud Platform to build intelligent, high-performance applications with scalability and innovation at the core.",
    },
    {
      title: "Microsoft Cloud",
      img: azure,
      desc: "Transform your business with Azure solutions—from infrastructure modernization to AI-driven analytics and enterprise-grade security.",
    },
  ];

  const partners = [awsLogo, microsoftLogo, googleLogo, ibmLogo, oracleLogo, sapLogo];

  return (
    <>
      <Navbar />

      <style>{`
        * {
          font-family: 'Ubuntu', sans-serif;
        }

        .hero {
          background: linear-gradient(180deg, #0F172A, #020617);
          padding: 90px 20px;
          text-align: center;
          color: #E2E8F0;
        }

        .hero h1 {
          font-size: 46px;
          font-weight: 700;
          line-height: 1.4;
        }

        .hero p {
          color: #94A3B8;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto 15px;
        }

        .highlight {
          color: #6366F1;
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
          margin-bottom: 40px;
        }

        .card {
          background: rgba(30, 41, 59, 0.7);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
          height: 100%;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: 0.4s;
        }

        .card:hover img {
          transform: scale(1.08);
        }

        .card-body {
          padding: 25px;
        }

        .text-muted-custom {
          color: #94A3B8;
          font-size: 14px;
          line-height: 1.8;
        }

        .partners {
          background: #020617;
          padding: 70px 20px;
        }

        .logo-box img {
          max-width: 110px;
          transition: 0.3s;
        }

        .logo-box img:hover {
          transform: scale(1.15);
          filter: grayscale(0%);
          opacity: 1;
        }

        .info-box {
          background: #1E293B;
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .check {
          color: #22C55E;
          margin-right: 10px;
        }

        .email {
          color: #6366F1;
          font-weight: 600;
        }
      `}</style>
      <div className="hero">
        <h1>
          Empowering Your Business with <span className="highlight">Cloud Excellence</span>
        </h1>

        <p>
          In today’s digital era, the cloud is no longer an option—it’s a necessity.
          We help businesses harness cloud technology to optimize operations,
          improve collaboration, and reduce costs.
        </p>

        <p>
          Our experts design, deploy, and manage solutions tailored to your needs,
          ensuring performance, security, and scalability.
        </p>
      </div>
      <div className="section">
        <div className="container text-center">
          <h2 className="section-title">
            What <span className="highlight">We Do</span>
          </h2>
          <p className="section-subtitle">
            Three powerful cloud solutions to scale your business
          </p>

          <div className="row g-4">
            {services.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card">
                  <img src={item.img} alt={item.title} />
                  <div className="card-body">
                    <h4 className="mb-3" style={{color:"white"}}>{item.title}</h4>
                    <p className="text-muted-custom">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="partners">
        <div className="container text-center">
          <h2 className="section-title">
            <span style={{color:"white"}}>Our</span> <span className="highlight">Partners</span>
          </h2>
          <p className="section-subtitle">
            Strong collaborations that drive innovation
          </p>

          <div className="row justify-content-center mb-5">
            {partners.map((logo, index) => (
              <div className="col-6 col-md-2 mb-4 logo-box" key={index}>
                <img src={logo} alt="partner" />
              </div>
            ))}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 text-muted-custom">
              <p>
                At SHNOOR International LLC, we collaborate with industry-leading
                technology providers to deliver cutting-edge solutions.
              </p>

              <div className="info-box mt-4">
                <h5 className="mb-3">Why Our Partnerships Matter</h5>

                <p><span className="check">✔</span> Innovation – Latest tools & technologies</p>
                <p><span className="check">✔</span> Expertise – Combined knowledge</p>
                <p><span className="check">✔</span> Global Reach – Multi-country services</p>
                <p><span className="check">✔</span> Mutual Growth – Long-term value</p>
              </div>

              <p className="mt-4">
                Interested in partnering with us? <br />
                <span className="email">partners@shnoor.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;