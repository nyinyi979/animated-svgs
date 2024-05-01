import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function SoundMaxAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        lScale: 1
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,lScale:0}
        animationValue.value = withTiming({scale:1.1,lScale:1})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,lScale:1},
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
            transform: [{scale:animationValue.value.lScale}]
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
                <Path d="M103.855 542.87C94.831 527.83 90.3189 520.31 90.3189 512C90.3189 503.69 94.831 496.17 103.855 481.13L143.871 414.437C146.561 409.953 147.907 407.711 149.979 406.25C152.052 404.79 154.616 404.277 159.744 403.251L255.308 384.138C255.65 384.07 255.822 384.036 255.969 383.948C256.116 383.86 256.228 383.726 256.452 383.458L466.504 131.395C467.687 129.976 468.278 129.266 468.806 129.457C469.333 129.648 469.333 130.572 469.333 132.419L469.333 891.581C469.333 893.428 469.333 894.352 468.806 894.543C468.278 894.734 467.687 894.024 466.504 892.605L256.452 640.542C256.228 640.274 256.116 640.14 255.969 640.052C255.822 639.964 255.65 639.93 255.308 639.862L159.744 620.749C154.616 619.723 152.052 619.21 149.979 617.75C147.907 616.289 146.561 614.047 143.871 609.563L103.855 542.87Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    originX="662" originY="440"
                    d="M662.849 361.15C702.651 400.952 725.11 454.872 725.332 511.16C725.553 567.447 703.52 621.542 664.033 661.656" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    originX="702" originY="440"
                    d="M838.692 270.641C902.375 334.324 938.309 420.595 938.664 510.655C939.019 600.716 903.766 687.267 840.587 751.45" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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