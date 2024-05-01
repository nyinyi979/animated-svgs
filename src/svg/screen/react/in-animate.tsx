"use client"
import React from "react"
import { motion } from "framer-motion"

export default function InAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,20,0],
            translateY: [0,30,0],
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
                <path d="M128 384V890C128 892.828 128 894.243 128.879 895.121C129.757 896 131.172 896 134 896H890C892.828 896 894.243 896 895.121 895.121C896 894.243 896 892.828 896 890V134C896 131.172 896 129.757 895.121 128.879C894.243 128 892.828 128 890 128H384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}}
                    d="M640 640V650H650V640H640ZM305.738 291.596C301.832 287.69 295.501 287.69 291.596 291.596C287.69 295.501 287.69 301.832 291.596 305.738L305.738 291.596ZM630 341.333V640H650V341.333H630ZM640 630H341.333V650H640V630ZM647.071 632.929L305.738 291.596L291.596 305.738L632.929 647.071L647.071 632.929Z" fill="black"/>
            </motion.svg>
        </div>
    )
}