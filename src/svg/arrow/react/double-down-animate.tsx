"use client"
import React from "react"
import {motion} from "framer-motion"

export default function DoubleDownAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,40,0],
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
                    d="M384 213.334L384 512L213.816 512C213.638 512 213.549 512.216 213.675 512.342L512 810.667L810.325 512.342C810.451 512.216 810.362 512 810.184 512L640 512L640 213.334" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}