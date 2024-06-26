"use client"
import React from "react"
import { motion } from "framer-motion"

export default function MenuAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0,0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [-30,30],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0,0],
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
                <motion.rect 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    x="170.667" y="213.333" width="682.667" height="213.333" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.rect 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[1]}}
                    x="170.667" y="597.333" width="682.667" height="213.333" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}