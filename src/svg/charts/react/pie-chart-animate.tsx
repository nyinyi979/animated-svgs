"use client"
import React from "react"
import { motion } from "framer-motion"

export default function PieChartAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
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
                <path fillRule="evenodd" clipRule="evenodd" d="M216.599 601.523C232.11 652.716 260.696 699.106 299.667 736.044C342.965 777.082 397.227 804.694 455.889 815.54C514.551 826.385 575.099 819.999 630.208 797.153C685.316 774.308 732.624 735.982 766.407 686.814C800.19 637.645 819.001 579.74 820.564 520.105C822.127 460.469 806.376 401.658 775.215 350.787C744.054 299.916 698.82 259.165 644.984 233.464C591.148 207.763 531.018 198.213 471.868 205.97L474.469 225.801C529.786 218.546 586.02 227.477 636.367 251.513C686.715 275.549 729.019 313.659 758.16 361.234C787.302 408.809 802.033 463.809 800.571 519.581C799.109 575.352 781.517 629.505 749.923 675.488C718.329 721.471 674.086 757.313 622.549 778.678C571.011 800.043 514.386 806.015 459.525 795.873C404.664 785.731 353.918 759.908 313.425 721.528C277.136 687.133 250.477 643.974 235.928 596.343L216.599 601.523Z" fill="black"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M252.262 173.503C296.45 139.597 346.846 114.672 400.605 100.132C401.06 100.009 401.287 99.9478 401.467 100.051C401.646 100.155 401.707 100.383 401.83 100.838L511.741 511.035C511.863 511.49 511.924 511.718 511.821 511.897C511.717 512.076 511.49 512.137 511.034 512.259L100.838 622.171C100.382 622.293 100.154 622.354 99.9749 622.251C99.7953 622.147 99.7349 621.919 99.6141 621.464C85.3264 567.637 81.7137 511.53 88.9837 456.31C96.2972 400.758 114.481 347.191 142.496 298.667C170.511 250.143 207.81 207.613 252.262 173.503Z" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}