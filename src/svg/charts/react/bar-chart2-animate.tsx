"use client"
import React from "react"
import { motion } from "framer-motion"

export default function BarChart2Animate(){
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
                    d="M341.333 426.666L341.333 682.666" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 512V682.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M682.667 341.334V682.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="128" y="170.666" width="768" height="682.667" rx="20" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}