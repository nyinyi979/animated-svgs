"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function LineSRightAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Line right(square)",
            react:`
import React from "react"
import { motion } from "framer-motion"

export default function LineSRightAnimate(){
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
                <rect x="384" y="640" width="256" height="256" rx="2" transform="rotate(90 384 640)" stroke="black" strokeWidth="20"/>
                <path d="M768 128L896 298.667L768 469.333" stroke="black" strokeWidth="20"/>
                <path d="M896 298.667H264C260.229 298.667 258.343 298.667 257.172 299.838C256 301.01 256 302.895 256 306.667V640" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LineSRightAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1}),
            withTiming({scale:1.1})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
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
                <Rect x="384" y="640" width="256" height="256" rx="2" transform="rotate(90 384 640)" stroke="black" strokeWidth="20"/>
                <Path d="M768 128L896 298.667L768 469.333" stroke="black" strokeWidth="20"/>
                <Path d="M896 298.667H264C260.229 298.667 258.343 298.667 257.172 299.838C256 301.01 256 302.895 256 306.667V640" stroke="black" strokeWidth="20"/>
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
    <rect x="384" y="640" width="256" height="256" rx="2" transform="rotate(90 384 640)" stroke="black" stroke-width="20"/>
    <path d="M768 128L896 298.667L768 469.333" stroke="black" stroke-width="20"/>
    <path d="M896 298.667H264C260.229 298.667 258.343 298.667 257.172 299.838C256 301.01 256 302.895 256 306.667V640" stroke="black" stroke-width="20"/>
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
                <rect x="384" y="640" width="256" height="256" rx="2" transform="rotate(90 384 640)" stroke="black" strokeWidth="20"/>
                <path d="M768 128L896 298.667L768 469.333" stroke="black" strokeWidth="20"/>
                <path d="M896 298.667H264C260.229 298.667 258.343 298.667 257.172 299.838C256 301.01 256 302.895 256 306.667V640" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}