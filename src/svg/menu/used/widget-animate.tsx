"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function WidgetAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pScale: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Widget",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function WidgetAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pScale: 1,
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
                <rect x="85.3335" y="128" width="853.333" height="384" rx="20" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.pScale,1]}}
                    d="M682.667 768V813.333C682.667 832.189 682.667 841.617 676.809 847.475C670.951 853.333 661.523 853.333 642.667 853.333H381.333C362.477 853.333 353.049 853.333 347.191 847.475C341.333 841.617 341.333 832.189 341.333 813.333V768" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.pScale,1]}}
                    d="M810.667 597.334V642.667C810.667 661.523 810.667 670.951 804.809 676.809C798.951 682.667 789.523 682.667 770.667 682.667H253.333C234.477 682.667 225.049 682.667 219.191 676.809C213.333 670.951 213.333 661.523 213.333 642.667V597.334" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Rect, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function WidgetAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        pScale: 1
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,pScale:0}
        animationValue.value = withTiming({scale:1.1,pScale:1})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,pScale:1},
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
            transform: [{scale:animationValue.value.pScale}]
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
                    
                <Rect x="85.3335" y="128" width="853.333" height="384" rx="20" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    originY="712" originX="512" d="M682.667 768V813.333C682.667 832.189 682.667 841.617 676.809 847.475C670.951 853.333 661.523 853.333 642.667 853.333H381.333C362.477 853.333 353.049 853.333 347.191 847.475C341.333 841.617 341.333 832.189 341.333 813.333V768" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    originY="512" originX="512" d="M810.667 597.334V642.667C810.667 661.523 810.667 670.951 804.809 676.809C798.951 682.667 789.523 682.667 770.667 682.667H253.333C234.477 682.667 225.049 682.667 219.191 676.809C213.333 670.951 213.333 661.523 213.333 642.667V597.334" stroke="black" strokeWidth="20"/>
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
    <rect x="85.3335" y="128" width="853.333" height="384" rx="20" stroke="black" stroke-width="20"/>
    <path d="M682.667 768V813.333C682.667 832.189 682.667 841.617 676.809 847.475C670.951 853.333 661.523 853.333 642.667 853.333H381.333C362.477 853.333 353.049 853.333 347.191 847.475C341.333 841.617 341.333 832.189 341.333 813.333V768" stroke="black" stroke-width="20"/>
    <path d="M810.667 597.334V642.667C810.667 661.523 810.667 670.951 804.809 676.809C798.951 682.667 789.523 682.667 770.667 682.667H253.333C234.477 682.667 225.049 682.667 219.191 676.809C213.333 670.951 213.333 661.523 213.333 642.667V597.334" stroke="black" stroke-width="20"/>
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
                <rect x="85.3335" y="128" width="853.333" height="384" rx="20" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.pScale,1]}}
                    d="M682.667 768V813.333C682.667 832.189 682.667 841.617 676.809 847.475C670.951 853.333 661.523 853.333 642.667 853.333H381.333C362.477 853.333 353.049 853.333 347.191 847.475C341.333 841.617 341.333 832.189 341.333 813.333V768" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{scale:0}}
                    animate={{scale:[animationValue.pScale,1]}}
                    d="M810.667 597.334V642.667C810.667 661.523 810.667 670.951 804.809 676.809C798.951 682.667 789.523 682.667 770.667 682.667H253.333C234.477 682.667 225.049 682.667 219.191 676.809C213.333 670.951 213.333 661.523 213.333 642.667V597.334" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}