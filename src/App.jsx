import Header from "./Header";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Carousel from "./carousel";
import ThirdSection from "./ThirdSection";
import "../style.css"
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
