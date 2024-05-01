"use client"
import React from "react"
import { motion } from "framer-motion"

export default function CallAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotate: [0],
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
                <motion.path 
                    initial={{rotate:0}}
                    animate={{rotate:animationValue.rotate}}
                    d="M254.504 131.399L402.733 295.67C408.309 301.849 409.475 310.836 405.661 318.234L354.408 417.633C343.778 438.248 345.983 463.144 360.069 481.571L404.201 539.299C409.379 546.072 415.402 552.155 422.123 557.4L538.151 647.949C552.447 659.106 569.509 666.165 587.51 668.371L642.412 675.099C655.135 676.659 668.024 674.102 679.189 667.804L746.935 629.589C755.585 624.709 766.506 626.917 772.582 634.772L895.608 793.837C903.789 804.414 899.487 819.884 887.021 824.719L670.972 908.52C665.302 910.719 658.939 910.219 653.682 907.16L416.816 769.348C413.612 767.483 410.655 765.387 407.875 762.936C384.398 742.242 266.76 636.511 212 548.364C165.596 473.667 125.153 348.509 114.647 314.622C112.923 309.06 113.814 303.124 116.969 298.23L222.845 133.962C229.98 122.892 245.681 121.621 254.504 131.399Z" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}