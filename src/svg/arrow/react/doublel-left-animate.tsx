"use client"
import React from "react"
import { motion } from "framer-motion"

export default function DoubleLLeftAnimate(){
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
                    d="M938.667 597.333H426.666V767.565C426.666 767.736 426.466 767.828 426.336 767.717L128 512L426.336 256.283C426.466 256.172 426.666 256.264 426.666 256.435V426.667H938.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}