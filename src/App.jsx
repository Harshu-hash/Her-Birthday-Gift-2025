import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import welcome from "/images/welcome.png";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Timeline from "./components/Timeline";
import { Analytics } from "@vercel/analytics/react";
import emailjs from "@emailjs/browser";


import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProposalPage from "./components/ProposalPage";

function App() {

  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/timeline",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Timeline />
          <Footer />
        </>
      ),
    },
    {
      path: "/proposal",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <ProposalPage />
          <Footer />
        </>
      ),
    },
  ]);
  // Check input code
  const handleUnlock = (e) => {
    e.preventDefault();
    if (code === "Nehe@rt<3") {
      setUnlocked(true);

      // Send email
      emailjs
        .send(
          "service_d8of1rf", // Replace with your EmailJS service ID
          "template_tcxlrh8", // Replace with your template ID
          {
            to_name: "Harshvardhan",
            from_name: "Website Login",
            message: "The website was accessed using the secret code.",
          },
          "hmaRsVlaC5M0vGJJY" // Replace with your public user ID
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
          },
          (error) => {
            console.log("Email error:", error.text);
          }
        );
    } else {
      alert("Wrong code!");
    }
  };

  // Show code entry screen until unlocked
  if (!unlocked) {
    return (
      <div className="login-page">
        <div className="create-animation">
          <img src={welcome} alt="" className="wlcm-cntanr welcome-img" />
          {/* <DotLottieReact
            className="wlcm-cntanr welcome-animation"
            src="\animations\Celebration.lottie"
            loop
            autoplay
          /> */}
        </div>
        <form onSubmit={handleUnlock} className="login-form">
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-input"
            placeholder="   Enter Secret Code"
          />
          <button type="submit" className="login-button">
            Enter
          </button>
        </form>
      </div>
    );
  }

  // If unlocked, show actual app
  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
