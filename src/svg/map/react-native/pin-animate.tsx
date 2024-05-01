import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function PinAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
        translateY: 0
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1000,strokeDashoffset:1000,translateY:0}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:1,translateY:-80}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0,translateY:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1,translateY:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const strokePathAnimatedProps = useAnimatedProps(()=>{
        return{
            strokeDashoffset: animationValue.value.strokeDashoffset,
            strokeDasharray: animationValue.value.strokeDasharray
        }
    })
    const translatePathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY:animationValue.value.translateY}]
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
                <AnimatedPath
                    animatedProps={translatePathAnimatedProps}
                    d="M512.196 767.912L508.062 758.806L508.061 758.806L512.196 767.912ZM511.804 767.912L515.939 758.806L515.938 758.806L511.804 767.912ZM800.667 384C800.667 503.115 730.649 595.608 658.057 659.442C585.579 723.175 511.972 757.031 508.062 758.806L516.33 777.017C521.031 774.882 596.659 740.065 671.264 674.461C745.754 608.958 820.667 511.449 820.667 384H800.667ZM512 95.3333C671.426 95.3333 800.667 224.574 800.667 384H820.667C820.667 213.528 682.472 75.3333 512 75.3333V95.3333ZM223.333 384C223.333 224.574 352.574 95.3333 512 95.3333V75.3333C341.528 75.3333 203.333 213.528 203.333 384H223.333ZM515.938 758.806C512.028 757.031 438.421 723.175 365.943 659.442C293.351 595.608 223.333 503.115 223.333 384H203.333C203.333 511.449 278.246 608.958 352.736 674.461C427.341 740.065 502.969 774.882 507.67 777.017L515.938 758.806ZM512 758C513.566 758 514.79 758.369 515.499 758.636C515.835 758.763 516.095 758.882 516.237 758.949C516.38 759.017 516.488 759.073 516.515 759.086C516.614 759.137 516.288 758.965 515.939 758.806L507.67 777.017C507.45 776.917 507.206 776.789 507.362 776.869C507.366 776.871 507.839 777.123 508.449 777.353C509.177 777.627 510.417 778 512 778V758ZM508.061 758.806C507.712 758.965 507.387 759.137 507.485 759.086C507.512 759.073 507.62 759.017 507.763 758.949C507.905 758.882 508.165 758.763 508.501 758.636C509.21 758.369 510.434 758 512 758V778C513.583 778 514.823 777.627 515.551 777.353C516.161 777.123 516.634 776.871 516.638 776.869C516.794 776.789 516.55 776.917 516.331 777.017L508.061 758.806ZM630 384C630 449.17 577.17 502 512 502V522C588.215 522 650 460.215 650 384H630ZM512 266C577.17 266 630 318.83 630 384H650C650 307.785 588.215 246 512 246V266ZM394 384C394 318.83 446.83 266 512 266V246C435.785 246 374 307.785 374 384H394ZM512 502C446.83 502 394 449.17 394 384H374C374 460.215 435.785 522 512 522V502Z" fill="black"/>
                <AnimatedPath
                    animatedProps={strokePathAnimatedProps}
                    d="M844.554 746.667C878.257 766.125 896 788.198 896 810.667C896 833.135 878.257 855.208 844.554 874.667C810.851 894.125 762.375 910.284 704 921.518C645.625 932.752 579.406 938.667 512 938.667C444.594 938.667 378.375 932.752 320 921.518C261.625 910.284 213.149 894.125 179.446 874.667C145.743 855.208 128 833.135 128 810.667C128 788.198 145.743 766.125 179.446 746.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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