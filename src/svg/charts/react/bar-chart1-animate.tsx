"use client"
import React from "react"
import {motion} from "framer-motion"

export default function BarChart1Animate(){
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
                <path d="M896 853.334H128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M426.667 682.667V343.334C426.667 342.229 425.771 341.334 424.667 341.334H258C256.895 341.334 256 342.229 256 343.334V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M768 682.666V172.666C768 171.561 767.104 170.666 766 170.666H599.333C598.228 170.666 597.333 171.561 597.333 172.666V682.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}