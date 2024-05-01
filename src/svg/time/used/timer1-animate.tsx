"use client"
import React from "react"
import { motion } from "framer-motion"

export default function Timer1Animate(){
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
                <ellipse cx="512" cy="597.333" rx="341.333" ry="341.333" stroke="black" strokeWidth="20"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 597.333L512 469.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M746.667 320L810.667 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M429.574 101.145C434.436 96.6092 445.149 92.6008 460.052 89.742C474.955 86.8831 493.215 85.3335 512 85.3335C530.785 85.3335 549.045 86.8831 563.948 89.742C578.851 92.6008 589.564 96.6092 594.426 101.145" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}