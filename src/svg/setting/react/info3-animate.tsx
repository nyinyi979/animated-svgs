"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Info3Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotateY: [0,-20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotateY: [0],
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg 
                initial={{scale:1,rotateY:0}}
                animate={{scale:animationValue.scale,rotateY:animationValue.rotateY}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M448 512H512V682.667H597.333M512 341.333H512.427M578.681 890.166C628.342 881.41 675.793 862.957 718.323 835.862C760.853 808.768 797.63 773.561 826.554 732.253C855.478 690.945 875.983 644.345 886.898 595.113C897.812 545.881 898.923 494.981 890.166 445.319C881.41 395.658 862.957 348.207 835.862 305.677C808.768 263.147 773.561 226.37 732.253 197.446C690.945 168.522 644.345 148.017 595.113 137.102C545.88 126.188 494.981 125.077 445.319 133.834C395.658 142.591 348.207 161.043 305.677 188.138C263.147 215.232 226.37 250.439 197.446 291.747C168.522 333.055 148.017 379.655 137.102 428.887C126.188 478.12 125.077 529.02 133.834 578.681C142.591 628.342 161.043 675.793 188.138 718.323C215.232 760.853 250.439 797.63 291.747 826.554C333.055 855.479 379.655 875.983 428.887 886.898C478.12 897.812 529.019 898.923 578.681 890.166Z" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}