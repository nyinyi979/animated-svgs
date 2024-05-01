import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function VideoAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        rotateX: 0,
        scale: 1,
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({rotateX:20,scale:1.1}),
            withTiming({rotateX:0,scale:1.1})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {rotateX:0,scale:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const viewAnimatedStyle = useAnimatedStyle(()=>{
        return{
            transform: [{rotateX:`${animationValue.value.rotateX}deg`}]
        }
    })
    return(
        <Animated.View 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            style={[styles.container,viewAnimatedStyle]}
        >
            <AnimatedSvg 
                animatedProps={svgAnimatedProps}
                style={styles.svg}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >   
                <Path d="M766.211 511.106L343.07 299.535C342.272 299.136 341.333 299.716 341.333 300.608V723.392C341.333 724.284 342.272 724.864 343.07 724.465L766.211 512.895C766.948 512.526 766.948 511.474 766.211 511.106Z" stroke="black" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <Circle cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
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