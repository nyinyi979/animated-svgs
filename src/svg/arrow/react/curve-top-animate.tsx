"use client"
import React from "react"
import { motion } from "framer-motion"

export default function CurveTopAnimate(){
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
                    d="M341.333 170.667L348.404 163.595L341.333 156.524L334.262 163.595L341.333 170.667ZM810.667 671.333L800.667 671.333L810.667 671.333ZM820.667 384C820.667 378.477 816.19 374 810.667 374C805.144 374 800.667 378.477 800.667 384L820.667 384ZM561.738 376.929L348.404 163.595L334.262 177.738L547.596 391.071L561.738 376.929ZM334.262 163.595L120.929 376.929L135.071 391.071L348.404 177.738L334.262 163.595ZM331.333 170.667L331.333 671.333L351.333 671.333L351.333 170.667L331.333 170.667ZM523.333 863.333L628.667 863.333L628.667 843.333L523.333 843.333L523.333 863.333ZM820.667 671.333L820.667 384L800.667 384L800.667 671.333L820.667 671.333ZM628.667 863.333C734.705 863.333 820.667 777.372 820.667 671.333L800.667 671.333C800.667 766.326 723.66 843.333 628.667 843.333L628.667 863.333ZM331.333 671.333C331.333 777.372 417.295 863.333 523.333 863.333L523.333 843.333C428.34 843.333 351.333 766.326 351.333 671.333L331.333 671.333Z" fill="black"/>
            </motion.svg>
        </div>
    )
}