"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function PartsAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Parts",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function PartsAnimate(){
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
                <path d="M896 682.666C896 580.823 855.543 483.151 783.529 411.137C711.515 339.123 613.843 298.666 512 298.666C410.157 298.666 312.485 339.123 240.471 411.137C168.457 483.151 128 580.823 128 682.666L341.549 682.666C341.549 637.46 359.507 594.105 391.473 562.139C423.439 530.173 466.794 512.215 512 512.215C557.206 512.215 600.561 530.173 632.527 562.139C664.493 594.105 682.451 637.46 682.451 682.666H896Z" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 298.666L512 511.999" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M783.528 411.125L655.528 539.125" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M240.47 411.125L384.006 554.661" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function PartsAnimate(){
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
                <Path d="M896 682.666C896 580.823 855.543 483.151 783.529 411.137C711.515 339.123 613.843 298.666 512 298.666C410.157 298.666 312.485 339.123 240.471 411.137C168.457 483.151 128 580.823 128 682.666L341.549 682.666C341.549 637.46 359.507 594.105 391.473 562.139C423.439 530.173 466.794 512.215 512 512.215C557.206 512.215 600.561 530.173 632.527 562.139C664.493 594.105 682.451 637.46 682.451 682.666H896Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 298.666L512 511.999" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M783.528 411.125L655.528 539.125" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M240.47 411.125L384.006 554.661" stroke="black" strokeWidth="20"/>
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
    <path d="M896 682.666C896 580.823 855.543 483.151 783.529 411.137C711.515 339.123 613.843 298.666 512 298.666C410.157 298.666 312.485 339.123 240.471 411.137C168.457 483.151 128 580.823 128 682.666L341.549 682.666C341.549 637.46 359.507 594.105 391.473 562.139C423.439 530.173 466.794 512.215 512 512.215C557.206 512.215 600.561 530.173 632.527 562.139C664.493 594.105 682.451 637.46 682.451 682.666H896Z" stroke="black" stroke-width="20"/>
    <path d="M512 298.666L512 511.999" stroke="black" stroke-width="20"/>
    <path d="M783.528 411.125L655.528 539.125" stroke="black" stroke-width="20"/>
    <path d="M240.47 411.125L384.006 554.661" stroke="black" stroke-width="20"/>
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
                <path d="M896 682.666C896 580.823 855.543 483.151 783.529 411.137C711.515 339.123 613.843 298.666 512 298.666C410.157 298.666 312.485 339.123 240.471 411.137C168.457 483.151 128 580.823 128 682.666L341.549 682.666C341.549 637.46 359.507 594.105 391.473 562.139C423.439 530.173 466.794 512.215 512 512.215C557.206 512.215 600.561 530.173 632.527 562.139C664.493 594.105 682.451 637.46 682.451 682.666H896Z" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M512 298.666L512 511.999" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M783.528 411.125L655.528 539.125" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M240.47 411.125L384.006 554.661" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}