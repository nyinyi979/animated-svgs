"use client"
import React from "react"
import {motion} from "framer-motion"

export default function FullScreen4Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [30,-30],
            translateY: [40,-40],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
            translateY: [0],
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
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[0],translateY:animationValue.translateY[0]}}
                    d="M341.333 128H131C129.586 128 128.879 128 128.439 128.439C128 128.879 128 129.586 128 131V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[0],translateY:animationValue.translateY[1]}}
                    d="M341.333 896H131C129.586 896 128.879 896 128.439 895.561C128 895.121 128 894.414 128 893V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[1],translateY:animationValue.translateY[0]}}
                    d="M682.667 128H893C894.414 128 895.121 128 895.561 128.439C896 128.879 896 129.586 896 131V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[1],translateY:animationValue.translateY[1]}}
                    d="M682.667 896H893C894.414 896 895.121 896 895.561 895.561C896 895.121 896 894.414 896 893V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}