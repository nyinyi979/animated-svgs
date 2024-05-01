import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function SendHorizontalAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotate: 0
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,rotate:Math.random()*40}),
            withTiming({scale:1.1,rotate:Math.random()*30})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,rotate:0},{easing:Easing.bounce,duration:1000})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}],
        }
    })
    const viewAnimatedStyles = useAnimatedStyle(()=>{
        return{
            transform: [{rotate:`${animationValue.value.rotate}deg`}]
        }
    })
    return(
        <Animated.View 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            style={[styles.container,viewAnimatedStyles]}
        >
            <AnimatedSvg 
                animatedProps={svgAnimatedProps}
                style={styles.svg}
                viewBox="0 0 1024 1024" fill="none"
            >
                <Path d="M173.665 218.58L340.766 511.008C341.043 511.492 341.181 511.734 341.181 512C341.181 512.266 341.043 512.508 340.766 512.992L340.766 512.992L173.665 805.42C172.426 807.587 171.807 808.671 172.29 809.208C172.773 809.745 173.916 809.245 176.202 808.245L176.203 808.245L849.145 513.832C850.94 513.047 851.838 512.654 851.838 512C851.838 511.346 850.94 510.953 849.145 510.168L176.203 215.755C173.916 214.755 172.773 214.255 172.29 214.792C171.807 215.33 172.426 216.413 173.665 218.58Z" stroke="black" strokeWidth="20"/>
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