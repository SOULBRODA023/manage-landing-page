import Header from "./component/Header";
import FirstSection from "./component/FirstSection";
import SecondSection from "./component/SecondSection";
import Carousel from "./component/carousel";
import Footer from "./component/Footer";
import "src/style.css";

function App() {
  return (
    <section className="app">
      <Header />
      <FirstSection />
      <SecondSection />
      <Carousel />
      <Footer />
    </section>
  );
}

export default App;
