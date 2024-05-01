"use client"
import React from "react"
import { motion } from "framer-motion"

export default function EyeScanAnimate(){
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
                <circle cx="512" cy="512" r="75.3333" stroke="black" strokeWidth="20"/>
                <path d="M789.117 511.386C789.222 511.68 789.275 511.826 789.275 512C789.275 512.174 789.222 512.32 789.117 512.614C784.866 524.464 717.078 704 512 704C306.922 704 239.134 524.464 234.883 512.614C234.778 512.32 234.725 512.174 234.725 512C234.725 511.826 234.778 511.68 234.883 511.386C239.134 499.536 306.922 320 512 320C717.078 320 784.866 499.536 789.117 511.386Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{duration:.5}}
                    d="M725.333 170.667H892.2C893.991 170.667 894.887 170.667 895.444 171.223C896 171.78 896 172.675 896 174.467V341.333M725.333 853.333H892.2C893.991 853.333 894.887 853.333 895.444 852.777C896 852.22 896 851.325 896 849.533V682.667M298.667 170.667H131.8C130.009 170.667 129.113 170.667 128.556 171.223C128 171.78 128 172.675 128 174.467V341.333M298.667 853.333H131.8C130.009 853.333 129.113 853.333 128.556 852.777C128 852.22 128 851.325 128 849.533V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}