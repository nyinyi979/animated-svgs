import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ConsoleAnimate(){
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
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,strokeDasharray:1000,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
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
                <Rect x="554.667" y="597.333" width="85.3333" height="85.3334" rx="1" fill="black"/>
                <Rect x="298.667" y="469.333" width="85.3333" height="256" rx="1" fill="black"/>
                <Rect x="469.333" y="554.667" width="85.3334" height="256" rx="1" transform="rotate(90 469.333 554.667)" fill="black"/>
                <Rect x="682.667" y="512" width="85.3333" height="85.3333" rx="1" fill="black"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M597.333 341.333V259.123C597.333 257.623 597.333 256.873 596.91 256.331C596.486 255.788 595.759 255.606 594.303 255.243L429.697 214.091C428.241 213.727 427.514 213.545 427.09 213.003C426.667 212.46 426.667 211.71 426.667 210.21V85.3334" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M128 597.333C128 488.157 128 433.569 154.451 395.964C161.26 386.283 169.204 377.617 178.079 370.189C212.55 341.333 262.589 341.333 362.667 341.333H661.333C761.411 341.333 811.45 341.333 845.921 370.189C854.796 377.617 862.74 386.283 869.549 395.964C896 433.569 896 488.157 896 597.333C896 706.509 896 761.097 869.549 798.702C862.74 808.383 854.796 817.049 845.921 824.478C811.45 853.333 761.411 853.333 661.333 853.333H362.667C262.589 853.333 212.55 853.333 178.079 824.478C169.204 817.049 161.26 808.383 154.451 798.702C128 761.097 128 706.509 128 597.333Z" stroke="black" strokeWidth="20"/>
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