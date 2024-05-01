"use client"
import React from "react"
import { motion } from "framer-motion"

export default function DownArrowLineAnimate(){
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
                    d="M512 682.667L504.929 689.738L512 696.809L519.071 689.738L512 682.667ZM522 170.667C522 165.144 517.523 160.667 512 160.667C506.477 160.667 502 165.144 502 170.667L522 170.667ZM248.929 433.738L504.929 689.738L519.071 675.595L263.071 419.595L248.929 433.738ZM519.071 689.738L775.071 433.738L760.929 419.595L504.929 675.595L519.071 689.738ZM522 682.667L522 170.667L502 170.667L502 682.667L522 682.667Z" fill="black"/>
                <path d="M213.333 896L810.666 896" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}