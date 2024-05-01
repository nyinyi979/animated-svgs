"use client"
import React from "react"
import { motion } from "framer-motion"

export default function DoubleLTopAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
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
                    d="M426.667 938.667L426.667 426.666L256.435 426.666C256.264 426.666 256.172 426.466 256.283 426.336L512 128L767.717 426.336C767.828 426.466 767.736 426.666 767.565 426.666L597.333 426.666L597.333 938.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}