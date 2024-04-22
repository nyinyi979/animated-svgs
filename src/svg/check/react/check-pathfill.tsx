"use client"
import React from "react";
import {motion} from "framer-motion";
export default function Check_PathFill(){
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
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[path,1]}} 
                    transition={{duration:.4}}  
                    d="M341.338 554.669L553.899 724.717C554.327 725.06 554.95 724.994 555.297 724.57L938.671 256.002" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </svg>
        </div>

    )
}