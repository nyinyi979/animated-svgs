"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Flag1Animate(){
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
                    d="M256 554.667V214.028C256 213.711 256 213.553 256.104 213.478C256.208 213.403 256.358 213.453 256.658 213.553L766.577 383.526C767.165 383.722 767.459 383.82 767.459 384.001C767.459 384.181 767.165 384.279 766.577 384.475L256 554.667ZM256 554.667V768.001V810.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}