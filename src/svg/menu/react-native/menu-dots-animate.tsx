import React from "react";
import { Svg, Ellipse, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function MenuDotsAnimate(){
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        eScale: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,eScale:0}
        animationValue.value = withTiming({scale:1.1,eScale:1})
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,eScale:1})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const scaleAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.eScale}]
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
                    animatedProps={scaleAnimatedProps}
                    cx="512" cy="512" r="42.6667" stroke="black" originY="512" originX="512" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedEllipse
                    animatedProps={scaleAnimatedProps}
                    cx="256" cy="512" rx="42.6667" ry="42.6667" originY="512" originX="312" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedEllipse
                    animatedProps={scaleAnimatedProps}
                    cx="768" cy="512" rx="42.6667" ry="42.6667" originY="512" originX="712" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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