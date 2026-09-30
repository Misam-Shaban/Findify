import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="shell navbar-inner">
        <nav className="top-nav-left" aria-label="Primary navigation">
          <Link className="brand brand--small" to="/" aria-label="Findify home">
            <span className="brand-mark" aria-hidden="true">
              F
            </span>
            <span>Findify</span>
          </Link>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link--active" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link--active" : ""}`
            }
          >
            Find Your Job
          </NavLink>
        </nav>

        <nav className="top-nav-right" aria-label="Account navigation">
          <Link to="/" className="nav-link">
            Sign in
          </Link>
          <Link to="/" className="nav-link">
            Language
          </Link>
          <Link to="/add-job" className="nav-link">
            Employers / Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
