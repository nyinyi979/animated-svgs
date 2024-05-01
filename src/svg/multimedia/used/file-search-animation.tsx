"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function FileSearchAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"File search",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function FileSearchAnimate(){
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
            <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 298.667L554.667 298.667" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 640L512 640" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 469.333L640 469.333" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 469.333V134C810.667 131.172 810.667 129.757 809.788 128.879C808.909 128 807.495 128 804.667 128H219.333C216.505 128 215.091 128 214.212 128.879C213.333 129.757 213.333 131.172 213.333 134V890C213.333 892.828 213.333 894.243 214.212 895.121C215.091 896 216.505 896 219.333 896H512" stroke="#33363F" strokeWidth="20"/>
                <motion.circle
                    initial={{scale:1}} animate={{scale:animationValue.scale}}
                    cx="746.667" cy="746.667" r="106.667" stroke="#33363F" strokeWidth="20"/>
                <motion.path
                    initial={{scale:1}} animate={{scale:animationValue.scale}}
                    d="M896 896L832 832" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
            </svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function FileSearchAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const scaleAnimatedProps = useAnimatedProps(()=>{
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
                animatedProps={scaleAnimatedProps}
                style={styles.svg}
                viewBox="0 0 1024 1024" fill="none" 
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 298.667L554.667 298.667" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 640L512 640" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 469.333L640 469.333" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M810.667 469.333V134C810.667 131.172 810.667 129.757 809.788 128.879C808.909 128 807.495 128 804.667 128H219.333C216.505 128 215.091 128 214.212 128.879C213.333 129.757 213.333 131.172 213.333 134V890C213.333 892.828 213.333 894.243 214.212 895.121C215.091 896 216.505 896 219.333 896H512" stroke="#33363F" strokeWidth="20"/>
                <AnimatedCircle
                    animatedProps={scaleAnimatedProps}
                    cx="746.667" cy="746.667" r="106.667" stroke="#33363F" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={scaleAnimatedProps}
                    d="M896 896L832 832" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M384 298.667L554.667 298.667" stroke="#33363F" stroke-width="20" stroke-linecap="round"/>
    <path d="M384 640L512 640" stroke="#33363F" stroke-width="20" stroke-linecap="round"/>
    <path d="M384 469.333L640 469.333" stroke="#33363F" stroke-width="20" stroke-linecap="round"/>
    <path d="M810.667 469.333V134C810.667 131.172 810.667 129.757 809.788 128.879C808.909 128 807.495 128 804.667 128H219.333C216.505 128 215.091 128 214.212 128.879C213.333 129.757 213.333 131.172 213.333 134V890C213.333 892.828 213.333 894.243 214.212 895.121C215.091 896 216.505 896 219.333 896H512" stroke="#33363F" stroke-width="20"/>
    <circle cx="746.667" cy="746.667" r="106.667" stroke="#33363F" stroke-width="20"/>
    <path d="M896 896L832 832" stroke="#33363F" stroke-width="20" stroke-linecap="round"/>
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
            <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 298.667L554.667 298.667" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 640L512 640" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 469.333L640 469.333" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 469.333V134C810.667 131.172 810.667 129.757 809.788 128.879C808.909 128 807.495 128 804.667 128H219.333C216.505 128 215.091 128 214.212 128.879C213.333 129.757 213.333 131.172 213.333 134V890C213.333 892.828 213.333 894.243 214.212 895.121C215.091 896 216.505 896 219.333 896H512" stroke="#33363F" strokeWidth="20"/>
                <motion.circle
                    initial={{scale:1}} animate={{scale:animationValue.scale}}
                    cx="746.667" cy="746.667" r="106.667" stroke="#33363F" strokeWidth="20"/>
                <motion.path
                    initial={{scale:1}} animate={{scale:animationValue.scale}}
                    d="M896 896L832 832" stroke="#33363F" strokeWidth="20" strokeLinecap="round"/>
            </svg>
        </div>
    )
}