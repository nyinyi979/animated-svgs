"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function LabelAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        eScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            eScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            eScale: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Label",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function LabelAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        eScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            eScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
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
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M128 258C128 257.057 128 256.586 128.293 256.293C128.586 256 129.057 256 130 256H724.263C724.787 256 725.049 256 725.27 256.118C725.491 256.237 725.636 256.455 725.927 256.891L895.26 510.891C895.619 511.428 895.798 511.697 895.798 512C895.798 512.303 895.619 512.572 895.26 513.109L725.927 767.109C725.636 767.545 725.491 767.763 725.27 767.882C725.049 768 724.787 768 724.263 768H130C129.057 768 128.586 768 128.293 767.707C128 767.414 128 766.943 128 766V258Z" stroke="black" strokeWidth="20"/>
                <motion.ellipse 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.eScale,1]}}
                    transition={{duration:.4}}
                    cx="640" cy="512.001" rx="42.6667" ry="42.6667" fill="black" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LabelAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        eScale: 1,
        strokeDasharray:  2350,
        strokeDashoffset: 1
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,eScale:0,strokeDasharray:2350,strokeDashoffset:2350}
        animationValue.value = withSequence(
            withTiming({scale:1.1,eScale:1,strokeDasharray:2350,strokeDashoffset:1}),
            withTiming({scale:1.1,eScale:1,strokeDasharray:2350,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,eScale:1,strokeDasharray:2350,strokeDashoffset:1},
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
    const ellipseAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.eScale}]
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
                    d="M128 258C128 257.057 128 256.586 128.293 256.293C128.586 256 129.057 256 130 256H724.263C724.787 256 725.049 256 725.27 256.118C725.491 256.237 725.636 256.455 725.927 256.891L895.26 510.891C895.619 511.428 895.798 511.697 895.798 512C895.798 512.303 895.619 512.572 895.26 513.109L725.927 767.109C725.636 767.545 725.491 767.763 725.27 767.882C725.049 768 724.787 768 724.263 768H130C129.057 768 128.586 768 128.293 767.707C128 767.414 128 766.943 128 766V258Z" stroke="black" strokeWidth="20"/>
                <AnimatedEllipse
                    animatedProps={ellipseAnimatedProps}
                    originX="640" originY="512"
                    cx="640" cy="512.001" rx="42.6667" ry="42.6667" fill="black" stroke="black" strokeWidth="20"/>
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
    <path d="M128 258C128 257.057 128 256.586 128.293 256.293C128.586 256 129.057 256 130 256H724.263C724.787 256 725.049 256 725.27 256.118C725.491 256.237 725.636 256.455 725.927 256.891L895.26 510.891C895.619 511.428 895.798 511.697 895.798 512C895.798 512.303 895.619 512.572 895.26 513.109L725.927 767.109C725.636 767.545 725.491 767.763 725.27 767.882C725.049 768 724.787 768 724.263 768H130C129.057 768 128.586 768 128.293 767.707C128 767.414 128 766.943 128 766V258Z" stroke="black" stroke-width="20"/>
    <ellipse cx="640" cy="512.001" rx="42.6667" ry="42.6667" fill="black" stroke="black" stroke-width="20"/>
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
                    d="M128 258C128 257.057 128 256.586 128.293 256.293C128.586 256 129.057 256 130 256H724.263C724.787 256 725.049 256 725.27 256.118C725.491 256.237 725.636 256.455 725.927 256.891L895.26 510.891C895.619 511.428 895.798 511.697 895.798 512C895.798 512.303 895.619 512.572 895.26 513.109L725.927 767.109C725.636 767.545 725.491 767.763 725.27 767.882C725.049 768 724.787 768 724.263 768H130C129.057 768 128.586 768 128.293 767.707C128 767.414 128 766.943 128 766V258Z" stroke="black" strokeWidth="20"/>
                <motion.ellipse 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.eScale,1]}}
                    transition={{duration:.4}}
                    cx="640" cy="512.001" rx="42.6667" ry="42.6667" fill="black" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}