"use client"
import React from "react"
import {motion} from "framer-motion"

export default function ArrowTopAnimate(){
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
                    d="M512 256L519.071 248.929L512 241.858L504.929 248.929L512 256ZM502 768C502 773.523 506.477 778 512 778C517.523 778 522 773.523 522 768L502 768ZM689.738 419.596L519.071 248.929L504.929 263.071L675.596 433.738L689.738 419.596ZM504.929 248.929L334.262 419.596L348.404 433.738L519.071 263.071L504.929 248.929ZM502 256L502 768L522 768L522 256L502 256Z" fill="black"/>
            </motion.svg>
        </div>
    )
}