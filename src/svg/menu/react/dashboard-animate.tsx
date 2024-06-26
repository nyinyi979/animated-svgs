"use client"
import React from "react"
import { motion } from "framer-motion"

export default function DashboardAnimate(){
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
                <motion.rect 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    x="170.667" y="170.667" width="256" height="256" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.rect 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    x="170.667" y="597.333" width="256" height="256" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.rect 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    x="597.333" y="597.333" width="256" height="256" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.rect 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    x="597.333" y="170.667" width="256" height="256" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}