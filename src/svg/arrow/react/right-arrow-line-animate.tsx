"use client"
import React from "react"
import { motion } from "framer-motion"

export default function RightArrowLineAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0],
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
                    d="M597.333 512L604.405 504.929L611.476 512L604.405 519.071L597.333 512ZM170.667 522C165.144 522 160.667 517.523 160.667 512C160.667 506.477 165.144 502 170.667 502V522ZM348.405 248.929L604.405 504.929L590.262 519.071L334.262 263.071L348.405 248.929ZM604.405 519.071L348.405 775.071L334.262 760.929L590.262 504.929L604.405 519.071ZM597.333 522H170.667V502H597.333V522Z" fill="black"/>
                <path d="M853.333 213.333L853.333 810.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}