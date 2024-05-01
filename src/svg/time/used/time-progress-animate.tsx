"use client"
import React from "react"
import { motion } from "framer-motion"

export default function TimeProgressAnimate(){
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
                <path d="M263.57 263.57C206.094 321.045 170.326 396.672 162.358 477.563C154.391 558.455 174.719 639.606 219.877 707.19C265.035 774.775 332.23 824.61 410.013 848.205C487.796 871.8 571.354 867.695 646.449 836.59C721.545 805.484 783.532 749.303 821.848 677.617C860.165 605.932 872.44 523.179 856.582 443.458C840.725 363.737 797.716 291.981 734.883 240.416C672.051 188.85 593.283 160.667 512 160.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 512L256 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 128V213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M896 512L810.667 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 810.667V896" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.333 512L128 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}