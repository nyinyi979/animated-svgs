"use client"
import React from "react"
import { motion } from "framer-motion"

export default function AlarmClock1Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        rotate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            rotate: Math.random()*80,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            rotate: 0,
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
                <ellipse cx="512" cy="554.667" rx="298.667" ry="298.667" stroke="black" strokeWidth="20"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.333 213.333L128 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M810.667 213.333L896 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{rotate:0}}
                    animate={{rotate:animationValue.rotate}}
                    d="M384 469.333L511.809 554.54C511.917 554.611 512.062 554.589 512.143 554.488L597.333 448" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}