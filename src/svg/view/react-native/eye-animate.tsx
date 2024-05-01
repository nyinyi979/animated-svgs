import React from "react";
import { Svg, Path, Circle, Line } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function EyeAnimate(){
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedLine = Animated.createAnimatedComponent(Line);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        eyeClose: 0,
        eyeOpen: 1
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,eyeClose:1,eyeOpen:0}
        animationValue.value = withTiming({scale:1.1,eyeClose:0,eyeOpen:1});
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,eyeClose:0,eyeOpen:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const eyeOpenAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.eyeOpen}]
        }
    })
    const eyeCloseAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.eyeClose}]
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
                <AnimatedCircle
                    animatedProps={eyeOpenAnimatedProps}
                    originX="512" originY="512"
                    cx="512" cy="512" r="160.667" stroke="black" strokeWidth="20"/>
                <Path d="M895.312 510.99C895.632 511.456 895.792 511.689 895.792 512C895.792 512.311 895.632 512.544 895.312 513.01C883.324 530.45 716.292 768 512 768C307.708 768 140.676 530.45 128.689 513.01C128.368 512.544 128.208 512.311 128.208 512C128.208 511.689 128.368 511.456 128.689 510.99C140.676 493.55 307.708 256 512 256C716.292 256 883.324 493.55 895.312 510.99Z" stroke="black" strokeWidth="20"/>
                <AnimatedLine
                    animatedProps={eyeCloseAnimatedProps}
                    originX="512" originY="512"
                    x1="365" y1="502" x2="659" y2="502" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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