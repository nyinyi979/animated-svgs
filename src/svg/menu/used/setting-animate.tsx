"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function SettingAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0,0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [-30,30],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0,0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Setting",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function SettingAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0,0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [-30,30],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0,0],
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
                <path d="M256 512L256 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[1]}}
                    d="M512 341.333L512 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M256 810.667L256 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M768 810.667L768 725.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M512 810.667L512 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[1]}}
                    d="M426.667 341.333H597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M170.667 682.667H341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M682.667 725.333H853.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M768 554.667L768 213.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function SettingAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: [0,0],
    });
    //translateY: [0,40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:[-30,30]}),
            withTiming({scale:1.1,translateY:[0,0]})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateY:[0,0]})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const translateYAnimatedProps1 = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY[0]}]
        }
    })
    const translateYAnimatedProps2 = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY[1]}]
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
                
                <Path d="M256 512L256 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={translateYAnimatedProps2}
                    d="M512 341.333L512 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={translateYAnimatedProps1}
                    d="M256 810.667L256 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={translateYAnimatedProps1}
                    d="M768 810.667L768 725.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M512 810.667L512 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={translateYAnimatedProps2}
                    d="M426.667 341.333H597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={translateYAnimatedProps1}
                    d="M170.667 682.667H341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={translateYAnimatedProps1}
                    d="M682.667 725.333H853.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M768 554.667L768 213.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M256 512L256 213.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M512 341.333L512 213.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M256 810.667L256 682.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M768 810.667L768 725.334" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M512 810.667L512 512" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M426.667 341.333H597.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M170.667 682.667H341.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M682.667 725.333H853.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M768 554.667L768 213.334" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <path d="M256 512L256 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[1]}}
                    d="M512 341.333L512 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M256 810.667L256 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M768 810.667L768 725.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M512 810.667L512 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[1]}}
                    d="M426.667 341.333H597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M170.667 682.667H341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY[0]}}
                    d="M682.667 725.333H853.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M768 554.667L768 213.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}