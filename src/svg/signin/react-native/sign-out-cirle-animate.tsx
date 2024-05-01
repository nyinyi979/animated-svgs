import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function SignOutCircleAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateX:-50})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1.1,translateX:0},
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
            transform: [{translateX:animationValue.value.translateX}]
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
                <Path d="M341.333 807.603C393.223 837.562 452.083 853.333 512 853.333C571.916 853.333 630.777 837.562 682.667 807.603C734.556 777.645 777.645 734.556 807.603 682.667C837.562 630.778 853.333 571.917 853.333 512C853.333 452.084 837.562 393.223 807.603 341.333C777.645 289.444 734.556 246.355 682.667 216.397C630.777 186.438 571.916 170.667 512 170.667C452.083 170.667 393.223 186.438 341.333 216.397" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M85.3333 512L77.5246 505.753L72.527 512L77.5246 518.247L85.3333 512ZM469.333 522C474.856 522 479.333 517.523 479.333 512C479.333 506.477 474.856 502 469.333 502V522ZM248.191 292.42L77.5246 505.753L93.1419 518.247L263.809 304.914L248.191 292.42ZM77.5246 518.247L248.191 731.58L263.809 719.086L93.1419 505.753L77.5246 518.247ZM85.3333 522H469.333V502H85.3333V522Z" fill="black"/>
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