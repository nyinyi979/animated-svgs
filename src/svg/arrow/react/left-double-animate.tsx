"use client"
import React from "react"
import { motion } from "framer-motion"

export default function LeftDoubleAnimate(){
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
                    d="M512 768L256 512L512 256" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M768 768L512 512L768 256" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}