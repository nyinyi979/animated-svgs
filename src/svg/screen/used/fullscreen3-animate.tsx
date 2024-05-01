"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function FullScreen3Animate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: 0,
        translateY: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: -3,
            translateY: -3,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: 0,
            translateY: 0,
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
        translateX: 0,
        translateY: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: -3,
            translateY: -3,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: 0,
            translateY: 0,
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg 
                initial={{scale:1,translateX:0,translateY:0}}
                animate={{scale:animationValue.scale,translateX:animationValue.translateX,translateY:animationValue.translateY}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M170.667 213.333V203.333H160.667V213.333H170.667ZM504.929 561.738C508.834 565.643 515.166 565.643 519.071 561.738C522.976 557.832 522.976 551.501 519.071 547.596L504.929 561.738ZM180.667 469.333V213.333H160.667V469.333H180.667ZM170.667 223.333H426.666V203.333H170.667V223.333ZM163.595 220.404L504.929 561.738L519.071 547.596L177.738 206.262L163.595 220.404Z" fill="black"/>
                <path d="M896 554.667H516C514.114 554.667 513.172 554.667 512.586 555.253C512 555.838 512 556.781 512 558.667V810.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function FullScreen3Animate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0,
        translateY: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateX:-3,translateY:3})

    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateX:0,translateY:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}],
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
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >
                <Path d="M170.667 213.333V203.333H160.667V213.333H170.667ZM504.929 561.738C508.834 565.643 515.166 565.643 519.071 561.738C522.976 557.832 522.976 551.501 519.071 547.596L504.929 561.738ZM180.667 469.333V213.333H160.667V469.333H180.667ZM170.667 223.333H426.666V203.333H170.667V223.333ZM163.595 220.404L504.929 561.738L519.071 547.596L177.738 206.262L163.595 220.404Z" fill="black"/>
                <Path d="M896 554.667H516C514.114 554.667 513.172 554.667 512.586 555.253C512 555.838 512 556.781 512 558.667V810.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M170.667 213.333V203.333H160.667V213.333H170.667ZM504.929 561.738C508.834 565.643 515.166 565.643 519.071 561.738C522.976 557.832 522.976 551.501 519.071 547.596L504.929 561.738ZM180.667 469.333V213.333H160.667V469.333H180.667ZM170.667 223.333H426.666V203.333H170.667V223.333ZM163.595 220.404L504.929 561.738L519.071 547.596L177.738 206.262L163.595 220.404Z" fill="black"/>
    <path d="M896 554.667H516C514.114 554.667 513.172 554.667 512.586 555.253C512 555.838 512 556.781 512 558.667V810.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                initial={{scale:1,translateX:0,translateY:0}}
                animate={{scale:animationValue.scale,translateX:animationValue.translateX,translateY:animationValue.translateY}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M170.667 213.333V203.333H160.667V213.333H170.667ZM504.929 561.738C508.834 565.643 515.166 565.643 519.071 561.738C522.976 557.832 522.976 551.501 519.071 547.596L504.929 561.738ZM180.667 469.333V213.333H160.667V469.333H180.667ZM170.667 223.333H426.666V203.333H170.667V223.333ZM163.595 220.404L504.929 561.738L519.071 547.596L177.738 206.262L163.595 220.404Z" fill="black"/>
                <path d="M896 554.667H516C514.114 554.667 513.172 554.667 512.586 555.253C512 555.838 512 556.781 512 558.667V810.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}