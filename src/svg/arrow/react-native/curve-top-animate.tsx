import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CurveTopAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
    });
    //translateY: [0,-40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:-40}),
            withTiming({scale:1.1,translateY:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateY:0})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY}]
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
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M341.333 170.667L348.404 163.595L341.333 156.524L334.262 163.595L341.333 170.667ZM810.667 671.333L800.667 671.333L810.667 671.333ZM820.667 384C820.667 378.477 816.19 374 810.667 374C805.144 374 800.667 378.477 800.667 384L820.667 384ZM561.738 376.929L348.404 163.595L334.262 177.738L547.596 391.071L561.738 376.929ZM334.262 163.595L120.929 376.929L135.071 391.071L348.404 177.738L334.262 163.595ZM331.333 170.667L331.333 671.333L351.333 671.333L351.333 170.667L331.333 170.667ZM523.333 863.333L628.667 863.333L628.667 843.333L523.333 843.333L523.333 863.333ZM820.667 671.333L820.667 384L800.667 384L800.667 671.333L820.667 671.333ZM628.667 863.333C734.705 863.333 820.667 777.372 820.667 671.333L800.667 671.333C800.667 766.326 723.66 843.333 628.667 843.333L628.667 863.333ZM331.333 671.333C331.333 777.372 417.295 863.333 523.333 863.333L523.333 843.333C428.34 843.333 351.333 766.326 351.333 671.333L331.333 671.333Z" fill="black"/>
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