"use client"
import React from "react";
import { motion } from "framer-motion";
import { eachSVGType } from "@/app/page";
export default function CheckDoubleAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        path: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            path: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            path: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Check double",
            react:`import React from "react";
import { motion } from "framer-motion";
export default function CheckDoubleAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        path: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            path: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            path: 1,
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
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}}  
                    d="M808.762 289.351C827.181 266.838 823.863 233.657 801.351 215.238C778.838 196.819 745.657 200.137 727.238 222.649L375.209 652.907L244.933 555.2C221.664 537.748 188.652 542.464 171.2 565.733C153.748 589.003 158.464 622.015 181.733 639.467L319.678 742.926C360.547 773.577 418.313 766.566 450.662 727.028L808.762 289.351Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CheckDoubleAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1920,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1920,strokeDashoffset:1920}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1920,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:1920,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,strokeDasharray:1920,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M808.762 289.351C827.181 266.838 823.863 233.657 801.351 215.238C778.838 196.819 745.657 200.137 727.238 222.649L375.209 652.907L244.933 555.2C221.664 537.748 188.652 542.464 171.2 565.733C153.748 589.003 158.464 622.015 181.733 639.467L319.678 742.926C360.547 773.577 418.313 766.566 450.662 727.028L808.762 289.351Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M808.762 289.351C827.181 266.838 823.863 233.657 801.351 215.238C778.838 196.819 745.657 200.137 727.238 222.649L375.209 652.907L244.933 555.2C221.664 537.748 188.652 542.464 171.2 565.733C153.748 589.003 158.464 622.015 181.733 639.467L319.678 742.926C360.547 773.577 418.313 766.566 450.662 727.028L808.762 289.351Z" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}}  
                    d="M808.762 289.351C827.181 266.838 823.863 233.657 801.351 215.238C778.838 196.819 745.657 200.137 727.238 222.649L375.209 652.907L244.933 555.2C221.664 537.748 188.652 542.464 171.2 565.733C153.748 589.003 158.464 622.015 181.733 639.467L319.678 742.926C360.547 773.577 418.313 766.566 450.662 727.028L808.762 289.351Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}