"use client"
import React from "react"
import { motion } from "framer-motion"

export default function UserSquareAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"",
            react:``,
            reactNative:``,
            svg:``
        })
        drawerAnimate();
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            onClick={openDrawer}
        >
            <motion.svg 
                initial={{scale:1}}
                animate={{scale:animationValue.scale}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    cx="512" cy="298.667" r="170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M296.439 601.367C297.808 598.843 300.439 597.333 303.309 597.333H720.691C723.562 597.333 726.193 598.843 727.562 601.367C740.967 626.078 810.323 760.404 810.666 895C810.667 895.552 810.219 896 809.667 896H214.334C213.781 896 213.333 895.552 213.335 895C213.677 760.404 283.033 626.078 296.439 601.367Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}