"use client"
import React from "react"
import {motion} from "framer-motion"

export default function VideoAnimate(){
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
                <path d="M766.211 511.106L343.07 299.535C342.272 299.136 341.333 299.716 341.333 300.608V723.392C341.333 724.284 342.272 724.864 343.07 724.465L766.211 512.895C766.948 512.526 766.948 511.474 766.211 511.106Z" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}