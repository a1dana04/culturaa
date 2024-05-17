import React from "react";
import btn1 from "../../assets/img/hero2btn.png";
import btn2 from "../../assets/img/herobtn2.png";
import gradi from "../../assets/img/herogradient.png";
import girl from "../../assets/img/hero-girl.png";
import phone from "../../assets/img/hero-phone.png";

const Hero2 = () => {
  return (
    <div id="hero2">
      <div className="container">
        <div className="hero2">
          <div className="hero2--block">
          <h1>
            Скачайте приложение <br />
            для посетителей <br />
            КЦ “Строгино”
          </h1>
          <div className="hero2--block__img">
            <div className="hero2--block__img--btn1">
              <img src={btn1} alt="" width={160} />
            </div>
            <div className="hero2--block__img--btn2">
              <img src={btn2} alt="" width={150} />
            </div>
          </div>
          </div>
          <div className="hero2--block2">
            <img src={gradi} alt="" width={495} />
            
          </div>
          <div className="hero2--block3">
            <img src={girl} alt="" width={600} />
            <div className="hero2--block3__phone">
                <img src={phone} alt="" width={200} />
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero2;
