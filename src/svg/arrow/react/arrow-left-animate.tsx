"use client"
import React from "react"
import { motion } from "framer-motion"

export default function ArrowLeftAnimate(){
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
                    d="M213.333 512L206.262 504.929L199.191 512L206.262 519.071L213.333 512ZM725.333 522C730.856 522 735.333 517.523 735.333 512C735.333 506.477 730.856 502 725.333 502V522ZM376.929 334.262L206.262 504.929L220.404 519.071L391.071 348.405L376.929 334.262ZM206.262 519.071L376.929 689.738L391.071 675.596L220.404 504.929L206.262 519.071ZM213.333 522H725.333V502H213.333V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}