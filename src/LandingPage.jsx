import { Link } from "react-router-dom";

const categories = [
  { icon: "⌘", title: "Technology", count: "2,480" },
  { icon: "✦", title: "Design & Creative", count: "1,120" },
  { icon: "↗", title: "Marketing & Growth", count: "986" },
  { icon: "◫", title: "Business & Finance", count: "740" },
  { icon: "♙", title: "People & Operations", count: "692" },
  { icon: "✚", title: "Healthcare", count: "570" },
];

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Findify home">
      <span className="brand-mark" aria-hidden="true">
        F
      </span>
      <span>Findify</span>
    </Link>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="nav-links" aria-label="Primary navigation">
          <Link className="is-active" to="/">
            Home
          </Link>
          <Link to="jobs">Find jobs</Link>
        </nav>
        <Link className="pill-button pill-button--outline" to="/add-job">
          Post a job
        </Link>
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <form className="job-search" onSubmit={(e) => e.preventDefault()}>
      <label className="search-field">
        <span aria-hidden="true">⌕</span>
        <input
          name="keyword"
          placeholder="Job title or keyword"
          aria-label="Job title or keyword"
        />
      </label>
      <label className="search-field search-field--location">
        <span aria-hidden="true">⌖</span>
        <input
          name="location"
          placeholder="City, remote, or hybrid"
          aria-label="Location"
        />
      </label>
      <Link className="button button--accent" to="/jobs">
        Search jobs <span aria-hidden="true">→</span>
      </Link>
    </form>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Header />
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Your next chapter starts here
          </p>
          <h1>
            Find work that
            <br />
            <em>moves you forward.</em>
          </h1>
          <p className="hero-summary">
            Explore hand-picked opportunities from teams building the future. A
            smarter, calmer way to find the role that fits.
          </p>
          <SearchBar />
          <div className="proof-point">
            <div className="avatars" aria-hidden="true">
              <span>MA</span>
              <span>JR</span>
              <span>SK</span>
              <span>LL</span>
              <span>+</span>
            </div>
            <p>
              <strong>12,000+ people</strong> found their next role with Findify
              this month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ icon, title, count }) {
  return (
    <a className="category-card" href="#jobs">
      <span className="category-icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <p>{count} open roles</p>
      <span className="card-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

function CategoryGrid() {
  return (
    <section className="categories section" id="jobs">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--plain">Explore possibilities</p>
            <h2>
              Find your place
              <br />
              in the right team.
            </h2>
          </div>
          <Link className="text-link" to="/jobs">
            View all jobs <span>→</span>
          </Link>
        </div>
        <p className="section-summary">
          From your first big move to your next defining role, browse work
          shaped around what you want to do.
        </p>
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <Brand />
          <p>
            Good work changes everything.
            <br />
            Let's find yours.
          </p>
          <nav aria-label="Footer navigation">
            <a href="#jobs">Find jobs</a>
            <Link to="/add-job">Post a job</Link>
          </nav>
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
    <>
      <Hero />
      <main>
        <CategoryGrid />
      </main>
      <Footer />
    </>
  );
}
