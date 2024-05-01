"use client"
import React from "react"
import { motion } from "framer-motion"

export default function SendHorizontalAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: [0,-Math.random()*40,0,Math.random()*30],
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
                animate={{scale:animationValue.scale,rotate:animationValue.rotate}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M173.665 218.58L340.766 511.008C341.043 511.492 341.181 511.734 341.181 512C341.181 512.266 341.043 512.508 340.766 512.992L340.766 512.992L173.665 805.42C172.426 807.587 171.807 808.671 172.29 809.208C172.773 809.745 173.916 809.245 176.202 808.245L176.203 808.245L849.145 513.832C850.94 513.047 851.838 512.654 851.838 512C851.838 511.346 850.94 510.953 849.145 510.168L176.203 215.755C173.916 214.755 172.773 214.255 172.29 214.792C171.807 215.33 172.426 216.413 173.665 218.58Z" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}