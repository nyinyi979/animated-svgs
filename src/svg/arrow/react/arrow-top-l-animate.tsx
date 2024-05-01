"use client"
import React from "react"
import { motion } from "framer-motion"

export default function ArrowTopLAnimate(){
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
                    d="M512 170.667L504.929 163.596L512 156.525L519.071 163.596L512 170.667ZM522 810.667C522 816.19 517.523 820.667 512 820.667C506.477 820.667 502 816.19 502 810.667L522 810.667ZM248.929 419.596L504.929 163.596L519.071 177.738L263.071 433.738L248.929 419.596ZM519.071 163.596L775.071 419.596L760.929 433.738L504.929 177.738L519.071 163.596ZM522 170.667L522 810.667L502 810.667L502 170.667L522 170.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}