"use client"
import React from "react"
import { motion } from "framer-motion"

export default function MouseAnimate(){
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
                <path d="M213.333 370.666C213.333 276.386 213.333 229.245 242.623 199.956C271.912 170.667 319.052 170.667 413.333 170.667H610.667C704.948 170.667 752.088 170.667 781.377 199.956C810.667 229.245 810.667 276.386 810.667 370.667V856C810.667 874.856 810.667 884.284 804.809 890.142C798.951 896 789.523 896 770.667 896H253.333C234.477 896 225.049 896 219.191 890.142C213.333 884.284 213.333 874.856 213.333 856V370.666Z" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    d="M512 170.667V384" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}