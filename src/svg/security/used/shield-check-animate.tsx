"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function ShieldCheckAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1,
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Shield check",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function ShieldCheckAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1,
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
                <path d="M210.086 289.179L214.025 298.37L210.086 289.179C205.58 291.11 202.896 295.79 203.504 300.654L245.784 638.891C246.287 642.917 248.3 646.601 251.417 649.198L257.819 641.516L251.417 649.198L504.958 860.482L511.36 852.8L504.958 860.482C509.037 863.881 514.962 863.882 519.043 860.482L772.583 649.198C775.7 646.601 777.713 642.917 778.216 638.891L820.496 300.654C820.496 300.654 820.496 300.654 820.496 300.654C821.104 295.789 818.42 291.11 813.914 289.179L516.333 161.644L512.394 170.835L516.333 161.644C513.566 160.458 510.434 160.458 507.667 161.644C507.667 161.644 507.667 161.644 507.667 161.644L210.086 289.179Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 512L511.569 639.569C511.792 639.792 512.163 639.755 512.338 639.493L682.667 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ShieldCheckAnimate(){
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
                <Path d="M210.086 289.179L214.025 298.37L210.086 289.179C205.58 291.11 202.896 295.79 203.504 300.654L245.784 638.891C246.287 642.917 248.3 646.601 251.417 649.198L257.819 641.516L251.417 649.198L504.958 860.482L511.36 852.8L504.958 860.482C509.037 863.881 514.962 863.882 519.043 860.482L772.583 649.198C775.7 646.601 777.713 642.917 778.216 638.891L820.496 300.654C820.496 300.654 820.496 300.654 820.496 300.654C821.104 295.789 818.42 291.11 813.914 289.179L516.333 161.644L512.394 170.835L516.333 161.644C513.566 160.458 510.434 160.458 507.667 161.644C507.667 161.644 507.667 161.644 507.667 161.644L210.086 289.179Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 512L511.569 639.569C511.792 639.792 512.163 639.755 512.338 639.493L682.667 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M210.086 289.179L214.025 298.37L210.086 289.179C205.58 291.11 202.896 295.79 203.504 300.654L245.784 638.891C246.287 642.917 248.3 646.601 251.417 649.198L257.819 641.516L251.417 649.198L504.958 860.482L511.36 852.8L504.958 860.482C509.037 863.881 514.962 863.882 519.043 860.482L772.583 649.198C775.7 646.601 777.713 642.917 778.216 638.891L820.496 300.654C820.496 300.654 820.496 300.654 820.496 300.654C821.104 295.789 818.42 291.11 813.914 289.179L516.333 161.644L512.394 170.835L516.333 161.644C513.566 160.458 510.434 160.458 507.667 161.644C507.667 161.644 507.667 161.644 507.667 161.644L210.086 289.179Z" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M384 512L511.569 639.569C511.792 639.792 512.163 639.755 512.338 639.493L682.667 384" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <path d="M210.086 289.179L214.025 298.37L210.086 289.179C205.58 291.11 202.896 295.79 203.504 300.654L245.784 638.891C246.287 642.917 248.3 646.601 251.417 649.198L257.819 641.516L251.417 649.198L504.958 860.482L511.36 852.8L504.958 860.482C509.037 863.881 514.962 863.882 519.043 860.482L772.583 649.198C775.7 646.601 777.713 642.917 778.216 638.891L820.496 300.654C820.496 300.654 820.496 300.654 820.496 300.654C821.104 295.789 818.42 291.11 813.914 289.179L516.333 161.644L512.394 170.835L516.333 161.644C513.566 160.458 510.434 160.458 507.667 161.644C507.667 161.644 507.667 161.644 507.667 161.644L210.086 289.179Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 512L511.569 639.569C511.792 639.792 512.163 639.755 512.338 639.493L682.667 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}