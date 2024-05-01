import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LineSLeftArrowAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1}),
            withTiming({scale:1.1})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
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
                <Rect x="640" y="384" width="256" height="256" rx="2" transform="rotate(-90 640 384)" stroke="black" strokeWidth="20"/>
                <Path d="M256 896L128 725.333L256 554.667" stroke="black" strokeWidth="20"/>
                <Path d="M128 725.333H760C763.771 725.333 765.657 725.333 766.828 724.162C768 722.99 768 721.104 768 717.333V384" stroke="black" strokeWidth="20"/>
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