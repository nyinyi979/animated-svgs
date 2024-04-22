"use client"
import React from "react"
import {motion} from "framer-motion"

export default function ArrowTopFillAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
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
                    d="M512.205 298.959L809.786 724.074C810.157 724.605 809.777 725.333 809.13 725.333L214.87 725.333C214.223 725.333 213.843 724.605 214.214 724.074L511.795 298.959C511.895 298.817 512.105 298.817 512.205 298.959Z" fill="black"/>
            </motion.svg>
        </div>
    )
}