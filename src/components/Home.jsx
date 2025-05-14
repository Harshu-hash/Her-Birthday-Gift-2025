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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam
            recusandae, quisquam quidem reprehenderit, ullam id totam!
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
      </div>
    </>
  );
};

export default Home;
