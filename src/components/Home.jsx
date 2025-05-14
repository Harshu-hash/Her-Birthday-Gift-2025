import React from "react";
import "./Home.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  return <>
  <div className="home-page">
    <div className="banner">

    
  <p className="banner-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam recusandae, quisquam quidem reprehenderit, ullam id totam!</p>
  <DotLottieReact className="Happy-birthday-animation" src="\animations\HappyBirthday.lottie" loop autoplay />
  </div>
  </div>
  </>;
};

export default Home;
