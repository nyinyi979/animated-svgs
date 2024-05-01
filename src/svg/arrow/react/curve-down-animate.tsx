"use client"
import React from "react"
import { motion } from "framer-motion"

export default function CurveDownAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0],
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
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M682.667 853.333L675.596 860.404L682.667 867.475L689.738 860.404L682.667 853.333ZM213.333 352.666L223.333 352.666L213.333 352.666ZM203.333 640C203.333 645.523 207.811 650 213.333 650C218.856 650 223.333 645.523 223.333 640L203.333 640ZM462.262 647.071L675.596 860.404L689.738 846.262L476.404 632.929L462.262 647.071ZM689.738 860.404L903.071 647.071L888.929 632.929L675.596 846.262L689.738 860.404ZM692.667 853.333L692.667 352.667L672.667 352.667L672.667 853.333L692.667 853.333ZM500.667 160.666L395.334 160.666L395.334 180.666L500.667 180.666L500.667 160.666ZM203.333 352.666L203.333 640L223.333 640L223.333 352.666L203.333 352.666ZM395.334 160.666C289.295 160.666 203.333 246.628 203.333 352.666L223.333 352.666C223.333 257.673 300.341 180.666 395.334 180.666L395.334 160.666ZM692.667 352.667C692.667 246.628 606.705 160.666 500.667 160.666L500.667 180.666C595.66 180.666 672.667 257.674 672.667 352.667L692.667 352.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}