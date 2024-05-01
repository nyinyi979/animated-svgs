"use client"
import React from "react"
import { motion } from "framer-motion"

export default function FolderAddAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translate: -50,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translate: 0,
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
                <path d="M810.667 597.333V371.333C810.667 357.191 810.667 350.12 806.273 345.727C801.88 341.333 794.809 341.333 780.667 341.333H524.426C518.295 341.333 515.23 341.333 512.473 340.192C509.716 339.05 507.549 336.882 503.213 332.547L392.787 222.12C388.451 217.785 386.284 215.617 383.527 214.475C380.77 213.333 377.705 213.333 371.574 213.333H158C143.858 213.333 136.787 213.333 132.393 217.727C128 222.12 128 229.191 128 243.333V780.667C128 794.809 128 801.88 132.393 806.273C136.787 810.667 143.858 810.667 158 810.667H597.333" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateY:animationValue.translate,translateX:animationValue.translate}}
                    d="M682.667 810.667H810.667M810.667 810.667H938.667M810.667 810.667V938.667M810.667 810.667V682.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}