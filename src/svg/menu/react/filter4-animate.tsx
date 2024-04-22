"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Filter4Animate(){
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
                <path d="M213.333 512L213.333 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 853.333L810.667 768" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M213.333 853.333L213.333 682.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 512L810.667 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M512 298.667L512 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M512 853.333L512 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="213.333" cy="597.333" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="512" cy="384" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="810.666" cy="640" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}