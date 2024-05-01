"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function MouseAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Mouse",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function MouseAnimate(){
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
                <path d="M213.333 370.666C213.333 276.386 213.333 229.245 242.623 199.956C271.912 170.667 319.052 170.667 413.333 170.667H610.667C704.948 170.667 752.088 170.667 781.377 199.956C810.667 229.245 810.667 276.386 810.667 370.667V856C810.667 874.856 810.667 884.284 804.809 890.142C798.951 896 789.523 896 770.667 896H253.333C234.477 896 225.049 896 219.191 890.142C213.333 884.284 213.333 874.856 213.333 856V370.666Z" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    d="M512 170.667V384" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function MouseAnimate(){
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
                <path d="M213.333 370.666C213.333 276.386 213.333 229.245 242.623 199.956C271.912 170.667 319.052 170.667 413.333 170.667H610.667C704.948 170.667 752.088 170.667 781.377 199.956C810.667 229.245 810.667 276.386 810.667 370.667V856C810.667 874.856 810.667 884.284 804.809 890.142C798.951 896 789.523 896 770.667 896H253.333C234.477 896 225.049 896 219.191 890.142C213.333 884.284 213.333 874.856 213.333 856V370.666Z" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 170.667V384" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
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
    <path d="M213.333 370.666C213.333 276.386 213.333 229.245 242.623 199.956C271.912 170.667 319.052 170.667 413.333 170.667H610.667C704.948 170.667 752.088 170.667 781.377 199.956C810.667 229.245 810.667 276.386 810.667 370.667V856C810.667 874.856 810.667 884.284 804.809 890.142C798.951 896 789.523 896 770.667 896H253.333C234.477 896 225.049 896 219.191 890.142C213.333 884.284 213.333 874.856 213.333 856V370.666Z" stroke="black" stroke-width="20" stroke-linejoin="round"/>
    <path d="M512 170.667V384" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
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
                <path d="M213.333 370.666C213.333 276.386 213.333 229.245 242.623 199.956C271.912 170.667 319.052 170.667 413.333 170.667H610.667C704.948 170.667 752.088 170.667 781.377 199.956C810.667 229.245 810.667 276.386 810.667 370.667V856C810.667 874.856 810.667 884.284 804.809 890.142C798.951 896 789.523 896 770.667 896H253.333C234.477 896 225.049 896 219.191 890.142C213.333 884.284 213.333 874.856 213.333 856V370.666Z" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    d="M512 170.667V384" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}