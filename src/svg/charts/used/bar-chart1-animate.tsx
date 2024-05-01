"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function BarChart1Animate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Bar chart",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function BarChartAnimate(){
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
                    d="M896 853.334H128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M426.667 682.667V343.334C426.667 342.229 425.771 341.334 424.667 341.334H258C256.895 341.334 256 342.229 256 343.334V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M768 682.666V172.666C768 171.561 767.104 170.666 766 170.666H599.333C598.228 170.666 597.333 171.561 597.333 172.666V682.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function BarChartAnimate(){
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
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M896 853.334H128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M426.667 682.667V343.334C426.667 342.229 425.771 341.334 424.667 341.334H258C256.895 341.334 256 342.229 256 343.334V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M768 682.666V172.666C768 171.561 767.104 170.666 766 170.666H599.333C598.228 170.666 597.333 171.561 597.333 172.666V682.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M896 853.334H128" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M426.667 682.667V343.334C426.667 342.229 425.771 341.334 424.667 341.334H258C256.895 341.334 256 342.229 256 343.334V682.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M768 682.666V172.666C768 171.561 767.104 170.666 766 170.666H599.333C598.228 170.666 597.333 171.561 597.333 172.666V682.666" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                    d="M896 853.334H128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M426.667 682.667V343.334C426.667 342.229 425.771 341.334 424.667 341.334H258C256.895 341.334 256 342.229 256 343.334V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M768 682.666V172.666C768 171.561 767.104 170.666 766 170.666H599.333C598.228 170.666 597.333 171.561 597.333 172.666V682.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}