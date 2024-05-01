"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function ShieldAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        scale: 1,
        cScale: 1,
    })
    const animate = () =>{
        setAnimationValue({
            scale: 1.1,
            cScale: 0
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            scale: 1,
            cScale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Shield",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function ShieldAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        scale: 1,
        cScale: 1,
    })
    const animate = () =>{
        setAnimationValue({
            scale: 1.1,
            cScale: 0
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            scale: 1,
            cScale: 1
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
                <path d="M850.133 599.733L515 851.083C513.222 852.417 510.778 852.417 509 851.083L173.867 599.733C171.852 598.222 170.667 595.851 170.667 593.333V172.667C170.667 171.562 171.562 170.667 172.667 170.667H851.333C852.438 170.667 853.333 171.562 853.333 172.667V593.333C853.333 595.851 852.148 598.222 850.133 599.733Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.circle 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.cScale,1]}}
                    transition={{duration:.3}}
                    cx="512" cy="426.667" r="42.6667" fill="black"/>
                <motion.ellipse 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.cScale,1]}}
                    transition={{duration:.2}}
                    cx="384" cy="426.667" rx="42.6667" ry="42.6667" fill="black"/>
                <motion.ellipse 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.cScale,1]}}
                    transition={{duration:.4}}
                    cx="640" cy="426.667" rx="42.6667" ry="42.6667" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Ellipse, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ShieldAnimate(){
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        cScale: 1,
        scale: 1,
    });
    
    const animate = () =>{
        animationValue.value = {cScale:0,scale:1}
        animationValue.value = withTiming({cScale:1,scale:1.1})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {cScale:1,scale:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const ellipseAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.cScale}]
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
                <Path d="M850.133 599.733L515 851.083C513.222 852.417 510.778 852.417 509 851.083L173.867 599.733C171.852 598.222 170.667 595.851 170.667 593.333V172.667C170.667 171.562 171.562 170.667 172.667 170.667H851.333C852.438 170.667 853.333 171.562 853.333 172.667V593.333C853.333 595.851 852.148 598.222 850.133 599.733Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedCircle
                    animatedProps={ellipseAnimatedProps}
                    originX="512" originY="450"
                    cx="512" cy="426.667" r="42.6667" fill="black"/>
                <AnimatedEllipse
                    animatedProps={ellipseAnimatedProps}
                    originX="412" originY="450"
                    cx="384" cy="426.667" rx="42.6667" ry="42.6667" fill="black"/>
                <AnimatedEllipse
                    animatedProps={ellipseAnimatedProps}
                    originX="612" originY="450"
                    cx="640" cy="426.667" rx="42.6667" ry="42.6667" fill="black"/>
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
    <path d="M850.133 599.733L515 851.083C513.222 852.417 510.778 852.417 509 851.083L173.867 599.733C171.852 598.222 170.667 595.851 170.667 593.333V172.667C170.667 171.562 171.562 170.667 172.667 170.667H851.333C852.438 170.667 853.333 171.562 853.333 172.667V593.333C853.333 595.851 852.148 598.222 850.133 599.733Z" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <circle cx="512" cy="426.667" r="42.6667" fill="black"/>
    <ellipse cx="384" cy="426.667" rx="42.6667" ry="42.6667" fill="black"/>
    <ellipse cx="640" cy="426.667" rx="42.6667" ry="42.6667" fill="black"/>
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
                <path d="M850.133 599.733L515 851.083C513.222 852.417 510.778 852.417 509 851.083L173.867 599.733C171.852 598.222 170.667 595.851 170.667 593.333V172.667C170.667 171.562 171.562 170.667 172.667 170.667H851.333C852.438 170.667 853.333 171.562 853.333 172.667V593.333C853.333 595.851 852.148 598.222 850.133 599.733Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.circle 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.cScale,1]}}
                    transition={{duration:.3}}
                    cx="512" cy="426.667" r="42.6667" fill="black"/>
                <motion.ellipse 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.cScale,1]}}
                    transition={{duration:.2}}
                    cx="384" cy="426.667" rx="42.6667" ry="42.6667" fill="black"/>
                <motion.ellipse 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.cScale,1]}}
                    transition={{duration:.4}}
                    cx="640" cy="426.667" rx="42.6667" ry="42.6667" fill="black"/>
            </motion.svg>
        </div>
    )
}