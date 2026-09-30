import { Link, NavLink } from "react-router-dom";
import { FaBookmark, FaRegCommentDots, FaBell, FaUser } from "react-icons/fa";

function NavbarWithIcons() {
  return (
    <header className="navbar">
      <div className="shell navbar-inner">
        <Link to="/" className="brand brand--small" aria-label="Findify home">
          <span className="brand-mark" aria-hidden="true">
            F
          </span>
          <span>Findify</span>
        </Link>

        <nav className="navbar-links">
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

        <div className="navbar-actions">
          <button className="icon-btn" aria-label="Saved jobs">
            <FaBookmark />
          </button>
          <button className="icon-btn" aria-label="Messages">
            <FaRegCommentDots />
          </button>
          <button className="icon-btn" aria-label="Notifications">
            <FaBell />
          </button>
          <button className="icon-btn" aria-label="Profile">
            <FaUser />
          </button>
          <span className="navbar-sep" aria-hidden="true" />
          <Link to="/add-job" className="employer-link">
            Employers / Post a Job
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavbarWithIcons;
