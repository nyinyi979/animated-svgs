"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Filter1Animate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0,0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-30,0],
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
            name:"Filter",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function Filter1Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0,0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-30,0],
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
                <motion.ellipse 
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    cx="298.667" cy="298.667" rx="128" ry="128" transform="rotate(90 298.667 298.667)" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M405.333 213.333H849.333C851.219 213.333 852.161 213.333 852.747 213.919C853.333 214.505 853.333 215.447 853.333 217.333V380C853.333 381.885 853.333 382.828 852.747 383.414C852.161 384 851.219 384 849.333 384H405.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="128" cy="128" rx="128" ry="128" transform="matrix(4.37114e-08 1 1 -4.37114e-08 597.333 597.333)" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M618.667 640H174.667C172.781 640 171.839 640 171.253 640.586C170.667 641.172 170.667 642.114 170.667 644V806.667C170.667 808.552 170.667 809.495 171.253 810.081C171.839 810.667 172.781 810.667 174.667 810.667H618.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Filter1Animate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0,
    });
    //translateY: [0,40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateX:-30}),
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
    const translateAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateX}]
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
                <AnimatedEllipse
                    animatedProps={translateAnimatedProps}
                    cx="298.667" cy="298.667" rx="128" ry="128" transform="rotate(90 298.667 298.667)" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={translateAnimatedProps}
                    d="M405.333 213.333H849.333C851.219 213.333 852.161 213.333 852.747 213.919C853.333 214.505 853.333 215.447 853.333 217.333V380C853.333 381.885 853.333 382.828 852.747 383.414C852.161 384 851.219 384 849.333 384H405.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Ellipse cx="128" cy="128" rx="128" ry="128" transform="matrix(4.37114e-08 1 1 -4.37114e-08 597.333 597.333)" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M618.667 640H174.667C172.781 640 171.839 640 171.253 640.586C170.667 641.172 170.667 642.114 170.667 644V806.667C170.667 808.552 170.667 809.495 171.253 810.081C171.839 810.667 172.781 810.667 174.667 810.667H618.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>     
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
    <ellipse cx="298.667" cy="298.667" rx="128" ry="128" transform="rotate(90 298.667 298.667)" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M405.333 213.333H849.333C851.219 213.333 852.161 213.333 852.747 213.919C853.333 214.505 853.333 215.447 853.333 217.333V380C853.333 381.885 853.333 382.828 852.747 383.414C852.161 384 851.219 384 849.333 384H405.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <ellipse cx="128" cy="128" rx="128" ry="128" transform="matrix(4.37114e-08 1 1 -4.37114e-08 597.333 597.333)" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M618.667 640H174.667C172.781 640 171.839 640 171.253 640.586C170.667 641.172 170.667 642.114 170.667 644V806.667C170.667 808.552 170.667 809.495 171.253 810.081C171.839 810.667 172.781 810.667 174.667 810.667H618.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <motion.ellipse 
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    cx="298.667" cy="298.667" rx="128" ry="128" transform="rotate(90 298.667 298.667)" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M405.333 213.333H849.333C851.219 213.333 852.161 213.333 852.747 213.919C853.333 214.505 853.333 215.447 853.333 217.333V380C853.333 381.885 853.333 382.828 852.747 383.414C852.161 384 851.219 384 849.333 384H405.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="128" cy="128" rx="128" ry="128" transform="matrix(4.37114e-08 1 1 -4.37114e-08 597.333 597.333)" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M618.667 640H174.667C172.781 640 171.839 640 171.253 640.586C170.667 641.172 170.667 642.114 170.667 644V806.667C170.667 808.552 170.667 809.495 171.253 810.081C171.839 810.667 172.781 810.667 174.667 810.667H618.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}