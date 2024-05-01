import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function BookOpenAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  2000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:2000,strokeDashoffset:2000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:2000,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:2000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,strokeDasharray:2000,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
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
                    d="M512 853.333V176.667C512 173.838 512 172.424 511.121 171.545C510.243 170.667 508.828 170.667 506 170.667H130C129.057 170.667 128.586 170.667 128.293 170.959C128 171.252 128 171.724 128 172.667V723.333C128 724.276 128 724.747 128.293 725.04C128.586 725.333 129.057 725.333 130 725.333H506C508.828 725.333 510.243 725.333 511.121 726.212C512 727.09 512 728.505 512 731.333V853.333Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 853.333V176.667C512 173.838 512 172.424 512.879 171.545C513.757 170.667 515.172 170.667 518 170.667H894C894.943 170.667 895.414 170.667 895.707 170.959C896 171.252 896 171.724 896 172.667V723.333C896 724.276 896 724.747 895.707 725.04C895.414 725.333 894.943 725.333 894 725.333H518C515.172 725.333 513.757 725.333 512.879 726.212C512 727.09 512 728.505 512 731.333V853.333Z" stroke="black" strokeWidth="20"/>
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