"use client"
import React from "react"
import {motion} from "framer-motion"

export default function NoteAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotateX: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotateX: [0],
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg 
                initial={{scale:1,rotateX:0}}
                animate={{scale:animationValue.scale,rotateX:animationValue.rotateX}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M554.667 597.333H262.939C259.63 597.333 257.976 597.333 256.849 598.312C255.721 599.29 255.487 600.927 255.019 604.202L214.815 885.631C214.134 890.393 213.794 892.774 215.181 894.185C216.567 895.596 218.954 895.297 223.727 894.701L547.659 854.209C550.996 853.792 552.664 853.584 553.666 852.449C554.667 851.315 554.667 849.634 554.667 846.271V174.055C554.667 172.437 554.667 171.628 555.141 171.068C555.615 170.509 556.413 170.376 558.009 170.11L810.366 128.05C810.502 128.028 810.57 128.016 810.606 128.056C810.643 128.096 810.626 128.162 810.593 128.296L768.031 298.544C768.016 298.604 768.008 298.633 767.988 298.653C767.967 298.673 767.936 298.679 767.876 298.691L554.667 341.333" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}