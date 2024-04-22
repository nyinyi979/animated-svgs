"use client"
import React from "react";
import {motion} from "framer-motion";
export default function FolderSearchFillAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        scale: 1,
        pathLength: 1
    });
    const animate = () => {
        setAnimationValue({
            scale: 1.1,
            pathLength: 0
        })
    }
    const inanimate = () => {
        setAnimationValue({
            scale: 1,
            pathLength: 1
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
                <path d="M128 341.333H892.8C893.92 341.333 894.48 341.333 894.908 341.551C895.284 341.743 895.59 342.049 895.782 342.425C896 342.853 896 343.413 896 344.533V850.133C896 851.253 896 851.814 895.782 852.241C895.59 852.618 895.284 852.924 894.908 853.115C894.48 853.333 893.92 853.333 892.8 853.333H131.2C130.08 853.333 129.52 853.333 129.092 853.115C128.716 852.924 128.41 852.618 128.218 852.241C128 851.814 128 851.253 128 850.133V341.333Z" stroke="black" strokeWidth="20"/>
                <path d="M128 253.333C128 234.477 128 225.049 133.858 219.191C139.716 213.333 149.144 213.333 168 213.333H410.098C418.273 213.333 422.361 213.333 426.036 214.856C429.711 216.378 432.602 219.268 438.382 225.049L554.667 341.333H128V253.333Z" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    d="M587.333 576C587.333 629.388 544.054 672.667 490.667 672.667C437.279 672.667 394 629.388 394 576C394 522.613 437.279 479.333 490.667 479.333C544.054 479.333 587.333 522.613 587.333 576Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    transition={{duration:.5}}
                    d="M597.333 682.667L661.333 746.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>

        </div>

    )
}