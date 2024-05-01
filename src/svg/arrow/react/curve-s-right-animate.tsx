"use client"
import React from "react"
import { motion } from "framer-motion"

export default function CurveSRightAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
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
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M853.333 426.667L860.404 433.738L867.475 426.667L860.404 419.596L853.333 426.667ZM160.667 768C160.667 773.523 165.144 778 170.667 778C176.189 778 180.667 773.523 180.667 768L160.667 768ZM647.071 647.071L860.404 433.738L846.262 419.596L632.929 632.929L647.071 647.071ZM860.404 419.596L647.071 206.262L632.929 220.404L846.262 433.738L860.404 419.596ZM853.333 416.667L176.667 416.667L176.667 436.667L853.333 436.667L853.333 416.667ZM160.667 432.667L160.667 768L180.667 768L180.667 432.667L160.667 432.667ZM176.667 416.667C167.83 416.667 160.667 423.83 160.667 432.667L180.667 432.667C180.667 434.876 178.876 436.667 176.667 436.667L176.667 416.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}