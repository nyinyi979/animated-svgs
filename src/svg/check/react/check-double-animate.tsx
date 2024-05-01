"use client"
import React from "react";
import { motion } from "framer-motion";
export default function CheckDoubleAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        path: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            path: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            path: 1,
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
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}}  
                    d="M808.762 289.351C827.181 266.838 823.863 233.657 801.351 215.238C778.838 196.819 745.657 200.137 727.238 222.649L375.209 652.907L244.933 555.2C221.664 537.748 188.652 542.464 171.2 565.733C153.748 589.003 158.464 622.015 181.733 639.467L319.678 742.926C360.547 773.577 418.313 766.566 450.662 727.028L808.762 289.351Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}