"use client"
import React from "react"
import { motion } from "framer-motion"

export default function SortUp1Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            translateY: [0,-50,0],
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
                    d="M213.334 725.334H554.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.334 512H469.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.334 298.668H384.001" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M810.666 256L938.666 384M810.666 256L682.666 384M810.666 256L810.666 768" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}