"use client"
import React from "react"
import {motion} from "framer-motion"

export default function ArrowLeftLAnimate(){
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
                    d="M170.667 512L163.596 504.929L156.525 512L163.596 519.071L170.667 512ZM810.667 522C816.19 522 820.667 517.523 820.667 512C820.667 506.477 816.19 502 810.667 502V522ZM419.596 248.929L163.596 504.929L177.738 519.071L433.738 263.071L419.596 248.929ZM163.596 519.071L419.596 775.071L433.738 760.929L177.738 504.929L163.596 519.071ZM170.667 522H810.667V502H170.667V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}