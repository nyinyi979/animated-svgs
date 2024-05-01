"use client"
import React from "react"
import { motion } from "framer-motion"

export default function UserCircleAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotateX: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotateX: [0],
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
                animate={{scale:animationValue.scale,rotateX:animationValue.rotateX}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M841.703 872.409C822.256 817.975 779.403 769.874 719.791 735.568C660.179 701.262 587.14 682.667 512 682.667C436.861 682.666 363.822 701.262 304.21 735.568C244.598 769.874 201.745 817.975 182.298 872.409" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="512" cy="341.333" rx="170.667" ry="170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}