"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Globe2Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: Math.random()*100,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotate: 0,
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
                animate={{scale:animationValue.scale,rotate:animationValue.rotate}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="512" cy="512" r="390" stroke="black" strokeWidth="20"/>
                <line x1="509" y1="112" x2="509" y2="899" stroke="black" strokeWidth="20"/>
                <line x1="898" y1="516" x2="127" y2="516" stroke="black" strokeWidth="20"/>
                <path d="M499 136C517.423 136 535.911 145.034 553.721 163.345C571.562 181.688 588.089 208.752 602.182 243.008C630.347 311.473 648 406.747 648 512.5C648 618.253 630.347 713.527 602.182 781.992C588.089 816.248 571.562 843.312 553.721 861.655C535.911 879.966 517.423 889 499 889C480.577 889 462.089 879.966 444.279 861.655C426.438 843.312 409.911 816.248 395.818 781.992C367.653 713.527 350 618.253 350 512.5C350 406.747 367.653 311.473 395.818 243.008C409.911 208.752 426.438 181.688 444.279 163.345C462.089 145.034 480.577 136 499 136Z" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>

    )
}