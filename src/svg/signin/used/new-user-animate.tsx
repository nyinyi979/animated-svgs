"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function NewUserAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-50],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [-50,0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"New user",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function NewUserAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-50],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [-50,0],
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
                <circle cx="426.667" cy="341.333" r="170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M673.944 872.409C659.358 817.975 627.218 769.874 582.509 735.568C537.801 701.262 483.021 682.667 426.667 682.667C370.312 682.666 315.533 701.262 270.824 735.568C226.115 769.874 193.975 817.975 179.39 872.409" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:1}}
                    animate={{translateY:animationValue.translateY}}  
                    d="M810.667 426.667L810.667 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:1}}
                    animate={{translateY:animationValue.translateY}}  
                    d="M938.667 554.667L682.667 554.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function NewUserAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateY:-50})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1.1,translateY:0},
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
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >
                <Circle cx="426.667" cy="341.333" r="170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M673.944 872.409C659.358 817.975 627.218 769.874 582.509 735.568C537.801 701.262 483.021 682.667 426.667 682.667C370.312 682.666 315.533 701.262 270.824 735.568C226.115 769.874 193.975 817.975 179.39 872.409" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M810.667 426.667L810.667 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M938.667 554.667L682.667 554.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <circle cx="426.667" cy="341.333" r="170.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M673.944 872.409C659.358 817.975 627.218 769.874 582.509 735.568C537.801 701.262 483.021 682.667 426.667 682.667C370.312 682.666 315.533 701.262 270.824 735.568C226.115 769.874 193.975 817.975 179.39 872.409" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M810.667 426.667L810.667 682.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M938.667 554.667L682.667 554.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <circle cx="426.667" cy="341.333" r="170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M673.944 872.409C659.358 817.975 627.218 769.874 582.509 735.568C537.801 701.262 483.021 682.667 426.667 682.667C370.312 682.666 315.533 701.262 270.824 735.568C226.115 769.874 193.975 817.975 179.39 872.409" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:1}}
                    animate={{translateY:animationValue.translateY}}  
                    d="M810.667 426.667L810.667 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateY:1}}
                    animate={{translateY:animationValue.translateY}}  
                    d="M938.667 554.667L682.667 554.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}