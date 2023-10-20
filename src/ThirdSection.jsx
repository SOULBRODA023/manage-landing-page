
const Footer = () => {
  return (
    <section className="footer">
      <section className="footer__firstlayer">
        <h1>Simplify how your team works today.</h1>
        <section className="CTA__button">
          <button className="btn-Neutral-4">
            <p>Get Started</p>
          </button>
        </section>
      </section>

      <section className="footer__secondlayer">
        <section className="input">
          <form>
            <input
              type="email"
              className="input__email"
              placeholder="Updates in your inbox..."
            />
            <button type="submit" className="btn-primary-1 | go">
              <p>GO</p>
            </button>
          </form>
        </section>
        <section className="links">
          <ul>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Pricing</li>
            </a>

            <a href="">
              <li>Products</li>
            </a>
            <a href="">
              <li>About Us</li>
            </a>
          </ul>
          <ul>
            <a href="">
              <li>Careers</li>
            </a>
            <a href="">
              <li>Community </li>
            </a>
            <a href="">
              <li>Privacy Policy</li>
            </a>
          </ul>
        </section>
        <section className="socials">
          <div className="account">
            <a href="">
              <img
                src="/images/icon-facebook.svg"
                alt="Facebook link"
                className="social__links"
              />
            </a>
            <a href="">
              <img
                src="/images/icon-youtube.svg"
                alt="youtube link"
                className="social__links"
              />
            </a>
            <a href="">
              <img
                src="/images/icon-twitter.svg"
                alt="Twitter link"
                className="social__links"
              />
            </a>
            <a href="">
              <img
                src="/images/icon-pinterest.svg"
                alt="Pinterest link"
                className="social__links"
              />
            </a>
            <a href="">
              <img
                src="/images/icon-instagram.svg"
                alt="Instagram link"
                className="social__links"
              />
            </a>
          </div>

          <div className="logo">
            <img
              src="/images/logo-white.svg"
              alt="company's logo"
              className="footer__logo"
            />
          </div>
        </section>

        <p className="footer__text">copyright 2020. all rights reserved</p>
      </section>
    </section>
  );
};

export default Footer;
