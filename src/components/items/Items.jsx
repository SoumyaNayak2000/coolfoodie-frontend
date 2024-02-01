import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/items.scss";

import item1 from "../../assets/item1.jpg";
import item2 from "../../assets/item2.jpg";
import item3 from "../../assets/item3.jpg";
import item4 from "../../assets/item3.jpg";
import item5 from "../../assets/item5.jpg";
import item6 from "../../assets/item6.jpg";
import item7 from "../../assets/item7.jpg";

const Items = () => {
  return (
    <div id="items">
      <section>
        <article>
          <h2>Bridging the Gap Between Ideas and Reality.</h2>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            <div key="1" className="item">
              <img src={item1} alt="dinner" />
            </div>
            <div key="2" className="item">
              <img src={item2} alt="lunch" />
            </div>
            <div key="3" className="item">
              <img src={item3} alt="lunch" />
            </div>
            <div key="4" className="item">
              <img src={item5} alt="dinner" />
            </div>
            <div key="5" className="item">
              <img src={item6} alt="dinner" />
            </div>
            <div key="6" className="item">
              <img src={item7} alt="dinner" />
            </div>
            <div key="7" className="item">
              <img src={item4} alt="dinner" />
            </div>
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Items;
