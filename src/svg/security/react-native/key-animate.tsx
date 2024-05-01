import React from "react";
import { Svg, Path, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function KeyAnimate(){
    const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotate: 0,
        strokeDasharray:  1100,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        const rd = Math.random()*90;
        animationValue.value = {scale:1,rotate:0,strokeDasharray:1100,strokeDashoffset:1100}
        animationValue.value = withSequence(
            withTiming({scale:1.1,rotate:rd,strokeDasharray:1100,strokeDashoffset:1}),
            withTiming({scale:1.1,rotate:rd,strokeDasharray:1100,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,rotate:0,strokeDasharray:1100,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}],
            rotation: animationValue.value.rotate
        }
    })
    const ellipseAnimatedProps = useAnimatedProps(()=>{
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
                <AnimatedEllipse
                    animatedProps={ellipseAnimatedProps}
                    cx="384" cy="597.333" rx="170.667" ry="170.667" stroke="black" strokeWidth="20"/>
                <Path d="M512 469.333L661.333 320M725.333 256L661.333 320M661.333 320L768 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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