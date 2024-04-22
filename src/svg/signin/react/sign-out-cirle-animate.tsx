"use client"
import React from "react"
import {motion} from "framer-motion"

export default function SignOutCircleAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-50],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [-50,0],
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
                <path d="M341.333 807.603C393.223 837.562 452.083 853.333 512 853.333C571.916 853.333 630.777 837.562 682.667 807.603C734.556 777.645 777.645 734.556 807.603 682.667C837.562 630.778 853.333 571.917 853.333 512C853.333 452.084 837.562 393.223 807.603 341.333C777.645 289.444 734.556 246.355 682.667 216.397C630.777 186.438 571.916 170.667 512 170.667C452.083 170.667 393.223 186.438 341.333 216.397" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M85.3333 512L77.5246 505.753L72.527 512L77.5246 518.247L85.3333 512ZM469.333 522C474.856 522 479.333 517.523 479.333 512C479.333 506.477 474.856 502 469.333 502V522ZM248.191 292.42L77.5246 505.753L93.1419 518.247L263.809 304.914L248.191 292.42ZM77.5246 518.247L248.191 731.58L263.809 719.086L93.1419 505.753L77.5246 518.247ZM85.3333 522H469.333V502H85.3333V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}