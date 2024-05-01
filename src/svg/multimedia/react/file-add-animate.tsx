"use client"
import React from "react"
import { motion } from "framer-motion"

export default function FileAddAnimate(){
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
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 554.667L640 554.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 384L554.667 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 725.333L554.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 554.667V890C810.667 892.828 810.667 894.243 809.788 895.121C808.909 896 807.495 896 804.667 896H219.333C216.505 896 215.091 896 214.212 895.121C213.333 894.243 213.333 892.828 213.333 890V134C213.333 131.172 213.333 129.757 214.212 128.879C215.091 128 216.505 128 219.333 128H469.333" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{scale:1}} animate={{scale:animationValue.scale}}
                    d="M768 128L768 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{scale:1}} animate={{scale:animationValue.scale}}
                    d="M896 256L640 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}