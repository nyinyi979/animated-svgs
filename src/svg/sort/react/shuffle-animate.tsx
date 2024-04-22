"use client"
import React from "react"
import {motion} from "framer-motion"

export default function ShuffleAnimate(){
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
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M128 298.666H420.714C423.582 298.666 425.015 298.666 426.078 299.457C427.141 300.248 427.553 301.621 428.377 304.367L552.956 719.631C553.78 722.378 554.192 723.751 555.255 724.542C556.318 725.333 557.752 725.333 560.619 725.333H896M896 725.333L768 597.333M896 725.333L768 853.333" stroke="black" strokeWidth="20"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M903.071 291.596L775.071 163.596L760.929 177.738L871.858 288.667H560.619L560.353 288.667C559.17 288.666 557.554 288.664 556.105 288.833C554.284 289.044 551.741 289.608 549.286 291.435C546.83 293.262 545.56 295.535 544.834 297.218C544.256 298.557 543.793 300.105 543.455 301.239L543.454 301.24L543.378 301.495L490.667 477.199L501.107 512L562.107 308.667H871.858L760.929 419.596L775.071 433.738L903.071 305.738L910.142 298.667L903.071 291.596ZM490.667 546.801L480.226 512L419.226 715.333H128V735.333H420.714L420.98 735.334C422.163 735.335 423.78 735.336 425.229 735.168C427.049 734.956 429.592 734.393 432.048 732.566C434.503 730.738 435.773 728.465 436.499 726.782C437.077 725.443 437.54 723.894 437.879 722.76L437.955 722.506L490.667 546.801Z" fill="black"/>
            </motion.svg>
        </div>
    )
}