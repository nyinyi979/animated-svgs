"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function VerticalSort1Animate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        lTranslateY: [0],
        rTranslateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            lTranslateY: [0,-40,0],
            rTranslateY: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            lTranslateY: [0],
            rTranslateY: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Vertical sort",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function VerticalSortAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        lTranslateY: [0],
        rTranslateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            lTranslateY: [0,-40,0],
            rTranslateY: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            lTranslateY: [0],
            rTranslateY: [0],
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
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.lTranslateY}}
                    d="M341.333 85.334L334.262 78.2629L341.333 71.1918L348.404 78.2629L341.333 85.334ZM351.333 725.334C351.333 730.857 346.856 735.334 341.333 735.334C335.81 735.334 331.333 730.857 331.333 725.334L351.333 725.334ZM120.929 291.596L334.262 78.2629L348.404 92.405L135.071 305.738L120.929 291.596ZM348.404 78.2629L561.738 291.596L547.596 305.738L334.262 92.405L348.404 78.2629ZM351.333 85.334L351.333 725.334L331.333 725.334L331.333 85.334L351.333 85.334Z" fill="black"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.rTranslateY}}
                    d="M682.667 938.666L675.596 945.737L682.667 952.808L689.738 945.737L682.667 938.666ZM692.667 298.666C692.667 293.143 688.19 288.666 682.667 288.666C677.144 288.666 672.667 293.143 672.667 298.666L692.667 298.666ZM462.263 732.404L675.596 945.737L689.738 931.595L476.405 718.262L462.263 732.404ZM689.738 945.737L903.072 732.404L888.93 718.262L675.596 931.595L689.738 945.737ZM692.667 938.666L692.667 298.666L672.667 298.666L672.667 938.666L692.667 938.666Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function VerticalSortAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        lTranslateY: 0,
        rTranslateY: 0
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,lTranslateY:-40,rTranslateY:40}),
            withTiming({scale:1.1,lTranslateY:0,rTranslateY:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,lTranslateY:0,rTranslateY:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const leftPathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY:animationValue.value.lTranslateY}]
        }
    })
    const rightPathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY:animationValue.value.rTranslateY}]
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
                    animatedProps={leftPathAnimatedProps}
                    d="M341.333 85.334L334.262 78.2629L341.333 71.1918L348.404 78.2629L341.333 85.334ZM351.333 725.334C351.333 730.857 346.856 735.334 341.333 735.334C335.81 735.334 331.333 730.857 331.333 725.334L351.333 725.334ZM120.929 291.596L334.262 78.2629L348.404 92.405L135.071 305.738L120.929 291.596ZM348.404 78.2629L561.738 291.596L547.596 305.738L334.262 92.405L348.404 78.2629ZM351.333 85.334L351.333 725.334L331.333 725.334L331.333 85.334L351.333 85.334Z" fill="black"/>
                <AnimatedPath
                    animatedProps={rightPathAnimatedProps}
                    d="M682.667 938.666L675.596 945.737L682.667 952.808L689.738 945.737L682.667 938.666ZM692.667 298.666C692.667 293.143 688.19 288.666 682.667 288.666C677.144 288.666 672.667 293.143 672.667 298.666L692.667 298.666ZM462.263 732.404L675.596 945.737L689.738 931.595L476.405 718.262L462.263 732.404ZM689.738 945.737L903.072 732.404L888.93 718.262L675.596 931.595L689.738 945.737ZM692.667 938.666L692.667 298.666L672.667 298.666L672.667 938.666L692.667 938.666Z" fill="black"/>
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
    <path d="M341.333 85.334L334.262 78.2629L341.333 71.1918L348.404 78.2629L341.333 85.334ZM351.333 725.334C351.333 730.857 346.856 735.334 341.333 735.334C335.81 735.334 331.333 730.857 331.333 725.334L351.333 725.334ZM120.929 291.596L334.262 78.2629L348.404 92.405L135.071 305.738L120.929 291.596ZM348.404 78.2629L561.738 291.596L547.596 305.738L334.262 92.405L348.404 78.2629ZM351.333 85.334L351.333 725.334L331.333 725.334L331.333 85.334L351.333 85.334Z" fill="black"/>
    <path d="M682.667 938.666L675.596 945.737L682.667 952.808L689.738 945.737L682.667 938.666ZM692.667 298.666C692.667 293.143 688.19 288.666 682.667 288.666C677.144 288.666 672.667 293.143 672.667 298.666L692.667 298.666ZM462.263 732.404L675.596 945.737L689.738 931.595L476.405 718.262L462.263 732.404ZM689.738 945.737L903.072 732.404L888.93 718.262L675.596 931.595L689.738 945.737ZM692.667 938.666L692.667 298.666L672.667 298.666L672.667 938.666L692.667 938.666Z" fill="black"/>
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
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.lTranslateY}}
                    d="M341.333 85.334L334.262 78.2629L341.333 71.1918L348.404 78.2629L341.333 85.334ZM351.333 725.334C351.333 730.857 346.856 735.334 341.333 735.334C335.81 735.334 331.333 730.857 331.333 725.334L351.333 725.334ZM120.929 291.596L334.262 78.2629L348.404 92.405L135.071 305.738L120.929 291.596ZM348.404 78.2629L561.738 291.596L547.596 305.738L334.262 92.405L348.404 78.2629ZM351.333 85.334L351.333 725.334L331.333 725.334L331.333 85.334L351.333 85.334Z" fill="black"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.rTranslateY}}
                    d="M682.667 938.666L675.596 945.737L682.667 952.808L689.738 945.737L682.667 938.666ZM692.667 298.666C692.667 293.143 688.19 288.666 682.667 288.666C677.144 288.666 672.667 293.143 672.667 298.666L692.667 298.666ZM462.263 732.404L675.596 945.737L689.738 931.595L476.405 718.262L462.263 732.404ZM689.738 945.737L903.072 732.404L888.93 718.262L675.596 931.595L689.738 945.737ZM692.667 938.666L692.667 298.666L672.667 298.666L672.667 938.666L692.667 938.666Z" fill="black"/>
            </motion.svg>
        </div>
    )
}