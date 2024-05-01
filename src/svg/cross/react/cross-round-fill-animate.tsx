"use client"
import React from "react";
import { motion } from "framer-motion";
export default function CrossRoundFillAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        path: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            path: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            path: 1,
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
                <circle cx="512" cy="512" r="384" fill="black"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}} d="M682.667 341.333L341.333 682.667" stroke="white" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}} d="M341.333 341.333L682.667 682.667" stroke="white" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}