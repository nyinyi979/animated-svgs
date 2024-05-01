"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Timer1Animate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Timer",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function TimerAnimate(){
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
                <ellipse cx="512" cy="597.333" rx="341.333" ry="341.333" stroke="black" strokeWidth="20"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 597.333L512 469.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M746.667 320L810.667 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M429.574 101.145C434.436 96.6092 445.149 92.6008 460.052 89.742C474.955 86.8831 493.215 85.3335 512 85.3335C530.785 85.3335 549.045 86.8831 563.948 89.742C578.851 92.6008 589.564 96.6092 594.426 101.145" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function TimerAnimate(){
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
                <Ellipse cx="512" cy="597.333" rx="341.333" ry="341.333" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 597.333L512 469.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M746.667 320L810.667 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M429.574 101.145C434.436 96.6092 445.149 92.6008 460.052 89.742C474.955 86.8831 493.215 85.3335 512 85.3335C530.785 85.3335 549.045 86.8831 563.948 89.742C578.851 92.6008 589.564 96.6092 594.426 101.145" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <ellipse cx="512" cy="597.333" rx="341.333" ry="341.333" stroke="black" stroke-width="20"/>
    <path d="M512 597.333L512 469.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M746.667 320L810.667 256" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M429.574 101.145C434.436 96.6092 445.149 92.6008 460.052 89.742C474.955 86.8831 493.215 85.3335 512 85.3335C530.785 85.3335 549.045 86.8831 563.948 89.742C578.851 92.6008 589.564 96.6092 594.426 101.145" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <ellipse cx="512" cy="597.333" rx="341.333" ry="341.333" stroke="black" strokeWidth="20"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 597.333L512 469.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M746.667 320L810.667 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M429.574 101.145C434.436 96.6092 445.149 92.6008 460.052 89.742C474.955 86.8831 493.215 85.3335 512 85.3335C530.785 85.3335 549.045 86.8831 563.948 89.742C578.851 92.6008 589.564 96.6092 594.426 101.145" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}