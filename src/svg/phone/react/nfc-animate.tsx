"use client"
import React from "react"
import {motion} from "framer-motion"

export default function NFCAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        eachScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            eachScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            eachScale: 1,
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
                <path d="M213.333 341.333L426.667 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.eachScale,1]}}
                    d="M798.824 874.667C862.485 764.402 896 639.323 896 512C896 384.677 862.485 259.598 798.824 149.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.eachScale,1]}}
                    d="M614.071 768C659.009 690.166 682.667 601.875 682.667 512C682.667 422.125 659.009 333.834 614.072 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M423.603 682.667C453.562 630.777 469.333 571.917 469.333 512C469.333 452.083 453.562 393.223 423.604 341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M216.397 682.667C186.438 630.777 170.667 571.917 170.667 512C170.667 452.083 186.438 393.223 216.396 341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>

    )
}