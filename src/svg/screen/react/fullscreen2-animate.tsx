"use client"
import React from "react"
import {motion} from "framer-motion"

export default function FullScreen2Animate(){
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
                    animate={{translateX:animationValue.translateX[0],translateY:animationValue.translateY[1]}}
                    d="M170.667 853.333H160.667V863.333H170.667V853.333ZM391.071 647.071C394.976 643.166 394.976 636.834 391.071 632.929C387.166 629.024 380.834 629.024 376.929 632.929L391.071 647.071ZM160.667 597.333V853.333H180.667V597.333H160.667ZM170.667 863.333H426.667V843.333H170.667V863.333ZM177.738 860.405L391.071 647.071L376.929 632.929L163.596 846.262L177.738 860.405Z" fill="black"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[1],translateY:animationValue.translateY[0]}}
                    d="M853.333 170.667H863.333V160.667H853.333V170.667ZM632.929 376.929C629.024 380.834 629.024 387.166 632.929 391.071C636.834 394.976 643.166 394.976 647.071 391.071L632.929 376.929ZM863.333 426.667V170.667H843.333V426.667H863.333ZM853.333 160.667H597.333V180.667H853.333V160.667ZM846.262 163.595L632.929 376.929L647.071 391.071L860.404 177.738L846.262 163.595Z" fill="black"/>
            </motion.svg>
        </div>
    )
}