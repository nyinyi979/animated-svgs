"use client"
import React from "react"
import {motion} from "framer-motion"

export default function CandleAnimate(){
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
                <path d="M341.333 128V256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M341.333 597.334V725.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <rect x="256" y="256" width="170.667" height="341.333" rx="20" stroke="black" strokeWidth="20"/>
                <path d="M682.666 298.666V511.999" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M682.666 725.332V853.332" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <rect x="597.333" y="512" width="170.667" height="213.333" rx="20" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}