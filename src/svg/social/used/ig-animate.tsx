"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function IGAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        translateY: [0],
        eScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0,-60,0],
            translateY: [0,-20,0,10,0],
            eScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
            translateY: [0,40,0],
            eScale: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Instagram",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function IGAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        translateY: [0],
        eScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0,-60,0],
            translateY: [0,-20,0,10,0],
            eScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
            translateY: [0,40,0],
            eScale: 1,
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
                <path d="M128 136C128 132.229 128 130.343 129.172 129.172C130.343 128 132.229 128 136 128H888C891.771 128 893.657 128 894.828 129.172C896 130.343 896 132.229 896 136V888C896 891.771 896 893.657 894.828 894.828C893.657 896 891.771 896 888 896H136C132.229 896 130.343 896 129.172 894.828C128 893.657 128 891.771 128 888V136Z" stroke="black" strokeWidth="20"/>
                <motion.circle 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.eScale,1]}}
                    cx="704" cy="320" r="64" fill="black"/>
                <motion.circle 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}}
                    transition={{duration:.5}}
                    cx="512" cy="512" r="160.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function IGAnimate(){
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        eScale: 1,
        translateX: 0,
        translateY: 0
    });
    
    const animate = () =>{
        animationValue.value = {scale:1.1,eScale:0,translateX:0,translateY:0}
        animationValue.value = withSequence(
            withTiming({scale:1.1,eScale:1,translateX:40,translateY:-20}),
            withTiming({scale:1.1,eScale:1,translateX:0,translateY:0}),
            withTiming({scale:1.1,eScale:1,translateX:-60,translateY:10}),
            withTiming({scale:1.1,eScale:1,translateX:0,translateY:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,eScale:1,translateX:0,translateY:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const scaleAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.eScale}]
        }
    })
    const translateAnimatedProps = useAnimatedProps(()=>{
        return{
            translateX: animationValue.value.translateX,
            translateY: animationValue.value.translateY
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
                <Path d="M128 136C128 132.229 128 130.343 129.172 129.172C130.343 128 132.229 128 136 128H888C891.771 128 893.657 128 894.828 129.172C896 130.343 896 132.229 896 136V888C896 891.771 896 893.657 894.828 894.828C893.657 896 891.771 896 888 896H136C132.229 896 130.343 896 129.172 894.828C128 893.657 128 891.771 128 888V136Z" stroke="black" strokeWidth="20"/>
                <AnimatedCircle
                    animatedProps={scaleAnimatedProps}
                    originX="700" originY="320"
                    cx="704" cy="320" r="64" fill="black"/>
                <AnimatedCircle
                    animatedProps={translateAnimatedProps}
                    originX="512" originY="512"
                    cx="512" cy="512" r="160.667" stroke="black" strokeWidth="20"/>
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
    <path d="M128 136C128 132.229 128 130.343 129.172 129.172C130.343 128 132.229 128 136 128H888C891.771 128 893.657 128 894.828 129.172C896 130.343 896 132.229 896 136V888C896 891.771 896 893.657 894.828 894.828C893.657 896 891.771 896 888 896H136C132.229 896 130.343 896 129.172 894.828C128 893.657 128 891.771 128 888V136Z" stroke="black" stroke-width="20"/>
    <circle cx="704" cy="320" r="64" fill="black"/>
    <circle cx="512" cy="512" r="160.667" stroke="black" stroke-width="20"/>
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
                <path d="M128 136C128 132.229 128 130.343 129.172 129.172C130.343 128 132.229 128 136 128H888C891.771 128 893.657 128 894.828 129.172C896 130.343 896 132.229 896 136V888C896 891.771 896 893.657 894.828 894.828C893.657 896 891.771 896 888 896H136C132.229 896 130.343 896 129.172 894.828C128 893.657 128 891.771 128 888V136Z" stroke="black" strokeWidth="20"/>
                <motion.circle 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.eScale,1]}}
                    cx="704" cy="320" r="64" fill="black"/>
                <motion.circle 
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}}
                    transition={{duration:.5}}
                    cx="512" cy="512" r="160.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}