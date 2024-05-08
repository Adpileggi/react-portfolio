import { Link, useLocation } from "react-router-dom";
// tabs include: About Me, Portfolio, Contact, Resume

const styles = {
  nav: {
    color: "#000"
  },
};
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="hero-background">
      <nav className="navbar justify-content-evenly">
        <ul className="nav nav-underline">
          <li className="nav-item text-black">
            <Link
              to="/"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item" style={styles.nav}>
            <Link
              to="/Portfolio"
              className={
                currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={
                currentPage === "/Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resume"
              className={
                currentPage === "/Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTabs;
