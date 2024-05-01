"use client"
import React from "react"
import { motion } from "framer-motion"

export default function KeyRectAnimate(){
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
                <path d="M128 132C128 130.6 128 129.9 128.272 129.365C128.512 128.895 128.895 128.512 129.365 128.272C129.9 128 130.6 128 132 128H892C893.4 128 894.1 128 894.635 128.272C895.105 128.512 895.488 128.895 895.728 129.365C896 129.9 896 130.6 896 132V892C896 893.4 896 894.1 895.728 894.635C895.488 895.105 895.105 895.488 894.635 895.728C894.1 896 893.4 896 892 896H132C130.6 896 129.9 896 129.365 895.728C128.895 895.488 128.512 895.105 128.272 894.635C128 894.1 128 893.4 128 892V132Z" stroke="black" strokeWidth="20"/>
                <motion.circle 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    cx="341.333" cy="512" r="118" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M426.667 512H597.333M725.333 597.333V512.15C725.333 512.067 725.266 512 725.183 512H597.333M597.333 512V597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}