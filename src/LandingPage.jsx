import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TopNav() {
  return (
    <div className="shell top-nav">
      <nav className="top-nav-left" aria-label="Primary navigation">
        <Link className="brand brand--small" to="/" aria-label="Findify home">
          <span className="brand-mark" aria-hidden="true">
            F
          </span>
          <span>Findify</span>
        </Link>
        <Link to="/">Home</Link>
        <a href="#footer">Company reviews</a>
      </nav>

      <nav className="top-nav-right" aria-label="Account navigation">
        <a href="#footer">Sign in</a>
        <a href="#footer">Language</a>

        <Link to="/add-job">Employers / Post a job</Link>
      </nav>
    </div>
  );
}

function SearchBar() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (keyword.trim()) {
      params.set("keyword", keyword.trim());
    }

    if (location.trim()) {
      params.set("location", location.trim());
    }

    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <form className="job-search" onSubmit={handleSearch}>
      <label className="search-field search-field--location">
        <span aria-hidden="true">⌖</span>

        <input
          name="location"
          placeholder="City, state, zip code, or remote"
          aria-label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>

      <label className="search-field">
        <span aria-hidden="true">⌕</span>

        <input
          name="keyword"
          placeholder="Job title, keywords, or company"
          aria-label="Job title, keywords, or company"
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

function Hero() {
  return (
    <section className="hero hero--centered" id="top">
      <TopNav />

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

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="shell">
        <div className="footer-top">
          <p>
            Good work changes everything.
            <br />
            Let's find yours.
          </p>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Findify. Built for better work.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="page-wrapper">
      <Hero />
      <Footer />
    </div>
  );
}
