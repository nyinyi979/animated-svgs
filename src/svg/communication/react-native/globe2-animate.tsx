import React from "react";
import { Svg, Path, Line, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Globe2Animate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotate: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,rotate:Math.random()*100})
        
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,rotate:0},{easing:Easing.bounce,duration:1000})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}],
        }
    })
    const viewAnimatedStyles = useAnimatedStyle(()=>{
        return{
            transform: [{rotate:`${animationValue.value.rotate}deg`}]
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
                <Circle cx="512" cy="512" r="390" stroke="black" strokeWidth="20"/>
                <Line x1="509" y1="112" x2="509" y2="899" stroke="black" strokeWidth="20"/>
                <Line x1="898" y1="516" x2="127" y2="516" stroke="black" strokeWidth="20"/>
                <Path d="M499 136C517.423 136 535.911 145.034 553.721 163.345C571.562 181.688 588.089 208.752 602.182 243.008C630.347 311.473 648 406.747 648 512.5C648 618.253 630.347 713.527 602.182 781.992C588.089 816.248 571.562 843.312 553.721 861.655C535.911 879.966 517.423 889 499 889C480.577 889 462.089 879.966 444.279 861.655C426.438 843.312 409.911 816.248 395.818 781.992C367.653 713.527 350 618.253 350 512.5C350 406.747 367.653 311.473 395.818 243.008C409.911 208.752 426.438 181.688 444.279 163.345C462.089 145.034 480.577 136 499 136Z" stroke="black" strokeWidth="20"/>
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