import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Flag3Animate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  2300,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:2300,strokeDashoffset:2300}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:2300,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:2300,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:2300,strokeDashoffset:1},
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M213.333 554.667V128.5C213.333 128.264 213.333 128.146 213.407 128.073C213.48 128 213.598 128 213.833 128H426.262C426.462 128 426.562 128 426.652 128.036C426.742 128.073 426.814 128.142 426.957 128.281L514.696 213.052C514.839 213.191 514.911 213.26 515.001 213.297C515.092 213.333 515.191 213.333 515.391 213.333H819.503C819.746 213.333 819.867 213.333 819.91 213.412C819.953 213.49 819.887 213.592 819.756 213.796L682.841 426.396C682.756 426.527 682.714 426.593 682.714 426.667C682.714 426.74 682.756 426.806 682.841 426.937L819.756 639.538C819.887 639.742 819.953 639.844 819.91 639.922C819.867 640 819.746 640 819.503 640H515.391C515.191 640 515.092 640 515.001 639.964C514.911 639.927 514.839 639.858 514.696 639.719L426.957 554.948C426.814 554.809 426.742 554.74 426.652 554.703C426.562 554.667 426.462 554.667 426.262 554.667H213.333ZM213.333 554.667V810.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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