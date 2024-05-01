import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function ReduceAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1},
            {easing:Easing.bounce,duration:1000}
        )
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
                <Path d="M640 640V630H630V640H640ZM888.929 903.071C892.834 906.976 899.166 906.976 903.071 903.071C906.976 899.166 906.976 892.834 903.071 888.929L888.929 903.071ZM640 384H630V394H640V384ZM903.071 135.071C906.976 131.166 906.976 124.834 903.071 120.929C899.166 117.024 892.834 117.024 888.929 120.929L903.071 135.071ZM384 640H394V630H384V640ZM120.929 888.929C117.024 892.834 117.024 899.166 120.929 903.071C124.834 906.976 131.166 906.976 135.071 903.071L120.929 888.929ZM384 384V394H394V384H384ZM135.071 120.929C131.166 117.024 124.834 117.024 120.929 120.929C117.024 124.834 117.024 131.166 120.929 135.071L135.071 120.929ZM650 853.333V640H630V853.333H650ZM640 650H853.333V630H640V650ZM632.929 647.071L888.929 903.071L903.071 888.929L647.071 632.929L632.929 647.071ZM630 170.667V384H650V170.667H630ZM640 394H853.333V374H640V394ZM647.071 391.071L903.071 135.071L888.929 120.929L632.929 376.929L647.071 391.071ZM394 853.333V640H374V853.333H394ZM384 630H170.667V650H384V630ZM376.929 632.929L120.929 888.929L135.071 903.071L391.071 647.071L376.929 632.929ZM374 170.667V384H394V170.667H374ZM384 374H170.667V394H384V374ZM391.071 376.929L135.071 120.929L120.929 135.071L376.929 391.071L391.071 376.929Z" fill="black"/>
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