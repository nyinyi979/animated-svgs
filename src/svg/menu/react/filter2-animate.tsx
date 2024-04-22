"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Filter2Animate(){
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
                <path d="M469.333 341.333L853.333 341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M170.667 682.667L597.333 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="298.667" cy="341.333" rx="128" ry="128" transform="rotate(90 298.667 341.333)" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="725.333" cy="682.667" rx="128" ry="128" transform="rotate(90 725.333 682.667)" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}