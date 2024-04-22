"use client"
import React from "react";
import {motion} from "framer-motion";
export default function CrossSquare_Scale(){
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
                <rect x="128.5" y="128.5" width="767" height="767" stroke="black" strokeWidth="20"/>
                <path d="M682.667 341.333L341.333 682.667" stroke="black" strokeWidth="20" />
                <path d="M341.333 341.333L682.667 682.667" stroke="black" strokeWidth="20" />
            </motion.svg>
        </div>

    )
}