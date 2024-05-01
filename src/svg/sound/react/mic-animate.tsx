"use client"
import React from "react"
import { motion } from "framer-motion"

export default function MicAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0],
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
                <motion.rect 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    x="384" y="128" width="256" height="469.333" rx="3" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M246 469.333C246 539.881 274.025 607.539 323.91 657.424C373.794 707.308 441.452 735.333 512 735.333C582.548 735.333 650.206 707.308 700.09 657.424C749.975 607.539 778 539.881 778 469.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 896V810.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}