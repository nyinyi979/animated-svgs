"use client"
import React from "react"
import {motion} from "framer-motion"

export default function DoubleLRightAnimate(){
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
                    d="M85.3333 426.667H597.333V256.435C597.333 256.264 597.534 256.172 597.663 256.283L896 512L597.663 767.717C597.534 767.828 597.333 767.736 597.333 767.565V597.333H85.3333" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}