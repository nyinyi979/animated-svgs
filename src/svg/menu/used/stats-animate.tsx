"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function StatsAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        rScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rScale: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Stats",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function StatsAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rScale: 1,
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
                <motion.rect 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.rScale,1]}}
                    x="768" y="298.667" width="170.667" height="554.667" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.rect 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.rScale,1]}}
                    x="426.667" y="554.667" width="170.667" height="298.667" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.rect 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.rScale,1]}}
                    x="85.3335" y="384" width="170.667" height="469.333" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function StatsAnimate(){
    const AnimatedRect = Animated.createAnimatedComponent(Rect);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rScale: 1
    });
    
    const animate = () =>{
        animationValue.value = {scale:1.1,rScale:0}
        animationValue.value = withTiming({scale:1.1,rScale:1})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,rScale:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const rectAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.rScale}]
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
                <AnimatedRect
                    animatedProps={rectAnimatedProps}
                    x="768" y="298.667" width="170.667" height="554.667" originY="712" originX="312" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <AnimatedRect
                    animatedProps={rectAnimatedProps}
                    x="426.667" y="554.667" width="170.667" height="298.667" originY="712" originX="312" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <AnimatedRect
                    animatedProps={rectAnimatedProps}
                    x="85.3335" y="384" width="170.667" height="469.333" rx="20" originY="712" originX="312" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
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
    <rect x="768" y="298.667" width="170.667" height="554.667" rx="20" stroke="black" stroke-width="20" stroke-linejoin="round"/>
    <rect x="426.667" y="554.667" width="170.667" height="298.667" rx="20" stroke="black" stroke-width="20" stroke-linejoin="round"/>
    <rect x="85.3335" y="384" width="170.667" height="469.333" rx="20" stroke="black" stroke-width="20" stroke-linejoin="round"/>
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
                <motion.rect 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.rScale,1]}}
                    x="768" y="298.667" width="170.667" height="554.667" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.rect 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.rScale,1]}}
                    x="426.667" y="554.667" width="170.667" height="298.667" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.rect 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.rScale,1]}}
                    x="85.3335" y="384" width="170.667" height="469.333" rx="20" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}