"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function LinesAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Lines",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function LinesAnimate(){
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
                <path d="M896 896H128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M170.667 682.667V597.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 512V384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M341.333 682.666V426.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M682.667 554.667V469.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M853.333 640.001V213.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LinesAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,strokeDasharray:1000,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
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
                <Path d="M896 896H128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M170.667 682.667V597.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 512V384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M341.333 682.666V426.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M682.667 554.667V469.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M853.333 640.001V213.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M896 896H128" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M170.667 682.667V597.334" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M512 512V384" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M341.333 682.666V426.666" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M682.667 554.667V469.334" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M853.333 640.001V213.334" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <path d="M896 896H128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M170.667 682.667V597.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 512V384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M341.333 682.666V426.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M682.667 554.667V469.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M853.333 640.001V213.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}