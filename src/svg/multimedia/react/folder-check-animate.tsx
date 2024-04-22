"use client"
import React from "react"
import {animateValue, motion} from "framer-motion"

export default function FolderCheckAnimate(){
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
                <path d="M213.333 512V243.333C213.333 229.191 213.333 222.12 217.727 217.727C222.12 213.333 229.191 213.333 243.333 213.333H456.907C463.038 213.333 466.104 213.333 468.86 214.475C471.617 215.617 473.785 217.785 478.12 222.12L588.547 332.547C592.882 336.882 595.05 339.05 597.806 340.192C600.563 341.333 603.628 341.333 609.76 341.333H866C880.142 341.333 887.213 341.333 891.607 345.727C896 350.12 896 357.191 896 371.333V780.667C896 794.809 896 801.88 891.607 806.273C887.213 810.667 880.142 810.667 866 810.667H512" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M170.667 704L266.727 800.06C272.585 805.918 282.082 805.918 287.94 800.06L490.667 597.333" stroke="black" strokeWidth="20"/>
            </motion.svg>
    
        </div>

    )
}