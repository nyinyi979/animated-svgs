"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function LineChartAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Line chart",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function LineChartAnimate(){
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
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M896 256L640.707 511.293C640.317 511.683 639.683 511.683 639.293 511.293L512.707 384.707C512.317 384.317 511.683 384.317 511.293 384.707L298.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M128 128V864C128 875.201 128 880.802 130.18 885.08C132.097 888.843 135.157 891.903 138.92 893.82C143.198 896 148.799 896 160 896H896" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LineChart1Animate(){
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
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M896 256L640.707 511.293C640.317 511.683 639.683 511.683 639.293 511.293L512.707 384.707C512.317 384.317 511.683 384.317 511.293 384.707L298.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M128 128V864C128 875.201 128 880.802 130.18 885.08C132.097 888.843 135.157 891.903 138.92 893.82C143.198 896 148.799 896 160 896H896" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M725.333 384L555.622 638.566C555.196 639.205 554.239 639.146 553.896 638.459L470.104 470.875C469.76 470.188 468.803 470.128 468.377 470.767L298.666 725.333" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="128" y="128" width="768" height="768" rx="20" stroke="black" stroke-width="20"/>
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
                    d="M896 256L640.707 511.293C640.317 511.683 639.683 511.683 639.293 511.293L512.707 384.707C512.317 384.317 511.683 384.317 511.293 384.707L298.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M128 128V864C128 875.201 128 880.802 130.18 885.08C132.097 888.843 135.157 891.903 138.92 893.82C143.198 896 148.799 896 160 896H896" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}