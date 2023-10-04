import { useState } from "react";
import data from "../data.json";
import Slider from "./Slider";
const Body = () => {
 
  const [info, setInfo] = useState(data);
  // const [currentslide, setCurrentSlide] = useState(0);
  // const nextSlide = () => {
  //   const goToNextSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
  //     );
  //   };
  // useEffect(() => {
  //   const interval = setInterval(goToNextSlide, 3000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <section className="body">
        <section className="heroImage">
          <img
            src="./images/bg-tablet-pattern.svg"
            className="body__tablet"
            alt=""
          />
          <img
            src="./images/illustration-intro.svg"
            alt="illustration"
            className="body__illustration"
          />
        </section>

        <section className="hero">
          <img
            src="./images/bg-tablet-pattern.svg"
            alt=""
            className="hero__tablet"
          />
          <h1 className="hero__text">
            Bring everyone together to build better products{" "}
            <span className="period">.</span>
          </h1>
          <p className="hero__paragraph">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="hero__getstarted">
            <p>Get Started</p>
          </button>
          <h2 className="hero__text second">What's different about Manage?</h2>
          <p className="hero__paragraph paragraphtwo">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </section>
      </section>

      <section className="more">
        {info.slides.map((infos, index) => (
          <div key={index}>
            <div className="more__title">
              <h5>0{infos.id}</h5>
              <h5>{infos.title}</h5>
            </div>
            <p>{infos.content}</p>
          </div>
        ))}
        <Slider info={info} />
      </section>
    </>
  );
};

export default Body;
