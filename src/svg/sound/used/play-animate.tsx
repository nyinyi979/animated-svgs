"use client"
import React from "react"
import { motion } from "framer-motion"

export default function PlayAnimate(){
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
                    d="M766.211 511.105L343.07 299.535C342.272 299.136 341.333 299.716 341.333 300.608V723.391C341.333 724.284 342.272 724.864 343.07 724.465L766.211 512.894C766.948 512.526 766.948 511.474 766.211 511.105Z" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}