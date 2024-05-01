"use client"
import React from "react"
import { motion } from "framer-motion"

export default function UserAddAnimate(){
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
    const openDrawer = () =>{
        setDetails({
            name:"",
            react:``,
            reactNative:``,
            svg:``
        })
        drawerAnimate();
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            onClick={openDrawer}
        >
            <motion.svg 
                initial={{scale:1}}
                animate={{scale:animationValue.scale}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <ellipse cx="512" cy="341.333" rx="170.667" ry="170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M743 738.136C737.104 734.245 731.027 730.497 724.778 726.901C663.511 691.642 588.723 672.667 512 672.667C435.277 672.666 360.489 691.642 299.221 726.901C237.96 762.157 193.273 811.964 172.88 869.044C171.022 874.245 173.732 879.968 178.933 881.826C184.134 883.684 189.856 880.974 191.714 875.773C210.216 823.985 251.235 777.592 309.197 744.235C367.154 710.882 438.445 692.666 512 692.667C584.642 692.667 655.075 710.432 712.637 743H743V738.136ZM793 808.472C810.498 829.268 823.774 851.95 832.285 875.773C834.144 880.974 839.866 883.684 845.067 881.826C850.268 879.968 852.978 874.245 851.12 869.044C841.376 841.771 826.086 816.158 806.091 793H793V808.472Z" fill="black"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M768 597.333L768 938.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M938.667 768L597.333 768" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}