"use client"
import React from "react"
import { motion } from "framer-motion"

export default function ArrowDownAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
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
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 768L504.929 775.071L512 782.142L519.071 775.071L512 768ZM522 256C522 250.477 517.523 246 512 246C506.477 246 502 250.477 502 256L522 256ZM334.262 604.404L504.929 775.071L519.071 760.929L348.404 590.262L334.262 604.404ZM519.071 775.071L689.738 604.404L675.596 590.262L504.929 760.929L519.071 775.071ZM522 768L522 256L502 256L502 768L522 768Z" fill="black"/>
            </motion.svg>
        </div>
    )
}