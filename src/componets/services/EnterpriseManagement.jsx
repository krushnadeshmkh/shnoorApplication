import React from "react";
  import img from "../../assets/enterprice.jpg"
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const bannerImg =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80";



function EnterpriseManagement() {
  return (
   
    <div style={{ background: "#0F172A", color: "#E2E8F0" }}>
       <Navbar/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

        * {
          font-family: 'Ubuntu', sans-serif;
        }


        .enterprise-section {
          background: #0F172A;
          color: #E2E8F0;
          padding: 80px 20px;
        }

        .title {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
        }

        .subtitle {
          text-align: center;
          color: #94A3B8;
          font-size: 14px;
          margin-bottom: 50px;
        }
        .top-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          align-items: center;
          justify-content: center;
        }

        .image-box {
          flex: 1;
          min-width: 280px;
          max-width: 500px;
          border-radius: 16px;
          overflow: hidden;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
        }

        .features {
          flex: 1;
          min-width: 280px;
        }

        .feature {
          margin-bottom: 25px;
          padding-left: 15px;
          border-left: 3px solid #6366F1;
        }

        .feature h5 {
          margin: 0;
          font-size: 18px;
          color: #E2E8F0;
        }

        .feature p {
          margin: 5px 0 0;
          font-size: 14px;
          color: #94A3B8;
        }
        .content {
          margin-top: 60px;
          background: #1E293B;
          padding: 30px;
          border-radius: 16px;
        }

        .content h4 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .content p {
          font-size: 14px;
          color: #94A3B8;
          line-height: 1.7;
        }

        .content ul {
          margin-top: 10px;
          padding-left: 18px;
        }

        .content li {
          margin-bottom: 6px;
          font-size: 14px;
        }

        .highlight {
          color: #22C55E;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 26px;
          }
        }
        .hero-banner {
          position: relative;
          height: 320px;
          background: url(${bannerImg}) center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(15,23,42,0.9) 30%,
            rgba(15,23,42,0.7) 60%,
            rgba(99,102,241,0.3) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 20px;
        }

        .hero-title {
          font-size: 40px;
          font-weight: 700;
          color: #E2E8F0;
        }

        .hero-sub {
          font-size: 15px;
          color: #94A3B8;
          max-width: 600px;
          margin: 12px auto 20px;
        }

        .hero-btn {
          background: #6366F1;
          color: #fff;
          border: none;
          padding: 10px 26px;
          border-radius: 50px;
          font-weight: 500;
          transition: 0.3s;
        }

        .hero-btn:hover {
          background: #4f46e5;
        }
        .quote-section {
          background: #1E293B;
          text-align: center;
          padding: 80px 20px;
          margin-top:40px;
        }

        .quote-text {
          font-size: 36px;
          font-weight: 300;
          line-height: 1.4;
          max-width: 900px;
          margin: 0 auto 25px;
          color: #E2E8F0;
        }

        .quote-sub {
          font-size: 15px;
          max-width: 800px;
          margin: 0 auto;
          color: #94A3B8;
        }
        .services-section {
          background: #0F172A;
          padding: 80px 20px;
        }

        .services-title {
          font-size: 34px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #E2E8F0;
        }

        .services-sub {
          max-width: 700px;
          margin: 0 auto;
          font-size: 14px;
          color: #94A3B8;
        }

        .service-card {
          background: #1E293B;
          border-radius: 14px;
          padding: 15px;
          height: 100%;
          text-align: left;
          transition: 0.3s;
          border: 1px solid rgba(99,102,241,0.15);
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.5);
        }

        .service-img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .service-card h5 {
          font-size: 15px;
          font-weight: 600;
          color: #6366F1;
        }

        .service-card p {
          font-size: 13px;
          line-height: 1.6;
          color: #94A3B8;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 28px;
          }

          .quote-text {
            font-size: 24px;
          }
        }
      `}</style>
      <div className="hero-banner">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Custom Enterprise Management</h1>

          <p className="hero-sub">
            We deliver end-to-end services that align with your goals and
            enhance productivity.
          </p>

          <button className="hero-btn">CONTACT US</button>
        </div>
      </div>

      <div className="quote-section">
        <h2 className="quote-text">
          "Streamlining operations, empowering decisions, and enabling growth."
        </h2>

        <p className="quote-sub">
          From IT infrastructure and application management to ERP solutions,
          SAP outsourcing, and business process optimization, we deliver
          end-to-end services that align with your goals and enhance
          productivity.
        </p>
      </div>


<div className="services-section">
  <div className="container text-center">
    <h2 className="services-title">What we do</h2>

    <p className="services-sub">
      At SHNOOR International LLC, our Enterprise Management solutions are designed to help businesses operate smarter, faster, and more efficiently.
    </p>

    <div className="row mt-5 g-4">
      {[
        {
          title: "ERP Implementation & Support",
          img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80",
          desc: `We specialize in AI-powered business process automation within your ERP to unlock significant cost reductions, accelerate reporting, and improve decision-making with real-time analytics.

