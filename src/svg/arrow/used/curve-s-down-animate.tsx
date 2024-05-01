"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function CurveSDownAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Curve down(square)",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function CurveSDownAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
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
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M597.333 853.333L590.262 860.405L597.333 867.476L604.404 860.405L597.333 853.333ZM256 160.667C250.477 160.667 246 165.144 246 170.667C246 176.19 250.477 180.667 256 180.667L256 160.667ZM376.929 647.071L590.262 860.405L604.404 846.262L391.071 632.929L376.929 647.071ZM604.404 860.405L817.738 647.071L803.596 632.929L590.262 846.262L604.404 860.405ZM607.333 853.333L607.333 176.667L587.333 176.667L587.333 853.333L607.333 853.333ZM591.333 160.667L256 160.667L256 180.667L591.333 180.667L591.333 160.667ZM607.333 176.667C607.333 167.83 600.17 160.667 591.333 160.667L591.333 180.667C589.124 180.667 587.333 178.876 587.333 176.667L607.333 176.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CurveSDownAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
    });
    //translateY: [0,40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:40}),
            withTiming({scale:1.1,translateY:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateY:0})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY}]
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
                    d="M597.333 853.333L590.262 860.405L597.333 867.476L604.404 860.405L597.333 853.333ZM256 160.667C250.477 160.667 246 165.144 246 170.667C246 176.19 250.477 180.667 256 180.667L256 160.667ZM376.929 647.071L590.262 860.405L604.404 846.262L391.071 632.929L376.929 647.071ZM604.404 860.405L817.738 647.071L803.596 632.929L590.262 846.262L604.404 860.405ZM607.333 853.333L607.333 176.667L587.333 176.667L587.333 853.333L607.333 853.333ZM591.333 160.667L256 160.667L256 180.667L591.333 180.667L591.333 160.667ZM607.333 176.667C607.333 167.83 600.17 160.667 591.333 160.667L591.333 180.667C589.124 180.667 587.333 178.876 587.333 176.667L607.333 176.667Z" fill="black"/>
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
    <path d="M597.333 853.333L590.262 860.405L597.333 867.476L604.404 860.405L597.333 853.333ZM256 160.667C250.477 160.667 246 165.144 246 170.667C246 176.19 250.477 180.667 256 180.667L256 160.667ZM376.929 647.071L590.262 860.405L604.404 846.262L391.071 632.929L376.929 647.071ZM604.404 860.405L817.738 647.071L803.596 632.929L590.262 846.262L604.404 860.405ZM607.333 853.333L607.333 176.667L587.333 176.667L587.333 853.333L607.333 853.333ZM591.333 160.667L256 160.667L256 180.667L591.333 180.667L591.333 160.667ZM607.333 176.667C607.333 167.83 600.17 160.667 591.333 160.667L591.333 180.667C589.124 180.667 587.333 178.876 587.333 176.667L607.333 176.667Z" fill="black"/>
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
                    animate={{translateY:animationValue.translateY}}
                    d="M597.333 853.333L590.262 860.405L597.333 867.476L604.404 860.405L597.333 853.333ZM256 160.667C250.477 160.667 246 165.144 246 170.667C246 176.19 250.477 180.667 256 180.667L256 160.667ZM376.929 647.071L590.262 860.405L604.404 846.262L391.071 632.929L376.929 647.071ZM604.404 860.405L817.738 647.071L803.596 632.929L590.262 846.262L604.404 860.405ZM607.333 853.333L607.333 176.667L587.333 176.667L587.333 853.333L607.333 853.333ZM591.333 160.667L256 160.667L256 180.667L591.333 180.667L591.333 160.667ZM607.333 176.667C607.333 167.83 600.17 160.667 591.333 160.667L591.333 180.667C589.124 180.667 587.333 178.876 587.333 176.667L607.333 176.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}