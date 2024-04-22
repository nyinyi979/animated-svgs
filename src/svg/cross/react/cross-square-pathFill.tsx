"use client"
import React from "react";
import {motion} from "framer-motion";
export default function CrossSquare_PathFill(){
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
                <rect x="128.5" y="128.5" width="767" height="767" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[path,1]}} 
                    transition={{duration:.4}} 
                    d="M682.667 341.333L341.333 682.667" stroke="black" strokeWidth="20" />
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[path,1]}} 
                    transition={{duration:.4}} 
                    d="M341.333 341.333L682.667 682.667" stroke="black" strokeWidth="20" />
            </svg>
        </div>

    )
}