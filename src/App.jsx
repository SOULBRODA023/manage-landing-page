import Header from "./component/Header";
import FirstSection from "./component/FirstSection";
import SecondSection from "./component/SecondSection";
import Carousel from "./component/carousel";
import ThirdSection from "./component/Footer";
import "src/style.css";

function App() {
  return (
    <section className="app">
      <Header />
      <FirstSection />
      <SecondSection />
      <Carousel />
      <ThirdSection />
    </section>
  );
}

export default App;
