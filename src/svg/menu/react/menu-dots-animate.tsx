"use client"
import React from "react"
import {motion} from "framer-motion"

export default function MenuDotsAnimate(){
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
                <circle cx="512" cy="512" r="42.6667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="256" cy="512" rx="42.6667" ry="42.6667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="768" cy="512" rx="42.6667" ry="42.6667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}