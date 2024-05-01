import React from "react";
import { Svg, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function DashboardAnimate(){
    const AnimatedRect = Animated.createAnimatedComponent(Rect);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1050,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1050,strokeDashoffset:1050}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1050,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:1050,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1050,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const rectAnimatedProps = useAnimatedProps(()=>{
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
                <AnimatedRect
                    animatedProps={rectAnimatedProps}
                    x="170.667" y="170.667" width="256" height="256" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <AnimatedRect
                    animatedProps={rectAnimatedProps}
                    x="170.667" y="597.333" width="256" height="256" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <AnimatedRect
                    animatedProps={rectAnimatedProps}
                    x="597.333" y="597.333" width="256" height="256" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <AnimatedRect
                    animatedProps={rectAnimatedProps}
                    x="597.333" y="170.667" width="256" height="256" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
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