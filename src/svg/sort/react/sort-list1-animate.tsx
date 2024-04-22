"use client"
import React from "react"
import {motion} from "framer-motion"

export default function SortList1Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        rotateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            rotateX: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            rotateX: [0],
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
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.333 298.666H512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.333 512H512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.333 725.332H512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{rotateX:0}}
                    animate={{rotateX:animationValue.rotateX}}
                    d="M810.667 853.333L938.667 725.333M810.667 853.333L682.667 725.333M810.667 853.333L810.667 170.666M810.667 170.666L682.667 298.666M810.667 170.666L938.667 298.666" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}