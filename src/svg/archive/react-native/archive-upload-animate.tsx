import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ArchiveUploadAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
    });
    //translateY: [0,-80,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:-80}),
            withTiming({scale:1.1,translateY:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateY:0})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY}]
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
                <Path d="M896 512H726.404C725.88 512 725.618 512 725.397 512.118C725.176 512.237 725.03 512.455 724.74 512.891L640.594 639.109C640.303 639.545 640.158 639.763 639.937 639.882C639.716 640 639.454 640 638.93 640H385.07C384.546 640 384.284 640 384.063 639.882C383.842 639.763 383.697 639.545 383.406 639.109L299.26 512.891C298.97 512.455 298.824 512.237 298.603 512.118C298.382 512 298.12 512 297.596 512H128" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M362.667 341.333L512 213.333M512 213.333L661.333 341.333M512 213.333L512 512" stroke="black" strokeWidth="20"/>
                <Path d="M213.333 384L128.293 469.04C128.105 469.228 128 469.482 128 469.748V808.667C128 809.771 128.895 810.667 130 810.667H894C895.105 810.667 896 809.771 896 808.667V469.748C896 469.482 895.895 469.228 895.707 469.04L810.667 384" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
