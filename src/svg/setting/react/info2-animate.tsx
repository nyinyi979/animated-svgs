"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Info2Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        pScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            pScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            pScale: 1,
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
                <circle cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.pScale,1]}}
                    transition={{duration:.3}}
                    d="M533.333 320C533.333 331.782 523.782 341.333 512 341.333C500.218 341.333 490.667 331.782 490.667 320C490.667 308.218 500.218 298.667 512 298.667C523.782 298.667 533.333 308.218 533.333 320Z" fill="black" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M512 725.333V426.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}