"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Filter3Animate(){
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
                <path d="M512 298.667L853.333 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M170.667 298.667L341.333 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M725.333 725.333L853.333 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M170.667 725.333L512 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="426.667" cy="298.666" rx="85.3333" ry="85.3333" transform="rotate(90 426.667 298.666)" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="640" cy="725.333" rx="85.3333" ry="85.3333" transform="rotate(90 640 725.333)" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}