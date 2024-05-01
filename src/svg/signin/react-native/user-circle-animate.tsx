import React from "react";
import { Svg, Path, Ellipse } from "react-native-svg";
import { StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function UserCircleAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotateX: 0
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,rotateX:20}),
            withTiming({scale:1.1,rotateX:0})
        )
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1.1,rotateX:0},
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
                <Path d="M841.703 872.409C822.256 817.975 779.403 769.874 719.791 735.568C660.179 701.262 587.14 682.667 512 682.667C436.861 682.666 363.822 701.262 304.21 735.568C244.598 769.874 201.745 817.975 182.298 872.409" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Ellipse cx="512" cy="341.333" rx="170.667" ry="170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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