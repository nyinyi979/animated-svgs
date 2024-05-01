import React from "react";
import { Svg, Path, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LockAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        cScale: 1,
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {cScale:0,scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({cScale:1,scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({cScale:1,scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {cScale:1,scale:1,strokeDasharray:1000,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const ellipseAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.cScale}]
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
                <Path d="M170.667 388C170.667 386.114 170.667 385.172 171.252 384.586C171.838 384 172.781 384 174.667 384H849.333C851.219 384 852.162 384 852.747 384.586C853.333 385.172 853.333 386.114 853.333 388V890C853.333 892.828 853.333 894.243 852.455 895.121C851.576 896 850.162 896 847.333 896H176.667C173.838 896 172.424 896 171.545 895.121C170.667 894.243 170.667 892.828 170.667 890V388Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M682.667 341.333V138C682.667 133.286 682.667 130.929 681.202 129.464C679.738 128 677.381 128 672.667 128H351.333C346.619 128 344.262 128 342.798 129.464C341.333 130.929 341.333 133.286 341.333 138V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedEllipse 
                    animatedProps={ellipseAnimatedProps}
                    originX="512" originY="650"
                    cx="512" cy="640" rx="85.3333" ry="85.3333" fill="black"/>
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