"use client"
import React from "react"
import {motion} from "framer-motion"

export default function DesktopAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0.5,
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
                <path d="M298.667 180.667H725.333C765.843 180.667 795.219 180.688 817.635 183.702C839.763 186.677 853.606 192.402 863.935 202.731C874.264 213.06 879.99 226.903 882.965 249.032C885.979 271.448 886 300.824 886 341.333V715.333H138V341.333C138 300.824 138.021 271.448 141.035 249.032C144.01 226.903 149.736 213.06 160.065 202.731C170.394 192.402 184.237 186.677 206.365 183.702C228.782 180.688 258.157 180.667 298.667 180.667Z" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    d="M867.556 715.333H156.444C135.212 715.333 118 732.546 118 753.778C118 790.72 147.947 820.667 184.889 820.667H839.111C876.053 820.667 906 790.72 906 753.778C906 732.546 888.788 715.333 867.556 715.333Z" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>

    )
}