"use client"
import React from "react"
import { motion } from "framer-motion"

export default function StatsAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rScale: 1,
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
                <motion.rect 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.rScale,1]}}
                    x="768" y="298.667" width="170.667" height="554.667" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.rect 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.rScale,1]}}
                    x="426.667" y="554.667" width="170.667" height="298.667" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.rect 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.rScale,1]}}
                    x="85.3335" y="384" width="170.667" height="469.333" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}