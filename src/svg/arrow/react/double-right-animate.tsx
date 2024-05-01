"use client"
import React from "react"
import { motion } from "framer-motion"

export default function DoubleRightAnimate(){
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
                    d="M213.333 384H512V213.816C512 213.638 512.216 213.549 512.342 213.675L810.667 512L512.342 810.325C512.216 810.451 512 810.362 512 810.184V640H213.333" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}