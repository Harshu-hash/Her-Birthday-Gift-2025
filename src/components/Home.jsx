import React from "react";
import "./Home.css";
import us from "/images/1743332704262.webp.png";
import hearts from '/images/two hearts.png'
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

        <div className="two-hearts">
          <img src={hearts} alt="" className="hearts" />
        </div>

        <div className="humour eye-qoute">
          <p>
            Wese to ye sab banane se pehle maine bohot socha… ki karun ya nhi? Tumhe pasand aayega ya nahi? Kahi tum gussa to nahi ho jaogi?😅 Isliye maine zyada photos ka use nahi kiya😅. Lekin phir socha, chalo thoda sa risk to hero bhi le sakta hai… warna story boring ho jaayegi na!
          </p>
          <p>
            Kher ye sab to thik hai… lekin asli magic to niche chhupa hai! 😏👇 maine hum dono ki ek choti si, pyaari si timeline banayi hai. I hope tumhe pasand aaye😅🤌.

          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
