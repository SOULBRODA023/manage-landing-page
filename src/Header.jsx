import { useState } from "react";

const Header = () => {
  const [modalIsopen, setISModalOpen] = useState(false);
  const navToggle = document.getElementsByClassName("mobile-nav-toggle");
  const primaryNav = document.getElementsByClassName("primary-navigation");
  const header = document.getElementsByClassName("header");

  const handleModalOpening = () => {
    const firstPrimaryNav = primaryNav[0];
    const firstNavToggle = navToggle[0];
    const firstHeader = header[0];
    setISModalOpen(!modalIsopen);
    if(!modalIsopen ){
    firstPrimaryNav.toggleAttribute("data-visible")
    firstHeader.toggleAttribute("data-overlay");
    }
    firstNavToggle && firstPrimaryNav.hasAttribute("data-visible")
      ? firstNavToggle.setAttribute("aria-expanded", false)  
      : firstNavToggle.setAttribute("aria-expanded", true);

  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <img src="/images/logo.svg" alt="logo" />
          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
          >
            <span className="visually-hidden">Menu</span>
            <img
              src="/images/icon-hamburger.svg"
              alt=""
              onClick={handleModalOpening}
              className="icon-hamburger"
            />
            <img
              src="./images/icon-close.svg"
              alt=""
              onClick={handleModalOpening}
              className="icon-close"
            />
          </button>

          <nav className="primary-navigation">
            <ul id="primary-navigation" role="list">
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Product</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
            </ul>
          </nav>

          <button className="btn-primary-1 | display-sm-none display-md-inline-flex" >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
