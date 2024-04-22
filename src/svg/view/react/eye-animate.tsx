"use client"
import React from "react"
import {motion} from "framer-motion"

export default function EyeAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        eyeClose: [0,0],
        eyeOpen: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            eyeClose: [1,0],
            eyeOpen: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            eyeClose: [0,0],
            eyeOpen: 1,
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
                <motion.circle 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.eyeOpen,1]}}
                    transition={{delay:.3}}
                    cx="512" cy="512" r="160.667" stroke="black" strokeWidth="20"/>
                <path d="M895.312 510.99C895.632 511.456 895.792 511.689 895.792 512C895.792 512.311 895.632 512.544 895.312 513.01C883.324 530.45 716.292 768 512 768C307.708 768 140.676 530.45 128.689 513.01C128.368 512.544 128.208 512.311 128.208 512C128.208 511.689 128.368 511.456 128.689 510.99C140.676 493.55 307.708 256 512 256C716.292 256 883.324 493.55 895.312 510.99Z" stroke="black" strokeWidth="20"/>
                <motion.line 
                    initial={{opacity:0}}
                    animate={{opacity:animationValue.eyeClose}}
                    x1="365" y1="502" x2="659" y2="502" stroke="black" strokeWidth="20" strokeLinecap="round"/>

            </motion.svg>
        </div>

    )
}