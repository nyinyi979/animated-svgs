import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function FolderAnimate(){
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
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M192 490.667H832" stroke="black" strokeWidth="20" strokeMiterlimit="1.41421"/>
                <Path d="M192 194.4C192 193.56 192 193.14 192.163 192.819C192.307 192.537 192.537 192.307 192.819 192.163C193.14 192 193.56 192 194.4 192H446.972C447.348 192 447.536 192 447.706 192.052C447.857 192.098 447.998 192.173 448.12 192.273C448.257 192.386 448.362 192.542 448.57 192.855L532.763 319.162C532.972 319.475 533.076 319.631 533.214 319.744C533.335 319.844 533.476 319.919 533.627 319.965C533.797 320.017 533.985 320.017 534.361 320.017H829.6C830.44 320.017 830.86 320.017 831.181 320.181C831.463 320.324 831.693 320.554 831.837 320.836C832 321.157 832 321.577 832 322.417V786.95C832 787.79 832 788.211 831.837 788.531C831.693 788.814 831.463 789.043 831.181 789.187C830.86 789.35 830.44 789.35 829.6 789.35H194.4C193.56 789.35 193.14 789.35 192.819 789.187C192.537 789.043 192.307 788.814 192.163 788.531C192 788.211 192 787.79 192 786.95V194.4Z" stroke="black" strokeWidth="20"/>
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