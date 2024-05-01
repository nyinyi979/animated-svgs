"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function ArrowDownLAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Arrow down(large)",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function ArrowDownLAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
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
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 853.334L504.929 860.405L512 867.476L519.071 860.405L512 853.334ZM522 213.333C522 207.811 517.523 203.333 512 203.333C506.477 203.333 502 207.811 502 213.333L522 213.333ZM248.929 604.405L504.929 860.405L519.071 846.262L263.071 590.262L248.929 604.405ZM519.071 860.405L775.071 604.405L760.929 590.262L504.929 846.262L519.071 860.405ZM522 853.334L522 213.333L502 213.333L502 853.334L522 853.334Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ArrowDownLAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
    });
    //translateY: [0,40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:40}),
            withTiming({scale:1.1,translateY:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateY:0})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY}]
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
                    d="M512 853.334L504.929 860.405L512 867.476L519.071 860.405L512 853.334ZM522 213.333C522 207.811 517.523 203.333 512 203.333C506.477 203.333 502 207.811 502 213.333L522 213.333ZM248.929 604.405L504.929 860.405L519.071 846.262L263.071 590.262L248.929 604.405ZM519.071 860.405L775.071 604.405L760.929 590.262L504.929 846.262L519.071 860.405ZM522 853.334L522 213.333L502 213.333L502 853.334L522 853.334Z" fill="black"/>
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
    <path d="M512 853.334L504.929 860.405L512 867.476L519.071 860.405L512 853.334ZM522 213.333C522 207.811 517.523 203.333 512 203.333C506.477 203.333 502 207.811 502 213.333L522 213.333ZM248.929 604.405L504.929 860.405L519.071 846.262L263.071 590.262L248.929 604.405ZM519.071 860.405L775.071 604.405L760.929 590.262L504.929 846.262L519.071 860.405ZM522 853.334L522 213.333L502 213.333L502 853.334L522 853.334Z" fill="black"/>
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
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 853.334L504.929 860.405L512 867.476L519.071 860.405L512 853.334ZM522 213.333C522 207.811 517.523 203.333 512 203.333C506.477 203.333 502 207.811 502 213.333L522 213.333ZM248.929 604.405L504.929 860.405L519.071 846.262L263.071 590.262L248.929 604.405ZM519.071 860.405L775.071 604.405L760.929 590.262L504.929 846.262L519.071 860.405ZM522 853.334L522 213.333L502 213.333L502 853.334L522 853.334Z" fill="black"/>
            </motion.svg>
        </div>
    )
}