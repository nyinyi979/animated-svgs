"use client"
import React from "react"
import {motion} from "framer-motion"

export default function MessageOpenAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotate: [0],
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg 
                initial={{scale:1,rotateX:0}}
                animate={{scale:animationValue.scale,rotateX:animationValue.rotate}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M170.667 343.806C170.667 342.603 170.667 342.001 170.965 341.518C171.264 341.035 171.802 340.766 172.878 340.228L510.211 171.561C511.089 171.122 511.528 170.903 512 170.903C512.472 170.903 512.911 171.122 513.789 171.561L851.122 340.228C852.198 340.766 852.736 341.035 853.034 341.518C853.333 342.001 853.333 342.603 853.333 343.806V849.333C853.333 851.219 853.333 852.162 852.747 852.748C852.162 853.333 851.219 853.333 849.333 853.333H174.667C172.781 853.333 171.838 853.333 171.252 852.748C170.667 852.162 170.667 851.219 170.667 849.333V343.806Z" stroke="black" strokeWidth="20"/>
                <path d="M170.667 426.667L298.081 554.081C298.456 554.456 298.964 554.667 299.495 554.667H724.505C725.035 554.667 725.544 554.456 725.919 554.081L853.333 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>

    )
}