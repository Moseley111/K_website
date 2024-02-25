import { useEffect, useState, useRef } from "react"
import {useIsInViewport} from '../../serv/isVisableHook'
import kev02 from "../../media/kev02.jpg"
import { Typewriter } from "react-simple-typewriter"
export const SlidingText = () => {
    const [showTypewriter, setShowTypewriter] = useState(false);
    const sectionRef = useRef();
    const isInViewport = useIsInViewport(sectionRef)
    const typewriterWords = ['word-1', 'word-2', 'word-3', 'word-4', 'word-5'];
    const [randomTypewriterWords, setRandomTypewiterWords] = useState(typewriterWords);

    useEffect(()=>{
       if(isInViewport){
        setRandomTypewiterWords(typewriterWords.sort(() => Math.random() - 0.5));
        
        setTimeout(()=>setShowTypewriter(true,2000))
       }else{
        setShowTypewriter(false)
       }
    },[isInViewport])
   
    console.log('section visable', isInViewport)
    return(
        <section  className="slide-text rndColour-bg">
            <div className="slide-text-container">
                <div className={isInViewport? "slide-text-el slideing slide-text-el-left": "slide-text-el slide-text-el-left"}>
                    <img src={kev02} alt="Kevin Phoenix" style={{width:"100%", height:"100%"}}/>
                </div>
            </div>
            <div ref={sectionRef} className="slide-text-container">
                <div className={isInViewport? "slide-text-el slideing slide-text-el-right": "slide-text-el slide-text-el-right"}>
                    <div className="slide-text-el-text">
                        <div ref={sectionRef} className="slide-text-el-text-heading">Hi, I'm Kev. An:</div>
                        <div className="line"></div>
                        <div className="slide-text-el-text-content">
                        {sectionRef && <Typewriter words={randomTypewriterWords} cursor={true} loop={true} cursorBlinking={true}/>}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}