"use client"
import React from "react"
import {motion} from "framer-motion"

export default function ChatSearchAnimate(){
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
                <path d="M489.026 853.334H129C128.448 853.334 128 852.886 128 852.334V174.667C128 172.458 129.791 170.667 132 170.667H892C894.209 170.667 896 172.458 896 174.667V485.744" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M298.667 597.333H426.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M298.667 426.667H554.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M843.333 661.333C843.333 738.285 780.952 800.667 704 800.667C627.048 800.667 564.667 738.285 564.667 661.333C564.667 584.382 627.048 522 704 522C780.952 522 843.333 584.382 843.333 661.333Z" stroke="black" strokeWidth="20"/>
                <path d="M789.333 746.667L917.333 874.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}