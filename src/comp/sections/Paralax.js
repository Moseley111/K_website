import { useRef } from "react";
import { useIsInViewport } from "../../serv/isVisableHook";
import { Counter } from "../subComp/Counter";
import kevParalaxImg from '../../media/header03.jpg'
export const Paralax = () => {
    const paralaxSection = useRef();
    const paralaxSectionVisable = useIsInViewport(paralaxSection)
    console.log('paralaxSection visable ',paralaxSectionVisable)
    return(
        <section className="paralax">
            <div className="hero-vid-overlay_container rndColour-bg"></div>
            <img src={kevParalaxImg} alt="Kevin" style={{position:'fixed', bottom:'0', top:"0", left:"0", right:"0", zIndex:"-1"}}/>
            <div className="paralax-container rndColour">
            <div className="paralax-content paralax-content-top">
               {paralaxSectionVisable && <div><Counter label={"test"} number={"9000"} duration={2} plus={true}/>
               <Counter label={"test"} number={"9000"} duration={2} plus={true}/>
               <Counter label={"test"} number={"9000"} duration={2} plus={true}/>
               </div>
               }
            </div>    
            <div ref={paralaxSection} className="line"></div>
            <div className="paralax-content paralax-content-bottom"></div>
            </div>
        </section>
    )
}