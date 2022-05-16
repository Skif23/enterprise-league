import React from "react";
import "./header.css";
import { useState, useEffect } from "react";
function Header() {
  const [border, setBorder] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setBorder(window.pageYOffset > 0 ? true : false);
  };

  return (
    <div>
      <header
        className={`header ${border ? "scrolled" : ""}`}
        style={{ position: "fixed", top: "0px", backgroundColor: "white" }}
      >
        <a href="/">
          <img
            src="https://enterpriseleague.com/public/img/logo-header.svg"
            alt=""
            className="header-logo"
          />
        </a>
        <div className="header-navigation">
          <ul className="header-items">
            <li className="header-item">
              <a href="/">
                Product
                <i className="fa-solid fa-chevron-down"></i>
              </a>
            </li>
            <li className="header-item">
              <a href="/">
                Resources
                <i className="fa-solid fa-chevron-down"></i>
              </a>
            </li>
            <li className="header-item">
              <a href="/">
                Company
                <i className="fa-solid fa-chevron-down"></i>
              </a>
            </li>

            <div className="right-items">
              <li className="header-item">
                <a href="https://enterpriseleague.com/login">Log in</a>
              </li>
              <li className="header-item">
                <a
                  className="get-started-button"
                  href="https://enterpriseleague.com/registration"
                >
                  Get started
                </a>
              </li>
            </div>
          </ul>

          <div class="hamburger-menu">
            <div></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
