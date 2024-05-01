"use client"
import React from "react"
import { motion } from "framer-motion"

export default function CollapseAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        lTranslateY: [0],
        rTranslateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            lTranslateY: [0,-40,0],
            rTranslateY: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            lTranslateY: [0],
            rTranslateY: [0],
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
                    animate={{translateY:animationValue.lTranslateY}}
                    d="M384 554.666L376.929 547.595L384 540.524L391.071 547.595L384 554.666ZM394 938.666C394 944.189 389.523 948.666 384 948.666C378.477 948.666 374 944.189 374 938.666L394 938.666ZM163.596 760.928L376.929 547.595L391.071 561.737L177.738 775.07L163.596 760.928ZM391.071 547.595L604.405 760.928L590.263 775.07L376.929 561.737L391.071 547.595ZM394 554.666L394 938.666L374 938.666L374 554.666L394 554.666Z" fill="black"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.rTranslateY}}
                    d="M640 469.334L632.929 476.405L640 483.476L647.071 476.405L640 469.334ZM650 85.334C650 79.8112 645.523 75.334 640 75.334C634.478 75.334 630 79.8112 630 85.334L650 85.334ZM419.596 263.072L632.929 476.405L647.071 462.263L433.738 248.93L419.596 263.072ZM647.071 476.405L860.405 263.072L846.263 248.93L632.929 462.263L647.071 476.405ZM650 469.334L650 85.334L630 85.334L630 469.334L650 469.334Z" fill="black"/>
            </motion.svg>
        </div>
    )
}