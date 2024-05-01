"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function UserBoxAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"User box",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function UserBoxAnimate(){
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
                <path d="M759.277 883.452C744.691 838.09 712.552 798.007 667.843 769.418C623.134 740.83 568.354 725.334 512 725.333C455.646 725.333 400.866 740.829 356.157 769.418C311.448 798.007 279.309 838.09 264.723 883.452" stroke="black" strokeWidth="20"/>
                <ellipse cx="512" cy="426.667" rx="128" ry="128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <mask id="path-3-inside-1_2489_258" fill="white">
                    <rect x="85.3335" y="85.3335" width="853.333" height="853.333" rx="4"/>
                </mask>
                <motion.rect 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    x="85.3335" y="85.3335" width="853.333" height="853.333" rx="4" stroke="black" strokeWidth="40" mask="url(#path-3-inside-1_2489_258)"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Ellipse, Mask, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function UserBoxAnimate(){
    const AnimatedRect = Animated.createAnimatedComponent(Rect);
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
                <Path d="M759.277 883.452C744.691 838.09 712.552 798.007 667.843 769.418C623.134 740.83 568.354 725.334 512 725.333C455.646 725.333 400.866 740.829 356.157 769.418C311.448 798.007 279.309 838.09 264.723 883.452" stroke="black" strokeWidth="20"/>
                <Ellipse cx="512" cy="426.667" rx="128" ry="128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Mask id="path-3-inside-1_2489_258" fill="white">
                    <Rect x="85.3335" y="85.3335" width="853.333" height="853.333" rx="4"/>
                </Mask>
                <AnimatedRect
                    animatedProps={pathAnimatedProps}
                    x="85.3335" y="85.3335" width="853.333" height="853.333" rx="4" stroke="black" strokeWidth="40" mask="url(#path-3-inside-1_2489_258)"/>
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
    <path d="M759.277 883.452C744.691 838.09 712.552 798.007 667.843 769.418C623.134 740.83 568.354 725.334 512 725.333C455.646 725.333 400.866 740.829 356.157 769.418C311.448 798.007 279.309 838.09 264.723 883.452" stroke="black" stroke-width="20"/>
    <ellipse cx="512" cy="426.667" rx="128" ry="128" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <mask id="path-3-inside-1_2489_258" fill="white">
        <rect x="85.3335" y="85.3335" width="853.333" height="853.333" rx="4"/>
    </mask>
    <rect x="85.3335" y="85.3335" width="853.333" height="853.333" rx="4" stroke="black" stroke-width="40" mask="url(#path-3-inside-1_2489_258)"/>
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
                <path d="M759.277 883.452C744.691 838.09 712.552 798.007 667.843 769.418C623.134 740.83 568.354 725.334 512 725.333C455.646 725.333 400.866 740.829 356.157 769.418C311.448 798.007 279.309 838.09 264.723 883.452" stroke="black" strokeWidth="20"/>
                <ellipse cx="512" cy="426.667" rx="128" ry="128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <mask id="path-3-inside-1_2489_258" fill="white">
                    <rect x="85.3335" y="85.3335" width="853.333" height="853.333" rx="4"/>
                </mask>
                <motion.rect 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    x="85.3335" y="85.3335" width="853.333" height="853.333" rx="4" stroke="black" strokeWidth="40" mask="url(#path-3-inside-1_2489_258)"/>
            </motion.svg>
        </div>
    )
}