"use client"
import React from "react"
import {motion} from "framer-motion"

export default function SortAAnimate(){
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
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M256 853.334H768" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 512H640" stroke="black" strokeWidth="20"/>
                <path d="M298.666 725.333L510.116 133.274C510.902 131.073 511.295 129.973 511.999 129.973C512.704 129.973 513.097 131.073 513.883 133.274L725.333 725.333" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}