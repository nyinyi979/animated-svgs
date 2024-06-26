import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function InAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0,
        translateY: 0
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateX:20,translateY:30}),
            withTiming({scale:1.1,translateX:0,translateY:0})
        ) 

    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateX:0,translateY:0},
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
            translateX: animationValue.value.translateX,
            translateY: animationValue.value.translateY
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
                <Path d="M128 384V890C128 892.828 128 894.243 128.879 895.121C129.757 896 131.172 896 134 896H890C892.828 896 894.243 896 895.121 895.121C896 894.243 896 892.828 896 890V134C896 131.172 896 129.757 895.121 128.879C894.243 128 892.828 128 890 128H384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M640 640V650H650V640H640ZM305.738 291.596C301.832 287.69 295.501 287.69 291.596 291.596C287.69 295.501 287.69 301.832 291.596 305.738L305.738 291.596ZM630 341.333V640H650V341.333H630ZM640 630H341.333V650H640V630ZM647.071 632.929L305.738 291.596L291.596 305.738L632.929 647.071L647.071 632.929Z" fill="black"/>
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