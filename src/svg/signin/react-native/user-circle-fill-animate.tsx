import React from "react";
import { Svg, Path, Circle, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function UserCircleFillAnimate(){
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
                viewBox="0 0 1024 1024" fill="none"
            > 
                <Ellipse cx="512" cy="426.667" rx="128" ry="128" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedCircle
                    animatedProps={pathAnimatedProps}
                    cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
                <Path d="M767.269 798.52C767.692 798.288 767.89 797.786 767.735 797.328C752.513 752.291 719.358 712.507 673.341 684.085C627.054 655.496 570.342 640 512 640C453.658 640 396.946 655.496 350.66 684.085C304.642 712.507 271.487 752.291 256.265 797.328C256.11 797.786 256.308 798.287 256.731 798.52L492.75 928.098C504.739 934.68 519.261 934.68 531.25 928.098L767.269 798.52Z" fill="black"/>
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