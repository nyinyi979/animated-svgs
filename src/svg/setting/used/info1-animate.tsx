"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Info1Animate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        pScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            pScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            pScale: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Info",
            react:`import React from "react"
import React from "react"
import { motion } from "framer-motion"

export default function InfoAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        pScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            pScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
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
                <path d="M586.09 932.185C641.269 922.455 693.992 901.952 741.248 871.847C788.503 841.742 829.367 802.624 861.505 756.726C893.643 710.828 916.426 659.05 928.553 604.348C940.68 549.645 941.914 493.09 932.184 437.91C922.455 382.731 901.952 330.008 871.847 282.752C841.742 235.496 802.623 194.633 756.726 162.495C710.828 130.357 659.05 107.574 604.347 95.4471C549.645 83.3198 493.089 82.0858 437.91 91.8154C382.73 101.545 330.008 122.048 282.752 152.153C235.496 182.258 194.633 221.377 162.495 267.274C130.357 313.172 107.574 364.95 95.4468 419.653C83.3196 474.355 82.0855 530.911 91.8152 586.09C101.545 641.269 122.048 693.992 152.153 741.248C182.258 788.504 221.376 829.367 267.274 861.505C313.172 893.643 364.95 916.426 419.652 928.553C474.355 940.68 530.91 941.914 586.09 932.185L586.09 932.185Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M512 512L512 768" stroke="black" strokeWidth="20" strokeLinecap="square"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.pScale,1]}}
                    transition={{duration:.3}}
                    d="M512 298.667L512 256" stroke="black" strokeWidth="20" strokeLinecap="square"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function InfoAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        pScale: 1,
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {pScale:0,scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({pScale:1,scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({pScale:1,scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {pScale:1,scale:1,strokeDasharray:1000,strokeDashoffset:1},
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
    const pathScaleAnimatedProps = useAnimatedProps(()=>{
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
                <Path d="M586.09 932.185C641.269 922.455 693.992 901.952 741.248 871.847C788.503 841.742 829.367 802.624 861.505 756.726C893.643 710.828 916.426 659.05 928.553 604.348C940.68 549.645 941.914 493.09 932.184 437.91C922.455 382.731 901.952 330.008 871.847 282.752C841.742 235.496 802.623 194.633 756.726 162.495C710.828 130.357 659.05 107.574 604.347 95.4471C549.645 83.3198 493.089 82.0858 437.91 91.8154C382.73 101.545 330.008 122.048 282.752 152.153C235.496 182.258 194.633 221.377 162.495 267.274C130.357 313.172 107.574 364.95 95.4468 419.653C83.3196 474.355 82.0855 530.911 91.8152 586.09C101.545 641.269 122.048 693.992 152.153 741.248C182.258 788.504 221.376 829.367 267.274 861.505C313.172 893.643 364.95 916.426 419.652 928.553C474.355 940.68 530.91 941.914 586.09 932.185L586.09 932.185Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 512L512 768" stroke="black" strokeWidth="20" strokeLinecap="square"/>
                <AnimatedPath
                    animatedProps={pathScaleAnimatedProps}
                    originX="512" originY="300"
                    d="M512 298.667L512 256" stroke="black" strokeWidth="20" strokeLinecap="square"/>
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
    <path d="M586.09 932.185C641.269 922.455 693.992 901.952 741.248 871.847C788.503 841.742 829.367 802.624 861.505 756.726C893.643 710.828 916.426 659.05 928.553 604.348C940.68 549.645 941.914 493.09 932.184 437.91C922.455 382.731 901.952 330.008 871.847 282.752C841.742 235.496 802.623 194.633 756.726 162.495C710.828 130.357 659.05 107.574 604.347 95.4471C549.645 83.3198 493.089 82.0858 437.91 91.8154C382.73 101.545 330.008 122.048 282.752 152.153C235.496 182.258 194.633 221.377 162.495 267.274C130.357 313.172 107.574 364.95 95.4468 419.653C83.3196 474.355 82.0855 530.911 91.8152 586.09C101.545 641.269 122.048 693.992 152.153 741.248C182.258 788.504 221.376 829.367 267.274 861.505C313.172 893.643 364.95 916.426 419.652 928.553C474.355 940.68 530.91 941.914 586.09 932.185L586.09 932.185Z" stroke="black" stroke-width="20"/>
    <path d="M512 512L512 768" stroke="black" stroke-width="20" stroke-linecap="square"/>
    <path d="M512 298.667L512 256" stroke="black" stroke-width="20" stroke-linecap="square"/>
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
                <path d="M586.09 932.185C641.269 922.455 693.992 901.952 741.248 871.847C788.503 841.742 829.367 802.624 861.505 756.726C893.643 710.828 916.426 659.05 928.553 604.348C940.68 549.645 941.914 493.09 932.184 437.91C922.455 382.731 901.952 330.008 871.847 282.752C841.742 235.496 802.623 194.633 756.726 162.495C710.828 130.357 659.05 107.574 604.347 95.4471C549.645 83.3198 493.089 82.0858 437.91 91.8154C382.73 101.545 330.008 122.048 282.752 152.153C235.496 182.258 194.633 221.377 162.495 267.274C130.357 313.172 107.574 364.95 95.4468 419.653C83.3196 474.355 82.0855 530.911 91.8152 586.09C101.545 641.269 122.048 693.992 152.153 741.248C182.258 788.504 221.376 829.367 267.274 861.505C313.172 893.643 364.95 916.426 419.652 928.553C474.355 940.68 530.91 941.914 586.09 932.185L586.09 932.185Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M512 512L512 768" stroke="black" strokeWidth="20" strokeLinecap="square"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.pScale,1]}}
                    transition={{duration:.3}}
                    d="M512 298.667L512 256" stroke="black" strokeWidth="20" strokeLinecap="square"/>
            </motion.svg>
        </div>
    )
}