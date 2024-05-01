"use client"
import React from "react"
import { motion } from "framer-motion"

export default function Archive1Animate(){
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
                <path d="M128 132C128 130.114 128 129.172 128.586 128.586C129.172 128 130.114 128 132 128H892C893.886 128 894.828 128 895.414 128.586C896 129.172 896 130.114 896 132V892C896 893.886 896 894.828 895.414 895.414C894.828 896 893.886 896 892 896H132C130.114 896 129.172 896 128.586 895.414C128 894.828 128 893.886 128 892V132Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M128 426.667V550.667C128 552.552 128 553.495 128.586 554.081C129.172 554.667 130.114 554.667 132 554.667H339.892C340.588 554.667 340.935 554.667 341.197 554.855C341.459 555.044 341.569 555.374 341.789 556.034L383.544 681.299C383.764 681.959 383.874 682.289 384.136 682.478C384.398 682.667 384.746 682.667 385.442 682.667H638.558C639.254 682.667 639.602 682.667 639.864 682.478C640.126 682.289 640.236 681.959 640.456 681.299L682.211 556.034C682.431 555.374 682.541 555.044 682.803 554.855C683.065 554.667 683.412 554.667 684.108 554.667H892C893.886 554.667 894.828 554.667 895.414 554.081C896 553.495 896 552.552 896 550.667V426.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}