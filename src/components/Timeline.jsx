import React from 'react'
import './Timeline.css'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const Timeline = () => {
  return (
    <>
      <div className="timeline-page">
        <div className="timeline-heading">
          <h3>Our Timeline</h3>
        </div>
        <DotLottieReact
          className="Happy-birthday-animation"
          src="\animations\Eyes.lottie"
          loop
          autoplay
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          explicabo fugit commodi quidem voluptas quia cupiditate suscipit
          eveniet quas et, possimus facilis aspernatur asperiores amet
          dignissimos ipsa, minima voluptatem doloribus ex blanditiis in quasi
          quisquam? Eum illo reiciendis adipisci, error aspernatur corporis
          dolorem nihil exercitationem temporibus iusto dignissimos mollitia
          quam accusantium ex dolore! Sapiente rem autem, ab doloribus iure
          fugit?{" "}
        </p>
      </div>
    </>
  );
}

export default Timeline
