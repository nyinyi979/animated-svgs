"use client"
import React from "react";
import {motion} from "framer-motion";
export default function AddSquareFill_PathFill(){
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
                <path d="M128 136C128 132.229 128 130.343 129.172 129.172C130.343 128 132.229 128 136 128H888C891.771 128 893.657 128 894.828 129.172C896 130.343 896 132.229 896 136V888C896 891.771 896 893.657 894.828 894.828C893.657 896 891.771 896 888 896H136C132.229 896 130.343 896 129.172 894.828C128 893.657 128 891.771 128 888V136Z" fill="black"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[path,1]}} 
                    transition={{duration:.4}} 
                    d="M512 256L512 768" stroke="white" strokeWidth="20" strokeLinecap="square"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[path,1]}} 
                    transition={{duration:.4}} 
                    d="M256 512L768 512" stroke="white" strokeWidth="20" strokeLinecap="square"/>
            </svg>
        </div>

    )
}