"use client"
import React from "react"
import { motion } from "framer-motion"

export default function FileAnimate(){
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
                <path d="M561.987 128H384C303.547 128 263.32 128 238.327 152.994C213.333 177.987 213.333 218.214 213.333 298.667V725.333C213.333 805.786 213.333 846.013 238.327 871.006C263.32 896 303.547 896 384 896H640C720.453 896 760.68 896 785.673 871.006C810.667 846.013 810.667 805.786 810.667 725.333V376.68C810.667 359.24 810.667 350.52 807.419 342.679C804.171 334.838 798.005 328.672 785.673 316.34L622.327 152.994C609.995 140.662 603.829 134.496 595.988 131.248C588.147 128 579.427 128 561.987 128Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}} 
                    d="M384 554.667L640 554.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M384 725.333L554.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M554.667 128V298.667C554.667 338.893 554.667 359.006 567.163 371.503C579.66 384 599.774 384 640 384H810.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}