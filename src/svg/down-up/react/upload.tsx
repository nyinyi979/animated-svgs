"use client"
import React from "react"
import { motion } from "framer-motion"

export default function UploadAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
        translateY: [0],
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
            translateY: [0,-80,0]
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1,
            translateY: [0]
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
                <motion.path
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 213.333L504.929 206.262L512 199.191L519.071 206.262L512 213.333ZM522 597.333C522 602.856 517.523 607.333 512 607.333C506.477 607.333 502 602.856 502 597.333L522 597.333ZM291.596 419.596L504.929 206.262L519.071 220.404L305.738 433.738L291.596 419.596ZM519.071 206.262L732.405 419.596L718.262 433.738L504.929 220.404L519.071 206.262ZM522 213.333L522 597.333L502 597.333L502 213.333L522 213.333Z" fill="black"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.333 682.667L213.333 725.333C213.333 772.462 251.538 810.667 298.667 810.667L725.333 810.667C772.462 810.667 810.667 772.462 810.667 725.333V682.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}