"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function CPUAnimate({drawerAnimate,setDetails}:eachSVGType){
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
    const openDrawer = () =>{
        setDetails({
            name:"CPU",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function CPUAnimate(){
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
                    d="M298.667 469.333C298.667 388.88 298.667 348.654 323.66 323.66C348.654 298.667 388.88 298.667 469.333 298.667H554.667C635.12 298.667 675.346 298.667 700.34 323.66C725.333 348.654 725.333 388.88 725.333 469.333V554.667C725.333 635.12 725.333 675.346 700.34 700.34C675.346 725.333 635.12 725.333 554.667 725.333H469.333C388.88 725.333 348.654 725.333 323.66 700.34C298.667 675.346 298.667 635.12 298.667 554.667V469.333Z" stroke="black" strokeWidth="20"/>
                <motion.rect
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    x="426.667" y="426.667" width="170.667" height="170.667" rx="1" fill="black"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M426.667 298.667V170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M597.333 298.667V170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M725.333 426.667L853.333 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M725.333 597.333L853.333 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M426.667 853.333V725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M597.333 853.333V725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M170.667 426.667L298.667 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M170.667 597.333L298.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CPUAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedRect = Animated.createAnimatedComponent(Rect);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1550,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1550,strokeDashoffset:1550}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1550,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:1550,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,strokeDasharray:1550,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
        return{
            strokeDashoffset: animationValue.value.strokeDashoffset,
            strokeDasharray: animationValue.value.strokeDasharray
        }
    })
    return(
        <View 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            style={styles.container}
        >
            <AnimatedSvg 
                animatedProps={svgAnimatedProps}
                style={styles.svg}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M298.667 469.333C298.667 388.88 298.667 348.654 323.66 323.66C348.654 298.667 388.88 298.667 469.333 298.667H554.667C635.12 298.667 675.346 298.667 700.34 323.66C725.333 348.654 725.333 388.88 725.333 469.333V554.667C725.333 635.12 725.333 675.346 700.34 700.34C675.346 725.333 635.12 725.333 554.667 725.333H469.333C388.88 725.333 348.654 725.333 323.66 700.34C298.667 675.346 298.667 635.12 298.667 554.667V469.333Z" stroke="black" strokeWidth="20"/>
                <AnimatedRect
                    animatedProps={pathAnimatedProps}
                    x="426.667" y="426.667" width="170.667" height="170.667" rx="1" fill="black"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M426.667 298.667V170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M597.333 298.667V170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M725.333 426.667L853.333 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M725.333 597.333L853.333 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M426.667 853.333V725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M597.333 853.333V725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M170.667 426.667L298.667 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M170.667 597.333L298.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </AnimatedSvg>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 100,
        height: 100,
         
        alignItems:"center"
    },
    svg:{
        alignSelf: "center",
    }
})`,
            svg:`<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M298.667 180.667H725.333C765.843 180.667 795.219 180.688 817.635 183.702C839.763 186.677 853.606 192.402 863.935 202.731C874.264 213.06 879.99 226.903 882.965 249.032C885.979 271.448 886 300.824 886 341.333V715.333H138V341.333C138 300.824 138.021 271.448 141.035 249.032C144.01 226.903 149.736 213.06 160.065 202.731C170.394 192.402 184.237 186.677 206.365 183.702C228.782 180.688 258.157 180.667 298.667 180.667Z" stroke="black" stroke-width="20"/>
    <path d="M867.556 715.333H156.444C135.212 715.333 118 732.546 118 753.778C118 790.72 147.947 820.667 184.889 820.667H839.111C876.053 820.667 906 790.72 906 753.778C906 732.546 888.788 715.333 867.556 715.333Z" stroke="black" stroke-width="20"/>
</svg>
`
        })
        drawerAnimate();
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            onClick={openDrawer}
        >
            <motion.svg 
                initial={{scale:1}}
                animate={{scale:animationValue.scale}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M298.667 469.333C298.667 388.88 298.667 348.654 323.66 323.66C348.654 298.667 388.88 298.667 469.333 298.667H554.667C635.12 298.667 675.346 298.667 700.34 323.66C725.333 348.654 725.333 388.88 725.333 469.333V554.667C725.333 635.12 725.333 675.346 700.34 700.34C675.346 725.333 635.12 725.333 554.667 725.333H469.333C388.88 725.333 348.654 725.333 323.66 700.34C298.667 675.346 298.667 635.12 298.667 554.667V469.333Z" stroke="black" strokeWidth="20"/>
                <motion.rect
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    x="426.667" y="426.667" width="170.667" height="170.667" rx="1" fill="black"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M426.667 298.667V170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M597.333 298.667V170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M725.333 426.667L853.333 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M725.333 597.333L853.333 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M426.667 853.333V725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M597.333 853.333V725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M170.667 426.667L298.667 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M170.667 597.333L298.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}