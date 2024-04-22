"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Paper2Animate(){
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
                <path d="M768 128L890 128C892.828 128 894.243 128 895.121 128.879C896 129.758 896 131.172 896 134L896 383C896 383.471 896 383.707 895.853 383.854C895.707 384 895.471 384 895 384L640 384M768 128L646 128C643.172 128 641.757 128 640.879 128.879C640 129.758 640 131.172 640 134L640 384M768 128L132 128C130.114 128 129.172 128 128.586 128.586C128 129.172 128 130.115 128 132L128 896L243.351 857.55C249.62 855.46 252.754 854.415 256 854.415C259.246 854.415 262.38 855.46 268.649 857.55L371.351 891.784C377.62 893.873 380.754 894.918 384 894.918C387.246 894.918 390.38 893.873 396.649 891.784L499.351 857.55C505.62 855.46 508.754 854.415 512 854.415C515.246 854.415 518.38 855.46 524.649 857.55L640 896L640 384" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M298.667 298.667L469.334 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M341.333 469.333H298.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M298.667 640L426.667 640" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}