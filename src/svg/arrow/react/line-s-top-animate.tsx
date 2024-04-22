"use client"
import React from "react"
import {motion} from "framer-motion"

export default function LineSTopAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0],
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
                <path d="M384 640L384 851.333C384 852.276 384 852.748 383.707 853.04C383.414 853.333 382.943 853.333 382 853.333L172.667 853.333C171.724 853.333 171.252 853.333 170.96 853.04C170.667 852.748 170.667 852.276 170.667 851.333L170.667 642C170.667 641.057 170.667 640.586 170.96 640.293C171.252 640 171.724 640 172.667 640L384 640Z" stroke="black" strokeWidth="20"/>
                <path d="M640 170.667L853.333 170.667L853.333 384" stroke="black" strokeWidth="20"/>
                <path d="M853.333 170.667L384 640" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}