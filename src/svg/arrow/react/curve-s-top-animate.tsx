"use client"
import React from "react"
import {motion} from "framer-motion"

export default function CurveSTopAnimate(){
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
                    d="M426.667 170.667L433.738 163.595L426.667 156.524L419.596 163.595L426.667 170.667ZM768 863.333C773.523 863.333 778 858.856 778 853.333C778 847.81 773.523 843.333 768 843.333L768 863.333ZM647.071 376.929L433.738 163.595L419.596 177.738L632.929 391.071L647.071 376.929ZM419.596 163.595L206.262 376.929L220.404 391.071L433.738 177.738L419.596 163.595ZM416.667 170.667L416.667 847.333L436.667 847.333L436.667 170.667L416.667 170.667ZM432.667 863.333L768 863.333L768 843.333L432.667 843.333L432.667 863.333ZM416.667 847.333C416.667 856.17 423.83 863.333 432.667 863.333L432.667 843.333C434.876 843.333 436.667 845.124 436.667 847.333L416.667 847.333Z" fill="black"/>
            </motion.svg>
        </div>
    )
}