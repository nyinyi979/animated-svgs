"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function LoadingAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1,
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Loading",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function LoadingAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1,
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
                    transition={{delay:.1}}
                    d="M658.818 429.294L862.588 311.647" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.15}}
                    d="M599.059 369.535L716.706 165.765" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.2}}
                    d="M512 349.294L512 114" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.25}}
                    d="M424.941 369.535L307.294 165.765" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.3}}
                    d="M365.182 429.294L161.412 311.647" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.35}}
                    d="M347.294 514H112" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.4}}
                    d="M365.182 598.706L161.412 716.353" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.45}}
                    d="M424.941 658.465L307.294 862.235" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.5}}
                    d="M512 678.706V914" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.55}}
                    d="M599.059 658.465L716.706 862.235" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.6}}
                    d="M658.818 598.706L862.588 716.353" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.65}}
                    d="M676.706 514L912 514" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:``,
            svg:`<svg width="1024" height="1028" viewBox="0 0 1024 1028" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M658.818 429.294L862.588 311.647" stroke="black" stroke-width="20"/>
    <path d="M599.059 369.535L716.706 165.765" stroke="black" stroke-width="20"/>
    <path d="M512 349.294L512 114" stroke="black" stroke-width="20"/>
    <path d="M424.941 369.535L307.294 165.765" stroke="black" stroke-width="20"/>
    <path d="M365.182 429.294L161.412 311.647" stroke="black" stroke-width="20"/>
    <path d="M347.294 514H112" stroke="black" stroke-width="20"/>
    <path d="M365.182 598.706L161.412 716.353" stroke="black" stroke-width="20"/>
    <path d="M424.941 658.465L307.294 862.235" stroke="black" stroke-width="20"/>
    <path d="M512 678.706V914" stroke="black" stroke-width="20"/>
    <path d="M599.059 658.465L716.706 862.235" stroke="black" stroke-width="20"/>
    <path d="M658.818 598.706L862.588 716.353" stroke="black" stroke-width="20"/>
    <path d="M676.706 514L912 514" stroke="black" stroke-width="20"/>
</svg>
`
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
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.1}}
                    d="M658.818 429.294L862.588 311.647" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.15}}
                    d="M599.059 369.535L716.706 165.765" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.2}}
                    d="M512 349.294L512 114" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.25}}
                    d="M424.941 369.535L307.294 165.765" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.3}}
                    d="M365.182 429.294L161.412 311.647" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.35}}
                    d="M347.294 514H112" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.4}}
                    d="M365.182 598.706L161.412 716.353" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.45}}
                    d="M424.941 658.465L307.294 862.235" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.5}}
                    d="M512 678.706V914" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.55}}
                    d="M599.059 658.465L716.706 862.235" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.6}}
                    d="M658.818 598.706L862.588 716.353" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{delay:.65}}
                    d="M676.706 514L912 514" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}