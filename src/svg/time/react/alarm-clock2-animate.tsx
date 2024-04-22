"use client"
import React from "react"
import {motion} from "framer-motion"

export default function AlarmClock2Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0,0],
        translateY: 0,
        rotate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [-40,40],
            translateY: -10,
            rotate: Math.random()*80,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0,0],
            translateY: 0,
            rotate: 0,
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
                <circle cx="512" cy="512" r="298.667" stroke="black" strokeWidth="20"/>
                <motion.path  
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[0],translateY:animationValue.translateY}}
                    d="M254.495 133.815C225.557 141.569 199.171 156.803 177.987 177.987C156.803 199.171 141.569 225.557 133.815 254.495" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[1],translateY:animationValue.translateY}}
                    d="M769.505 133.815C798.443 141.569 824.829 156.803 846.013 177.987C867.197 199.171 882.431 225.557 890.185 254.495" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M512 341.333V511.75C512 511.888 512.112 512 512.25 512H640" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}