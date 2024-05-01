import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function NFCAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        pScale: 1
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,pScale:0}
        animationValue.value = withTiming({scale:1.1,pScale:1})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,pScale:1},
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
            scale: animationValue.value.pScale
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
                <Path d="M213.333 341.333L426.667 682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    originX="700" originY="512"
                    d="M798.824 874.667C862.485 764.402 896 639.323 896 512C896 384.677 862.485 259.598 798.824 149.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    originX="600" originY="512"
                    d="M614.071 768C659.009 690.166 682.667 601.875 682.667 512C682.667 422.125 659.009 333.834 614.072 256" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M423.603 682.667C453.562 630.777 469.333 571.917 469.333 512C469.333 452.083 453.562 393.223 423.604 341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M216.397 682.667C186.438 630.777 170.667 571.917 170.667 512C170.667 452.083 186.438 393.223 216.396 341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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