"use client"
import React from "react";
import { motion } from "framer-motion";
import { eachSVGType } from "@/app/page";
export default function AddSquareAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        path: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            path: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            path: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Add square",
            react:`import React from "react";
import { motion } from "framer-motion";
export default function AddSquareAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        path: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            path: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            path: 1,
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
                <path d="M128 136C128 132.229 128 130.343 129.172 129.172C130.343 128 132.229 128 136 128H888C891.771 128 893.657 128 894.828 129.172C896 130.343 896 132.229 896 136V888C896 891.771 896 893.657 894.828 894.828C893.657 896 891.771 896 888 896H136C132.229 896 130.343 896 129.172 894.828C128 893.657 128 891.771 128 888V136Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}} 
                    d="M512 256L512 768" stroke="black" strokeWidth="20" strokeLinecap="square"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}} 
                    d="M256 512L768 512" stroke="black" strokeWidth="20" strokeLinecap="square"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function AddSquareAnimate(){
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
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        );
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
                <Path d="M128 136C128 132.229 128 130.343 129.172 129.172C130.343 128 132.229 128 136 128H888C891.771 128 893.657 128 894.828 129.172C896 130.343 896 132.229 896 136V888C896 891.771 896 893.657 894.828 894.828C893.657 896 891.771 896 888 896H136C132.229 896 130.343 896 129.172 894.828C128 893.657 128 891.771 128 888V136Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 256L512 768" stroke="black" strokeWidth="20" strokeLinecap="square"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M256 512L768 512" stroke="black" strokeWidth="20" strokeLinecap="square"/>
            </AnimatedSvg>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        width: 100,
        height: 100,
        backgroundColor:"red",
        alignItems:"center"
    },
    svg:{
        alignSelf: "center",
    }
})`,
            svg:`<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="20" d="M136 128.5H888C889.9 128.5 891.274 128.501 892.323 128.642C893.356 128.781 893.997 129.048 894.475 129.525C894.952 130.003 895.219 130.644 895.358 131.678C895.499 132.726 895.5 134.1 895.5 136V888C895.5 889.9 895.499 891.274 895.358 892.323C895.219 893.356 894.952 893.997 894.475 894.475C893.997 894.952 893.356 895.219 892.323 895.358C891.274 895.499 889.9 895.5 888 895.5H136C134.1 895.5 132.726 895.499 131.678 895.358C130.644 895.219 130.003 894.952 129.525 894.475C129.048 893.997 128.781 893.356 128.642 892.323C128.501 891.274 128.5 889.9 128.5 888V136C128.5 134.1 128.501 132.726 128.642 131.678C128.781 130.644 129.048 130.003 129.525 129.525C130.003 129.048 130.644 128.781 131.678 128.642C132.726 128.501 134.1 128.5 136 128.5Z" stroke="black"/>
    <path stroke-width="20" d="M512 341.333L512 682.667" stroke="black" stroke-linejoin="round"/>
    <path stroke-width="20" d="M682.667 512L341.333 512" stroke="black" stroke-linejoin="round"/>
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
                <path d="M128 136C128 132.229 128 130.343 129.172 129.172C130.343 128 132.229 128 136 128H888C891.771 128 893.657 128 894.828 129.172C896 130.343 896 132.229 896 136V888C896 891.771 896 893.657 894.828 894.828C893.657 896 891.771 896 888 896H136C132.229 896 130.343 896 129.172 894.828C128 893.657 128 891.771 128 888V136Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}} 
                    d="M512 256L512 768" stroke="black" strokeWidth="20" strokeLinecap="square"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}} 
                    d="M256 512L768 512" stroke="black" strokeWidth="20" strokeLinecap="square"/>
            </motion.svg>
        </div>
    )
}