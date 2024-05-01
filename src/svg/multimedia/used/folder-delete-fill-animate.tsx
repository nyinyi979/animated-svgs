"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function FolderDeleteFillAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Folder delete fill",
            react:`import React from "react"
import React from "react"
import { motion } from "framer-motion"

export default function FolderDeleteFillAnimate(){
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
                <path d="M128 341.333H892.8C893.92 341.333 894.48 341.333 894.908 341.551C895.284 341.743 895.59 342.049 895.782 342.425C896 342.853 896 343.413 896 344.533V850.133C896 851.253 896 851.814 895.782 852.241C895.59 852.618 895.284 852.924 894.908 853.115C894.48 853.333 893.92 853.333 892.8 853.333H131.2C130.08 853.333 129.52 853.333 129.092 853.115C128.716 852.924 128.41 852.618 128.218 852.241C128 851.814 128 851.253 128 850.133V341.333Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    d="M128 243.333C128 229.191 128 222.12 132.393 217.727C136.787 213.333 143.858 213.333 158 213.333H414.24C420.372 213.333 423.437 213.333 426.194 214.475C428.95 215.617 431.118 217.785 435.453 222.12L554.667 341.333H128V243.333Z" stroke="black" strokeWidth="20"/>
                <path d="M405.333 704L618.667 490.667M618.667 704L405.333 490.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function FolderDeleteFillAnimate(){
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
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1},
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
                <Path d="M128 341.333H892.8C893.92 341.333 894.48 341.333 894.908 341.551C895.284 341.743 895.59 342.049 895.782 342.425C896 342.853 896 343.413 896 344.533V850.133C896 851.253 896 851.814 895.782 852.241C895.59 852.618 895.284 852.924 894.908 853.115C894.48 853.333 893.92 853.333 892.8 853.333H131.2C130.08 853.333 129.52 853.333 129.092 853.115C128.716 852.924 128.41 852.618 128.218 852.241C128 851.814 128 851.253 128 850.133V341.333Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M128 243.333C128 229.191 128 222.12 132.393 217.727C136.787 213.333 143.858 213.333 158 213.333H414.24C420.372 213.333 423.437 213.333 426.194 214.475C428.95 215.617 431.118 217.785 435.453 222.12L554.667 341.333H128V243.333Z" stroke="black" strokeWidth="20"/>
                <Path d="M405.333 704L618.667 490.667M618.667 704L405.333 490.667" stroke="black" strokeWidth="20"/>
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
    <path d="M128 341.333H892.8C893.92 341.333 894.48 341.333 894.908 341.551C895.284 341.743 895.59 342.049 895.782 342.425C896 342.853 896 343.413 896 344.533V850.133C896 851.253 896 851.814 895.782 852.241C895.59 852.618 895.284 852.924 894.908 853.115C894.48 853.333 893.92 853.333 892.8 853.333H131.2C130.08 853.333 129.52 853.333 129.092 853.115C128.716 852.924 128.41 852.618 128.218 852.241C128 851.814 128 851.253 128 850.133V341.333Z" stroke="black" stroke-width="20"/>
    <path d="M128 243.333C128 229.191 128 222.12 132.393 217.727C136.787 213.333 143.858 213.333 158 213.333H414.24C420.372 213.333 423.437 213.333 426.194 214.475C428.95 215.617 431.118 217.785 435.453 222.12L554.667 341.333H128V243.333Z" stroke="black" stroke-width="20"/>
    <path d="M405.333 704L618.667 490.667M618.667 704L405.333 490.667" stroke="black" stroke-width="20"/>
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
                <path d="M128 341.333H892.8C893.92 341.333 894.48 341.333 894.908 341.551C895.284 341.743 895.59 342.049 895.782 342.425C896 342.853 896 343.413 896 344.533V850.133C896 851.253 896 851.814 895.782 852.241C895.59 852.618 895.284 852.924 894.908 853.115C894.48 853.333 893.92 853.333 892.8 853.333H131.2C130.08 853.333 129.52 853.333 129.092 853.115C128.716 852.924 128.41 852.618 128.218 852.241C128 851.814 128 851.253 128 850.133V341.333Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    d="M128 243.333C128 229.191 128 222.12 132.393 217.727C136.787 213.333 143.858 213.333 158 213.333H414.24C420.372 213.333 423.437 213.333 426.194 214.475C428.95 215.617 431.118 217.785 435.453 222.12L554.667 341.333H128V243.333Z" stroke="black" strokeWidth="20"/>
                <path d="M405.333 704L618.667 490.667M618.667 704L405.333 490.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}