import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Message2Animate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotateX: 0
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,rotateX:20}),
            withTiming({scale:1.1,rotateX:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,rotateX:0},{easing:Easing.bounce,duration:1000})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const viewAnimatedStyles = useAnimatedStyle(()=>{
        return{
            transform: [{rotateX:`${animationValue.value.rotateX}deg`}]
        }
    })
    return(
        <Animated.View 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            style={[styles.container,viewAnimatedStyles]}
        >
            <AnimatedSvg 
                animatedProps={svgAnimatedProps}
                style={styles.svg}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >
                <Rect x="170.667" y="256" width="682.667" height="512" rx="2" stroke="black" strokeWidth="20"/>
                <Path d="M511.105 554.219L170.667 384V766C170.667 767.105 171.562 768 172.667 768H851.333C852.438 768 853.333 767.105 853.333 766V384L512.894 554.219C512.331 554.501 511.668 554.501 511.105 554.219Z" fill="black"/>
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