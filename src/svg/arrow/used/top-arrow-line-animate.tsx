"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function TopArrowLineAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Top arrow line",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function TopArrowLineAnimate(){
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
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M768 725.333L512 469.333L256 725.333" stroke="black" strokeWidth="20"/>
                <path d="M298.667 256L725.333 256" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function TopArrowLineAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
    });
    //translateY: [0,-40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:-40}),
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
                    d="M768 725.333L512 469.333L256 725.333" stroke="black" strokeWidth="20"/>
                <Path d="M298.667 256L725.333 256" stroke="black" strokeWidth="20"/>
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
    <path d="M512 213.333L519.071 206.262L512 199.191L504.929 206.262L512 213.333ZM502 725.333C502 730.856 506.477 735.333 512 735.333C517.523 735.333 522 730.856 522 725.333L502 725.333ZM775.071 462.262L519.071 206.262L504.929 220.404L760.929 476.404L775.071 462.262ZM504.929 206.262L248.929 462.262L263.071 476.404L519.071 220.404L504.929 206.262ZM502 213.333L502 725.333L522 725.333L522 213.333L502 213.333Z" fill="black"/>
    <path d="M213.333 896L810.666 896" stroke="black" stroke-width="20"/>
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
                    d="M768 725.333L512 469.333L256 725.333" stroke="black" strokeWidth="20"/>
                <path d="M298.667 256L725.333 256" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}