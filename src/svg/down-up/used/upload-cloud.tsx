"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function UploadCloudAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
        translateY: [0],
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
            translateY: [0,-80,0]
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
            name:"Upload cloud",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function UploadCloudAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
        translateY: [0],
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
            translateY: [0,-80,0]
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
                    fillRule="evenodd" clipRule="evenodd" d="M512 118C406.79 118 318.592 190.74 294.915 288.667H256C179.785 288.667 118 350.451 118 426.667C118 502.882 179.785 564.667 256 564.667H360.098L380.098 544.667H256C190.83 544.667 138 491.836 138 426.667C138 361.497 190.83 308.667 256 308.667H301.299L301.349 308.667C301.6 308.669 302.524 308.674 303.419 308.566C304.657 308.415 306.896 307.953 309.045 306.21C311.209 304.456 312.12 302.344 312.516 301.179C312.805 300.329 312.989 299.427 313.041 299.177L313.051 299.127C332.477 207.082 414.182 138 512 138C609.818 138 691.523 207.082 710.949 299.127L710.959 299.176L710.96 299.177C711.011 299.428 711.195 300.329 711.484 301.179C711.88 302.344 712.791 304.456 714.955 306.21C717.104 307.953 719.343 308.415 720.581 308.566C721.553 308.684 722.559 308.667 722.701 308.667H886V544.667H643.902L663.902 564.667H892C899.732 564.667 906 558.399 906 550.667V302.667C906 294.935 899.732 288.667 892 288.667H729.085C705.408 190.74 617.21 118 512 118Z" fill="black"/>
                <motion.path
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 512L504.929 504.929L512 497.858L519.071 504.929L512 512ZM522 896C522 901.523 517.523 906 512 906C506.477 906 502 901.523 502 896L522 896ZM334.262 675.596L504.929 504.929L519.071 519.071L348.404 689.738L334.262 675.596ZM519.071 504.929L689.738 675.596L675.596 689.738L504.929 519.071L519.071 504.929ZM522 512L522 896L502 896L502 512L522 512Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function UploadCloudAnimate(){
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
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0,translateY:-80}),
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <AnimatedPath
                    animatedProps={strokePathAnimatedProps}
                    fillRule="evenodd" clipRule="evenodd" d="M512 118C406.79 118 318.592 190.74 294.915 288.667H256C179.785 288.667 118 350.451 118 426.667C118 502.882 179.785 564.667 256 564.667H360.098L380.098 544.667H256C190.83 544.667 138 491.836 138 426.667C138 361.497 190.83 308.667 256 308.667H301.299L301.349 308.667C301.6 308.669 302.524 308.674 303.419 308.566C304.657 308.415 306.896 307.953 309.045 306.21C311.209 304.456 312.12 302.344 312.516 301.179C312.805 300.329 312.989 299.427 313.041 299.177L313.051 299.127C332.477 207.082 414.182 138 512 138C609.818 138 691.523 207.082 710.949 299.127L710.959 299.176L710.96 299.177C711.011 299.428 711.195 300.329 711.484 301.179C711.88 302.344 712.791 304.456 714.955 306.21C717.104 307.953 719.343 308.415 720.581 308.566C721.553 308.684 722.559 308.667 722.701 308.667H886V544.667H643.902L663.902 564.667H892C899.732 564.667 906 558.399 906 550.667V302.667C906 294.935 899.732 288.667 892 288.667H729.085C705.408 190.74 617.21 118 512 118Z" fill="black"/>
                <AnimatedPath
                    animatedProps={translateYPathAnimatedProps}
                    d="M512 512L504.929 504.929L512 497.858L519.071 504.929L512 512ZM522 896C522 901.523 517.523 906 512 906C506.477 906 502 901.523 502 896L522 896ZM334.262 675.596L504.929 504.929L519.071 519.071L348.404 689.738L334.262 675.596ZM519.071 504.929L689.738 675.596L675.596 689.738L504.929 519.071L519.071 504.929ZM522 512L522 896L502 896L502 512L522 512Z" fill="black"/>
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M512 118C406.79 118 318.592 190.74 294.915 288.667H256C179.785 288.667 118 350.451 118 426.667C118 502.882 179.785 564.667 256 564.667H360.098L380.098 544.667H256C190.83 544.667 138 491.836 138 426.667C138 361.497 190.83 308.667 256 308.667H301.299L301.349 308.667C301.6 308.669 302.524 308.674 303.419 308.566C304.657 308.415 306.896 307.953 309.045 306.21C311.209 304.456 312.12 302.344 312.516 301.179C312.805 300.329 312.989 299.427 313.041 299.177L313.051 299.127C332.477 207.082 414.182 138 512 138C609.818 138 691.523 207.082 710.949 299.127L710.959 299.176L710.96 299.177C711.011 299.428 711.195 300.329 711.484 301.179C711.88 302.344 712.791 304.456 714.955 306.21C717.104 307.953 719.343 308.415 720.581 308.566C721.553 308.684 722.559 308.667 722.701 308.667H886V544.667H643.902L663.902 564.667H892C899.732 564.667 906 558.399 906 550.667V302.667C906 294.935 899.732 288.667 892 288.667H729.085C705.408 190.74 617.21 118 512 118Z" fill="black"/>
    <path d="M512 512L504.929 504.929L512 497.858L519.071 504.929L512 512ZM522 896C522 901.523 517.523 906 512 906C506.477 906 502 901.523 502 896L522 896ZM334.262 675.596L504.929 504.929L519.071 519.071L348.404 689.738L334.262 675.596ZM519.071 504.929L689.738 675.596L675.596 689.738L504.929 519.071L519.071 504.929ZM522 512L522 896L502 896L502 512L522 512Z" fill="black"/>
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
                    fillRule="evenodd" clipRule="evenodd" d="M512 118C406.79 118 318.592 190.74 294.915 288.667H256C179.785 288.667 118 350.451 118 426.667C118 502.882 179.785 564.667 256 564.667H360.098L380.098 544.667H256C190.83 544.667 138 491.836 138 426.667C138 361.497 190.83 308.667 256 308.667H301.299L301.349 308.667C301.6 308.669 302.524 308.674 303.419 308.566C304.657 308.415 306.896 307.953 309.045 306.21C311.209 304.456 312.12 302.344 312.516 301.179C312.805 300.329 312.989 299.427 313.041 299.177L313.051 299.127C332.477 207.082 414.182 138 512 138C609.818 138 691.523 207.082 710.949 299.127L710.959 299.176L710.96 299.177C711.011 299.428 711.195 300.329 711.484 301.179C711.88 302.344 712.791 304.456 714.955 306.21C717.104 307.953 719.343 308.415 720.581 308.566C721.553 308.684 722.559 308.667 722.701 308.667H886V544.667H643.902L663.902 564.667H892C899.732 564.667 906 558.399 906 550.667V302.667C906 294.935 899.732 288.667 892 288.667H729.085C705.408 190.74 617.21 118 512 118Z" fill="black"/>
                <motion.path
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 512L504.929 504.929L512 497.858L519.071 504.929L512 512ZM522 896C522 901.523 517.523 906 512 906C506.477 906 502 901.523 502 896L522 896ZM334.262 675.596L504.929 504.929L519.071 519.071L348.404 689.738L334.262 675.596ZM519.071 504.929L689.738 675.596L675.596 689.738L504.929 519.071L519.071 504.929ZM522 512L522 896L502 896L502 512L522 512Z" fill="black"/>
            </motion.svg>
        </div>
    )
}