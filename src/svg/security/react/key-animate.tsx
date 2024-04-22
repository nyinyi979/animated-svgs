"use client"
import React from "react"
import {motion} from "framer-motion"

export default function KeyAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        rotate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            rotate: Math.random()*90,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            rotate: 0,
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg 
                initial={{scale:1,rotate:0}}
                animate={{scale:animationValue.scale,rotate:animationValue.rotate}}
                transition={{delay:.2}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <motion.ellipse 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    cx="384" cy="597.333" rx="170.667" ry="170.667" stroke="black" strokeWidth="20"/>
                <path d="M512 469.333L661.333 320M725.333 256L661.333 320M661.333 320L768 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
    
            </motion.svg>
        </div>

    )
}