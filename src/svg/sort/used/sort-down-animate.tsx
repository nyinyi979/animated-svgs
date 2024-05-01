"use client"
import React from "react"
import { motion } from "framer-motion"

export default function SortDownAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            translateY: [0,50,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            translateY: [0],
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
                    d="M213.334 298.666H554.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.334 512H469.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.334 725.332H384.001" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M810.667 768L938.667 640M810.667 768L682.667 640M810.667 768L810.667 256" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}