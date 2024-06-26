import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function SendRotatedAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotate: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,rotate:Math.random()*80})
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,rotate:0},{easing:Easing.bounce,duration:1000})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}],
            rotation: animationValue.value.rotate
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
                <Path fillRule="evenodd" clipRule="evenodd" d="M842.88 170.378C842.88 170.378 842.878 170.385 842.874 170.4C842.878 170.386 842.88 170.378 842.88 170.378ZM837.522 186.478L597.333 907.044L479.452 553.402C479.352 553.1 479.082 552.262 478.746 551.488C478.332 550.536 477.595 549.12 476.237 547.763C474.88 546.405 473.464 545.668 472.512 545.254C471.738 544.918 470.9 544.648 470.598 544.547L116.956 426.667L837.522 186.478ZM95.7972 419.524C95.7454 419.499 95.7589 419.502 95.8229 419.536C95.813 419.532 95.8045 419.527 95.7972 419.524ZM95.823 433.797C95.7589 433.832 95.7454 433.835 95.7972 433.809C95.8045 433.806 95.8131 433.802 95.823 433.797ZM590.203 928.177C590.183 928.214 590.173 928.234 590.174 928.234C590.174 928.235 590.18 928.224 590.19 928.203C590.194 928.195 590.198 928.187 590.203 928.177ZM604.464 928.177C604.498 928.241 604.501 928.254 604.476 928.203C604.472 928.195 604.468 928.187 604.464 928.177ZM849.704 161.52C850.997 161.29 855.696 160.636 859.53 164.47C863.364 168.304 862.71 173.003 862.48 174.295C862.259 175.538 861.813 176.858 861.608 177.465C861.588 177.525 861.57 177.578 861.555 177.624L610.615 930.445L610.477 930.86C609.821 932.83 609.045 935.164 608.175 936.952L608.158 936.986C607.591 938.155 604.585 944.342 597.333 944.342C590.081 944.342 587.076 938.155 586.508 936.986L586.491 936.952C585.621 935.164 584.845 932.83 584.19 930.86L584.052 930.445L461.427 562.572L93.5551 439.948C93.4189 439.903 93.2805 439.857 93.1402 439.81C91.17 439.155 88.8363 438.379 87.048 437.509L87.0135 437.492C85.8448 436.924 79.6577 433.919 79.6577 426.667C79.6577 419.414 85.8447 416.409 87.0135 415.841L87.048 415.825C88.8363 414.955 91.1701 414.178 93.1403 413.523C93.2805 413.477 93.4189 413.431 93.5551 413.385L846.376 162.445C846.422 162.43 846.475 162.412 846.535 162.391C847.143 162.186 848.462 161.741 849.704 161.52Z" fill="black"/>
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