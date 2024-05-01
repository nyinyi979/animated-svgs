"use client"
import React from "react"
import { motion } from "framer-motion"

export default function StatusAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: 0,
        translateY: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: 20,
            translateY: 30,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: 0,
            translateY: 0,
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
                <path fillRule="evenodd" clipRule="evenodd" d="M811.559 437.269C784.098 326.833 697.166 239.901 586.731 212.441C580.08 217.399 573.827 222.859 568.026 228.766C682.513 251.284 772.716 341.487 795.234 455.974C801.14 450.173 806.601 443.92 811.559 437.269ZM544.33 225.123C533.716 223.94 522.929 223.333 512 223.333C352.574 223.333 223.333 352.573 223.333 512C223.333 671.426 352.574 800.666 512 800.666C671.426 800.666 800.667 671.426 800.667 512C800.667 501.071 800.059 490.284 798.877 479.67C805.208 474.346 811.168 468.596 816.713 462.463C819.315 478.591 820.667 495.138 820.667 512C820.667 682.472 682.472 820.666 512 820.666C341.528 820.666 203.333 682.472 203.333 512C203.333 341.528 341.528 203.333 512 203.333C528.862 203.333 545.408 204.685 561.536 207.287C555.404 212.832 549.653 218.792 544.33 225.123Z" fill="black"/>
                <motion.circle 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}}
                    cx="682.667" cy="341.334" r="170.667" fill="black"/>
            </motion.svg>
        </div>
    )
}