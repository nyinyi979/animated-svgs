"use client"
import React from "react";
import {motion} from "framer-motion";
export default function AddRoundFill_Scale(){
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
                <circle cx="512" cy="512" r="426.667" fill="black"/>
                <path d="M512 256L512 768" stroke="white" strokeWidth="20" strokeLinecap="round"/>
                <path d="M256 512L768 512" stroke="white" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>

    )
}