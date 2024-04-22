"use client"
import React from "react"
import {motion} from "framer-motion"

export default function CurveLeftAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg 
                initial={{scale:1}}
                animate={{scale:animationValue.scale}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path 
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M170.667 341.333L163.596 348.404L156.525 341.333L163.596 334.262L170.667 341.333ZM671.333 810.667L671.333 800.667L671.333 810.667ZM384 820.667C378.477 820.667 374 816.19 374 810.667C374 805.144 378.477 800.667 384 800.667L384 820.667ZM376.929 561.738L163.596 348.404L177.738 334.262L391.071 547.596L376.929 561.738ZM163.596 334.262L376.929 120.929L391.071 135.071L177.738 348.404L163.596 334.262ZM170.667 331.333L671.333 331.333L671.333 351.333L170.667 351.333L170.667 331.333ZM863.333 523.333L863.333 628.667L843.333 628.667L843.333 523.333L863.333 523.333ZM671.333 820.667L384 820.667L384 800.667L671.333 800.667L671.333 820.667ZM863.333 628.667C863.333 734.705 777.372 820.667 671.333 820.667L671.333 800.667C766.326 800.667 843.333 723.66 843.333 628.667L863.333 628.667ZM671.333 331.333C777.372 331.333 863.333 417.295 863.333 523.333L843.333 523.333C843.333 428.34 766.326 351.333 671.333 351.333L671.333 331.333Z" fill="black"/>
            </motion.svg>
        </div>
    )
}