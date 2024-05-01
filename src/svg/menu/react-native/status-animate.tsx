import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function StatusAnimate(){
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0,
        translateY: 0,
    });

    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateX:20,translateY:30})
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateX:0,translateY:0})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const translateAnimatedProps = useAnimatedProps(()=>{
        return{
            translateY: animationValue.value.translateY,
            translateX: animationValue.value.translateX
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
                <Path fillRule="evenodd" clipRule="evenodd" d="M811.559 437.269C784.098 326.833 697.166 239.901 586.731 212.441C580.08 217.399 573.827 222.859 568.026 228.766C682.513 251.284 772.716 341.487 795.234 455.974C801.14 450.173 806.601 443.92 811.559 437.269ZM544.33 225.123C533.716 223.94 522.929 223.333 512 223.333C352.574 223.333 223.333 352.573 223.333 512C223.333 671.426 352.574 800.666 512 800.666C671.426 800.666 800.667 671.426 800.667 512C800.667 501.071 800.059 490.284 798.877 479.67C805.208 474.346 811.168 468.596 816.713 462.463C819.315 478.591 820.667 495.138 820.667 512C820.667 682.472 682.472 820.666 512 820.666C341.528 820.666 203.333 682.472 203.333 512C203.333 341.528 341.528 203.333 512 203.333C528.862 203.333 545.408 204.685 561.536 207.287C555.404 212.832 549.653 218.792 544.33 225.123Z" fill="black"/>
                <AnimatedCircle
                    animatedProps={translateAnimatedProps}
                    cx="682.667" cy="341.334" r="170.667" fill="black"/>
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