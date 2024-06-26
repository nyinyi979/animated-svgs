"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function FileAddAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"File add",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function FileAddAnimate(){
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
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 554.667L640 554.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 384L554.667 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 725.333L554.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 554.667V890C810.667 892.828 810.667 894.243 809.788 895.121C808.909 896 807.495 896 804.667 896H219.333C216.505 896 215.091 896 214.212 895.121C213.333 894.243 213.333 892.828 213.333 890V134C213.333 131.172 213.333 129.757 214.212 128.879C215.091 128 216.505 128 219.333 128H469.333" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{scale:1}} animate={{scale:animationValue.scale}}
                    d="M768 128L768 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{scale:1}} animate={{scale:animationValue.scale}}
                    d="M896 256L640 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function FileAddAnimate(){
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
            <Svg 
                style={styles.svg}
                viewBox="0 0 1024 1024" fill="none" 
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 554.667L640 554.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 384L554.667 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 725.333L554.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M810.667 554.667V890C810.667 892.828 810.667 894.243 809.788 895.121C808.909 896 807.495 896 804.667 896H219.333C216.505 896 215.091 896 214.212 895.121C213.333 894.243 213.333 892.828 213.333 890V134C213.333 131.172 213.333 129.757 214.212 128.879C215.091 128 216.505 128 219.333 128H469.333" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M768 128L768 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M896 256L640 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </Svg>
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
    <path d="M810.667 554.667V890C810.667 892.828 810.667 894.243 809.788 895.121C808.909 896 807.495 896 804.667 896H219.333C216.505 896 215.091 896 214.212 895.121C213.333 894.243 213.333 892.828 213.333 890V134C213.333 131.172 213.333 129.757 214.212 128.879C215.091 128 216.505 128 219.333 128H512" stroke="#222222" stroke-width="20" stroke-linecap="round"/>
    <path d="M768 128L768 384" stroke="#222222" stroke-width="20" stroke-linecap="round"/>
    <path d="M896 256L640 256" stroke="#222222" stroke-width="20" stroke-linecap="round"/>
    <path d="M384 554.667L640 554.667" stroke="#222222" stroke-width="20" stroke-linecap="round"/>
    <path d="M384 384L554.667 384" stroke="#222222" stroke-width="20" stroke-linecap="round"/>
    <path d="M384 725.333L554.667 725.333" stroke="#222222" stroke-width="20" stroke-linecap="round"/>
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
                    d="M384 554.667L640 554.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 384L554.667 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{pathLength:1}} animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 725.333L554.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 554.667V890C810.667 892.828 810.667 894.243 809.788 895.121C808.909 896 807.495 896 804.667 896H219.333C216.505 896 215.091 896 214.212 895.121C213.333 894.243 213.333 892.828 213.333 890V134C213.333 131.172 213.333 129.757 214.212 128.879C215.091 128 216.505 128 219.333 128H469.333" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{scale:1}} animate={{scale:animationValue.scale}}
                    d="M768 128L768 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path
                    initial={{scale:1}} animate={{scale:animationValue.scale}}
                    d="M896 256L640 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </svg>
        </div>
    )
}