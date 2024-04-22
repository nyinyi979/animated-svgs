"use client"
import React from "react"
import {motion} from "framer-motion"

export default function CPUAnimate(){
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
                    d="M298.667 469.333C298.667 388.88 298.667 348.654 323.66 323.66C348.654 298.667 388.88 298.667 469.333 298.667H554.667C635.12 298.667 675.346 298.667 700.34 323.66C725.333 348.654 725.333 388.88 725.333 469.333V554.667C725.333 635.12 725.333 675.346 700.34 700.34C675.346 725.333 635.12 725.333 554.667 725.333H469.333C388.88 725.333 348.654 725.333 323.66 700.34C298.667 675.346 298.667 635.12 298.667 554.667V469.333Z" stroke="black" strokeWidth="20"/>
                <motion.rect
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    x="426.667" y="426.667" width="170.667" height="170.667" rx="1" fill="black"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M426.667 298.667V170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M597.333 298.667V170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M725.333 426.667L853.333 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M725.333 597.333L853.333 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M426.667 853.333V725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M597.333 853.333V725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M170.667 426.667L298.667 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M170.667 597.333L298.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>

    )
}