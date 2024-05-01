"use client"
import React from "react"
import { motion } from "framer-motion"

export default function Clipboard1Animate(){
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
                <rect x="170.667" y="213.333" width="682.667" height="682.667" rx="20" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M682.667 85.333L682.667 301.333C682.667 320.189 682.667 329.617 676.809 335.475C670.951 341.333 661.523 341.333 642.667 341.333L381.334 341.333C362.478 341.333 353.049 341.333 347.192 335.475C341.334 329.617 341.334 320.189 341.334 301.333L341.334 85.3332" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 597.333L640 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}