We manage complex system integrations and migrations, focusing on leading platforms like SAP, Oracle, and Dynamics.`,
        },
        {
          title: "SAP Outsourcing",
          img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
          desc: `SHNOOR International offers specialized SAP outsourcing (ABAP, MM, etc.).

Certified SAP experts handle full lifecycle support including development, customization, and maintenance.

We optimize systems for performance, cost-efficiency, and scalability with 24/7 global support.`,
        },
        {
          title: "Business Process Automation",
          img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400",
          desc: `Our BPA solutions utilize AI, RPA, and cloud tools to maximize accuracy and reduce operational costs.

We automate data entry, reporting, approvals, and system integrations.

This results in faster workflows and improved data-driven decision-making.`,
        },
        {
          title: "IT Infrastructure & Management",
          img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
          desc: `We design and manage robust IT infrastructures that keep your business secure and efficient.

From on-premise systems to cloud environments, we ensure scalability and reliability.

Our solutions are optimized for performance and protection against modern threats.`,
        },
        {
          title: "Performance Monitoring",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
          desc: `We ensure systems run at peak performance using real-time monitoring tools.

Our services track applications, databases, and infrastructure.

We proactively identify bottlenecks and optimize systems before issues arise.`,
        },
        {
          title: "Data Management & Analytics",
          img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400",
          desc: `We help businesses unlock the full value of their data.

Our solutions ensure clean, secure, and well-structured data systems.

From integration to visualization, we transform data into actionable insights.`,
        },
      ].map((item, i) => (
        <div className="col-md-4" key={i}>
          <div className="service-card">
            <div className="img-wrapper">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="card-body">
              <h5>{item.title}</h5>

              <div className="desc-box">
                {item.desc.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>

  <style>{`
    .services-section {
      background: linear-gradient(135deg, #0F172A, #1E293B);
      padding: 90px 20px;
      color: #E2E8F0;
    }

    .services-title {
      font-size: 38px;
      font-weight: 700;
    }

    .services-sub {
      max-width: 700px;
      margin: 10px auto;
      color: #94A3B8;
      font-size: 15px;
    }

    .service-card {
      background: #1E293B;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(99,102,241,0.2);
      transition: 0.3s;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(99,102,241,0.25);
    }

    .img-wrapper {
      height: 180px;
      overflow: hidden;
    }

    .img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-body {
      padding: 18px;
      text-align: left;
    }

    .card-body h5 {
      margin-bottom: 12px;
      font-size: 16px;
      color: #E2E8F0;
    }

    .desc-box {
      max-height: 180px;
      overflow-y: auto;
      padding-left: 12px;
    }

    .desc-box p {
      font-size: 13px;
      color: #94A3B8;
      line-height: 1.7;
      margin-bottom: 8px;
    }

    .desc-box::-webkit-scrollbar {
      width: 4px;
    }



    @media (max-width: 768px) {
      .services-title {
        font-size: 28px;
      }
    }
  `}</style>
</div>


      <div className="container">
        <h2 className="title" style={{marginTop:"40px"}}>Enterprise Management Solutions</h2>
        <p className="subtitle">
          Integrate systems to enhance efficiency and decision-making in your organization.
        </p>
        <div className="top-grid">
          <div className="image-box">
            <img src={img}  alt="enterprise"  />
          </div>

          <div className="features">
            <div className="feature">
              <h5>Cost Reduction</h5>
              <p>Minimize operational costs through efficient resource management.</p>
            </div>

            <div className="feature">
              <h5>Process Automation</h5>
              <p>Streamline workflows to save time and reduce manual errors.</p>
            </div>

            <div className="feature">
              <h5>Data Accuracy</h5>
              <p>Ensure reliable data for informed decision-making and planning.</p>
            </div>
          </div>
        </div>
        <div className="content mt-5 ">
          <h4>Enterprise Management Solutions</h4>
          <p>
            Streamline your entire business with unified management systems. We integrate your core functions (ERP, CRM)
            to give you a <span className="highlight">single source of truth</span>, driving process efficiency and reducing costs.
          </p>

          <p><strong>Key Benefits</strong></p>
          <ul>
            <li><span className="highlight">Total Control:</span> Centralized data for real-time decision-making.</li>
            <li><span className="highlight">Boosted Efficiency:</span> Automation across departments.</li>
            <li><span className="highlight">Scalable Platform:</span> Built for future growth.</li>
          </ul>
        </div>

        <div className="content mt-4">
          <h4>Enterprise Management: Eliminating Complexity</h4>
          <p>
            Tired of disjointed software and silos? We provide a unified backbone to eliminate data chaos,
            automate processes, and deliver a <span className="highlight">clear business view</span>.
          </p>
        </div>

        <div className="content mt-4 mb-5">
          <h4>Unify Your Enterprise Stack</h4>
          <p>
            We deliver high-speed, modular solutions to eliminate technical debt and integrate legacy systems.
            Our focus is creating a <span className="highlight">secure and unified environment</span> across your business.
          </p>
        </div>
      </div>
    

<Footer/>

    </div>
    


  );
}

export default EnterpriseManagement;