"use client"
import React from "react"
import {motion} from "framer-motion"

export default function DoubleTopAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
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
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M384 810.667L384 512L213.816 512C213.638 512 213.549 511.785 213.675 511.659L512 213.333L810.325 511.659C810.451 511.785 810.362 512 810.184 512L640 512L640 810.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}