import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Timeline from './components/Timeline';
import { Analytics } from "@vercel/analytics/react";

import { useEffect } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

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

  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
    </>
  );
};

export default App
