"use client"
import React from "react"
import { motion } from "framer-motion"

export default function WatchAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        fillOpacity: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            fillOpacity: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            fillOpacity: 1,
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
                <rect x="246" y="246" width="532" height="446.667" rx="30" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{fillOpacity:1}}
                    animate={{fillOpacity:[animationValue.fillOpacity,1]}}
                    d="M341.333 87.3333C341.333 86.3904 341.333 85.919 341.626 85.6261C341.919 85.3333 342.391 85.3333 343.333 85.3333H680.667C681.61 85.3333 682.081 85.3333 682.374 85.6261C682.667 85.919 682.667 86.3904 682.667 87.3333V213.333H341.333V87.3333Z" fill="black"/>
                <motion.path
                    initial={{fillOpacity:1}}
                    animate={{fillOpacity:[animationValue.fillOpacity,1]}} 
                    d="M341.333 936.667C341.333 937.61 341.333 938.081 341.626 938.374C341.919 938.667 342.391 938.667 343.333 938.667H680.667C681.61 938.667 682.081 938.667 682.374 938.374C682.667 938.081 682.667 937.61 682.667 936.667V725.333H341.333V936.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}