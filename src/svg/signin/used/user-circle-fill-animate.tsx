"use client"
import React from "react"
import { motion } from "framer-motion"

export default function UserCircleFillAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"",
            react:``,
            reactNative:``,
            svg:``
        })
        drawerAnimate();
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            onClick={openDrawer}
        >
            <motion.svg 
                initial={{scale:1}}
                animate={{scale:animationValue.scale}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse cx="512" cy="426.667" rx="128" ry="128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.circle 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
                <path d="M767.269 798.52C767.692 798.288 767.89 797.786 767.735 797.328C752.513 752.291 719.358 712.507 673.341 684.085C627.054 655.496 570.342 640 512 640C453.658 640 396.946 655.496 350.66 684.085C304.642 712.507 271.487 752.291 256.265 797.328C256.11 797.786 256.308 798.287 256.731 798.52L492.75 928.098C504.739 934.68 519.261 934.68 531.25 928.098L767.269 798.52Z" fill="black"/>
            </motion.svg>
        </div>
    )
}