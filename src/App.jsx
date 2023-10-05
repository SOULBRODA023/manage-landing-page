import { useState } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Carousel from "./component/carousel";
import Footer from "./component/footer";
import "../dist/style.css";

function App() {
  return (
    <section className="grid">
      <header>
        <Header />
      </header>

      <body>
        <Body />
        <Carousel />
      </body>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default App;
