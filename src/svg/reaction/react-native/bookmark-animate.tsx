import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function BookmarkAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotateX: 0
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,rotateX:-10}),
            withTiming({scale:1.1,rotateX:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,rotateX:0},
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
            transform: `rotate(${animationValue.value.rotateX},0,0)`
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
                    animatedProps={pathAnimatedProps}
                    originX="512" originY="512"
                    d="M170.667 384C170.667 263.32 170.667 202.981 208.157 165.49C245.647 128 305.987 128 426.667 128H597.333C718.013 128 778.353 128 815.843 165.49C853.333 202.981 853.333 263.32 853.333 384V675.311C853.333 789.798 853.333 847.042 817.31 864.55C781.287 882.059 736.275 846.693 646.252 775.96L617.442 753.323C566.823 713.551 541.514 693.665 512 693.665C482.486 693.665 457.177 713.551 406.558 753.323L377.748 775.96C287.725 846.693 242.713 882.059 206.69 864.55C170.667 847.042 170.667 789.798 170.667 675.311V384Z" stroke="black" strokeWidth="20"/>
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