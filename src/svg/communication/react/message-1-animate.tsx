"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Message1Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotate: [0],
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg 
                initial={{scale:1,rotateX:0}}
                animate={{scale:animationValue.scale,rotateX:animationValue.rotate}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="170.667" y="256" width="682.667" height="512" rx="2" stroke="black" strokeWidth="20"/>
                <path d="M170.667 384L511.105 554.219C511.668 554.501 512.331 554.501 512.894 554.219L853.333 384" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>

    )
}