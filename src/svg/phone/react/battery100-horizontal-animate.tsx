"use client"
import React from "react"
import { motion } from "framer-motion"

export default function Battery100HorizontalAnimate(){
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
                <path d="M982 620V404C982 392.954 973.046 384 962 384H870C858.954 384 850 392.954 850 404V620C850 631.046 858.954 640 870 640H962C973.046 640 982 631.046 982 620Z" fill="black"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M44 514L549 512" stroke="black" strokeWidth="500" strokeLinecap="square"/>
            </motion.svg>
        </div>
    )
}