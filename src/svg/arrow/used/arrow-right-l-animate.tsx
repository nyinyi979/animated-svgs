"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function ArrowRightLAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0],
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
            name:"Arrow right(large)",
            react:`"import React from "react"
import { motion } from "framer-motion"

export default function ArrowRightLAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0],
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
                    d="M853.333 512L860.404 504.929L867.475 512L860.404 519.071L853.333 512ZM213.333 522C207.81 522 203.333 517.523 203.333 512C203.333 506.477 207.81 502 213.333 502V522ZM604.404 248.929L860.404 504.929L846.262 519.071L590.262 263.071L604.404 248.929ZM860.404 519.071L604.404 775.071L590.262 760.929L846.262 504.929L860.404 519.071ZM853.333 522H213.333V502H853.333V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ArrowRightLAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0,
    }); 
    //translateX: [0,40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateX:40}),
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
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M853.333 512L860.404 504.929L867.475 512L860.404 519.071L853.333 512ZM213.333 522C207.81 522 203.333 517.523 203.333 512C203.333 506.477 207.81 502 213.333 502V522ZM604.404 248.929L860.404 504.929L846.262 519.071L590.262 263.071L604.404 248.929ZM860.404 519.071L604.404 775.071L590.262 760.929L846.262 504.929L860.404 519.071ZM853.333 522H213.333V502H853.333V522Z" fill="black"/>
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
    <path d="M853.333 512L860.404 504.929L867.475 512L860.404 519.071L853.333 512ZM213.333 522C207.81 522 203.333 517.523 203.333 512C203.333 506.477 207.81 502 213.333 502V522ZM604.404 248.929L860.404 504.929L846.262 519.071L590.262 263.071L604.404 248.929ZM860.404 519.071L604.404 775.071L590.262 760.929L846.262 504.929L860.404 519.071ZM853.333 522H213.333V502H853.333V522Z" fill="black"/>
</svg>
`
        })
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
                    d="M853.333 512L860.404 504.929L867.475 512L860.404 519.071L853.333 512ZM213.333 522C207.81 522 203.333 517.523 203.333 512C203.333 506.477 207.81 502 213.333 502V522ZM604.404 248.929L860.404 504.929L846.262 519.071L590.262 263.071L604.404 248.929ZM860.404 519.071L604.404 775.071L590.262 760.929L846.262 504.929L860.404 519.071ZM853.333 522H213.333V502H853.333V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}