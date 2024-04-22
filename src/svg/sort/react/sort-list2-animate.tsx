"use client"
import React from "react"
import {motion} from "framer-motion"

export default function SortList2Animate(){
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
                    initial={{rotateX:0}}
                    animate={{rotateX:animationValue.rotateX}}
                    d="M213.333 341.334L213.333 682.667" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path 
                    initial={{rotateX:0}}
                    animate={{rotateX:animationValue.rotateX}}
                    d="M213.541 85.646L383.171 340.09C383.525 340.622 383.144 341.334 382.505 341.334L44.1615 341.334C43.5225 341.334 43.1414 340.622 43.4958 340.09L213.125 85.646C213.224 85.4976 213.442 85.4976 213.541 85.646Z" fill="black"/>
                <motion.path 
                    initial={{rotateX:0}}
                    animate={{rotateX:animationValue.rotateX}}
                    d="M213.541 938.354L383.171 683.91C383.525 683.378 383.144 682.666 382.505 682.666L44.1615 682.666C43.5225 682.666 43.1414 683.378 43.4958 683.91L213.125 938.354C213.224 938.502 213.442 938.502 213.541 938.354Z" fill="black"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M469.333 298.666H810.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M469.333 512H810.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M469.333 725.332H810.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}