import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="Links">
          <h1 className="logo"> Virtual Book Library</h1>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">
                <p
                  className={
                    location.pathname === "/" ? "activeBtn" : "notActiveBtn"
                  }
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to="/my-library">
                <p
                  className={
                    location.pathname === "/my-library"
                      ? "activeBtn"
                      : "notActiveBtn"
                  }
                >
                  My Library
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
