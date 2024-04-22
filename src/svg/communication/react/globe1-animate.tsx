"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Globe1Animate(){
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
                <path d="M768.333 254.333C768.333 285.324 742.95 316.073 695.756 339.67C649.16 362.968 584.089 377.667 511.667 377.667C439.245 377.667 374.173 362.968 327.577 339.67C280.383 316.073 255 285.324 255 254.333C255 223.343 280.383 192.594 327.577 168.997C374.173 145.699 439.245 131 511.667 131C584.089 131 649.16 145.699 695.756 168.997C742.95 192.594 768.333 223.343 768.333 254.333Z" stroke="black" strokeWidth="20"/>
                <path d="M768.333 778.333C768.333 809.324 742.95 840.073 695.756 863.67C649.16 886.968 584.089 901.667 511.667 901.667C439.245 901.667 374.173 886.968 327.577 863.67C280.383 840.073 255 809.324 255 778.333C255 747.343 280.383 716.594 327.577 692.997C374.173 669.699 439.245 655 511.667 655C584.089 655 649.16 669.699 695.756 692.997C742.95 716.594 768.333 747.343 768.333 778.333Z" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>

    )
}