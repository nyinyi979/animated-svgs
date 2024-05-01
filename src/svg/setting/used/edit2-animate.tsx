"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Edit2Animate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Edit",
            react:`import React from "react"
import React from "react"
import { motion } from "framer-motion"

export default function EditAnimate(){
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
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M256 896L247.933 766.92C241.368 661.879 238.085 609.358 244.591 565.958C270.147 395.478 398.667 258.675 567.221 222.534C610.131 213.333 662.754 213.333 768 213.333V213.333L563.674 376.794C559.248 380.335 557.036 382.105 555.851 384.569C554.667 387.033 554.667 389.867 554.667 395.535V758.104C554.667 762.676 554.667 764.962 553.182 766.163C551.696 767.364 549.461 766.885 544.991 765.927L256 704" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function EditAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  2000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:2000,strokeDashoffset:2000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:2000,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:2000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:2000,strokeDashoffset:1},
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M256 896L247.933 766.92C241.368 661.879 238.085 609.358 244.591 565.958C270.147 395.478 398.667 258.675 567.221 222.534C610.131 213.333 662.754 213.333 768 213.333V213.333L563.674 376.794C559.248 380.335 557.036 382.105 555.851 384.569C554.667 387.033 554.667 389.867 554.667 395.535V758.104C554.667 762.676 554.667 764.962 553.182 766.163C551.696 767.364 549.461 766.885 544.991 765.927L256 704" stroke="black" strokeWidth="20"/>
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
    <path d="M256 896L247.933 766.92C241.368 661.879 238.085 609.358 244.591 565.958C270.147 395.478 398.667 258.675 567.221 222.534C610.131 213.333 662.754 213.333 768 213.333V213.333L563.674 376.794C559.248 380.335 557.036 382.105 555.851 384.569C554.667 387.033 554.667 389.867 554.667 395.535V758.104C554.667 762.676 554.667 764.962 553.182 766.163C551.696 767.364 549.461 766.885 544.991 765.927L256 704" stroke="black" stroke-width="20"/>
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
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M256 896L247.933 766.92C241.368 661.879 238.085 609.358 244.591 565.958C270.147 395.478 398.667 258.675 567.221 222.534C610.131 213.333 662.754 213.333 768 213.333V213.333L563.674 376.794C559.248 380.335 557.036 382.105 555.851 384.569C554.667 387.033 554.667 389.867 554.667 395.535V758.104C554.667 762.676 554.667 764.962 553.182 766.163C551.696 767.364 549.461 766.885 544.991 765.927L256 704" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}