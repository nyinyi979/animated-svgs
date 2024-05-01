"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function FullScreen4Animate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [30,-30],
            translateY: [40,-40],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
            translateY: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Fullscreen",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function FullScreenAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [30,-30],
            translateY: [40,-40],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
            translateY: [0],
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
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[0],translateY:animationValue.translateY[0]}}
                    d="M341.333 128H131C129.586 128 128.879 128 128.439 128.439C128 128.879 128 129.586 128 131V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[0],translateY:animationValue.translateY[1]}}
                    d="M341.333 896H131C129.586 896 128.879 896 128.439 895.561C128 895.121 128 894.414 128 893V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[1],translateY:animationValue.translateY[0]}}
                    d="M682.667 128H893C894.414 128 895.121 128 895.561 128.439C896 128.879 896 129.586 896 131V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[1],translateY:animationValue.translateY[1]}}
                    d="M682.667 896H893C894.414 896 895.121 896 895.561 895.561C896 895.121 896 894.414 896 893V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function FullScreenAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: [0,0],
        translateY: [0,0]
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateX:[30,-30],translateY:[40,-40]})

    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateX:[0,0],translateY:[0,0]},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const path1AnimatedProps = useAnimatedProps(()=>{
        return{
            translateX: animationValue.value.translateX[0],
            translateY: animationValue.value.translateY[0]
        }
    })
    const path2AnimatedProps = useAnimatedProps(()=>{
        return{
            translateX: animationValue.value.translateX[0],
            translateY: animationValue.value.translateY[1]        
        }
    })
    const path3AnimatedProps = useAnimatedProps(()=>{
        return{
            translateX: animationValue.value.translateX[1],
            translateY: animationValue.value.translateY[0]  
        }
    })
    const path4AnimatedProps = useAnimatedProps(()=>{
        return{
            translateX: animationValue.value.translateX[1],
            translateY: animationValue.value.translateY[1]  
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
                    animatedProps={path1AnimatedProps}
                    d="M341.333 128H131C129.586 128 128.879 128 128.439 128.439C128 128.879 128 129.586 128 131V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath 
                    animatedProps={path2AnimatedProps}
                    d="M341.333 896H131C129.586 896 128.879 896 128.439 895.561C128 895.121 128 894.414 128 893V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath 
                    animatedProps={path3AnimatedProps}
                    d="M682.667 128H893C894.414 128 895.121 128 895.561 128.439C896 128.879 896 129.586 896 131V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath 
                    animatedProps={path4AnimatedProps}
                    d="M682.667 896H893C894.414 896 895.121 896 895.561 895.561C896 895.121 896 894.414 896 893V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M341.333 128H131C129.586 128 128.879 128 128.439 128.439C128 128.879 128 129.586 128 131V341.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M341.333 896H131C129.586 896 128.879 896 128.439 895.561C128 895.121 128 894.414 128 893V682.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M682.667 128H893C894.414 128 895.121 128 895.561 128.439C896 128.879 896 129.586 896 131V341.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M682.667 896H893C894.414 896 895.121 896 895.561 895.561C896 895.121 896 894.414 896 893V682.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[0],translateY:animationValue.translateY[0]}}
                    d="M341.333 128H131C129.586 128 128.879 128 128.439 128.439C128 128.879 128 129.586 128 131V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[0],translateY:animationValue.translateY[1]}}
                    d="M341.333 896H131C129.586 896 128.879 896 128.439 895.561C128 895.121 128 894.414 128 893V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[1],translateY:animationValue.translateY[0]}}
                    d="M682.667 128H893C894.414 128 895.121 128 895.561 128.439C896 128.879 896 129.586 896 131V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX[1],translateY:animationValue.translateY[1]}}
                    d="M682.667 896H893C894.414 896 895.121 896 895.561 895.561C896 895.121 896 894.414 896 893V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}