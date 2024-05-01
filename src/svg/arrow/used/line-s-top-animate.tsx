"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function LineSTopAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
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
            name:"Line top(square)",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function LineSTopAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
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
                <path d="M384 640L384 851.333C384 852.276 384 852.748 383.707 853.04C383.414 853.333 382.943 853.333 382 853.333L172.667 853.333C171.724 853.333 171.252 853.333 170.96 853.04C170.667 852.748 170.667 852.276 170.667 851.333L170.667 642C170.667 641.057 170.667 640.586 170.96 640.293C171.252 640 171.724 640 172.667 640L384 640Z" stroke="black" strokeWidth="20"/>
                <path d="M640 170.667L853.333 170.667L853.333 384" stroke="black" strokeWidth="20"/>
                <path d="M853.333 170.667L384 640" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LineSTopAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1}),
            withTiming({scale:1.1})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1})
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
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >
                <Path d="M384 640L384 851.333C384 852.276 384 852.748 383.707 853.04C383.414 853.333 382.943 853.333 382 853.333L172.667 853.333C171.724 853.333 171.252 853.333 170.96 853.04C170.667 852.748 170.667 852.276 170.667 851.333L170.667 642C170.667 641.057 170.667 640.586 170.96 640.293C171.252 640 171.724 640 172.667 640L384 640Z" stroke="black" strokeWidth="20"/>
                <Path d="M640 170.667L853.333 170.667L853.333 384" stroke="black" strokeWidth="20"/>
                <Path d="M853.333 170.667L384 640" stroke="black" strokeWidth="20"/>
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
    <path d="M384 640L384 851.333C384 852.276 384 852.748 383.707 853.04C383.414 853.333 382.943 853.333 382 853.333L172.667 853.333C171.724 853.333 171.252 853.333 170.96 853.04C170.667 852.748 170.667 852.276 170.667 851.333L170.667 642C170.667 641.057 170.667 640.586 170.96 640.293C171.252 640 171.724 640 172.667 640L384 640Z" stroke="black" stroke-width="20"/>
    <path d="M640 170.667L853.333 170.667L853.333 384" stroke="black" stroke-width="20"/>
    <path d="M853.333 170.667L384 640" stroke="black" stroke-width="20"/>
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
                <path d="M384 640L384 851.333C384 852.276 384 852.748 383.707 853.04C383.414 853.333 382.943 853.333 382 853.333L172.667 853.333C171.724 853.333 171.252 853.333 170.96 853.04C170.667 852.748 170.667 852.276 170.667 851.333L170.667 642C170.667 641.057 170.667 640.586 170.96 640.293C171.252 640 171.724 640 172.667 640L384 640Z" stroke="black" strokeWidth="20"/>
                <path d="M640 170.667L853.333 170.667L853.333 384" stroke="black" strokeWidth="20"/>
                <path d="M853.333 170.667L384 640" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}