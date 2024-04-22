"use client"
import React from "react"
import {motion} from "framer-motion"

export default function UploadCircleAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
        translateY: [0],
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
            translateY: [0,-80,0]
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1,
            translateY: [0]
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
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M223.51 631.967C240.527 695.474 278.023 751.591 330.183 791.615C382.344 831.639 446.253 853.333 512 853.333C577.747 853.333 641.656 831.639 693.817 791.615C745.977 751.591 783.473 695.474 800.49 631.967" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 170.667L505.753 162.858L512 157.86L518.247 162.858L512 170.667ZM522 554.667C522 560.19 517.523 564.667 512 564.667C506.477 564.667 502 560.19 502 554.667L522 554.667ZM292.42 333.525L505.753 162.858L518.247 178.475L304.914 349.142L292.42 333.525ZM518.247 162.858L731.58 333.525L719.086 349.142L505.753 178.475L518.247 162.858ZM522 170.667L522 554.667L502 554.667L502 170.667L522 170.667Z" fill="black"/>
            </motion.svg>
        </div>

    )
}