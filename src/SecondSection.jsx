import Data from "../data.json";
import { useState } from "react";
const secondSection = () => {
   const [myData, setMyData] = useState(Data);
  return (
    <section className="second">
      <div className="container">
        <div className="container__one">
          <h2>What's different about Manage?</h2>
          <p>
            Manage provides the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="container__two">
          {myData.slides.map((items) => (
            <div className="container__child" key={items.id}>
              <div className="title">
                <h5>{items.id}</h5>
                 <h5>{items.title}</h5>
              </div>
              <p>{items.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default secondSection;
