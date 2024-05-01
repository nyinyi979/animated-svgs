"use client"
import React from "react"
import { motion } from "framer-motion"

export default function DownloadAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
        translateY: [0],
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
            translateY: [0,80,0]
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
                    d="M512 597.334L504.929 604.405L512 611.476L519.071 604.405L512 597.334ZM522 213.333C522 207.811 517.523 203.333 512 203.333C506.477 203.333 502 207.811 502 213.333L522 213.333ZM291.596 391.071L504.929 604.405L519.071 590.262L305.738 376.929L291.596 391.071ZM519.071 604.405L732.404 391.071L718.262 376.929L504.929 590.262L519.071 604.405ZM522 597.334L522 213.333L502 213.333L502 597.334L522 597.334Z" fill="black"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.333 682.667L213.333 725.333C213.333 772.462 251.538 810.667 298.667 810.667L725.333 810.667C772.462 810.667 810.667 772.462 810.667 725.333V682.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}