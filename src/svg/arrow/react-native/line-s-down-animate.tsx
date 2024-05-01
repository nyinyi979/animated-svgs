import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LineSDownAnimate(){
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <Path d="M640 384L640 172.667C640 171.724 640 171.252 640.293 170.96C640.586 170.667 641.057 170.667 642 170.667L851.333 170.667C852.276 170.667 852.748 170.667 853.04 170.96C853.333 171.252 853.333 171.724 853.333 172.667L853.333 382C853.333 382.943 853.333 383.414 853.04 383.707C852.748 384 852.276 384 851.333 384L640 384Z" stroke="black" strokeWidth="20"/>
                <Path d="M384 853.333L170.667 853.333L170.667 640" stroke="black" strokeWidth="20"/>
                <Path d="M170.667 853.333L640 384" stroke="black" strokeWidth="20"/>
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