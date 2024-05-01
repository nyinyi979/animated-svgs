"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function MicAnimate({drawerAnimate,setDetails}:eachSVGType){
    const openDrawer = () =>{
        setDetails({
            name:"Mic",
            svg:`<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="384" y="128" width="256" height="469.333" rx="3" stroke="black" stroke-width="20" stroke-linejoin="round"/>
    <path d="M246 469.333C246 539.881 274.025 607.539 323.91 657.424C373.794 707.308 441.452 735.333 512 735.333C582.548 735.333 650.206 707.308 700.09 657.424C749.975 607.539 778 539.881 778 469.333" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M512 896V810.667" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
            react:`import React from "react"
import { motion } from "framer-motion"

export default function MicAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0],
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
                <motion.rect 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    x="384" y="128" width="256" height="469.333" rx="3" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M246 469.333C246 539.881 274.025 607.539 323.91 657.424C373.794 707.308 441.452 735.333 512 735.333C582.548 735.333 650.206 707.308 700.09 657.424C749.975 607.539 778 539.881 778 469.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 896V810.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function MicAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedRect = Animated.createAnimatedComponent(Rect);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        translateY: 0,
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {translateY:0,scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({translateY:-40,scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({translateY:0,scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {translateY:0,scale:1,strokeDasharray:1000,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        )
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
    const rectAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY:animationValue.value.translateY}]
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
                <AnimatedRect
                    animatedProps={rectAnimatedProps}
                    x="384" y="128" width="256" height="469.333" rx="3" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M246 469.333C246 539.881 274.025 607.539 323.91 657.424C373.794 707.308 441.452 735.333 512 735.333C582.548 735.333 650.206 707.308 700.09 657.424C749.975 607.539 778 539.881 778 469.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 896V810.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
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
})`
        });
        drawerAnimate();
    }
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0],
            pathLength: 1,
            scale: 1
        })
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
                <motion.rect 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    x="384" y="128" width="256" height="469.333" rx="3" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M246 469.333C246 539.881 274.025 607.539 323.91 657.424C373.794 707.308 441.452 735.333 512 735.333C582.548 735.333 650.206 707.308 700.09 657.424C749.975 607.539 778 539.881 778 469.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 896V810.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}