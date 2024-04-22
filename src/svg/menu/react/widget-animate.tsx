"use client"
import React from "react"
import {motion} from "framer-motion"

export default function WidgetAnimate(){
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
                <rect x="85.3335" y="128" width="853.333" height="384" rx="20" stroke="black" strokeWidth="20"/>
                <path d="M682.667 768V813.333C682.667 832.189 682.667 841.617 676.809 847.475C670.951 853.333 661.523 853.333 642.667 853.333H381.333C362.477 853.333 353.049 853.333 347.191 847.475C341.333 841.617 341.333 832.189 341.333 813.333V768" stroke="black" strokeWidth="20"/>
                <path d="M810.667 597.334V642.667C810.667 661.523 810.667 670.951 804.809 676.809C798.951 682.667 789.523 682.667 770.667 682.667H253.333C234.477 682.667 225.049 682.667 219.191 676.809C213.333 670.951 213.333 661.523 213.333 642.667V597.334" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}