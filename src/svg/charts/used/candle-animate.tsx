"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function CandleAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function CandleAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
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
                <path d="M341.333 128V256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M341.333 597.334V725.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <rect x="256" y="256" width="170.667" height="341.333" rx="20" stroke="black" strokeWidth="20"/>
                <path d="M682.666 298.666V511.999" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M682.666 725.332V853.332" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <rect x="597.333" y="512" width="170.667" height="213.333" rx="20" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CandleAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,strokeDasharray:1000,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
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
                <Path d="M341.333 128V256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M341.333 597.334V725.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Rect x="256" y="256" width="170.667" height="341.333" rx="20" stroke="black" strokeWidth="20"/>
                <Path d="M682.666 298.666V511.999" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M682.666 725.332V853.332" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Rect x="597.333" y="512" width="170.667" height="213.333" rx="20" stroke="black" strokeWidth="20"/>
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
    <path d="M341.333 128V256" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M341.333 597.334V725.334" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <rect x="256" y="256" width="170.667" height="341.333" rx="20" stroke="black" stroke-width="20"/>
    <path d="M682.666 298.666V511.999" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M682.666 725.332V853.332" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <rect x="597.333" y="512" width="170.667" height="213.333" rx="20" stroke="black" stroke-width="20"/>
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
                <path d="M341.333 128V256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M341.333 597.334V725.334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <rect x="256" y="256" width="170.667" height="341.333" rx="20" stroke="black" strokeWidth="20"/>
                <path d="M682.666 298.666V511.999" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M682.666 725.332V853.332" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <rect x="597.333" y="512" width="170.667" height="213.333" rx="20" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}