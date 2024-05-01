import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function UploadCircleAnimate(){
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <AnimatedPath
                    animatedProps={strokePathAnimatedProps}
                    d="M223.51 631.967C240.527 695.474 278.023 751.591 330.183 791.615C382.344 831.639 446.253 853.333 512 853.333C577.747 853.333 641.656 831.639 693.817 791.615C745.977 751.591 783.473 695.474 800.49 631.967" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={translateYPathAnimatedProps}
                    d="M512 170.667L505.753 162.858L512 157.86L518.247 162.858L512 170.667ZM522 554.667C522 560.19 517.523 564.667 512 564.667C506.477 564.667 502 560.19 502 554.667L522 554.667ZM292.42 333.525L505.753 162.858L518.247 178.475L304.914 349.142L292.42 333.525ZM518.247 162.858L731.58 333.525L719.086 349.142L505.753 178.475L518.247 162.858ZM522 170.667L522 554.667L502 554.667L502 170.667L522 170.667Z" fill="black"/>
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