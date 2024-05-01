"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function ArrowRightAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Arrow right",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function ArrowRightAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
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
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M768 512L775.071 504.929L782.142 512L775.071 519.071L768 512ZM256 522C250.477 522 246 517.523 246 512C246 506.477 250.477 502 256 502V522ZM604.404 334.262L775.071 504.929L760.929 519.071L590.262 348.404L604.404 334.262ZM775.071 519.071L604.404 689.738L590.262 675.596L760.929 504.929L775.071 519.071ZM768 522H256V502H768V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ArrowRightAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0,
    }); 
    //translateX: [0,40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateX:40}),
            withTiming({scale:1.1,translateX:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateX:0})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateX: animationValue.value.translateX}]
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
                    animatedProps={pathAnimatedProps}
                    d="M768 512L775.071 504.929L782.142 512L775.071 519.071L768 512ZM256 522C250.477 522 246 517.523 246 512C246 506.477 250.477 502 256 502V522ZM604.404 334.262L775.071 504.929L760.929 519.071L590.262 348.404L604.404 334.262ZM775.071 519.071L604.404 689.738L590.262 675.596L760.929 504.929L775.071 519.071ZM768 522H256V502H768V522Z" fill="black"/>
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
    <path d="M768 512L775.071 504.929L782.142 512L775.071 519.071L768 512ZM256 522C250.477 522 246 517.523 246 512C246 506.477 250.477 502 256 502V522ZM604.404 334.262L775.071 504.929L760.929 519.071L590.262 348.404L604.404 334.262ZM775.071 519.071L604.404 689.738L590.262 675.596L760.929 504.929L775.071 519.071ZM768 522H256V502H768V522Z" fill="black"/>
</svg>
`
        });
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
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M768 512L775.071 504.929L782.142 512L775.071 519.071L768 512ZM256 522C250.477 522 246 517.523 246 512C246 506.477 250.477 502 256 502V522ZM604.404 334.262L775.071 504.929L760.929 519.071L590.262 348.404L604.404 334.262ZM775.071 519.071L604.404 689.738L590.262 675.596L760.929 504.929L775.071 519.071ZM768 522H256V502H768V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}