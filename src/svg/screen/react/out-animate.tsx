"use client"
import React from "react"
import { motion } from "framer-motion"

export default function OutAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-20,0],
            translateY: [0,-30,0],
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
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}}
                    d="M128 128V118H118V128H128ZM547.596 561.738C551.501 565.643 557.833 565.643 561.738 561.738C565.643 557.833 565.643 551.501 561.738 547.596L547.596 561.738ZM138 469.333V128H118V469.333H138ZM128 138H469.333V118H128V138ZM120.929 135.071L547.596 561.738L561.738 547.596L135.071 120.929L120.929 135.071Z" fill="black"/>
                <path d="M170.667 640V847.333C170.667 850.162 170.667 851.576 171.545 852.455C172.424 853.333 173.838 853.333 176.667 853.333H847.333C850.162 853.333 851.576 853.333 852.455 852.455C853.333 851.576 853.333 850.162 853.333 847.333V176.667C853.333 173.838 853.333 172.424 852.455 171.545C851.576 170.667 850.162 170.667 847.333 170.667H640" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}