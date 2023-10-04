import { useState } from "react";
import Header from "./component/Header";
import Body from "./component/Body"
import "../dist/style.css";

function App() {
  return (
    <section className="grid">
      <Header />
      <Body />
    </section>
  );
}

export default App;
