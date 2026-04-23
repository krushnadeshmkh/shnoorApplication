import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.avif";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <style>{`
        .custom-navbar {
          top: 0;
          z-index: 9999;
          position: relative;
          overflow: visible;
          background: rgba(15, 23, 42, 0.98);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 6%;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 110px;
          overflow: visible;
        }

        .nav-logo img {
          height: 100px;
          transition: transform 0.3s ease;
        }

        .nav-logo img:hover {
          transform: scale(1.08);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .nav-link-custom {
          position: relative;
          font-size: 16px;
          font-weight: 500;
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-link-custom:hover {
          color: #E2E8F0;
        }

        .nav-link-custom::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #6366F1, #22C55E);
          transition: width 0.3s ease;
        }

        .nav-link-custom:hover::after {
          width: 100%;
        }

        .active-link {
          color: #818CF8 !important;
          font-weight: 600;
        }

        .active-link::after {
          width: 100%;
        }
        .dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 120%;
          left: 0;
          background: #1E293B;
          min-width: 230px;
          border-radius: 10px;
          padding: 10px 0;
          display: none;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          z-index: 9999;
        }

        .dropdown:hover .dropdown-menu {
          display: flex;
        }

        .dropdown-menu a {
          padding: 12px 20px;
          color: #E2E8F0;
          text-decoration: none;
          font-size: 14px;
        }

        .dropdown-menu a:hover {
          background: #334155;
        }
        .menu-toggle {
          display: none;
          font-size: 28px;
          color: #E2E8F0;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px 8px;
          line-height: 1;
        }
        @media (max-width: 900px) {
          .nav-inner {
            height: 80px;
            position: relative;
          }

          .nav-logo img {
            height: 64px;
          }

          .menu-toggle {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            background: #0F172A;
            flex-direction: column;
            align-items: stretch;
            padding: 16px 0 24px;
            gap: 0;
            display: none;
            border-top: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 12px 30px rgba(0,0,0,0.5);
          }

          .nav-links.open {
            display: flex;
          }
          .nav-links > a.nav-link-custom {
            font-size: 15px;
            padding: 14px 24px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            color: #CBD5E1;
          }

          .nav-links > a.nav-link-custom:hover,
          .nav-links > a.nav-link-custom.active-link {
            background: rgba(99,102,241,0.08);
            color: #818CF8;
          }

          .nav-links > a.nav-link-custom::after {
            display: none;
          }

          .dropdown {
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }

          .services-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 24px;
            font-size: 15px;
            font-weight: 500;
            color: #CBD5E1;
            cursor: pointer;
            user-select: none;
            transition: background 0.2s;
          }

          .services-toggle:hover {
            background: rgba(99,102,241,0.08);
          }

          .services-chevron {
            font-size: 12px;
            transition: transform 0.25s ease;
            color: #6366F1;
          }

          .services-chevron.open {
            transform: rotate(180deg);
          }

          .dropdown-menu {
            position: static !important;
            display: flex !important;
            flex-direction: column;
            background: rgba(30,41,59,0.6);
            box-shadow: none;
            border-radius: 0;
            padding: 0;
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.3s ease, padding 0.3s ease;
          }

          .dropdown-menu.mobile-open {
            max-height: 400px;
            padding: 6px 0;
          }

          .dropdown-menu a {
            padding: 12px 24px 12px 40px;
            font-size: 14px;
            color: #94A3B8;
            border-bottom: 1px solid rgba(255,255,255,0.04);
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .dropdown-menu a::before {
            content: "›";
            color: #6366F1;
            font-size: 16px;
            font-weight: 700;
          }

          .dropdown-menu a:hover {
            background: rgba(99,102,241,0.1);
            color: #E2E8F0;
          }
          .dropdown:hover .dropdown-menu {
            max-height: 0;
            padding: 0;
          }

          .dropdown:hover .dropdown-menu.mobile-open {
            max-height: 400px;
            padding: 6px 0;
          }
        }
      `}</style>

      <nav className="custom-navbar">
        <div className="nav-container">
          <div className="nav-inner">
            <NavLink to="/" className="nav-logo">
              <img src={logo} alt="logo" />
            </NavLink>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Logistics", path: "/logistics" },
                { name: "Careers", path: "/careers" },
                { name: "ExportManagement", path: "/export-management" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => {
                if (item.name === "Services") {
                  return (
                    <div key={i} className="dropdown">
                      {/* Mobile: tap to toggle. Desktop: hover via CSS */}
                      <div
                        className="services-toggle nav-link-custom"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        <span>Services</span>
                        <span className={`services-chevron ${servicesOpen ? "open" : ""}`}>▼</span>
                      </div>

                      <div className={`dropdown-menu ${servicesOpen ? "mobile-open" : ""}`}>
                        <NavLink to="/backgroundVerification" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                          Background Verification
                        </NavLink>
                        <NavLink to="/dataAI" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                          Data & AI
                        </NavLink>
                        <NavLink to="/consultingStaffing" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                          Consulting & Staffing
                        </NavLink>
                        <NavLink to="/networkManagement" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                          Network Management
                        </NavLink>
                        <NavLink to="/enterprise-management" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                          Export Management
                        </NavLink>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={i}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive ? "nav-link-custom active-link" : "nav-link-custom"
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;