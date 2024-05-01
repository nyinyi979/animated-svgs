"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function PrintAnimate({drawerAnimate,setDetails}:eachSVGType){
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
    const openDrawer = () => {
        setDetails({
            name:"Print",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function PrintAnimate(){
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
                <path d="M783.059 597.333H894C894.943 597.333 895.414 597.333 895.707 597.04C896 596.747 896 596.276 896 595.333V302.667C896 300.781 896 299.838 895.414 299.252C894.828 298.667 893.886 298.667 892 298.667H132C130.114 298.667 129.172 298.667 128.586 299.252C128 299.838 128 300.781 128 302.667V596.333C128 596.805 128 597.04 128.146 597.187C128.293 597.333 128.529 597.333 129 597.333H240.941" stroke="black" strokeWidth="20"/>
                <path d="M256 895.306L256 428.667C256 427.724 256 427.253 256.293 426.96C256.586 426.667 257.057 426.667 258 426.667L766 426.667C766.943 426.667 767.414 426.667 767.707 426.96C768 427.253 768 427.724 768 428.667L768 895.306C768 895.623 768 895.781 767.896 895.856C767.792 895.931 767.642 895.881 767.342 895.781L640.158 853.386C640.08 853.36 640.041 853.347 640 853.347C639.959 853.347 639.92 853.36 639.842 853.386L512.158 895.947C512.08 895.973 512.041 895.986 512 895.986C511.959 895.986 511.92 895.973 511.842 895.947L384.158 853.386C384.08 853.36 384.041 853.347 384 853.347C383.959 853.347 383.92 853.36 383.842 853.386L256.658 895.781C256.358 895.881 256.208 895.931 256.104 895.856C256 895.781 256 895.623 256 895.306Z" stroke="black" strokeWidth="20"/>
                <path d="M768 298.667V130.88C768 129.872 768 129.368 767.804 128.983C767.631 128.644 767.356 128.369 767.017 128.196C766.632 128 766.128 128 765.12 128H258.88C257.872 128 257.368 128 256.983 128.196C256.644 128.369 256.369 128.644 256.196 128.983C256 129.368 256 129.872 256 130.88V298.667" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M426.667 597.333L554.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M426.667 725.333L618.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function PrintAnimate(){
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
        animationValue.value = withTiming({scale:1,strokeDasharray:1000,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
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
                <Path d="M783.059 597.333H894C894.943 597.333 895.414 597.333 895.707 597.04C896 596.747 896 596.276 896 595.333V302.667C896 300.781 896 299.838 895.414 299.252C894.828 298.667 893.886 298.667 892 298.667H132C130.114 298.667 129.172 298.667 128.586 299.252C128 299.838 128 300.781 128 302.667V596.333C128 596.805 128 597.04 128.146 597.187C128.293 597.333 128.529 597.333 129 597.333H240.941" stroke="black" strokeWidth="20"/>
                <Path d="M256 895.306L256 428.667C256 427.724 256 427.253 256.293 426.96C256.586 426.667 257.057 426.667 258 426.667L766 426.667C766.943 426.667 767.414 426.667 767.707 426.96C768 427.253 768 427.724 768 428.667L768 895.306C768 895.623 768 895.781 767.896 895.856C767.792 895.931 767.642 895.881 767.342 895.781L640.158 853.386C640.08 853.36 640.041 853.347 640 853.347C639.959 853.347 639.92 853.36 639.842 853.386L512.158 895.947C512.08 895.973 512.041 895.986 512 895.986C511.959 895.986 511.92 895.973 511.842 895.947L384.158 853.386C384.08 853.36 384.041 853.347 384 853.347C383.959 853.347 383.92 853.36 383.842 853.386L256.658 895.781C256.358 895.881 256.208 895.931 256.104 895.856C256 895.781 256 895.623 256 895.306Z" stroke="black" strokeWidth="20"/>
                <Path d="M768 298.667V130.88C768 129.872 768 129.368 767.804 128.983C767.631 128.644 767.356 128.369 767.017 128.196C766.632 128 766.128 128 765.12 128H258.88C257.872 128 257.368 128 256.983 128.196C256.644 128.369 256.369 128.644 256.196 128.983C256 129.368 256 129.872 256 130.88V298.667" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M426.667 597.333L554.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M426.667 725.333L618.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M783.059 597.333H894C894.943 597.333 895.414 597.333 895.707 597.04C896 596.747 896 596.276 896 595.333V302.667C896 300.781 896 299.838 895.414 299.252C894.828 298.667 893.886 298.667 892 298.667H132C130.114 298.667 129.172 298.667 128.586 299.252C128 299.838 128 300.781 128 302.667V596.333C128 596.805 128 597.04 128.146 597.187C128.293 597.333 128.529 597.333 129 597.333H240.941" stroke="black" stroke-width="20"/>
    <path d="M256 895.306L256 428.667C256 427.724 256 427.253 256.293 426.96C256.586 426.667 257.057 426.667 258 426.667L766 426.667C766.943 426.667 767.414 426.667 767.707 426.96C768 427.253 768 427.724 768 428.667L768 895.306C768 895.623 768 895.781 767.896 895.856C767.792 895.931 767.642 895.881 767.342 895.781L640.158 853.386C640.08 853.36 640.041 853.347 640 853.347C639.959 853.347 639.92 853.36 639.842 853.386L512.158 895.947C512.08 895.973 512.041 895.986 512 895.986C511.959 895.986 511.92 895.973 511.842 895.947L384.158 853.386C384.08 853.36 384.041 853.347 384 853.347C383.959 853.347 383.92 853.36 383.842 853.386L256.658 895.781C256.358 895.881 256.208 895.931 256.104 895.856C256 895.781 256 895.623 256 895.306Z" stroke="black" stroke-width="20"/>
    <path d="M768 298.667V130.88C768 129.872 768 129.368 767.804 128.983C767.631 128.644 767.356 128.369 767.017 128.196C766.632 128 766.128 128 765.12 128H258.88C257.872 128 257.368 128 256.983 128.196C256.644 128.369 256.369 128.644 256.196 128.983C256 129.368 256 129.872 256 130.88V298.667" stroke="black" stroke-width="20"/>
    <path d="M426.667 597.333L554.667 597.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M426.667 725.333L618.667 725.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <path d="M783.059 597.333H894C894.943 597.333 895.414 597.333 895.707 597.04C896 596.747 896 596.276 896 595.333V302.667C896 300.781 896 299.838 895.414 299.252C894.828 298.667 893.886 298.667 892 298.667H132C130.114 298.667 129.172 298.667 128.586 299.252C128 299.838 128 300.781 128 302.667V596.333C128 596.805 128 597.04 128.146 597.187C128.293 597.333 128.529 597.333 129 597.333H240.941" stroke="black" strokeWidth="20"/>
                <path d="M256 895.306L256 428.667C256 427.724 256 427.253 256.293 426.96C256.586 426.667 257.057 426.667 258 426.667L766 426.667C766.943 426.667 767.414 426.667 767.707 426.96C768 427.253 768 427.724 768 428.667L768 895.306C768 895.623 768 895.781 767.896 895.856C767.792 895.931 767.642 895.881 767.342 895.781L640.158 853.386C640.08 853.36 640.041 853.347 640 853.347C639.959 853.347 639.92 853.36 639.842 853.386L512.158 895.947C512.08 895.973 512.041 895.986 512 895.986C511.959 895.986 511.92 895.973 511.842 895.947L384.158 853.386C384.08 853.36 384.041 853.347 384 853.347C383.959 853.347 383.92 853.36 383.842 853.386L256.658 895.781C256.358 895.881 256.208 895.931 256.104 895.856C256 895.781 256 895.623 256 895.306Z" stroke="black" strokeWidth="20"/>
                <path d="M768 298.667V130.88C768 129.872 768 129.368 767.804 128.983C767.631 128.644 767.356 128.369 767.017 128.196C766.632 128 766.128 128 765.12 128H258.88C257.872 128 257.368 128 256.983 128.196C256.644 128.369 256.369 128.644 256.196 128.983C256 129.368 256 129.872 256 130.88V298.667" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M426.667 597.333L554.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M426.667 725.333L618.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}