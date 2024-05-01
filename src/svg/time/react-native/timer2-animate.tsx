import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Timer2Animate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
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
                <Path d="M512 256.5C512 256.264 512 256.146 512.073 256.073C512.147 256 512.265 256 512.5 256C557.265 256.088 601.228 267.912 640 290.298C678.917 312.766 711.234 345.083 733.703 384C756.171 422.917 768 467.063 768 512C768 556.937 756.171 601.083 733.702 640C711.234 678.917 678.917 711.234 640 733.703C601.083 756.171 556.937 768 512 768C467.063 768 422.917 756.171 384 733.702C345.227 711.317 313.006 679.157 290.548 640.433C290.43 640.229 290.371 640.127 290.397 640.027C290.424 639.927 290.526 639.868 290.73 639.75L511.75 512.144C511.872 512.074 511.933 512.039 511.967 511.981C512 511.923 512 511.852 512 511.711L512 256.5Z" fill="black"/>
                <Circle cx="512" cy="512" r="351.333" stroke="black" strokeWidth="20"/>
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