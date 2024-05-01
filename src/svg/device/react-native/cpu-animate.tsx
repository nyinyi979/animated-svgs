import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CPUAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedRect = Animated.createAnimatedComponent(Rect);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1550,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1550,strokeDashoffset:1550}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1550,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:1550,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,strokeDasharray:1550,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M298.667 469.333C298.667 388.88 298.667 348.654 323.66 323.66C348.654 298.667 388.88 298.667 469.333 298.667H554.667C635.12 298.667 675.346 298.667 700.34 323.66C725.333 348.654 725.333 388.88 725.333 469.333V554.667C725.333 635.12 725.333 675.346 700.34 700.34C675.346 725.333 635.12 725.333 554.667 725.333H469.333C388.88 725.333 348.654 725.333 323.66 700.34C298.667 675.346 298.667 635.12 298.667 554.667V469.333Z" stroke="black" strokeWidth="20"/>
                <AnimatedRect
                    animatedProps={pathAnimatedProps}
                    x="426.667" y="426.667" width="170.667" height="170.667" rx="1" fill="black"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M426.667 298.667V170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M597.333 298.667V170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M725.333 426.667L853.333 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M725.333 597.333L853.333 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M426.667 853.333V725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M597.333 853.333V725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M170.667 426.667L298.667 426.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M170.667 597.333L298.667 597.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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