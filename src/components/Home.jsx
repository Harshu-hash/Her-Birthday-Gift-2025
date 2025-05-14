import React from 'react'
import './Home.css'
// import anim from './Animation - 1747210967603.lottie'
import illus from '/air balloon with clouds.png'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {
  return (
  <>
    <DotLottieReact
      src='/Animation-1747210967603.lottie'
      loop
      autoplay
    />
    <div>
      <img src={illus} alt="" />
    </div>
</>
  );
};

export default Home
