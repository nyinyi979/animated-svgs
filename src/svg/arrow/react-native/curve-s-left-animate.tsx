import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CurveSLeftAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0,
    }); 
    //translateX: [0,-40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateX:-40}),
            withTiming({scale:1.1,translateX:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateX:0})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateX: animationValue.value.translateX}]
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
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M170.667 426.667L163.596 433.738L156.525 426.667L163.596 419.596L170.667 426.667ZM863.333 768C863.333 773.523 858.856 778 853.333 778C847.81 778 843.333 773.523 843.333 768L863.333 768ZM376.929 647.071L163.596 433.738L177.738 419.596L391.071 632.929L376.929 647.071ZM163.596 419.596L376.929 206.262L391.071 220.404L177.738 433.738L163.596 419.596ZM170.667 416.667L847.333 416.667L847.333 436.667L170.667 436.667L170.667 416.667ZM863.333 432.667L863.333 768L843.333 768L843.333 432.667L863.333 432.667ZM847.333 416.667C856.17 416.667 863.333 423.83 863.333 432.667L843.333 432.667C843.333 434.876 845.124 436.667 847.333 436.667L847.333 416.667Z" fill="black"/>
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