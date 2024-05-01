import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ChatSearchAnimate(){
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
                <Path d="M489.026 853.334H129C128.448 853.334 128 852.886 128 852.334V174.667C128 172.458 129.791 170.667 132 170.667H892C894.209 170.667 896 172.458 896 174.667V485.744" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M298.667 597.333H426.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M298.667 426.667H554.667" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M843.333 661.333C843.333 738.285 780.952 800.667 704 800.667C627.048 800.667 564.667 738.285 564.667 661.333C564.667 584.382 627.048 522 704 522C780.952 522 843.333 584.382 843.333 661.333Z" stroke="black" strokeWidth="20"/>
                <Path d="M789.333 746.667L917.333 874.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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