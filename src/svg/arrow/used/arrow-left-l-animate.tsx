"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function ArrowLeftLAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Arrow Left(large)",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function ArrowLeftLAnimate(){
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
                    d="M170.667 512L163.596 504.929L156.525 512L163.596 519.071L170.667 512ZM810.667 522C816.19 522 820.667 517.523 820.667 512C820.667 506.477 816.19 502 810.667 502V522ZM419.596 248.929L163.596 504.929L177.738 519.071L433.738 263.071L419.596 248.929ZM163.596 519.071L419.596 775.071L433.738 760.929L177.738 504.929L163.596 519.071ZM170.667 522H810.667V502H170.667V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ArrowLeftLAnimate(){
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
                    d="M170.667 512L163.596 504.929L156.525 512L163.596 519.071L170.667 512ZM810.667 522C816.19 522 820.667 517.523 820.667 512C820.667 506.477 816.19 502 810.667 502V522ZM419.596 248.929L163.596 504.929L177.738 519.071L433.738 263.071L419.596 248.929ZM163.596 519.071L419.596 775.071L433.738 760.929L177.738 504.929L163.596 519.071ZM170.667 522H810.667V502H170.667V522Z" fill="black"/>
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
    <path d="M170.667 512L163.596 504.929L156.525 512L163.596 519.071L170.667 512ZM810.667 522C816.19 522 820.667 517.523 820.667 512C820.667 506.477 816.19 502 810.667 502V522ZM419.596 248.929L163.596 504.929L177.738 519.071L433.738 263.071L419.596 248.929ZM163.596 519.071L419.596 775.071L433.738 760.929L177.738 504.929L163.596 519.071ZM170.667 522H810.667V502H170.667V522Z" fill="black"/>
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
                    d="M170.667 512L163.596 504.929L156.525 512L163.596 519.071L170.667 512ZM810.667 522C816.19 522 820.667 517.523 820.667 512C820.667 506.477 816.19 502 810.667 502V522ZM419.596 248.929L163.596 504.929L177.738 519.071L433.738 263.071L419.596 248.929ZM163.596 519.071L419.596 775.071L433.738 760.929L177.738 504.929L163.596 519.071ZM170.667 522H810.667V502H170.667V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}