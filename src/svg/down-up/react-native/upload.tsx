import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function UploadAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
        translateY: 0,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1000,strokeDashoffset:1000,translateY:0}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0,translateY:-80}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0,translateY:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1,translateY:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const strokePathAnimatedProps = useAnimatedProps(()=>{
        return{
            strokeDashoffset: animationValue.value.strokeDashoffset,
            strokeDasharray: animationValue.value.strokeDasharray
        }
    })
    const translateYPathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY:animationValue.value.translateY}]
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
                    animatedProps={translateYPathAnimatedProps}
                    d="M512 213.333L504.929 206.262L512 199.191L519.071 206.262L512 213.333ZM522 597.333C522 602.856 517.523 607.333 512 607.333C506.477 607.333 502 602.856 502 597.333L522 597.333ZM291.596 419.596L504.929 206.262L519.071 220.404L305.738 433.738L291.596 419.596ZM519.071 206.262L732.405 419.596L718.262 433.738L504.929 220.404L519.071 206.262ZM522 213.333L522 597.333L502 597.333L502 213.333L522 213.333Z" fill="black"/>
                <AnimatedPath
                    animatedProps={strokePathAnimatedProps}
                    d="M213.333 682.667L213.333 725.333C213.333 772.462 251.538 810.667 298.667 810.667L725.333 810.667C772.462 810.667 810.667 772.462 810.667 725.333V682.667" stroke="black" strokeWidth="20"/>
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