"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Chat2Animate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Chat",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function ChatAnimate(){
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
                <path d="M170.667 188.667C170.667 180.182 170.667 175.939 173.303 173.303C175.939 170.667 180.181 170.667 188.667 170.667H835.333C843.818 170.667 848.061 170.667 850.697 173.303C853.333 175.939 853.333 180.182 853.333 188.667V849.334C853.333 851.219 853.333 852.162 852.747 852.748C852.162 853.334 851.219 853.334 849.333 853.334H188.667C180.181 853.334 175.939 853.334 173.303 850.698C170.667 848.062 170.667 843.819 170.667 835.334V188.667Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 469.333L640 469.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 640H640" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ChatAnimate(){
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <Path d="M170.667 188.667C170.667 180.182 170.667 175.939 173.303 173.303C175.939 170.667 180.181 170.667 188.667 170.667H835.333C843.818 170.667 848.061 170.667 850.697 173.303C853.333 175.939 853.333 180.182 853.333 188.667V849.334C853.333 851.219 853.333 852.162 852.747 852.748C852.162 853.334 851.219 853.334 849.333 853.334H188.667C180.181 853.334 175.939 853.334 173.303 850.698C170.667 848.062 170.667 843.819 170.667 835.334V188.667Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 469.333L640 469.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 640H640" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
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
    <path d="M170.667 188.667C170.667 180.182 170.667 175.939 173.303 173.303C175.939 170.667 180.181 170.667 188.667 170.667H835.333C843.818 170.667 848.061 170.667 850.697 173.303C853.333 175.939 853.333 180.182 853.333 188.667V849.334C853.333 851.219 853.333 852.162 852.747 852.748C852.162 853.334 851.219 853.334 849.333 853.334H188.667C180.181 853.334 175.939 853.334 173.303 850.698C170.667 848.062 170.667 843.819 170.667 835.334V188.667Z" stroke="black" stroke-width="20"/>
    <path d="M384 469.333L640 469.333" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M512 640H640" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
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
                <path d="M170.667 188.667C170.667 180.182 170.667 175.939 173.303 173.303C175.939 170.667 180.181 170.667 188.667 170.667H835.333C843.818 170.667 848.061 170.667 850.697 173.303C853.333 175.939 853.333 180.182 853.333 188.667V849.334C853.333 851.219 853.333 852.162 852.747 852.748C852.162 853.334 851.219 853.334 849.333 853.334H188.667C180.181 853.334 175.939 853.334 173.303 850.698C170.667 848.062 170.667 843.819 170.667 835.334V188.667Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 469.333L640 469.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 640H640" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}