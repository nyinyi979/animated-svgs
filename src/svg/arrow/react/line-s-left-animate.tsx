"use client"
import React from "react"
import {motion} from "framer-motion"

export default function LineSLeftAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
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
                <rect x="640" y="384" width="256" height="256" rx="2" transform="rotate(-90 640 384)" stroke="black" strokeWidth="20"/>
                <path d="M256 896L128 725.333L256 554.667" stroke="black" strokeWidth="20"/>
                <path d="M128 725.333H760C763.771 725.333 765.657 725.333 766.828 724.162C768 722.99 768 721.104 768 717.333V384" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}