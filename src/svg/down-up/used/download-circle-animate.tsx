"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function DownloadCircleAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
        translateY: [0],
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
            translateY: [0,80,0]
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1,
            translateY: [0]
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Download circle",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function DownloadCircleAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
        translateY: [0],
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
            translateY: [0,80,0]
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1,
            translateY: [0]
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
                    d="M223.51 631.967C240.527 695.474 278.023 751.591 330.183 791.615C382.344 831.639 446.253 853.333 512 853.333C577.747 853.333 641.656 831.639 693.817 791.615C745.977 751.591 783.473 695.474 800.49 631.967" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 554.667L505.753 562.475L512 567.473L518.247 562.475L512 554.667ZM522 170.667C522 165.144 517.523 160.667 512 160.667C506.477 160.667 502 165.144 502 170.667L522 170.667ZM292.42 391.809L505.753 562.475L518.247 546.858L304.914 376.191L292.42 391.809ZM518.247 562.475L731.58 391.809L719.086 376.191L505.753 546.858L518.247 562.475ZM522 554.667L522 170.667L502 170.667L502 554.667L522 554.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function DownloadCircleAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
        translateY: 0,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1000,strokeDashoffset:1000,translateY:0}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0,translateY:80}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0,translateY:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1,translateY:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const strokePathAnimatedProps = useAnimatedProps(()=>{
        return{
            strokeDashoffset: animationValue.value.strokeDashoffset,
            strokeDasharray: animationValue.value.strokeDasharray
        }
    })
    const translateYPathAnimatedProps = useAnimatedProps(()=>{
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
                <AnimatedPath
                    animatedProps={strokePathAnimatedProps}
                    d="M223.51 631.967C240.527 695.474 278.023 751.591 330.183 791.615C382.344 831.639 446.253 853.333 512 853.333C577.747 853.333 641.656 831.639 693.817 791.615C745.977 751.591 783.473 695.474 800.49 631.967" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={translateYPathAnimatedProps}
                    d="M512 554.667L505.753 562.475L512 567.473L518.247 562.475L512 554.667ZM522 170.667C522 165.144 517.523 160.667 512 160.667C506.477 160.667 502 165.144 502 170.667L522 170.667ZM292.42 391.809L505.753 562.475L518.247 546.858L304.914 376.191L292.42 391.809ZM518.247 562.475L731.58 391.809L719.086 376.191L505.753 546.858L518.247 562.475ZM522 554.667L522 170.667L502 170.667L502 554.667L522 554.667Z" fill="black"/>
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
    <path d="M223.51 631.967C240.527 695.474 278.023 751.591 330.183 791.615C382.344 831.639 446.253 853.333 512 853.333C577.747 853.333 641.656 831.639 693.817 791.615C745.977 751.591 783.473 695.474 800.49 631.967" stroke="black" stroke-width="20"/>
    <path d="M512 554.667L505.753 562.475L512 567.473L518.247 562.475L512 554.667ZM522 170.667C522 165.144 517.523 160.667 512 160.667C506.477 160.667 502 165.144 502 170.667L522 170.667ZM292.42 391.809L505.753 562.475L518.247 546.858L304.914 376.191L292.42 391.809ZM518.247 562.475L731.58 391.809L719.086 376.191L505.753 546.858L518.247 562.475ZM522 554.667L522 170.667L502 170.667L502 554.667L522 554.667Z" fill="black"/>
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
                    d="M223.51 631.967C240.527 695.474 278.023 751.591 330.183 791.615C382.344 831.639 446.253 853.333 512 853.333C577.747 853.333 641.656 831.639 693.817 791.615C745.977 751.591 783.473 695.474 800.49 631.967" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 554.667L505.753 562.475L512 567.473L518.247 562.475L512 554.667ZM522 170.667C522 165.144 517.523 160.667 512 160.667C506.477 160.667 502 165.144 502 170.667L522 170.667ZM292.42 391.809L505.753 562.475L518.247 546.858L304.914 376.191L292.42 391.809ZM518.247 562.475L731.58 391.809L719.086 376.191L505.753 546.858L518.247 562.475ZM522 554.667L522 170.667L502 170.667L502 554.667L522 554.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}