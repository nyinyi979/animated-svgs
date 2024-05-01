"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Flag2Animate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Flag",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function FlagAnimate(){
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
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M256 640.001V213.834C256 213.598 256 213.48 256.073 213.407C256.146 213.334 256.264 213.334 256.5 213.334H766.793C767.307 213.334 767.564 213.334 767.627 213.488C767.691 213.643 767.51 213.824 767.146 214.188L554.95 426.384C554.816 426.518 554.75 426.584 554.75 426.667C554.75 426.75 554.816 426.817 554.95 426.95L767.146 639.147C767.51 639.51 767.691 639.692 767.627 639.846C767.564 640.001 767.307 640.001 766.793 640.001H256ZM256 640.001V810.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function FlagAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  2050,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:2050,strokeDashoffset:2050}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:2050,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:2050,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:2050,strokeDashoffset:1},
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
            strokeDashoffset: animationValue.value.strokeDashoffset,
            strokeDasharray: animationValue.value.strokeDasharray
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
                    d="M256 640.001V213.834C256 213.598 256 213.48 256.073 213.407C256.146 213.334 256.264 213.334 256.5 213.334H766.793C767.307 213.334 767.564 213.334 767.627 213.488C767.691 213.643 767.51 213.824 767.146 214.188L554.95 426.384C554.816 426.518 554.75 426.584 554.75 426.667C554.75 426.75 554.816 426.817 554.95 426.95L767.146 639.147C767.51 639.51 767.691 639.692 767.627 639.846C767.564 640.001 767.307 640.001 766.793 640.001H256ZM256 640.001V810.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M256 640.001V213.834C256 213.598 256 213.48 256.073 213.407C256.146 213.334 256.264 213.334 256.5 213.334H766.793C767.307 213.334 767.564 213.334 767.627 213.488C767.691 213.643 767.51 213.824 767.146 214.188L554.95 426.384C554.816 426.518 554.75 426.584 554.75 426.667C554.75 426.75 554.816 426.817 554.95 426.95L767.146 639.147C767.51 639.51 767.691 639.692 767.627 639.846C767.564 640.001 767.307 640.001 766.793 640.001H256ZM256 640.001V810.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M256 640.001V213.834C256 213.598 256 213.48 256.073 213.407C256.146 213.334 256.264 213.334 256.5 213.334H766.793C767.307 213.334 767.564 213.334 767.627 213.488C767.691 213.643 767.51 213.824 767.146 214.188L554.95 426.384C554.816 426.518 554.75 426.584 554.75 426.667C554.75 426.75 554.816 426.817 554.95 426.95L767.146 639.147C767.51 639.51 767.691 639.692 767.627 639.846C767.564 640.001 767.307 640.001 766.793 640.001H256ZM256 640.001V810.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}