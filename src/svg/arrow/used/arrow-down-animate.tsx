"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function ArrowDownAnimate({drawerAnimate,setDetails}:eachSVGType){
    const openDrawer = () =>{
        setDetails({
            name:"Arrow down",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function ArrowDownAnimate(){
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
                    d="M512 768L504.929 775.071L512 782.142L519.071 775.071L512 768ZM522 256C522 250.477 517.523 246 512 246C506.477 246 502 250.477 502 256L522 256ZM334.262 604.404L504.929 775.071L519.071 760.929L348.404 590.262L334.262 604.404ZM519.071 775.071L689.738 604.404L675.596 590.262L504.929 760.929L519.071 775.071ZM522 768L522 256L502 256L502 768L522 768Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`, 
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ArrowDownAnimate(){
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
                    d="M512 768L504.929 775.071L512 782.142L519.071 775.071L512 768ZM522 256C522 250.477 517.523 246 512 246C506.477 246 502 250.477 502 256L522 256ZM334.262 604.404L504.929 775.071L519.071 760.929L348.404 590.262L334.262 604.404ZM519.071 775.071L689.738 604.404L675.596 590.262L504.929 760.929L519.071 775.071ZM522 768L522 256L502 256L502 768L522 768Z" fill="black"/>
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
    <path d="M511.181 724.163L214.875 300.87C214.226 299.942 214.89 298.667 216.022 298.667L807.978 298.667C809.11 298.667 809.774 299.942 809.125 300.87L512.819 724.163C512.421 724.732 511.579 724.732 511.181 724.163Z" fill="black"/>
</svg>
`
        });
        drawerAnimate();
    }
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
            onClick={openDrawer}
            className="border-gray-100 hover:bg-gray-200 w-fit h-fit"
        >
            <motion.svg 
                initial={{scale:1}}
                animate={{scale:animationValue.scale}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 768L504.929 775.071L512 782.142L519.071 775.071L512 768ZM522 256C522 250.477 517.523 246 512 246C506.477 246 502 250.477 502 256L522 256ZM334.262 604.404L504.929 775.071L519.071 760.929L348.404 590.262L334.262 604.404ZM519.071 775.071L689.738 604.404L675.596 590.262L504.929 760.929L519.071 775.071ZM522 768L522 256L502 256L502 768L522 768Z" fill="black"/>
            </motion.svg>
        </div>
    )
}