"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function OnAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"On",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function OnAnimate(){
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
                <path d="M270.641 270.641C222.904 318.377 190.396 379.197 177.225 445.409C164.055 511.621 170.814 580.252 196.649 642.623C222.484 704.993 266.233 758.302 322.365 795.808C378.497 833.315 444.49 853.333 512 853.333C579.509 853.333 645.502 833.315 701.634 795.808C757.766 758.302 801.516 704.993 827.351 642.623C853.185 580.252 859.945 511.621 846.775 445.409C833.604 379.197 801.095 318.377 753.359 270.641" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M512 341.333L512 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function OnAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1},
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
                <Path d="M270.641 270.641C222.904 318.377 190.396 379.197 177.225 445.409C164.055 511.621 170.814 580.252 196.649 642.623C222.484 704.993 266.233 758.302 322.365 795.808C378.497 833.315 444.49 853.333 512 853.333C579.509 853.333 645.502 833.315 701.634 795.808C757.766 758.302 801.516 704.993 827.351 642.623C853.185 580.252 859.945 511.621 846.775 445.409C833.604 379.197 801.095 318.377 753.359 270.641" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 341.333L512 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M270.641 270.641C222.904 318.377 190.396 379.197 177.225 445.409C164.055 511.621 170.814 580.252 196.649 642.623C222.484 704.993 266.233 758.302 322.365 795.808C378.497 833.315 444.49 853.333 512 853.333C579.509 853.333 645.502 833.315 701.634 795.808C757.766 758.302 801.516 704.993 827.351 642.623C853.185 580.252 859.945 511.621 846.775 445.409C833.604 379.197 801.095 318.377 753.359 270.641" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M512 341.333L512 170.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <path d="M270.641 270.641C222.904 318.377 190.396 379.197 177.225 445.409C164.055 511.621 170.814 580.252 196.649 642.623C222.484 704.993 266.233 758.302 322.365 795.808C378.497 833.315 444.49 853.333 512 853.333C579.509 853.333 645.502 833.315 701.634 795.808C757.766 758.302 801.516 704.993 827.351 642.623C853.185 580.252 859.945 511.621 846.775 445.409C833.604 379.197 801.095 318.377 753.359 270.641" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M512 341.333L512 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}