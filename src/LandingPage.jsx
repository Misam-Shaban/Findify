import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

/* =========================
   SEARCH BAR
========================= */
function SearchBar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("keyword", keyword.trim());
    if (location.trim()) params.set("location", location.trim());
    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <form className="job-search" onSubmit={handleSearch}>
      <label className="search-field search-field--location">
        <span aria-hidden="true">⌖</span>
        <input
          name="location"
          placeholder="City, state, zip code, or remote"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label className="search-field">
        <span aria-hidden="true">⌕</span>
        <input
          name="keyword"
          placeholder="Job title, keywords, or company"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </label>
      <button className="button button--accent" type="submit">
        Find jobs
      </button>
    </form>
  );
}

/* =========================
   HERO
========================= */
function Hero() {
  return (
    <section className="hero hero--centered">
      <div className="shell search-shell">
        <SearchBar />
      </div>
      <div className="shell hero-centered-content">
        <div className="hero-brand">
          <span className="brand-mark brand-mark--large" aria-hidden="true">
            F
          </span>
          <h1 className="hero-wordmark">Findify</h1>
        </div>
        <p className="hero-summary hero-summary--centered">
          Find work that moves you forward. Search thousands of open roles,
          hand-picked from teams building the future.
        </p>
      </div>
    </section>
  );
}

/* =========================
   FOOTER
========================= */
function Footer() {
  const footerColumns = [
    {
      title: "Job Seekers",
      links: [
        { label: "Browse Jobs", to: "/jobs" },
        { label: "Saved Jobs", to: "#" },
        { label: "My Applications", to: "#" },
        { label: "Salary Guide", to: "#" },
        { label: "Career Tips", to: "#" },
      ],
    },
    {
      title: "Employers",
      links: [
        { label: "Post a Job", to: "/add-job" },
        { label: "Browse Candidates", to: "#" },
        { label: "Pricing", to: "#" },
        { label: "Recruiter Tools", to: "#" },
        { label: "Enterprise", to: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", to: "#" },
        { label: "Careers", to: "#" },
        { label: "Blog", to: "#" },
        { label: "Press", to: "#" },
        { label: "Contact Us", to: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", to: "#" },
        { label: "FAQs", to: "#" },
        { label: "Report an Issue", to: "#" },
        { label: "Privacy Policy", to: "#" },
        { label: "Terms of Service", to: "#" },
      ],
    },
  ];

  return (
    <footer className="site-footer" id="footer">
      <div className="shell">
        {/* Top: Brand + Newsletter */}
        <div className="footer-hero">
          <div className="footer-hero-left">
            <Link to="/" className="brand" aria-label="Findify home">
              <span className="brand-mark" aria-hidden="true">
                F
              </span>
              <span>Findify</span>
            </Link>
            <p>
              Connecting talent with opportunity.
              <br />
              Your next big role starts here.
            </p>
          </div>

          <div className="footer-hero-right">
            <h4>Get job alerts in your inbox</h4>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                required
              />
              <button type="submit" aria-label="Subscribe">
                <FaArrowRight />
              </button>
            </form>
            <p className="newsletter-hint">
              We'll send you the best jobs matching your interests.
            </p>
          </div>
        </div>

        {/* Middle: Link columns */}
        <div className="footer-links">
          {footerColumns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom: Copyright + Socials */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© 2026 Findify. All rights reserved.</span>
            <span className="footer-dot">·</span>
            <Link to="#">Privacy</Link>
            <span className="footer-dot">·</span>
            <Link to="#">Terms</Link>
            <span className="footer-dot">·</span>
            <Link to="#">Cookies</Link>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   LANDING PAGE
========================= */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}
