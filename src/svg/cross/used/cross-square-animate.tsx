"use client"
import React from "react";
import { motion } from "framer-motion";
import { eachSVGType } from "@/app/page";
export default function CrossSquareAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Cross square",
            react:`import React from "react"
import React from "react";
import { motion } from "framer-motion";
export default function CrossSquareAnimate(){
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
                <rect x="128.5" y="128.5" width="767" height="767" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}} 
                    d="M682.667 341.333L341.333 682.667" stroke="black" strokeWidth="20" />
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}} 
                    d="M341.333 341.333L682.667 682.667" stroke="black" strokeWidth="20" />
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CrossSquareAnimate(){
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
                <Rect x="128.5" y="128.5" width="767" height="767" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps} 
                    d="M682.667 341.333L341.333 682.667" stroke="black" strokeWidth="20" />
                <AnimatedPath
                    animatedProps={pathAnimatedProps} 
                    d="M341.333 341.333L682.667 682.667" stroke="black" strokeWidth="20" />
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
    <rect x="128.5" y="128.5" width="767" height="767" stroke="black" stroke-width="20"/>
    <path d="M341.333 682.667L682.667 341.333" stroke="black" stroke-width="20" />
    <path d="M341.333 341.333L682.667 682.667" stroke="black" stroke-width="20" />
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
                <rect x="128.5" y="128.5" width="767" height="767" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}} 
                    d="M682.667 341.333L341.333 682.667" stroke="black" strokeWidth="20" />
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}} 
                    d="M341.333 341.333L682.667 682.667" stroke="black" strokeWidth="20" />
            </motion.svg>
        </div>
    )
}