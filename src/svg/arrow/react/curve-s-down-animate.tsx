"use client"
import React from "react"
import { motion } from "framer-motion"

export default function CurveSDownAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,40,0],
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
                    d="M597.333 853.333L590.262 860.405L597.333 867.476L604.404 860.405L597.333 853.333ZM256 160.667C250.477 160.667 246 165.144 246 170.667C246 176.19 250.477 180.667 256 180.667L256 160.667ZM376.929 647.071L590.262 860.405L604.404 846.262L391.071 632.929L376.929 647.071ZM604.404 860.405L817.738 647.071L803.596 632.929L590.262 846.262L604.404 860.405ZM607.333 853.333L607.333 176.667L587.333 176.667L587.333 853.333L607.333 853.333ZM591.333 160.667L256 160.667L256 180.667L591.333 180.667L591.333 160.667ZM607.333 176.667C607.333 167.83 600.17 160.667 591.333 160.667L591.333 180.667C589.124 180.667 587.333 178.876 587.333 176.667L607.333 176.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}