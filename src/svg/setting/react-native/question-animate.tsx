import React from "react";
import { Svg, Path, Circle, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function QuestionAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        pScale: 1,
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {pScale:0,scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({pScale:1,scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({pScale:1,scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {pScale:1,scale:1,strokeDasharray:1000,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        )
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
    const ellipseAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.pScale}]
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
                <Circle cx="512" cy="512" r="384" stroke="black" strokeWidth="20"/>
                <AnimatedEllipse
                    animatedProps={ellipseAnimatedProps}
                    originX="512" originY="750"
                    cx="512" cy="768" rx="21.3333" ry="21.3333" fill="black" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 682.667V622.129C512 591.872 512 576.744 519.232 564.802C520.614 562.521 522.176 560.355 523.903 558.323C532.944 547.685 547.296 542.901 576 533.333V533.333C604.704 523.765 619.056 518.981 628.097 508.344C629.824 506.312 631.386 504.145 632.768 501.864C640 489.923 640 474.795 640 444.538V398.667C640 351.526 640 327.956 625.355 313.311C610.711 298.667 587.14 298.667 540 298.667H484C436.86 298.667 413.289 298.667 398.645 313.311C384 327.956 384 351.526 384 398.667V426.667" stroke="black" strokeWidth="20"/>
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