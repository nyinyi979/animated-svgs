"use client"
import React from "react"
import { motion } from "framer-motion"

export default function Message2Animate(){
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
                initial={{scale:1}}
                animate={{scale:animationValue.scale}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="170.667" y="256" width="682.667" height="512" rx="2" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{rotateY:0}}
                    animate={{rotateY:animationValue.rotate}}
                    d="M511.105 554.219L170.667 384V766C170.667 767.105 171.562 768 172.667 768H851.333C852.438 768 853.333 767.105 853.333 766V384L512.894 554.219C512.331 554.501 511.668 554.501 511.105 554.219Z" fill="black"/>
            </motion.svg>
        </div>
    )
}