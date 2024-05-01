"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function CompassAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        rotate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            rotate: Math.random()*180,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            rotate: 0,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Compass",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function CompassAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        rotate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            rotate: Math.random()*180,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            rotate: 0,
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
                    initial={{rotate:0}}
                    animate={{rotate:animationValue.rotate}}
                    d="M383.961 291.015L383.958 291.015L383.961 291.015ZM383.961 291.015L384.091 291.023L383.961 291.015ZM390.676 418.708C390.265 372.202 392.038 328.372 393.147 306.13C412.964 316.29 451.808 336.67 491.878 360.279C518.8 376.141 546.098 393.359 568.494 409.835C591.316 426.623 607.65 441.66 614.194 452.994C620.738 464.328 625.593 485.993 628.721 514.151C631.792 541.784 633.053 574.034 633.33 605.28C633.741 651.786 631.968 695.617 630.858 717.858C611.042 707.698 572.198 687.318 532.128 663.709C505.206 647.847 477.907 630.63 455.511 614.154C432.69 597.365 416.356 582.328 409.812 570.994C403.268 559.66 398.413 537.995 395.284 509.838C392.214 482.204 390.952 449.954 390.676 418.708Z" stroke="black" strokeWidth="20"/>
                <motion.circle 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CompassAnimate(){
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  2500,
        strokeDashoffset: 1,
        rotate: 0
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:2500,strokeDashoffset:2500,rotate:0}
        animationValue.value = withTiming({scale:1.1,strokeDasharray:2500,strokeDashoffset:0,rotate:Math.random()*100})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:2500,strokeDashoffset:1,rotate:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const circleAnimatedProps = useAnimatedProps(()=>{
        return{
            strokeDashoffset: animationValue.value.strokeDashoffset,
            strokeDasharray: animationValue.value.strokeDasharray
        }
    })
    const viewAnimatedStyles = useAnimatedStyle(()=>{
        return{
            transform: [{rotate:\`\${animationValue.value.rotate}deg\`}]
        }
    })
    return(
        <Animated.View 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            style={[styles.container,viewAnimatedStyles]}
        >
            <AnimatedSvg 
                animatedProps={svgAnimatedProps}
                style={styles.svg}
                viewBox="0 0 1024 1024" fill="none"
            >
                <Path d="M383.961 291.015L383.958 291.015L383.961 291.015ZM383.961 291.015L384.091 291.023L383.961 291.015ZM390.676 418.708C390.265 372.202 392.038 328.372 393.147 306.13C412.964 316.29 451.808 336.67 491.878 360.279C518.8 376.141 546.098 393.359 568.494 409.835C591.316 426.623 607.65 441.66 614.194 452.994C620.738 464.328 625.593 485.993 628.721 514.151C631.792 541.784 633.053 574.034 633.33 605.28C633.741 651.786 631.968 695.617 630.858 717.858C611.042 707.698 572.198 687.318 532.128 663.709C505.206 647.847 477.907 630.63 455.511 614.154C432.69 597.365 416.356 582.328 409.812 570.994C403.268 559.66 398.413 537.995 395.284 509.838C392.214 482.204 390.952 449.954 390.676 418.708Z" stroke="black" strokeWidth="20"/>
                <AnimatedCircle
                    animatedProps={circleAnimatedProps}
                    cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
            </AnimatedSvg>
        </Animated.View>
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
    <path d="M383.961 291.015L383.958 291.015L383.961 291.015ZM383.961 291.015L384.091 291.023L383.961 291.015ZM390.676 418.708C390.265 372.202 392.038 328.372 393.147 306.13C412.964 316.29 451.808 336.67 491.878 360.279C518.8 376.141 546.098 393.359 568.494 409.835C591.316 426.623 607.65 441.66 614.194 452.994C620.738 464.328 625.593 485.993 628.721 514.151C631.792 541.784 633.053 574.034 633.33 605.28C633.741 651.786 631.968 695.617 630.858 717.858C611.042 707.698 572.198 687.318 532.128 663.709C505.206 647.847 477.907 630.63 455.511 614.154C432.69 597.365 416.356 582.328 409.812 570.994C403.268 559.66 398.413 537.995 395.284 509.838C392.214 482.204 390.952 449.954 390.676 418.708Z" stroke="black" stroke-width="20"/>
    <circle cx="512" cy="512" r="384" stroke="black" stroke-width="20"/>
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
                    initial={{rotate:0}}
                    animate={{rotate:animationValue.rotate}}
                    d="M383.961 291.015L383.958 291.015L383.961 291.015ZM383.961 291.015L384.091 291.023L383.961 291.015ZM390.676 418.708C390.265 372.202 392.038 328.372 393.147 306.13C412.964 316.29 451.808 336.67 491.878 360.279C518.8 376.141 546.098 393.359 568.494 409.835C591.316 426.623 607.65 441.66 614.194 452.994C620.738 464.328 625.593 485.993 628.721 514.151C631.792 541.784 633.053 574.034 633.33 605.28C633.741 651.786 631.968 695.617 630.858 717.858C611.042 707.698 572.198 687.318 532.128 663.709C505.206 647.847 477.907 630.63 455.511 614.154C432.69 597.365 416.356 582.328 409.812 570.994C403.268 559.66 398.413 537.995 395.284 509.838C392.214 482.204 390.952 449.954 390.676 418.708Z" stroke="black" strokeWidth="20"/>
                <motion.circle 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}