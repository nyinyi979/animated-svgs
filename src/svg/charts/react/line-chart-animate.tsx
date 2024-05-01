"use client"
import React from "react"
import { motion } from "framer-motion"

export default function LineChartAnimate(){
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
                    d="M896 256L640.707 511.293C640.317 511.683 639.683 511.683 639.293 511.293L512.707 384.707C512.317 384.317 511.683 384.317 511.293 384.707L298.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M128 128V864C128 875.201 128 880.802 130.18 885.08C132.097 888.843 135.157 891.903 138.92 893.82C143.198 896 148.799 896 160 896H896" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}