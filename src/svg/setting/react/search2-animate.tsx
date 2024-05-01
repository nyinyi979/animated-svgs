"use client"
import React from "react"
import { motion } from "framer-motion"

export default function Search2Animate(){
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
                <motion.circle 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    cx="469.333" cy="469.333" r="298.667" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M469.333 341.333C452.524 341.333 435.879 344.644 420.35 351.077C404.82 357.509 390.709 366.938 378.824 378.824C366.938 390.709 357.509 404.82 351.077 420.35C344.644 435.879 341.333 452.524 341.333 469.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M853.333 853.333L725.333 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}