import React from "react";
import { Svg, Rect } from "react-native-svg";
import { StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function StopAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        rotateX: 0,
        scale: 1,
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({rotateX:20,scale:1.1}),
            withTiming({rotateX:0,scale:1.1})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {rotateX:0,scale:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const viewAnimatedStyle = useAnimatedStyle(()=>{
        return{
            transform: [{rotateX:`${animationValue.value.rotateX}deg`}]
        }
    })
    return(
        <Animated.View 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            style={[styles.container,viewAnimatedStyle]}
        >
            <AnimatedSvg 
                animatedProps={svgAnimatedProps}
                style={styles.svg}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >   
                <Rect x="256" y="213.333" width="170.667" height="597.333" rx="1" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Rect x="597.333" y="213.333" width="170.667" height="597.333" rx="1" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </AnimatedSvg>
        </Animated.View>
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