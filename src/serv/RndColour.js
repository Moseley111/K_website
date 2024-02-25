import { useEffect, useState } from "react";

export const RndColour = () => {
    const [rndColour, setRndColour] = useState();
    const genRndColour = () =>{
        return '#'+ Math.floor(Math.random()*16777215).toString(16);
    }
    useEffect(()=>{
        const generatedColour = genRndColour()
        //  setRndColour(`.rndColour{border:solid ${generatedColour} 2px;border-radius:5px} .rndColour > *{color: ${generatedColour};} .rndColour-bg{background-color:${generatedColour}}`);
        setRndColour(`:root {--rndColour: ${genRndColour};} .rndColour{border:solid ${generatedColour} 2px;border-radius:5px} .rndColour-bg{background-color:${generatedColour}}`);

        console.log(rndColour)

    },[])

    return(<>
        <style>
            {rndColour}
        </style>
        </>
        )
}