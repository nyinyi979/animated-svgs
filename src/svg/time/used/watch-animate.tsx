"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function WatchAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Watch",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function WatchAnimate(){
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
                <circle cx="512" cy="512" r="288.667" stroke="black" strokeWidth="20"/>
                <path d="M362.667 298.667L383.907 128.745C383.96 128.319 384.322 128 384.75 128H639.25C639.678 128 640.04 128.319 640.093 128.745L661.333 298.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M362.667 725.333L383.907 895.255C383.96 895.681 384.322 896 384.75 896H639.25C639.678 896 640.04 895.681 640.093 895.255L661.333 725.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M809.817 469.333H746.667V554.667H809.817C810.286 554.667 810.667 554.286 810.667 553.817V470.183C810.667 469.714 810.286 469.333 809.817 469.333Z" fill="black"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 512L469.333 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 512L618.667 554.685" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function WatchAnimate(){
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
                <Circle cx="512" cy="512" r="288.667" stroke="black" strokeWidth="20"/>
                <Path d="M362.667 298.667L383.907 128.745C383.96 128.319 384.322 128 384.75 128H639.25C639.678 128 640.04 128.319 640.093 128.745L661.333 298.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M362.667 725.333L383.907 895.255C383.96 895.681 384.322 896 384.75 896H639.25C639.678 896 640.04 895.681 640.093 895.255L661.333 725.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M809.817 469.333H746.667V554.667H809.817C810.286 554.667 810.667 554.286 810.667 553.817V470.183C810.667 469.714 810.286 469.333 809.817 469.333Z" fill="black"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 512L469.333 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 512L618.667 554.685" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <circle cx="512" cy="512" r="288.667" stroke="black" stroke-width="20"/>
    <path d="M362.667 298.667L383.907 128.745C383.96 128.319 384.322 128 384.75 128H639.25C639.678 128 640.04 128.319 640.093 128.745L661.333 298.667" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M362.667 725.333L383.907 895.255C383.96 895.681 384.322 896 384.75 896H639.25C639.678 896 640.04 895.681 640.093 895.255L661.333 725.333" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M809.817 469.333H746.667V554.667H809.817C810.286 554.667 810.667 554.286 810.667 553.817V470.183C810.667 469.714 810.286 469.333 809.817 469.333Z" fill="black"/>
    <path d="M512 512L469.333 384" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M512 512L618.667 554.685" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <circle cx="512" cy="512" r="288.667" stroke="black" strokeWidth="20"/>
                <path d="M362.667 298.667L383.907 128.745C383.96 128.319 384.322 128 384.75 128H639.25C639.678 128 640.04 128.319 640.093 128.745L661.333 298.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M362.667 725.333L383.907 895.255C383.96 895.681 384.322 896 384.75 896H639.25C639.678 896 640.04 895.681 640.093 895.255L661.333 725.333" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M809.817 469.333H746.667V554.667H809.817C810.286 554.667 810.667 554.286 810.667 553.817V470.183C810.667 469.714 810.286 469.333 809.817 469.333Z" fill="black"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 512L469.333 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path  
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 512L618.667 554.685" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}