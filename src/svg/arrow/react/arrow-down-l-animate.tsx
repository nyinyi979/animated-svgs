"use client"
import React from "react"
import { motion } from "framer-motion"

export default function ArrowDownLAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,40,0],
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
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 853.334L504.929 860.405L512 867.476L519.071 860.405L512 853.334ZM522 213.333C522 207.811 517.523 203.333 512 203.333C506.477 203.333 502 207.811 502 213.333L522 213.333ZM248.929 604.405L504.929 860.405L519.071 846.262L263.071 590.262L248.929 604.405ZM519.071 860.405L775.071 604.405L760.929 590.262L504.929 846.262L519.071 860.405ZM522 853.334L522 213.333L502 213.333L502 853.334L522 853.334Z" fill="black"/>
            </motion.svg>
        </div>
    )
}