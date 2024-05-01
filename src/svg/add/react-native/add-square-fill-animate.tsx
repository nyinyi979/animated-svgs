import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function AddSquareFillAnimate(){
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
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        );
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
                <Path d="M128 136C128 132.229 128 130.343 129.172 129.172C130.343 128 132.229 128 136 128H888C891.771 128 893.657 128 894.828 129.172C896 130.343 896 132.229 896 136V888C896 891.771 896 893.657 894.828 894.828C893.657 896 891.771 896 888 896H136C132.229 896 130.343 896 129.172 894.828C128 893.657 128 891.771 128 888V136Z" fill="black"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 256L512 768" stroke="white" strokeWidth="20" strokeLinecap="square"/>
                 <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M256 512L768 512" stroke="white" strokeWidth="20" strokeLinecap="square"/>
            </AnimatedSvg>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        width: 100,
        height: 100,
        backgroundColor:"red",
        alignItems:"center"
    },
    svg:{
        alignSelf: "center",
    }
})