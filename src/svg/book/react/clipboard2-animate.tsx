"use client"
import React from "react"
import {motion} from "framer-motion"

export default function Clipboard2Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
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
                <path d="M661.333 213.333C721.257 213.333 751.219 213.333 772.742 227.714C782.059 233.94 790.059 241.94 796.285 251.258C810.666 272.781 810.666 302.743 810.666 362.666V768C810.666 848.453 810.666 888.679 785.673 913.673C760.679 938.666 720.453 938.666 640 938.666H384C303.547 938.666 263.32 938.666 238.327 913.673C213.333 888.679 213.333 848.453 213.333 768V362.666C213.333 302.743 213.333 272.781 227.714 251.258C233.94 241.94 241.94 233.94 251.258 227.714C272.781 213.333 302.743 213.333 362.666 213.333" stroke="black" strokeWidth="20"/>
                <path d="M384 213.333C384 166.205 422.205 128 469.333 128H554.667C601.795 128 640 166.205 640 213.333C640 260.462 601.795 298.667 554.667 298.667H469.333C422.205 298.667 384 260.462 384 213.333Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 512L640 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 682.667L554.667 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}