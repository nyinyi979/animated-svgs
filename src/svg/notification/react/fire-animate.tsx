"use client"
import React from "react"
import {motion} from "framer-motion"

export default function FireAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
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
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M405.333 426.679C405.333 392.907 360.415 383.955 348.498 415.555C319.671 491.993 298.667 560.373 298.667 597.342C298.667 715.163 394.179 810.676 512 810.676C629.821 810.676 725.333 715.163 725.333 597.342C725.333 557.624 701.089 481.649 668.947 398.378C627.31 290.508 606.491 236.573 580.793 233.668C572.57 232.739 563.599 234.41 556.262 238.238C533.333 250.203 533.333 309.028 533.333 426.679C533.333 462.025 504.68 490.679 469.333 490.679C433.987 490.679 405.333 462.025 405.333 426.679Z" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}