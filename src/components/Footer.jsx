import { useState } from "react";
import emailjs from "@emailjs/browser";
import './Footer.css'

const SendMessageBox = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = () => {
    if (!message.trim()) return;

    const templateParams = {
      message,
    };

    emailjs
      .send(
        "service_d8of1rf", // Replace with your EmailJS service ID
        "template_tcxlrh8", // Replace with your EmailJS template ID
        templateParams,
        "hmaRsVlaC5M0vGJJY" // Replace with your EmailJS public key
      )
      .then(() => {
        setStatus("");
        setMessage("");
      })
      .catch(() => {
        setStatus("");
      });
  };

  return (
    <div className="footer-container">
      <div className="containe">
        <h4 className="ask-message">Any Message For Me?...</h4>
        <textarea
          className="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={sendEmail}>
          Send
        </button>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default SendMessageBox;
