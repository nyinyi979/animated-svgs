import React from "react";
import { Svg, Path, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function UserAddAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1},
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
                <Ellipse cx="512" cy="341.333" rx="170.667" ry="170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M743 738.136C737.104 734.245 731.027 730.497 724.778 726.901C663.511 691.642 588.723 672.667 512 672.667C435.277 672.666 360.489 691.642 299.221 726.901C237.96 762.157 193.273 811.964 172.88 869.044C171.022 874.245 173.732 879.968 178.933 881.826C184.134 883.684 189.856 880.974 191.714 875.773C210.216 823.985 251.235 777.592 309.197 744.235C367.154 710.882 438.445 692.666 512 692.667C584.642 692.667 655.075 710.432 712.637 743H743V738.136ZM793 808.472C810.498 829.268 823.774 851.95 832.285 875.773C834.144 880.974 839.866 883.684 845.067 881.826C850.268 879.968 852.978 874.245 851.12 869.044C841.376 841.771 826.086 816.158 806.091 793H793V808.472Z" fill="black"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M768 597.333L768 938.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M938.667 768L597.333 768" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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