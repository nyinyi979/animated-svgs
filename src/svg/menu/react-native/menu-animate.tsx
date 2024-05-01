import React from "react";
import { Svg, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function MenuAnimate(){
    const AnimatedRect = Animated.createAnimatedComponent(Rect);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: [0,0],
    });
    //translateY: [0,40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:[-30,30]})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateY:[0,0]})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const translateYAnimatedProps1 = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY[0]}]
        }
    })
    const translateYAnimatedProps2 = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY[1]}]
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
                <AnimatedRect
                    animatedProps={translateYAnimatedProps1}
                    x="170.667" y="213.333" width="682.667" height="213.333" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <AnimatedRect
                    animatedProps={translateYAnimatedProps2}
                    x="170.667" y="597.333" width="682.667" height="213.333" rx="1" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
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