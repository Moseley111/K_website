import HeroVid from "../../media/guitarist-original_greyscale-no-audio.mp4";
// import ReactPlayer from 'react-player'
import { useEffect, useRef } from "react";
import { HeroCTA } from "../subComp/HeroCTA";
export const Hero = () => {
  
  
//   React video issue: https://github.com/facebook/react/issues/10389
// This will need testing on a diffrent browser using https site, had to change firefox setting to get video to play
// react-vid may become usefull when showing youtube/facebook content 
    // const vidHTML =`<video loop muted autoplay playsInline><source src="${HeroVid}" type="video/mp4"/></video>`;
    
    return (
    <section className="hero">
            <HeroCTA/>

     <div className="hero-vid-overlay_container rndColour-bg"></div>
     {/* <ReactPlayer url={HeroVid} muted={true} playing={true} autoPlay={true} volume={0} playsinline={true}  onReady={(e) => {
    const player = e.getInternalPlayer();
    player.setAttribute('muted', 'true');
    // player.setAttribute('autoplay', 'true')
  }}/> */}
      <video
        height="100%"
        width="100%"
        autoPlay={true} playsInline={true} loop={true} muted={true}
        // ref={heroVid}
        // src={HeroVid} 
        className="hero-vid"
        >
        <source src={HeroVid}  type="video/mp4" />
      </video>
    {/* //   <div dangerouslySetInnerHTML ={{ __html: vidHTML}}/> */}
    </section>
  );
};
