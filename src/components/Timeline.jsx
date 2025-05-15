import React from "react";
import "./Timeline.css";
import { useNavigate } from "react-router-dom";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Timeline = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="timeline-page">
        <div className="timeline-heading">
          <h3>Our Timeline</h3>
        </div>

        <div
          className="timeline-container">
          <DotLottieReact
            className="Happy-birthday-animation"
            src="\animations\Eyes.lottie"
            loop
            autoplay
          />
          <p className="date">
            27<sup>th</sup> November 2023
          </p>
          <p className="story violet">
            Wo din jab maine tumhe pehli baar dekha tha. Shreemad Bhagwat Katha
            ka wo aakhri din mere liye kuch aur hi ban gaya — bas ek katha ka
            ant hua, aur hamri kahani ki shuruaat ho gayi. 💫
          </p>
          <div className="line"></div>
        </div>
        <div
          className="timeline-container"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-offset="200">
          <DotLottieReact
            className="Happy-birthday-animation"
            src="\animations\Chocolate.lottie"
            loop
            autoplay
          />
          <p className="date">
            27<sup>th</sup> December 2023
          </p>
          <p className="story indigo">
            Jab main pehli baar tumse milne tumhare college aaya tha. Aur kya
            kamaal ka coincidence tha — hum dono ek dusre ke liye chocolates
            lekar aaye the! 🍫 Lekin us din tumhare haathon se bana hua gajar ka
            halwa… woh mere liye sirf ek sweet nahi, meri favourite dish ban
            gaya.❤️
          </p>
          <div className="line"></div>
        </div>
        <div
          className="timeline-container"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-offset="200">
          <DotLottieReact
            className="Happy-birthday-animation"
            src="\animations\BikeRide.lottie"
            loop
            autoplay
          />
          <p className="date">
            27<sup>th</sup> December 2023
          </p>
          <p className="story blue">
            Jab hum pehli baar tumhari scooty se Iserthuni ke Panchmukhi Shree
            Ganesh Mandir ghumne gaye the — wo ride, aur wo khushi… sab kuch
            milkar meri zindagi ka ek sabse khoobsurat pal ban gaya. 🚦🛵💫
          </p>
          <div className="line"></div>
        </div>
        <div
          className="timeline-container"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-offset="200">
          <DotLottieReact
            className="Happy-birthday-animation"
            src="\animations\Movie.lottie"
            loop
            autoplay
          />
          <p className="date">
            21<sup>st</sup>March 2024
          </p>
          <p className="story green">
            Jab hum pehli baar sath me movie🎬 dekhne gaye the. Log theatre mein
            story dekh rahe the, aur main? Mujhe to aaj tak yaad hi nahi movie
            kis baare mein thi😅 — kyunki mera pura concentration sirf tum par
            tha.❤️
          </p>
          <div className="line"></div>
        </div>
        <div
          className="timeline-container"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-offset="200">
          <DotLottieReact
            className="Happy-birthday-animation"
            src="\animations\Propose.lottie"
            loop
            autoplay
          />
          <p className="date">
            27<sup>th</sup> July 2024
          </p>
          <p className="story yellow">
            jab maine pehli baar tumhe Snapchat par propose kiya tha. I know,
            propose karne ka tareeka thoda ajeeb bhi ho sakta hai. 😅 Lekin usme
            meri saari himmat thi, saara pyaar tha 💌📱.
          </p>
          <div className="line"></div>
        </div>
        <div
          className="timeline-container"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-offset="200">
          <DotLottieReact
            className="Happy-birthday-animation"
            src="\animations\House.lottie"
            loop
            autoplay
          />
          <p className="date">
            4<sup>th</sup> March 2025
          </p>
          <p className="story orange">
            Jab main pehli baar apni family ke saath tumhare ghar aaya. Us din
            kuch alag hi feeling thi — thoda sharmaana, thoda excitement, aur
            dil ke kone mein ek chhoti si khushi… ki sab kuch ek nayi shuruaat
            ki taraf badh raha hai. 🏡✨
          </p>
          <div className="line"></div>
        </div>
        <div
          className="timeline-container"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-offset="200">
          <DotLottieReact
            className="Happy-birthday-animation"
            src="\animations\Gift.lottie"
            loop
            autoplay
          />
          <p className="date">
            10<sup>th</sup> June 2025
          </p>
          <p className="story red">
            Aaj ka din tumhare liye bohot special ho. Tum hamesha khush raho,
            safal raho aur life mein jitni chizein chaho, sab milein. Isi tarah
            muskurate raho, grow karte raho. May this year bring you lots of
            happiness and peace! 🌟
          </p>
          <div className="line"></div>
        </div>
        <div
          className="timeline-container"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-offset="200">
          <DotLottieReact
            className="Happy-birthday-animation"
            src="\animations\Loading.lottie"
            loop
            autoplay
          />
          <p className="date">Future is loading...</p>
          <p className="story beige">
            Or jab main future ki baat karta hoon… toh usme sirf ek chehra hota
            hai — tumhara💖. Main tumhara har ek dream pura karne mein tumhara
            saath dena chahta hoon, har kadam par tumhare saath chalna chahta
            hoon. 💫❤️
          </p>
        </div>
        <div className="button-tag">
          <span onClick={handleClick} className="back-button">
            <p className="button-text">Home Page</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Timeline;
