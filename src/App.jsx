import { useState } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Carousel from "./component/carousel";
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
    </section>
  );
}

export default App;
