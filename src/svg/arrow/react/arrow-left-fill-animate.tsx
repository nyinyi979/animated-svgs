"use client"
import React from "react"
import {motion} from "framer-motion"

export default function ArrowLeftFillAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-40,0],
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
                    d="M298.959 511.795L724.075 214.214C724.605 213.843 725.333 214.223 725.333 214.87V809.13C725.333 809.777 724.605 810.157 724.075 809.786L298.959 512.205C298.817 512.105 298.817 511.895 298.959 511.795Z" fill="black"/>
            </motion.svg>
        </div>
    )
}