"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function LeftArrowLineAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Left arrow line",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function LeftArrowLineAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
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
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M426.667 512L419.595 504.929L412.524 512L419.595 519.071L426.667 512ZM853.333 522C858.856 522 863.333 517.523 863.333 512C863.333 506.477 858.856 502 853.333 502V522ZM675.595 248.929L419.595 504.929L433.738 519.071L689.738 263.071L675.595 248.929ZM419.595 519.071L675.595 775.071L689.738 760.929L433.738 504.929L419.595 519.071ZM426.667 522H853.333V502H426.667V522Z" fill="black"/>
                <path d="M170.667 213.333L170.667 810.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LeftArrowLineAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0,
    }); 
    //translateX: [0,-40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateX:-40}),
            withTiming({scale:1.1,translateX:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateX:0})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateX: animationValue.value.translateX}]
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
                    animatedProps={pathAnimatedProps}
                    d="M426.667 512L419.595 504.929L412.524 512L419.595 519.071L426.667 512ZM853.333 522C858.856 522 863.333 517.523 863.333 512C863.333 506.477 858.856 502 853.333 502V522ZM675.595 248.929L419.595 504.929L433.738 519.071L689.738 263.071L675.595 248.929ZM419.595 519.071L675.595 775.071L689.738 760.929L433.738 504.929L419.595 519.071ZM426.667 522H853.333V502H426.667V522Z" fill="black"/>
                <path d="M170.667 213.333L170.667 810.667" stroke="black" strokeWidth="20"/>
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
    <path d="M426.667 512L419.595 504.929L412.524 512L419.595 519.071L426.667 512ZM853.333 522C858.856 522 863.333 517.523 863.333 512C863.333 506.477 858.856 502 853.333 502V522ZM675.595 248.929L419.595 504.929L433.738 519.071L689.738 263.071L675.595 248.929ZM419.595 519.071L675.595 775.071L689.738 760.929L433.738 504.929L419.595 519.071ZM426.667 522H853.333V502H426.667V522Z" fill="black"/>
    <path d="M170.667 213.333L170.667 810.667" stroke="black" stroke-width="20"/>
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
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M426.667 512L419.595 504.929L412.524 512L419.595 519.071L426.667 512ZM853.333 522C858.856 522 863.333 517.523 863.333 512C863.333 506.477 858.856 502 853.333 502V522ZM675.595 248.929L419.595 504.929L433.738 519.071L689.738 263.071L675.595 248.929ZM419.595 519.071L675.595 775.071L689.738 760.929L433.738 504.929L419.595 519.071ZM426.667 522H853.333V502H426.667V522Z" fill="black"/>
                <path d="M170.667 213.333L170.667 810.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}