"use client"
import React from "react"
import { motion } from "framer-motion"

export default function FolderOpenAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: 0,
        rotateZ: 0,
        scale: 1,
    })
    const animate = () =>{
        setAnimationValue({
            translateX: -10,
            rotateZ: -2,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: 0,
            rotateZ: 0,
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
                <path d="M640 853.333H152C143.599 853.333 139.399 853.333 136.19 851.698C133.368 850.26 131.073 847.966 129.635 845.143C128 841.934 128 837.734 128 829.333V194.667C128 186.266 128 182.066 129.635 178.857C131.073 176.034 133.368 173.74 136.19 172.302C139.399 170.667 143.599 170.667 152 170.667H374.059C377.728 170.667 379.562 170.667 381.288 171.081C382.819 171.449 384.282 172.055 385.624 172.877C387.138 173.805 388.435 175.102 391.029 177.696L462.304 248.971C464.898 251.565 466.195 252.862 467.709 253.79C469.051 254.612 470.514 255.218 472.045 255.586C473.771 256 475.606 256 479.274 256H701.333C709.734 256 713.934 256 717.143 257.635C719.966 259.073 722.26 261.368 723.698 264.19C725.333 267.399 725.333 271.599 725.333 280V405.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{translateX:0}}
                    animate={{rotateZ:animationValue.rotateZ,translateX:animationValue.translateX}}
                    d="M255.316 428.947C255.561 428.129 255.684 427.72 255.927 427.416C256.141 427.149 256.421 426.941 256.739 426.812C257.099 426.667 257.527 426.667 258.381 426.667H891.699C893.157 426.667 893.886 426.667 894.372 426.971C894.798 427.237 895.108 427.654 895.241 428.139C895.392 428.692 895.183 429.39 894.764 430.786L768.684 851.036C768.439 851.854 768.316 852.263 768.073 852.566C767.859 852.834 767.579 853.042 767.261 853.171C766.901 853.316 766.473 853.316 765.619 853.316H160.257C149.324 853.316 143.858 853.316 140.21 851.036C137.014 849.038 134.688 845.911 133.693 842.277C132.557 838.127 134.128 832.891 137.269 822.42L255.316 428.947Z" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M384 640L640 640" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}