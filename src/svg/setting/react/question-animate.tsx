"use client"
import React from "react"
import { motion } from "framer-motion"

export default function QuestionAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        pScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            pScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            pScale: 1,
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
                <circle cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
                <motion.ellipse 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.pScale,1]}}
                    transition={{duration:.3}}
                    cx="512" cy="768" rx="21.3333" ry="21.3333" fill="black" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M512 682.667V622.129C512 591.872 512 576.744 519.232 564.802C520.614 562.521 522.176 560.355 523.903 558.323C532.944 547.685 547.296 542.901 576 533.333V533.333C604.704 523.765 619.056 518.981 628.097 508.344C629.824 506.312 631.386 504.145 632.768 501.864C640 489.923 640 474.795 640 444.538V398.667C640 351.526 640 327.956 625.355 313.311C610.711 298.667 587.14 298.667 540 298.667H484C436.86 298.667 413.289 298.667 398.645 313.311C384 327.956 384 351.526 384 398.667V426.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}