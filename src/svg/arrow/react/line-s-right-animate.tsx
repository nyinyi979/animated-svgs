"use client"
import React from "react"
import {motion} from "framer-motion"

export default function LineSRightAnimate(){
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
                <rect x="384" y="640" width="256" height="256" rx="2" transform="rotate(90 384 640)" stroke="black" strokeWidth="20"/>
                <path d="M768 128L896 298.667L768 469.333" stroke="black" strokeWidth="20"/>
                <path d="M896 298.667H264C260.229 298.667 258.343 298.667 257.172 299.838C256 301.01 256 302.895 256 306.667V640" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}