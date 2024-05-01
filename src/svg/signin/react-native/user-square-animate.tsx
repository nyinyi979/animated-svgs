import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function UserSquareAnimate(){
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:20}),
            withTiming({scale:1.1,translateY:0})
        )
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1.1,translateY:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const cirlceAnimatedProps = useAnimatedProps(()=>{
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
                <AnimatedCircle
                    animatedProps={cirlceAnimatedProps}
                    cx="512" cy="298.667" r="170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M296.439 601.367C297.808 598.843 300.439 597.333 303.309 597.333H720.691C723.562 597.333 726.193 598.843 727.562 601.367C740.967 626.078 810.323 760.404 810.666 895C810.667 895.552 810.219 896 809.667 896H214.334C213.781 896 213.333 895.552 213.335 895C213.677 760.404 283.033 626.078 296.439 601.367Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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