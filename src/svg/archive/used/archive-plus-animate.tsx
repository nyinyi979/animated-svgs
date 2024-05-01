"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function ArchivePlusAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            translateY: [0,-20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            translateY: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Archive Plus",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function ArchivePlusAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            translateY: [0,-20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            translateY: [0],
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
                    initial={{pathLength:1,translateY:0}}
                    animate={{pathLength:[animationValue.pathLength,1],translateY:animationValue.translateY}}
                    d="M758 341.333C758 477.195 647.862 587.333 512 587.333C376.138 587.333 266 477.195 266 341.333C266 205.471 376.138 95.3333 512 95.3333C647.862 95.3333 758 205.471 758 341.333Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 213.333V469.333" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M640 341.333H384" stroke="black" strokeWidth="20"/>
                <path d="M896 597.333H726.404C725.88 597.333 725.618 597.333 725.397 597.452C725.176 597.57 725.03 597.788 724.74 598.224L640.594 724.443C640.303 724.879 640.158 725.097 639.937 725.215C639.716 725.333 639.454 725.333 638.93 725.333H385.07C384.546 725.333 384.284 725.333 384.063 725.215C383.842 725.097 383.697 724.879 383.406 724.443L299.26 598.224C298.97 597.788 298.824 597.57 298.603 597.452C298.382 597.333 298.12 597.333 297.596 597.333H128" stroke="black" strokeWidth="20"/>
                <path d="M298.667 426.667H256.414C256.149 426.667 255.895 426.772 255.707 426.96L128.293 554.374C128.105 554.561 128 554.816 128 555.081V894C128 895.105 128.895 896 130 896H894C895.105 896 896 895.105 896 894V555.081C896 554.816 895.895 554.561 895.707 554.374L768.293 426.96C768.105 426.772 767.851 426.667 767.586 426.667H725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ArchivePlusAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
        strokeDasharray:  1600,
        strokeDashoffset: 1,
    });
    //translateY: [0,-20,0],
    const animate = () =>{
        animationValue.value = {scale:1,translateY:0,strokeDasharray:1600,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:-20,strokeDasharray:1600,strokeDashoffset:0}),
            withTiming({scale:1.1,translateY:0,strokeDasharray:1600,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateY:0,strokeDasharray:1600,strokeDashoffset:1})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathTranslateAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY}]
        }
    })
    const pathFillAnimatedProps = useAnimatedProps(()=>{
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
                    animatedProps={pathFillAnimatedProps}
                    d="M758 341.333C758 477.195 647.862 587.333 512 587.333C376.138 587.333 266 477.195 266 341.333C266 205.471 376.138 95.3333 512 95.3333C647.862 95.3333 758 205.471 758 341.333Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath 
                    animatedProps={pathTranslateAnimatedProps}
                    d="M512 213.333V469.333" stroke="black" strokeWidth="20"/>
                <AnimatedPath 
                    animatedProps={pathTranslateAnimatedProps}
                    d="M640 341.333H384" stroke="black" strokeWidth="20"/>
                <Path d="M896 597.333H726.404C725.88 597.333 725.618 597.333 725.397 597.452C725.176 597.57 725.03 597.788 724.74 598.224L640.594 724.443C640.303 724.879 640.158 725.097 639.937 725.215C639.716 725.333 639.454 725.333 638.93 725.333H385.07C384.546 725.333 384.284 725.333 384.063 725.215C383.842 725.097 383.697 724.879 383.406 724.443L299.26 598.224C298.97 597.788 298.824 597.57 298.603 597.452C298.382 597.333 298.12 597.333 297.596 597.333H128" stroke="black" strokeWidth="20"/>
                <Path d="M298.667 426.667H256.414C256.149 426.667 255.895 426.772 255.707 426.96L128.293 554.374C128.105 554.561 128 554.816 128 555.081V894C128 895.105 128.895 896 130 896H894C895.105 896 896 895.105 896 894V555.081C896 554.816 895.895 554.561 895.707 554.374L768.293 426.96C768.105 426.772 767.851 426.667 767.586 426.667H725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
})
`,
            svg:`<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M758 341.333C758 477.195 647.862 587.333 512 587.333C376.138 587.333 266 477.195 266 341.333C266 205.471 376.138 95.3333 512 95.3333C647.862 95.3333 758 205.471 758 341.333Z" stroke="black" stroke-width="20"/>
    <path d="M512 213.333V469.333" stroke="black" stroke-width="20"/>
    <path d="M640 341.333H384" stroke="black" stroke-width="20"/>
    <path d="M896 597.333H726.404C725.88 597.333 725.618 597.333 725.397 597.452C725.176 597.57 725.03 597.788 724.74 598.224L640.594 724.443C640.303 724.879 640.158 725.097 639.937 725.215C639.716 725.333 639.454 725.333 638.93 725.333H385.07C384.546 725.333 384.284 725.333 384.063 725.215C383.842 725.097 383.697 724.879 383.406 724.443L299.26 598.224C298.97 597.788 298.824 597.57 298.603 597.452C298.382 597.333 298.12 597.333 297.596 597.333H128" stroke="black" stroke-width="20"/>
    <path d="M298.667 426.667H256.414C256.149 426.667 255.895 426.772 255.707 426.96L128.293 554.374C128.105 554.561 128 554.816 128 555.081V894C128 895.105 128.895 896 130 896H894C895.105 896 896 895.105 896 894V555.081C896 554.816 895.895 554.561 895.707 554.374L768.293 426.96C768.105 426.772 767.851 426.667 767.586 426.667H725.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
`,
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
                    initial={{pathLength:1,translateY:0}}
                    animate={{pathLength:[animationValue.pathLength,1],translateY:animationValue.translateY}}
                    d="M758 341.333C758 477.195 647.862 587.333 512 587.333C376.138 587.333 266 477.195 266 341.333C266 205.471 376.138 95.3333 512 95.3333C647.862 95.3333 758 205.471 758 341.333Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 213.333V469.333" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M640 341.333H384" stroke="black" strokeWidth="20"/>
                <path d="M896 597.333H726.404C725.88 597.333 725.618 597.333 725.397 597.452C725.176 597.57 725.03 597.788 724.74 598.224L640.594 724.443C640.303 724.879 640.158 725.097 639.937 725.215C639.716 725.333 639.454 725.333 638.93 725.333H385.07C384.546 725.333 384.284 725.333 384.063 725.215C383.842 725.097 383.697 724.879 383.406 724.443L299.26 598.224C298.97 597.788 298.824 597.57 298.603 597.452C298.382 597.333 298.12 597.333 297.596 597.333H128" stroke="black" strokeWidth="20"/>
                <path d="M298.667 426.667H256.414C256.149 426.667 255.895 426.772 255.707 426.96L128.293 554.374C128.105 554.561 128 554.816 128 555.081V894C128 895.105 128.895 896 130 896H894C895.105 896 896 895.105 896 894V555.081C896 554.816 895.895 554.561 895.707 554.374L768.293 426.96C768.105 426.772 767.851 426.667 767.586 426.667H725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}