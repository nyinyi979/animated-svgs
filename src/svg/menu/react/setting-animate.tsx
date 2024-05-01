"use client"
import React from "react"
import { motion } from "framer-motion"

export default function SettingAnimate(){
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
                <path d="M256 512L256 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[1]}}
                    d="M512 341.333L512 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M256 810.667L256 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M768 810.667L768 725.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M512 810.667L512 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[1]}}
                    d="M426.667 341.333H597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M170.667 682.667H341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M682.667 725.333H853.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M768 554.667L768 213.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}