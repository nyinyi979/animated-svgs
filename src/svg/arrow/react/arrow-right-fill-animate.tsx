"use client"
import React from "react"
import {motion} from "framer-motion"

export default function ArrowRightFillAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
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
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M810.219 511.776L214.491 213.912C213.959 213.646 213.333 214.033 213.333 214.628V809.372C213.333 809.967 213.959 810.354 214.491 810.088L810.219 512.224C810.404 512.131 810.404 511.868 810.219 511.776Z" fill="black"/>
            </motion.svg>
        </div>
    )
}