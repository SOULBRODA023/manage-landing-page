import "../data.json";
const Slider = ({ info }) => {
  
  return (
    <section className="slider">
      {info.carousel.map((infos, index) => (
        <div key={index} className="slider__container">
          <div className="slider__title">
           <img src={infos.image} alt="avatar testimonials"/>
            <h5>{infos.name}</h5>
          </div>
          <p>{infos.content}</p>
        </div>
      ))}
    </section>
  );
}
 
export default Slider;