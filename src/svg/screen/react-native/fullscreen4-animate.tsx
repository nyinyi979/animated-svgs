import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function FullScreen4Animate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: [0,0],
        translateY: [0,0]
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateX:[30,-30],translateY:[40,-40]})

    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateX:[0,0],translateY:[0,0]},
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
            translateY: animationValue.value.translateY[0]
        }
    })
    const path2AnimatedProps = useAnimatedProps(()=>{
        return{
            translateX: animationValue.value.translateX[0],
            translateY: animationValue.value.translateY[1]        
        }
    })
    const path3AnimatedProps = useAnimatedProps(()=>{
        return{
            translateX: animationValue.value.translateX[1],
            translateY: animationValue.value.translateY[0]  
        }
    })
    const path4AnimatedProps = useAnimatedProps(()=>{
        return{
            translateX: animationValue.value.translateX[1],
            translateY: animationValue.value.translateY[1]  
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
                    animatedProps={path1AnimatedProps}
                    d="M341.333 128H131C129.586 128 128.879 128 128.439 128.439C128 128.879 128 129.586 128 131V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath 
                    animatedProps={path2AnimatedProps}
                    d="M341.333 896H131C129.586 896 128.879 896 128.439 895.561C128 895.121 128 894.414 128 893V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath 
                    animatedProps={path3AnimatedProps}
                    d="M682.667 128H893C894.414 128 895.121 128 895.561 128.439C896 128.879 896 129.586 896 131V341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath 
                    animatedProps={path4AnimatedProps}
                    d="M682.667 896H893C894.414 896 895.121 896 895.561 895.561C896 895.121 896 894.414 896 893V682.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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