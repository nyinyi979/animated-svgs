"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function SignInSquareAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,50],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [50,0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Sign in square",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function SignInSquareAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,50],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [50,0],
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
                <path d="M298.667 304.296V89.9454C298.667 87.7995 298.667 86.7266 299.356 86.1285C300.046 85.5304 301.108 85.6821 303.232 85.9856L890.849 169.931C893.305 170.282 894.533 170.457 895.266 171.303C896 172.149 896 173.389 896 175.87V848.13C896 850.611 896 851.851 895.266 852.697C894.533 853.543 893.305 853.718 890.849 854.069L303.232 938.014C301.108 938.318 300.046 938.47 299.356 937.872C298.667 937.274 298.667 936.201 298.667 934.055V728.148" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M682.667 512L690.475 505.753L695.473 512L690.475 518.247L682.667 512ZM170.667 522C165.144 522 160.667 517.523 160.667 512C160.667 506.477 165.144 502 170.667 502V522ZM519.809 292.42L690.475 505.753L674.858 518.247L504.191 304.914L519.809 292.42ZM690.475 518.247L519.809 731.58L504.191 719.086L674.858 505.753L690.475 518.247ZM682.667 522H170.667V502H682.667V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function SignInSquareAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateX:-50})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1.1,translateX:0},
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
            transform: [{translateX:animationValue.value.translateX}]
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
                <Path d="M298.667 304.296V89.9454C298.667 87.7995 298.667 86.7266 299.356 86.1285C300.046 85.5304 301.108 85.6821 303.232 85.9856L890.849 169.931C893.305 170.282 894.533 170.457 895.266 171.303C896 172.149 896 173.389 896 175.87V848.13C896 850.611 896 851.851 895.266 852.697C894.533 853.543 893.305 853.718 890.849 854.069L303.232 938.014C301.108 938.318 300.046 938.47 299.356 937.872C298.667 937.274 298.667 936.201 298.667 934.055V728.148" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M682.667 512L690.475 505.753L695.473 512L690.475 518.247L682.667 512ZM170.667 522C165.144 522 160.667 517.523 160.667 512C160.667 506.477 165.144 502 170.667 502V522ZM519.809 292.42L690.475 505.753L674.858 518.247L504.191 304.914L519.809 292.42ZM690.475 518.247L519.809 731.58L504.191 719.086L674.858 505.753L690.475 518.247ZM682.667 522H170.667V502H682.667V522Z" fill="black"/>
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
    <path d="M298.667 304.296V89.9454C298.667 87.7995 298.667 86.7266 299.356 86.1285C300.046 85.5304 301.108 85.6821 303.232 85.9856L890.849 169.931C893.305 170.282 894.533 170.457 895.266 171.303C896 172.149 896 173.389 896 175.87V848.13C896 850.611 896 851.851 895.266 852.697C894.533 853.543 893.305 853.718 890.849 854.069L303.232 938.014C301.108 938.318 300.046 938.47 299.356 937.872C298.667 937.274 298.667 936.201 298.667 934.055V728.148" stroke="black" stroke-width="20"/>
    <path d="M682.667 512L690.475 505.753L695.473 512L690.475 518.247L682.667 512ZM170.667 522C165.144 522 160.667 517.523 160.667 512C160.667 506.477 165.144 502 170.667 502V522ZM519.809 292.42L690.475 505.753L674.858 518.247L504.191 304.914L519.809 292.42ZM690.475 518.247L519.809 731.58L504.191 719.086L674.858 505.753L690.475 518.247ZM682.667 522H170.667V502H682.667V522Z" fill="black"/>
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
                <path d="M298.667 304.296V89.9454C298.667 87.7995 298.667 86.7266 299.356 86.1285C300.046 85.5304 301.108 85.6821 303.232 85.9856L890.849 169.931C893.305 170.282 894.533 170.457 895.266 171.303C896 172.149 896 173.389 896 175.87V848.13C896 850.611 896 851.851 895.266 852.697C894.533 853.543 893.305 853.718 890.849 854.069L303.232 938.014C301.108 938.318 300.046 938.47 299.356 937.872C298.667 937.274 298.667 936.201 298.667 934.055V728.148" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M682.667 512L690.475 505.753L695.473 512L690.475 518.247L682.667 512ZM170.667 522C165.144 522 160.667 517.523 160.667 512C160.667 506.477 165.144 502 170.667 502V522ZM519.809 292.42L690.475 505.753L674.858 518.247L504.191 304.914L519.809 292.42ZM690.475 518.247L519.809 731.58L504.191 719.086L674.858 505.753L690.475 518.247ZM682.667 522H170.667V502H682.667V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}