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
          background: rgba(15, 23, 42, 0.9);
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
          font-size: 32px;
          color: #E2E8F0;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .nav-inner {
            height: 90px;
          }

          .nav-logo img {
            height: 70px;
          }

          .menu-toggle {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background: #0F172A;
            flex-direction: column;
            padding: 30px;
            gap: 24px;
            display: none;
            border-top: 1px solid rgba(255,255,255,0.08);
          }

          .nav-links.open {
            display: flex;
          }

          .dropdown-menu {
            position: static;
            display: ${servicesOpen ? "flex" : "none"};
            background: transparent;
            box-shadow: none;
            padding-left: 10px;
          }

          .dropdown:hover .dropdown-menu {
            display: none;
          }

          .nav-link-custom {
            font-size: 18px;
          }
        }
      `}</style>

      <nav className="custom-navbar">
        <div className="nav-container">
          <div className="nav-inner">
            <NavLink to="/" className="nav-logo">
              <img src={logo} alt="logo" />
            </NavLink>

            <div
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>

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
                    <div
                      key={i}
                      className="nav-link-custom dropdown"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {item.name} ▾

                      <div className="dropdown-menu">
                        <NavLink to="/backgroundVerification" onClick={() => setMenuOpen(false)}>
                          Background Verification
                        </NavLink>
                        <NavLink to="/dataAI" onClick={() => setMenuOpen(false)}>
                          Data & AI
                        </NavLink>
                        <NavLink to="/consultingStaffing" onClick={() => setMenuOpen(false)}>
                          Consulting & Staffing
                        </NavLink>
                        <NavLink to="/networkManagement" onClick={() => setMenuOpen(false)}>
                          Network Management
                        </NavLink>
                        <NavLink to="/enterprise-management" onClick={() => setMenuOpen(false)}>
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
                      isActive
                        ? "nav-link-custom active-link"
                        : "nav-link-custom"
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