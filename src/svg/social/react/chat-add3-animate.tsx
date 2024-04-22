"use client"
import React from "react"
import {motion} from "framer-motion"

export default function ChatAdd3Animate(){
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
                <path d="M512 170.667H178.667C174.896 170.667 173.01 170.667 171.838 171.839C170.667 173.01 170.667 174.896 170.667 178.667V851.334C170.667 852.276 170.667 852.748 170.96 853.041C171.253 853.334 171.724 853.334 172.667 853.334H845.333C849.105 853.334 850.99 853.334 852.162 852.162C853.333 850.99 853.333 849.105 853.333 845.334V512" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 426.667L640 426.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 597.333H512" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M810.667 341.333L810.667 85.333M682.667 213.333H938.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}