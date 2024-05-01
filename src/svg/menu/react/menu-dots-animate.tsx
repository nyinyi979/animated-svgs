"use client"
import React from "react"
import { motion } from "framer-motion"

export default function MenuDotsAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        eScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            eScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            eScale: 1,
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
                    initial={{scale:0}}
                    animate={{scale:[animationValue.eScale,1]}}
                    cx="512" cy="512" r="42.6667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.ellipse 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.eScale,1]}}
                    cx="256" cy="512" rx="42.6667" ry="42.6667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.ellipse 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.eScale,1]}}
                    cx="768" cy="512" rx="42.6667" ry="42.6667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}