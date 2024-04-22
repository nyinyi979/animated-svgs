"use client"
import React from "react";
import {motion} from "framer-motion";
export default function CrossRoundFill_Scale(){
    const [scale, setScale] = React.useState(1);
    const animate = () =>{
        setScale(1.2);
    }
    const inanimate = () =>{
        setScale(1);
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg initial={{scale:1}} animate={{scale:scale}} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" r="384" fill="black"/>
                <path d="M682.667 341.333L341.333 682.667" stroke="white" strokeWidth="20" strokeLinecap="round"/>
                <path d="M341.333 341.333L682.667 682.667" stroke="white" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>

    )
}