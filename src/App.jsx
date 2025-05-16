import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import welcome from "/images/welcome.png";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Timeline from "./components/Timeline";
import { Analytics } from "@vercel/analytics/react";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
  ]);
  // Check input code
  const handleUnlock = (e) => {
    e.preventDefault();
    if (code === "1234") {
      setUnlocked(true);
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
