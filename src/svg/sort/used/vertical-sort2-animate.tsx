"use client"
import React from "react"
import { motion } from "framer-motion"

export default function VerticalSort2Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        lTranslateY: [0],
        rTranslateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            lTranslateY: [0,60,0],
            rTranslateY: [0,-60,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            lTranslateY: [0],
            rTranslateY: [0],
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
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.lTranslateY}}
                    d="M341.333 853.334L334.262 860.405L341.333 867.476L348.404 860.405L341.333 853.334ZM426.666 180.667C432.189 180.667 436.666 176.19 436.666 170.667C436.666 165.144 432.189 160.667 426.666 160.667L426.666 180.667ZM163.595 689.738L334.262 860.405L348.404 846.263L177.737 675.596L163.595 689.738ZM348.404 860.405L519.07 689.738L504.928 675.596L334.262 846.263L348.404 860.405ZM351.333 853.334L351.333 172.667L331.333 172.667L331.333 853.334L351.333 853.334ZM343.333 180.667L426.666 180.667L426.666 160.667L343.333 160.667L343.333 180.667ZM351.333 172.667C351.333 177.086 347.751 180.667 343.333 180.667L343.333 160.667C336.705 160.667 331.333 166.04 331.333 172.667L351.333 172.667Z" fill="black"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.rTranslateY}}
                    d="M682.667 170.666L675.596 163.595L682.667 156.524L689.738 163.595L682.667 170.666ZM682.667 893.999L672.667 893.999V893.999L682.667 893.999ZM597.333 905.999C591.811 905.999 587.333 901.522 587.333 895.999C587.333 890.476 591.811 885.999 597.333 885.999L597.333 905.999ZM504.929 334.262L675.596 163.595L689.738 177.737L519.071 348.404L504.929 334.262ZM689.738 163.595L860.404 334.262L846.262 348.404L675.596 177.737L689.738 163.595ZM692.667 170.666L692.667 893.999L672.667 893.999L672.667 170.666L692.667 170.666ZM680.667 905.999L597.333 905.999L597.333 885.999L680.667 885.999L680.667 905.999ZM692.667 893.999C692.667 900.626 687.294 905.999 680.667 905.999L680.667 885.999C676.248 885.999 672.667 889.581 672.667 893.999L692.667 893.999Z" fill="black"/>
            </motion.svg>
        </div>
    )
}