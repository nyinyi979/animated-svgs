"use client"
import React from "react"
import { motion } from "framer-motion"

export default function Chat1Animate(){
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
                <path d="M824.571 246.516C853.333 289.562 853.333 349.486 853.333 469.334C853.333 589.181 853.333 649.105 824.571 692.151C812.119 710.786 796.119 726.786 777.484 739.238C739.88 764.364 689.395 767.541 597.333 767.942V768L550.162 862.343C534.439 893.79 489.562 893.79 473.838 862.342L426.667 768V767.942C334.605 767.541 284.12 764.364 246.516 739.238C227.881 726.786 211.881 710.786 199.429 692.151C170.667 649.105 170.667 589.181 170.667 469.334C170.667 349.486 170.667 289.562 199.429 246.516C211.881 227.881 227.881 211.881 246.516 199.43C289.562 170.667 349.486 170.667 469.333 170.667H554.667C674.514 170.667 734.438 170.667 777.484 199.43C796.119 211.881 812.119 227.881 824.571 246.516Z" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 384L640 384" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 554.667H512" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}