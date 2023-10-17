const FirstSection = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <img
          src="./images/illustration-intro.svg"
          alt=""
          className="illustration"
        />
        <div className="hero__wrapper">
          <div className="text">
            <h1>Bring everyone together to build better projects</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
          </div>

          <button className="btn-primary-1">Get Started</button>
        </div>
      </div>
    </section>
  );
}
 
export default FirstSection;