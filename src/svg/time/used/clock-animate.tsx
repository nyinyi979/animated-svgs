"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function ClockAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: Math.random()*80,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotate: 0,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Clock",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function ClockAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: Math.random()*80,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotate: 0,
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
                <circle cx="512" cy="512" r="351.333" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{rotate:0}}
                    animate={{rotate:animationValue.rotate}}
                    d="M704 512H512.25C512.112 512 512 511.888 512 511.75V362.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function ClockAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotate: 0,
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,rotate:Math.random()*80})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,rotate:0},
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
            transform: [{rotate:\`\${animationValue.value.rotate}deg\`}]
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
                <Circle cx="512" cy="512" r="351.333" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M704 512H512.25C512.112 512 512 511.888 512 511.75V362.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <circle cx="512" cy="512" r="351.333" stroke="black" stroke-width="20"/>
    <path d="M704 512H512.25C512.112 512 512 511.888 512 511.75V362.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <circle cx="512" cy="512" r="351.333" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{rotate:0}}
                    animate={{rotate:animationValue.rotate}}
                    d="M704 512H512.25C512.112 512 512 511.888 512 511.75V362.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}