import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function KeyRectAnimate(){
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
                <Path d="M128 132C128 130.6 128 129.9 128.272 129.365C128.512 128.895 128.895 128.512 129.365 128.272C129.9 128 130.6 128 132 128H892C893.4 128 894.1 128 894.635 128.272C895.105 128.512 895.488 128.895 895.728 129.365C896 129.9 896 130.6 896 132V892C896 893.4 896 894.1 895.728 894.635C895.488 895.105 895.105 895.488 894.635 895.728C894.1 896 893.4 896 892 896H132C130.6 896 129.9 896 129.365 895.728C128.895 895.488 128.512 895.105 128.272 894.635C128 894.1 128 893.4 128 892V132Z" stroke="black" strokeWidth="20"/>
                <AnimatedCircle
                    animatedProps={pathAnimatedProps}
                    cx="341.333" cy="512" r="118" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M426.667 512H597.333M725.333 597.333V512.15C725.333 512.067 725.266 512 725.183 512H597.333M597.333 512V597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
})