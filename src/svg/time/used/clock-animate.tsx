"use client"
import React from "react"
import { motion } from "framer-motion"

export default function ClockAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: Math.random()*80,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
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
                <circle cx="512" cy="512" r="351.333" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{rotate:0}}
                    animate={{rotate:animationValue.rotate}}
                    d="M704 512H512.25C512.112 512 512 511.888 512 511.75V362.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}