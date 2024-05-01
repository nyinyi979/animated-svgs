import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function AlarmClock2Animate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: [0],
        translateY: 0,
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateX:[-40,40],translateY:0})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateX:[0,0],translateY:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const path1AnimatedProps = useAnimatedProps(()=>{
        return{
            translateX: animationValue.value.translateX[0],
            translateY: animationValue.value.translateY,
        }
    })
    const path2AnimatedProps = useAnimatedProps(()=>{
        return{
            translateX: animationValue.value.translateX[1],
            translateY: animationValue.value.translateY,
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
                <Circle cx="512" cy="512" r="298.667" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={path1AnimatedProps}
                    d="M254.495 133.815C225.557 141.569 199.171 156.803 177.987 177.987C156.803 199.171 141.569 225.557 133.815 254.495" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={path2AnimatedProps}
                    d="M769.505 133.815C798.443 141.569 824.829 156.803 846.013 177.987C867.197 199.171 882.431 225.557 890.185 254.495" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M512 341.333V511.75C512 511.888 512.112 512 512.25 512H640" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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