"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function LockPlainAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Lock plain",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function LockPlainAnimate(){
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
                <path d="M170.667 388C170.667 386.114 170.667 385.172 171.252 384.586C171.838 384 172.781 384 174.667 384H849.333C851.219 384 852.162 384 852.747 384.586C853.333 385.172 853.333 386.114 853.333 388V890C853.333 892.828 853.333 894.243 852.455 895.121C851.576 896 850.162 896 847.333 896H176.667C173.838 896 172.424 896 171.545 895.121C170.667 894.243 170.667 892.828 170.667 890V388Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M682.667 341.333V138C682.667 133.286 682.667 130.929 681.202 129.464C679.738 128 677.381 128 672.667 128H351.333C346.619 128 344.262 128 342.798 129.464C341.333 130.929 341.333 133.286 341.333 138V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LockPlainAnimate(){
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <Path d="M170.667 388C170.667 386.114 170.667 385.172 171.252 384.586C171.838 384 172.781 384 174.667 384H849.333C851.219 384 852.162 384 852.747 384.586C853.333 385.172 853.333 386.114 853.333 388V890C853.333 892.828 853.333 894.243 852.455 895.121C851.576 896 850.162 896 847.333 896H176.667C173.838 896 172.424 896 171.545 895.121C170.667 894.243 170.667 892.828 170.667 890V388Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M682.667 341.333V138C682.667 133.286 682.667 130.929 681.202 129.464C679.738 128 677.381 128 672.667 128H351.333C346.619 128 344.262 128 342.798 129.464C341.333 130.929 341.333 133.286 341.333 138V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M170.667 388C170.667 386.114 170.667 385.172 171.252 384.586C171.838 384 172.781 384 174.667 384H849.333C851.219 384 852.162 384 852.747 384.586C853.333 385.172 853.333 386.114 853.333 388V890C853.333 892.828 853.333 894.243 852.455 895.121C851.576 896 850.162 896 847.333 896H176.667C173.838 896 172.424 896 171.545 895.121C170.667 894.243 170.667 892.828 170.667 890V388Z" stroke="black" stroke-width="20"/>
    <path d="M682.667 341.333V138C682.667 133.286 682.667 130.929 681.202 129.464C679.738 128 677.381 128 672.667 128H351.333C346.619 128 344.262 128 342.798 129.464C341.333 130.929 341.333 133.286 341.333 138V341.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <path d="M170.667 388C170.667 386.114 170.667 385.172 171.252 384.586C171.838 384 172.781 384 174.667 384H849.333C851.219 384 852.162 384 852.747 384.586C853.333 385.172 853.333 386.114 853.333 388V890C853.333 892.828 853.333 894.243 852.455 895.121C851.576 896 850.162 896 847.333 896H176.667C173.838 896 172.424 896 171.545 895.121C170.667 894.243 170.667 892.828 170.667 890V388Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M682.667 341.333V138C682.667 133.286 682.667 130.929 681.202 129.464C679.738 128 677.381 128 672.667 128H351.333C346.619 128 344.262 128 342.798 129.464C341.333 130.929 341.333 133.286 341.333 138V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}