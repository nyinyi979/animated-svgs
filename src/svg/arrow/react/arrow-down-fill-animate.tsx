"use client"
import React from "react"
import { motion } from "framer-motion"

export default function ArrowDownFillAnimate(){
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
                    d="M511.181 724.163L214.875 300.87C214.226 299.942 214.89 298.667 216.022 298.667L807.978 298.667C809.11 298.667 809.774 299.942 809.125 300.87L512.819 724.163C512.421 724.732 511.579 724.732 511.181 724.163Z" fill="black"/>
            </motion.svg>
        </div>
    )
}