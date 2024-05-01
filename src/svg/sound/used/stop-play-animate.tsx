"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function StopPlayAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        lScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            lScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            lScale: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Stop play",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function StopPlayAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        lScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            lScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            lScale: 1,
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
                    initial={{scale:1}}
                    animate={{scale:[animationValue.lScale,1]}}
                    d="M553.093 511.126L171.261 298.997C170.994 298.849 170.667 299.042 170.667 299.347V724.654C170.667 724.959 170.994 725.151 171.261 725.003L553.093 512.874C553.779 512.493 553.779 511.507 553.093 511.126Z" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.lScale,1]}}
                    d="M682.667 725.333L682.667 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.lScale,1]}}
                    d="M853.333 725.333L853.333 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function StopPlayAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        lScale: 1
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,lScale:0}),
            withTiming({scale:1.1,lScale:1})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,lScale:1},
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
            transform: [{scale:animationValue.value.lScale}]
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
                    d="M553.093 511.126L171.261 298.997C170.994 298.849 170.667 299.042 170.667 299.347V724.654C170.667 724.959 170.994 725.151 171.261 725.003L553.093 512.874C553.779 512.493 553.779 511.507 553.093 511.126Z" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M682.667 725.333L682.667 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M853.333 725.333L853.333 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M553.093 511.126L171.261 298.997C170.994 298.849 170.667 299.042 170.667 299.347V724.654C170.667 724.959 170.994 725.151 171.261 725.003L553.093 512.874C553.779 512.493 553.779 511.507 553.093 511.126Z" stroke="black" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M682.667 725.333L682.667 298.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M853.333 725.333L853.333 298.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                    initial={{scale:1}}
                    animate={{scale:[animationValue.lScale,1]}}
                    d="M553.093 511.126L171.261 298.997C170.994 298.849 170.667 299.042 170.667 299.347V724.654C170.667 724.959 170.994 725.151 171.261 725.003L553.093 512.874C553.779 512.493 553.779 511.507 553.093 511.126Z" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.lScale,1]}}
                    d="M682.667 725.333L682.667 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.lScale,1]}}
                    d="M853.333 725.333L853.333 298.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}