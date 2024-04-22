"use client"
import React from "react"
import {motion} from "framer-motion"

export default function FullScreen1Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [-20,20],
            translateY: [-30,30],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
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
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[0],translateY:animationValue.translateY[0]}}
                    d="M170.667 170.667V160.667H160.667V170.667H170.667ZM504.929 519.071C508.834 522.976 515.166 522.976 519.071 519.071C522.976 515.166 522.976 508.834 519.071 504.929L504.929 519.071ZM180.667 426.667V170.667H160.667V426.667H180.667ZM170.667 180.667H426.667V160.667H170.667V180.667ZM163.596 177.738L504.929 519.071L519.071 504.929L177.738 163.596L163.596 177.738Z" fill="black"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[0],translateY:animationValue.translateY[1]}}
                    d="M170.667 853.333V863.333H160.667V853.333H170.667ZM504.929 504.929C508.834 501.024 515.166 501.024 519.071 504.929C522.976 508.834 522.976 515.166 519.071 519.071L504.929 504.929ZM180.667 597.333V853.333H160.667V597.333H180.667ZM170.667 843.333H426.667V863.333H170.667V843.333ZM163.596 846.262L504.929 504.929L519.071 519.071L177.738 860.404L163.596 846.262Z" fill="black"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[1],translateY:animationValue.translateY[0]}}
                    d="M853.333 170.667V160.667H863.333V170.667H853.333ZM519.071 519.071C515.166 522.976 508.834 522.976 504.929 519.071C501.024 515.166 501.024 508.834 504.929 504.929L519.071 519.071ZM843.333 426.667V170.667H863.333V426.667H843.333ZM853.333 180.667H597.333V160.667H853.333V180.667ZM860.404 177.738L519.071 519.071L504.929 504.929L846.262 163.596L860.404 177.738Z" fill="black"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[1],translateY:animationValue.translateY[1]}}
                    d="M853.333 853.333V863.333H863.333V853.333H853.333ZM519.071 504.929C515.166 501.024 508.834 501.024 504.929 504.929C501.024 508.834 501.024 515.166 504.929 519.071L519.071 504.929ZM843.333 597.333V853.333H863.333V597.333H843.333ZM853.333 843.333H597.333V863.333H853.333V843.333ZM860.404 846.262L519.071 504.929L504.929 519.071L846.262 860.404L860.404 846.262Z" fill="black"/>
            </motion.svg>
        </div>
    )
}