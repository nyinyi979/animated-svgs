"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function RightArrowLineAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Right arrow line",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function RightArrowLineAnimate(){
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
                    d="M597.333 512L604.405 504.929L611.476 512L604.405 519.071L597.333 512ZM170.667 522C165.144 522 160.667 517.523 160.667 512C160.667 506.477 165.144 502 170.667 502V522ZM348.405 248.929L604.405 504.929L590.262 519.071L334.262 263.071L348.405 248.929ZM604.405 519.071L348.405 775.071L334.262 760.929L590.262 504.929L604.405 519.071ZM597.333 522H170.667V502H597.333V522Z" fill="black"/>
                <path d="M853.333 213.333L853.333 810.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function RightArrowLineAnimate(){
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
                    d="M597.333 512L604.405 504.929L611.476 512L604.405 519.071L597.333 512ZM170.667 522C165.144 522 160.667 517.523 160.667 512C160.667 506.477 165.144 502 170.667 502V522ZM348.405 248.929L604.405 504.929L590.262 519.071L334.262 263.071L348.405 248.929ZM604.405 519.071L348.405 775.071L334.262 760.929L590.262 504.929L604.405 519.071ZM597.333 522H170.667V502H597.333V522Z" fill="black"/>
                <Path d="M853.333 213.333L853.333 810.667" stroke="black" strokeWidth="20"/>
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
    <path d="M597.333 512L604.405 504.929L611.476 512L604.405 519.071L597.333 512ZM170.667 522C165.144 522 160.667 517.523 160.667 512C160.667 506.477 165.144 502 170.667 502V522ZM348.405 248.929L604.405 504.929L590.262 519.071L334.262 263.071L348.405 248.929ZM604.405 519.071L348.405 775.071L334.262 760.929L590.262 504.929L604.405 519.071ZM597.333 522H170.667V502H597.333V522Z" fill="black"/>
    <path d="M853.333 213.333L853.333 810.667" stroke="black" stroke-width="20"/>
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
                    d="M597.333 512L604.405 504.929L611.476 512L604.405 519.071L597.333 512ZM170.667 522C165.144 522 160.667 517.523 160.667 512C160.667 506.477 165.144 502 170.667 502V522ZM348.405 248.929L604.405 504.929L590.262 519.071L334.262 263.071L348.405 248.929ZM604.405 519.071L348.405 775.071L334.262 760.929L590.262 504.929L604.405 519.071ZM597.333 522H170.667V502H597.333V522Z" fill="black"/>
                <path d="M853.333 213.333L853.333 810.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}