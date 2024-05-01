"use client"
import React from "react";
import { motion } from "framer-motion";
import { eachSVGType } from "@/app/page";
export default function FolderSearchAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        scale: 1,
        pathLength: 1
    });
    const animate = () => {
        setAnimationValue({
            scale: 1.1,
            pathLength: 0
        })
    }
    const inanimate = () => {
        setAnimationValue({
            scale: 1,
            pathLength: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Folder search",
            react:`import React from "react";
import { motion } from "framer-motion";
export default function FolderSearchAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        scale: 1,
        pathLength: 1
    });
    const animate = () => {
        setAnimationValue({
            scale: 1.1,
            pathLength: 0
        })
    }
    const inanimate = () => {
        setAnimationValue({
            scale: 1,
            pathLength: 1
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
                <path d="M853.333 512V371.333C853.333 357.191 853.333 350.12 848.94 345.727C844.547 341.333 837.475 341.333 823.333 341.333H567.093C560.962 341.333 557.896 341.333 555.14 340.192C552.383 339.05 550.215 336.882 545.88 332.547L435.453 222.12C431.118 217.785 428.95 215.617 426.194 214.475C423.437 213.333 420.372 213.333 414.24 213.333H200.667C186.525 213.333 179.453 213.333 175.06 217.727C170.667 222.12 170.667 229.191 170.667 243.333V780.667C170.667 794.809 170.667 801.88 175.06 806.273C179.453 810.667 186.525 810.667 200.667 810.667H469.333" stroke="black" strokeWidth="20"/>
                <motion.circle
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    cx="704" cy="704" r="106.667" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    transition={{duration:.5}}
                    d="M832 832L896 896" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function FolderSearchAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
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
                <Path d="M853.333 512V371.333C853.333 357.191 853.333 350.12 848.94 345.727C844.547 341.333 837.475 341.333 823.333 341.333H567.093C560.962 341.333 557.896 341.333 555.14 340.192C552.383 339.05 550.215 336.882 545.88 332.547L435.453 222.12C431.118 217.785 428.95 215.617 426.194 214.475C423.437 213.333 420.372 213.333 414.24 213.333H200.667C186.525 213.333 179.453 213.333 175.06 217.727C170.667 222.12 170.667 229.191 170.667 243.333V780.667C170.667 794.809 170.667 801.88 175.06 806.273C179.453 810.667 186.525 810.667 200.667 810.667H469.333" stroke="black" strokeWidth="20"/>
                <AnimatedCircle
                    animatedProps={pathAnimatedProps}
                    cx="704" cy="704" r="106.667" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                   d="M832 832L896 896" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M853.333 512V371.333C853.333 357.191 853.333 350.12 848.94 345.727C844.547 341.333 837.475 341.333 823.333 341.333H567.093C560.962 341.333 557.896 341.333 555.14 340.192C552.383 339.05 550.215 336.882 545.88 332.547L435.453 222.12C431.118 217.785 428.95 215.617 426.194 214.475C423.437 213.333 420.372 213.333 414.24 213.333H200.667C186.525 213.333 179.453 213.333 175.06 217.727C170.667 222.12 170.667 229.191 170.667 243.333V780.667C170.667 794.809 170.667 801.88 175.06 806.273C179.453 810.667 186.525 810.667 200.667 810.667H469.333" stroke="black" stroke-width="20"/>
    <circle cx="704" cy="704" r="106.667" stroke="black" stroke-width="20"/>
    <path d="M832 832L896 896" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <path d="M853.333 512V371.333C853.333 357.191 853.333 350.12 848.94 345.727C844.547 341.333 837.475 341.333 823.333 341.333H567.093C560.962 341.333 557.896 341.333 555.14 340.192C552.383 339.05 550.215 336.882 545.88 332.547L435.453 222.12C431.118 217.785 428.95 215.617 426.194 214.475C423.437 213.333 420.372 213.333 414.24 213.333H200.667C186.525 213.333 179.453 213.333 175.06 217.727C170.667 222.12 170.667 229.191 170.667 243.333V780.667C170.667 794.809 170.667 801.88 175.06 806.273C179.453 810.667 186.525 810.667 200.667 810.667H469.333" stroke="black" strokeWidth="20"/>
                <motion.circle
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    cx="704" cy="704" r="106.667" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    transition={{duration:.5}}
                    d="M832 832L896 896" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}