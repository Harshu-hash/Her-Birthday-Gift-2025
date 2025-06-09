import React from "react";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom'
import "./Home.css";
import us from "/images/1743332704262.webp.png";
import hearts from "/images/two hearts.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const Home = () => {

  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/timeline')
  }


  const handleClickProposal = () => {
    navigate("/proposal");
  };
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
            "Neha &#10084;&#65039;, Tum wo pehli ladki ho jisse maine itni dil
            se baatein ki hai, jiske saath mene apni har khushi, har takleef
            share ki hai. Tum mere liye sirf special nahi ho — tum meri zindagi
            ka wo hissa ho jiske saath me apna pura future dekhna chahta hu."
          </p>
        </div>

        <div className="two-hearts">
          <audio ref={audioRef} src="/song/tere_hawaale_flute_ver.mp3" />
          <img
            src={hearts}
            alt="Play Music"
            className="hearts"
            onClick={handlePlay}
          />
        </div>

        <div className="humour eye-qoute">
          <p>
            Wese to ye sab banane se pehle mene bohot socha… ki karu ya nhi?
            Tumhe pasand aayega ya nhi? Kahi tum gussa to nhi ho jaogi?😅 Isliye
            mene zyada photos ka use nahi kiya😅. Lekin phir socha, chalo thoda
            sa risk to hero bhi le sakta hai… warna story boring ho jayegi naa!
          </p>
          <p>
            Kher ye sab to thik hai… lekin asli magic to niche chhupa hai! 😏👇
            mene hum dono ki ek choti si, pyaari si timeline banayi hai. I hope
            tumhe pasand aaye😅🤌.
          </p>
        </div>
        <div className="timeline">
          <button onClick={handleClick} className="button">
            <div className="dots_border"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="sparkle">
              <path
                className="path"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="black"
                fill="black"
                d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path>
              <path
                className="path"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="black"
                fill="black"
                d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path>
              <path
                className="path"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="black"
                fill="black"
                d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path>
            </svg>
            <span className="text_button">Watch Timeline..........</span>
          </button>
        </div>

        <div className="Proposal-btn">
          <button onClick={handleClickProposal} className="ripple-btn">
            <i className="animation"></i>Proposal 👀<i class="animation"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
