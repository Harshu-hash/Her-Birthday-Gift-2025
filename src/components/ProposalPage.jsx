import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./ProposalPage.css";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser"; // ✅ Add this line

const ProposalPage = () => {
  const fireConfettiAndSendEmail = () => {
    // 🎉 Trigger confetti
    confetti({
      particleCount: 500,
      spread: 100,
      origin: { y: 0.6 },
    });

    // ✉️ Send email using EmailJS
    const templateParams = {
      to_name: "Harshu", // optional
      from_name: "She Said Yes!", // optional
      message: "She clicked YES on the proposal page! 💍🎉",
    };

    emailjs
      .send(
        "service_d8of1rf", // Replace with your EmailJS service ID
        "template_tcxlrh8", // Replace with your EmailJS template ID
        templateParams,
        "hmaRsVlaC5M0vGJJY" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div className="proposal-container">
      <DotLottieReact
        className="Happy-birthday-animation"
        src="\Animation - 1749405480885.lottie"
        loop
        autoplay
      />

      <div className="message-box">
        <p className="message">
          Jabse tumhe pehli baar dekha hena tabse tum mere liye bohot special
          ban gai ho.
          <br />
          I love you sooo muchhh ❤🫶🏻...
          <br />
          You are my universe 💗💞...
          <br />
          <br />
          There is just one more thing I want to ask...
        </p>

        <h1 className="proposal-text">💍 Will You Be My Ardhaangini?</h1>

        <div className="button-group">
          <button className="yes-btn" onClick={fireConfettiAndSendEmail}>
            Yes 💍
          </button>
          <button className="yes-btn" onClick={fireConfettiAndSendEmail}>
            Of course! ❤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;
