import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ArchiveExportAnimate(){
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
                <Path d="M128 469.333V593.333C128 595.219 128 596.162 128.586 596.748C129.172 597.333 130.114 597.333 132 597.333H339.892C340.588 597.333 340.935 597.333 341.197 597.522C341.459 597.711 341.569 598.041 341.789 598.701L383.544 723.966C383.764 724.626 383.874 724.956 384.136 725.145C384.398 725.333 384.746 725.333 385.442 725.333H638.558C639.254 725.333 639.602 725.333 639.864 725.145C640.126 724.956 640.236 724.626 640.456 723.966L682.211 598.701C682.431 598.041 682.541 597.711 682.803 597.522C683.065 597.333 683.412 597.333 684.108 597.333H892C893.886 597.333 894.828 597.333 895.414 596.748C896 596.162 896 595.219 896 593.333V469.333" stroke="black" strokeWidth="20"/>
                <Path d="M896 894V130C896 128.895 895.105 128 894 128H130C128.895 128 128 128.895 128 130V894C128 895.105 128.895 896 130 896H894C895.105 896 896 895.105 896 894Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M362.667 405.333L512 298.667M512 298.667L661.333 405.333M512 298.667L512 554.667" stroke="black" strokeWidth="20"/>
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