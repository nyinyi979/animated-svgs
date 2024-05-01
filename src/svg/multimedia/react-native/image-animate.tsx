import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function ImageAnimate(){
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
        rotate: 0,
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateY:-50,rotate:-5})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateY:0,rotate:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const circleAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY:animationValue.value.translateY}],
            rotation: animationValue.value.rotate
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
                <Path fillRule="evenodd" clipRule="evenodd" d="M86.5049 86.5049C85.3334 87.6765 85.3334 89.5621 85.3334 93.3333V930.667C85.3334 934.438 85.3334 936.324 86.5049 937.495C87.6765 938.667 89.5621 938.667 93.3334 938.667H930.667C934.438 938.667 936.324 938.667 937.495 937.495C938.667 936.324 938.667 934.438 938.667 930.667V93.3333C938.667 89.5621 938.667 87.6765 937.495 86.5049C936.324 85.3333 934.438 85.3333 930.667 85.3333H917.333V725.333H856.647C855.012 725.333 854.195 725.333 853.46 725.029C852.724 724.724 852.146 724.146 850.99 722.99L685.495 557.495C684.162 556.162 683.495 555.495 682.667 555.495C681.838 555.495 681.172 556.162 679.838 557.495L514.089 723.245C513.142 724.191 512.669 724.664 512.148 724.564C511.627 724.463 511.364 723.848 510.836 722.618L386.327 432.097C385.273 429.637 384.746 428.406 383.704 428.206C382.662 428.005 381.715 428.952 379.822 430.844L149.333 661.333V85.3333H93.3334C89.5621 85.3333 87.6765 85.3333 86.5049 86.5049Z" fill="black"/>
                <Path d="M93.3334 86.3333H930.667C932.581 86.3333 933.915 86.3355 934.923 86.4709C935.901 86.6024 936.419 86.843 936.788 87.212C937.157 87.581 937.398 88.0991 937.529 89.0775C937.665 90.0846 937.667 91.4195 937.667 93.3333V930.667C937.667 932.581 937.665 933.915 937.529 934.923C937.398 935.901 937.157 936.419 936.788 936.788C936.419 937.157 935.901 937.398 934.923 937.529C933.915 937.665 932.581 937.667 930.667 937.667H93.3334C91.4195 937.667 90.0847 937.665 89.0775 937.529C88.0992 937.398 87.5811 937.157 87.2121 936.788C86.843 936.419 86.6024 935.901 86.4709 934.923C86.3355 933.915 86.3334 932.581 86.3334 930.667V93.3333C86.3334 91.4194 86.3355 90.0846 86.4709 89.0775C86.6024 88.0991 86.843 87.581 87.2121 87.212C87.5811 86.843 88.0992 86.6024 89.0775 86.4709C90.0847 86.3355 91.4195 86.3333 93.3334 86.3333Z" stroke="black" strokeWidth="20"/>
                <AnimatedCircle 
                    animatedProps={circleAnimatedProps}
                    cx="640" cy="384" r="85.3333" fill="black"/>
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