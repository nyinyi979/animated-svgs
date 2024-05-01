"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function LightningCircleAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Lightning circle",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function LightningCircleAnimate(){
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
                    transition={{duration:.4}} 
                    d="M511.5 588.8H302.103C300.574 588.8 299.81 588.8 299.521 588.303C299.231 587.806 299.609 587.141 300.364 585.812L511.065 214.978L511.065 214.978C511.44 214.319 511.628 213.989 511.814 214.038C512 214.087 512 214.466 512 215.225V215.225V434.7C512 434.936 512 435.054 512.073 435.127C512.146 435.2 512.264 435.2 512.5 435.2H721.897C723.426 435.2 724.19 435.2 724.479 435.697C724.768 436.194 724.391 436.859 723.636 438.188L512.935 809.022C512.56 809.682 512.372 810.012 512.186 809.962C512 809.913 512 809.534 512 808.775V589.3C512 589.064 512 588.946 511.927 588.873C511.854 588.8 511.736 588.8 511.5 588.8Z" stroke="black" strokeWidth="20"/>
                <motion.circle
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    transition={{duration:.4}}
                    cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LightningCircleAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  2500,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:2500,strokeDashoffset:2500}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:2500,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:2500,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:2500,strokeDashoffset:1},
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
                    d="M511.5 588.8H302.103C300.574 588.8 299.81 588.8 299.521 588.303C299.231 587.806 299.609 587.141 300.364 585.812L511.065 214.978L511.065 214.978C511.44 214.319 511.628 213.989 511.814 214.038C512 214.087 512 214.466 512 215.225V215.225V434.7C512 434.936 512 435.054 512.073 435.127C512.146 435.2 512.264 435.2 512.5 435.2H721.897C723.426 435.2 724.19 435.2 724.479 435.697C724.768 436.194 724.391 436.859 723.636 438.188L512.935 809.022C512.56 809.682 512.372 810.012 512.186 809.962C512 809.913 512 809.534 512 808.775V589.3C512 589.064 512 588.946 511.927 588.873C511.854 588.8 511.736 588.8 511.5 588.8Z" stroke="black" strokeWidth="20"/>
                <AnimatedCircle
                    animatedProps={pathAnimatedProps}
                    cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
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
    <path d="M511.5 588.8H302.103C300.574 588.8 299.81 588.8 299.521 588.303C299.231 587.806 299.609 587.141 300.364 585.812L511.065 214.978L511.065 214.978C511.44 214.319 511.628 213.989 511.814 214.038C512 214.087 512 214.466 512 215.225V215.225V434.7C512 434.936 512 435.054 512.073 435.127C512.146 435.2 512.264 435.2 512.5 435.2H721.897C723.426 435.2 724.19 435.2 724.479 435.697C724.768 436.194 724.391 436.859 723.636 438.188L512.935 809.022C512.56 809.682 512.372 810.012 512.186 809.962C512 809.913 512 809.534 512 808.775V589.3C512 589.064 512 588.946 511.927 588.873C511.854 588.8 511.736 588.8 511.5 588.8Z" stroke="black" stroke-width="20"/>
    <circle cx="512" cy="512" r="384" stroke="black" stroke-width="20"/>
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
                    transition={{duration:.4}} 
                    d="M511.5 588.8H302.103C300.574 588.8 299.81 588.8 299.521 588.303C299.231 587.806 299.609 587.141 300.364 585.812L511.065 214.978L511.065 214.978C511.44 214.319 511.628 213.989 511.814 214.038C512 214.087 512 214.466 512 215.225V215.225V434.7C512 434.936 512 435.054 512.073 435.127C512.146 435.2 512.264 435.2 512.5 435.2H721.897C723.426 435.2 724.19 435.2 724.479 435.697C724.768 436.194 724.391 436.859 723.636 438.188L512.935 809.022C512.56 809.682 512.372 810.012 512.186 809.962C512 809.913 512 809.534 512 808.775V589.3C512 589.064 512 588.946 511.927 588.873C511.854 588.8 511.736 588.8 511.5 588.8Z" stroke="black" strokeWidth="20"/>
                <motion.circle
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    transition={{duration:.4}}
                    cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}