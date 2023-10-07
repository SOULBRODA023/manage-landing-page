import { useState } from "react";
import data from "../data.json";
import Carousel from "react-material-ui-carousel";

const Carouselslide = () => {
  const [carouselInfo, setCarouselInfo] = useState(data);

  return (
    <section className="carousel">
      <h1> What they've said</h1>
      <Carousel>
        {carouselInfo.carousel.map((item) => (
          <div className="container" key={item.id}>
            <img src={item.image} alt="avatar image" />
            <h4>{item.name}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </Carousel>
      <section className="CTA__button">
        <button>
          <p>Get Started</p>
        </button>
      </section>
    </section>
  );
};

export default Carouselslide;
