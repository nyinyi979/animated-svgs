"use client"
import React from "react"
import { motion } from "framer-motion"

export default function DirectionAnimate(){
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
                <path d="M538.901 84.49L538.901 211.281" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M538.901 426.048L538.901 555.427" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M540.194 774.076L539.527 939.513" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M325.844 281.371C325.844 257.436 325.844 245.469 330.502 236.327C334.599 228.285 341.137 221.748 349.179 217.65C358.32 212.992 370.288 212.992 394.222 212.992H805.818C817.887 212.992 823.921 212.992 829.494 214.527C834.43 215.887 839.08 218.122 843.225 221.127C847.905 224.519 851.674 229.231 859.213 238.655L889.983 277.118C902.18 292.363 908.279 299.985 910.617 308.439C912.676 315.895 912.676 323.772 910.617 331.228C908.279 339.682 902.18 347.304 889.983 362.549L859.213 401.012C851.674 410.436 847.905 415.148 843.225 418.54C839.08 421.545 834.43 423.78 829.494 425.14C823.921 426.675 817.887 426.675 805.818 426.675H394.222C370.288 426.675 358.32 426.675 349.179 422.017C341.137 417.919 334.599 411.382 330.502 403.34C325.844 394.199 325.844 382.231 325.844 358.296V281.371Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M698.48 623.262C698.48 599.326 698.48 587.359 693.822 578.218C689.723 570.175 683.189 563.641 675.146 559.542C666.004 554.884 654.038 554.884 630.101 554.884H218.506C206.437 554.884 200.403 554.884 194.831 556.418C189.895 557.777 185.244 560.012 181.099 563.017C176.42 566.41 172.65 571.124 165.111 580.547L134.341 619.01C122.145 634.254 116.047 641.878 113.709 650.332C111.646 657.785 111.646 665.665 113.709 673.119C116.047 681.572 122.145 689.196 134.341 704.44L165.111 742.903C172.65 752.327 176.42 757.04 181.099 760.434C185.244 763.438 189.895 765.673 194.831 767.032C200.403 768.566 206.437 768.566 218.506 768.566H630.101C654.038 768.566 666.004 768.566 675.146 763.908C683.189 759.81 689.723 753.275 693.822 745.232C698.48 736.091 698.48 724.125 698.48 700.188V623.262Z" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}