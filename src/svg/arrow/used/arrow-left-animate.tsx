"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function ArrowLeftAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-40,0],
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
            name:"Arrow Left",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function ArrowLeftAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-40,0],
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
                    d="M213.333 512L206.262 504.929L199.191 512L206.262 519.071L213.333 512ZM725.333 522C730.856 522 735.333 517.523 735.333 512C735.333 506.477 730.856 502 725.333 502V522ZM376.929 334.262L206.262 504.929L220.404 519.071L391.071 348.405L376.929 334.262ZM206.262 519.071L376.929 689.738L391.071 675.596L220.404 504.929L206.262 519.071ZM213.333 522H725.333V502H213.333V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ArrowLeftAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0,
    }); 
    //translateX: [0,-40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateX:-40}),
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M213.333 512L206.262 504.929L199.191 512L206.262 519.071L213.333 512ZM725.333 522C730.856 522 735.333 517.523 735.333 512C735.333 506.477 730.856 502 725.333 502V522ZM376.929 334.262L206.262 504.929L220.404 519.071L391.071 348.405L376.929 334.262ZM206.262 519.071L376.929 689.738L391.071 675.596L220.404 504.929L206.262 519.071ZM213.333 522H725.333V502H213.333V522Z" fill="black"/>
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
    <path d="M213.333 512L206.262 504.929L199.191 512L206.262 519.071L213.333 512ZM725.333 522C730.856 522 735.333 517.523 735.333 512C735.333 506.477 730.856 502 725.333 502V522ZM376.929 334.262L206.262 504.929L220.404 519.071L391.071 348.405L376.929 334.262ZM206.262 519.071L376.929 689.738L391.071 675.596L220.404 504.929L206.262 519.071ZM213.333 522H725.333V502H213.333V522Z" fill="black"/>
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
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M213.333 512L206.262 504.929L199.191 512L206.262 519.071L213.333 512ZM725.333 522C730.856 522 735.333 517.523 735.333 512C735.333 506.477 730.856 502 725.333 502V522ZM376.929 334.262L206.262 504.929L220.404 519.071L391.071 348.405L376.929 334.262ZM206.262 519.071L376.929 689.738L391.071 675.596L220.404 504.929L206.262 519.071ZM213.333 522H725.333V502H213.333V522Z" fill="black"/>
            </motion.svg>
        </div>
    )
}