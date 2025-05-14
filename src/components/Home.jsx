import React from "react";
import "./Home.css";
import us from "/images/1743332704262.webp.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="banner">
          <p className="banner-heading">
            Wishing the most beautiful girl — inside and out — the happiest
            birthday. You deserve all the love this world can give...
          </p>
          <DotLottieReact
            className="Happy-birthday-animation"
            src="\animations\HappyBirthday.lottie"
            loop
            autoplay
          />
        </div>

        <div className="our-photo">
          <img src={us} alt="" className="us" />
        </div>
        <div className="eye-qoute">
          <p>
            "In your eyes, I see everything I never knew I was searching for —
            calm, fire, and a love that silences the noise of the world."
          </p>
        </div>
        <div className="last-qoute">
          <p>
            "Neha &#10084;&#65039;, Tum wo pehli ladki ho jisse maine itni dil se baatein ki hain, jiske saath maine apni har khushi, har takleef share ki hai. Tum mere liye sirf special nahi ho — tum meri zindagi ka wo hissa ho jiske saath main apna pura future dekhna chahta hoon."
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
