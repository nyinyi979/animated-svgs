"use client"
import React from "react"
import { motion } from "framer-motion"

export default function MapAnimate(){
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
                    transition={{duration:.4}}
                    d="M896 725.029V213.998C896 213.68 895.678 213.462 895.383 213.58L682.802 298.613C682.714 298.648 682.617 298.654 682.526 298.631L341.475 213.369C341.383 213.346 341.286 213.352 341.198 213.387L128.283 298.553C128.112 298.622 128 298.787 128 298.971V810.002C128 810.32 128.322 810.538 128.617 810.42L341.198 725.387C341.286 725.352 341.383 725.346 341.474 725.369L682.526 810.631C682.617 810.654 682.714 810.648 682.802 810.613L895.717 725.446C895.888 725.378 896 725.213 896 725.029Z" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{duration:.6}}
                    d="M682.667 810.667V298.667" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{duration:.6}}
                    d="M341.333 725.333L341.333 213.333" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}