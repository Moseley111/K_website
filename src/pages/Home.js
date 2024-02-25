import { Hero } from "../comp/sections/Hero"
import { SlidingText } from "../comp/sections/SlidingText"
import { Paralax } from "../comp/sections/Paralax"
import { GradientFromBottom } from "../comp/subComp/GradientFromBottom"
export const Home = () =>{
    return (<>
    <Hero/>
    {/* <GradientFromBottom/> */}
    <SlidingText/>
    <Paralax/>
    </>)
}