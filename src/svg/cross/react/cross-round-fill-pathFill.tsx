"use client"
import React from "react";
import {motion} from "framer-motion";
export default function CrossRoundFill_PathFill(){
    const [path, setPath] = React.useState(1);
    const animate = () =>{
        setPath(0);
    }
    const inanimate = () =>{
        setPath(1);
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" r="384" fill="black"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[path,1]}} 
                    transition={{duration:.4}} d="M682.667 341.333L341.333 682.667" stroke="white" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[path,1]}} 
                    transition={{duration:.4}} d="M341.333 341.333L682.667 682.667" stroke="white" strokeWidth="20" strokeLinecap="round"/>
            </svg>
        </div>

    )
}