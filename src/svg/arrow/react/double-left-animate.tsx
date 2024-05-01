"use client"
import React from "react"
import { motion } from "framer-motion"

export default function DoubleLeftAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
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
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M810.666 640L512 640L512 810.184C512 810.362 511.784 810.451 511.658 810.325L213.333 512L511.658 213.675C511.784 213.549 512 213.638 512 213.816L512 384L810.666 384" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}