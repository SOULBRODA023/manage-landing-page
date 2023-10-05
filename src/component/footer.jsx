const Footer = () => {
  return (
    <section className="footer">
      <section className="footer__firstlayer">
        <h1>Simplify how your team works today.</h1>
        <section className="CTA__button">
          <button>
            <p>Get Started</p>
          </button>
        </section>
      </section>

      <section className="footer__secondlayer">
        <section className="input">
          <form>
            <input type="email" className="input__email" />
            <button type="submit">
              <p>GO</p>
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default Footer;
