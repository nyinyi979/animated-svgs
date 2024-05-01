import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function NoteAnimate(){
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
                <Path d="M554.667 597.333H262.939C259.63 597.333 257.976 597.333 256.849 598.312C255.721 599.29 255.487 600.927 255.019 604.202L214.815 885.631C214.134 890.393 213.794 892.774 215.181 894.185C216.567 895.596 218.954 895.297 223.727 894.701L547.659 854.209C550.996 853.792 552.664 853.584 553.666 852.449C554.667 851.315 554.667 849.634 554.667 846.271V174.055C554.667 172.437 554.667 171.628 555.141 171.068C555.615 170.509 556.413 170.376 558.009 170.11L810.366 128.05C810.502 128.028 810.57 128.016 810.606 128.056C810.643 128.096 810.626 128.162 810.593 128.296L768.031 298.544C768.016 298.604 768.008 298.633 767.988 298.653C767.967 298.673 767.936 298.679 767.876 298.691L554.667 341.333" stroke="black" strokeWidth="20"/>
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