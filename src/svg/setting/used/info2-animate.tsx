"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Info2Animate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        pScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            pScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            pScale: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Info",
            react:`import React from "react"
import React from "react"
import { motion } from "framer-motion"

export default function InfoAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        pScale: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            pScale: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            pScale: 1,
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
                <circle cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.pScale,1]}}
                    transition={{duration:.3}}
                    d="M533.333 320C533.333 331.782 523.782 341.333 512 341.333C500.218 341.333 490.667 331.782 490.667 320C490.667 308.218 500.218 298.667 512 298.667C523.782 298.667 533.333 308.218 533.333 320Z" fill="black" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M512 725.333V426.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function InfoAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        pScale: 1,
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {pScale:0,scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({pScale:1,scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({pScale:1,scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {pScale:1,scale:1,strokeDasharray:1000,strokeDashoffset:1},
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
    const pathScaleAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.pScale}]
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
                <Circle cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
                <AnimatedPath 
                    animatedProps={pathScaleAnimatedProps}
                    originX="512" originY="350"
                    d="M533.333 320C533.333 331.782 523.782 341.333 512 341.333C500.218 341.333 490.667 331.782 490.667 320C490.667 308.218 500.218 298.667 512 298.667C523.782 298.667 533.333 308.218 533.333 320Z" fill="black" stroke="black" strokeWidth="20"/>
                <AnimatedPath 
                    animatedProps={pathAnimatedProps}
                    d="M512 725.333V426.667" stroke="black" strokeWidth="20"/>
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
    <circle cx="512" cy="512" r="384" stroke="black" stroke-width="20"/>
    <path d="M533.333 320C533.333 331.782 523.782 341.333 512 341.333C500.218 341.333 490.667 331.782 490.667 320C490.667 308.218 500.218 298.667 512 298.667C523.782 298.667 533.333 308.218 533.333 320Z" fill="black" stroke="black" stroke-width="20"/>
    <path d="M512 725.333V426.667" stroke="black" stroke-width="20"/>
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
                <circle cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{scale:1}}
                    animate={{scale:[animationValue.pScale,1]}}
                    transition={{duration:.3}}
                    d="M533.333 320C533.333 331.782 523.782 341.333 512 341.333C500.218 341.333 490.667 331.782 490.667 320C490.667 308.218 500.218 298.667 512 298.667C523.782 298.667 533.333 308.218 533.333 320Z" fill="black" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    d="M512 725.333V426.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}