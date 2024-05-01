"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Chat4Animate({drawerAnimate,setDetails}:eachSVGType){
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

export default function Chat4Animate(){
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
                <path d="M853.333 178.667C853.333 174.896 853.333 173.01 852.162 171.839C850.99 170.667 849.105 170.667 845.333 170.667H178.667C174.896 170.667 173.01 170.667 171.838 171.839C170.667 173.01 170.667 174.896 170.667 178.667V851.334C170.667 852.276 170.667 852.748 170.96 853.041C171.253 853.334 171.724 853.334 172.667 853.334H845.333C849.105 853.334 850.99 853.334 852.162 852.162C853.333 850.99 853.333 849.105 853.333 845.334V178.667Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 426.667L640 426.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 597.333H512" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
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
                <Path d="M853.333 178.667C853.333 174.896 853.333 173.01 852.162 171.839C850.99 170.667 849.105 170.667 845.333 170.667H178.667C174.896 170.667 173.01 170.667 171.838 171.839C170.667 173.01 170.667 174.896 170.667 178.667V851.334C170.667 852.276 170.667 852.748 170.96 853.041C171.253 853.334 171.724 853.334 172.667 853.334H845.333C849.105 853.334 850.99 853.334 852.162 852.162C853.333 850.99 853.333 849.105 853.333 845.334V178.667Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 426.667L640 426.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 597.333H512" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
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
    <path d="M853.333 178.667C853.333 174.896 853.333 173.01 852.162 171.839C850.99 170.667 849.105 170.667 845.333 170.667H178.667C174.896 170.667 173.01 170.667 171.838 171.839C170.667 173.01 170.667 174.896 170.667 178.667V851.334C170.667 852.276 170.667 852.748 170.96 853.041C171.253 853.334 171.724 853.334 172.667 853.334H845.333C849.105 853.334 850.99 853.334 852.162 852.162C853.333 850.99 853.333 849.105 853.333 845.334V178.667Z" stroke="black" stroke-width="20"/>
    <path d="M384 426.667L640 426.667" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M384 597.333H512" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
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
                <path d="M853.333 178.667C853.333 174.896 853.333 173.01 852.162 171.839C850.99 170.667 849.105 170.667 845.333 170.667H178.667C174.896 170.667 173.01 170.667 171.838 171.839C170.667 173.01 170.667 174.896 170.667 178.667V851.334C170.667 852.276 170.667 852.748 170.96 853.041C171.253 853.334 171.724 853.334 172.667 853.334H845.333C849.105 853.334 850.99 853.334 852.162 852.162C853.333 850.99 853.333 849.105 853.333 845.334V178.667Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 426.667L640 426.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 597.333H512" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}