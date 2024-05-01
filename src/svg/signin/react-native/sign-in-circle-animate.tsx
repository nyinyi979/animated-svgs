import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function SignInCircleAnimate(){
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
                <Path d="M210.301 813.699C269.972 873.369 345.996 914.005 428.761 930.468C511.527 946.931 597.315 938.482 675.278 906.189C753.241 873.895 819.878 819.208 866.76 749.043C913.643 678.878 938.667 596.387 938.667 512C938.667 427.613 913.643 345.122 866.76 274.957C819.878 204.792 753.241 150.105 675.278 117.811C597.315 85.5179 511.527 77.0685 428.762 93.5315C345.996 109.995 269.972 150.631 210.301 210.301" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M640 512L647.809 505.753L652.806 512L647.809 518.247L640 512ZM128 522C122.477 522 118 517.523 118 512C118 506.477 122.477 502 128 502V522ZM477.142 292.42L647.809 505.753L632.191 518.247L461.525 304.914L477.142 292.42ZM647.809 518.247L477.142 731.58L461.525 719.086L632.191 505.753L647.809 518.247ZM640 522H128V502H640V522Z" fill="black"/>
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