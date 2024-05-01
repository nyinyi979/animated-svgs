"use client"
import React from "react"
import { motion } from "framer-motion"

export default function SoundMinAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        lScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            lScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            lScale: 1,
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
                <path d="M103.855 542.87C94.8312 527.83 90.3192 520.31 90.3192 512C90.3192 503.69 94.8312 496.17 103.855 481.13L143.871 414.437C146.562 409.953 147.907 407.711 149.98 406.25C152.052 404.79 154.616 404.277 159.744 403.251L255.308 384.138C255.651 384.07 255.822 384.036 255.969 383.948C256.116 383.86 256.228 383.726 256.452 383.458L466.504 131.395C467.687 129.976 468.278 129.266 468.806 129.457C469.334 129.648 469.334 130.572 469.334 132.419L469.334 891.581C469.334 893.428 469.334 894.352 468.806 894.543C468.278 894.734 467.687 894.024 466.504 892.605L256.452 640.542C256.228 640.274 256.116 640.14 255.969 640.052C255.822 639.964 255.651 639.93 255.308 639.862L159.744 620.749C154.616 619.723 152.052 619.21 149.98 617.75C147.907 616.289 146.562 614.047 143.871 609.563L103.855 542.87Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.lScale,1]}}
                    d="M662.849 361.151C702.651 400.952 725.11 454.872 725.332 511.16C725.553 567.448 703.52 621.542 664.033 661.656" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}