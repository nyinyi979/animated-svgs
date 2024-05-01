"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function UnlockAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
        cScale: 1,
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
            cScale: 0
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1,
            cScale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Unlock",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function UnlockAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1,
        cScale: 1,
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1,
            cScale: 0
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1,
            cScale: 1
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
                <path d="M170.667 388.008C170.667 386.123 170.667 385.18 171.252 384.594C171.838 384.008 172.781 384.008 174.667 384.008H849.333C851.219 384.008 852.162 384.008 852.747 384.594C853.333 385.18 853.333 386.123 853.333 388.008V890.008C853.333 892.837 853.333 894.251 852.455 895.13C851.576 896.008 850.162 896.008 847.333 896.008H176.667C173.838 896.008 172.424 896.008 171.545 895.13C170.667 894.251 170.667 892.837 170.667 890.008V388.008Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M703.998 384L707.308 357.522C718.355 269.134 678.582 182.078 604.534 132.567V132.567C516.367 73.6163 399.67 80.8822 319.497 150.315L284.581 180.552" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.ellipse 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.cScale,1]}}
                    cx="512" cy="640" rx="85.3333" ry="85.3333" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function UnlockAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        eScale: 1,
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {eScale:0,scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({eScale:1,scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({eScale:1,scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {eScale:1,scale:1,strokeDasharray:1000,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const ellipseAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.eScale}]
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
                <Path d="M170.667 388.008C170.667 386.123 170.667 385.18 171.252 384.594C171.838 384.008 172.781 384.008 174.667 384.008H849.333C851.219 384.008 852.162 384.008 852.747 384.594C853.333 385.18 853.333 386.123 853.333 388.008V890.008C853.333 892.837 853.333 894.251 852.455 895.13C851.576 896.008 850.162 896.008 847.333 896.008H176.667C173.838 896.008 172.424 896.008 171.545 895.13C170.667 894.251 170.667 892.837 170.667 890.008V388.008Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M703.998 384L707.308 357.522C718.355 269.134 678.582 182.078 604.534 132.567V132.567C516.367 73.6163 399.67 80.8822 319.497 150.315L284.581 180.552" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedEllipse
                    animatedProps={ellipseAnimatedProps}
                    originX="512" originY="650"
                    cx="512" cy="640" rx="85.3333" ry="85.3333" fill="black"/>
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
    <path d="M170.667 388.008C170.667 386.123 170.667 385.18 171.252 384.594C171.838 384.008 172.781 384.008 174.667 384.008H849.333C851.219 384.008 852.162 384.008 852.747 384.594C853.333 385.18 853.333 386.123 853.333 388.008V890.008C853.333 892.837 853.333 894.251 852.455 895.13C851.576 896.008 850.162 896.008 847.333 896.008H176.667C173.838 896.008 172.424 896.008 171.545 895.13C170.667 894.251 170.667 892.837 170.667 890.008V388.008Z" stroke="black" stroke-width="20"/>
    <path d="M703.998 384L707.308 357.522C718.355 269.134 678.582 182.078 604.534 132.567V132.567C516.367 73.6163 399.67 80.8822 319.497 150.315L284.581 180.552" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <ellipse cx="512" cy="640" rx="85.3333" ry="85.3333" fill="black"/>
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
                <path d="M170.667 388.008C170.667 386.123 170.667 385.18 171.252 384.594C171.838 384.008 172.781 384.008 174.667 384.008H849.333C851.219 384.008 852.162 384.008 852.747 384.594C853.333 385.18 853.333 386.123 853.333 388.008V890.008C853.333 892.837 853.333 894.251 852.455 895.13C851.576 896.008 850.162 896.008 847.333 896.008H176.667C173.838 896.008 172.424 896.008 171.545 895.13C170.667 894.251 170.667 892.837 170.667 890.008V388.008Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M703.998 384L707.308 357.522C718.355 269.134 678.582 182.078 604.534 132.567V132.567C516.367 73.6163 399.67 80.8822 319.497 150.315L284.581 180.552" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.ellipse 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.cScale,1]}}
                    cx="512" cy="640" rx="85.3333" ry="85.3333" fill="black"/>
            </motion.svg>
        </div>
    )
}