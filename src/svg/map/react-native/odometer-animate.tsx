import React from "react";
import { Svg, Path, Mask } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function OdometerAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotate: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,rotate:20})
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,rotate:0})
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
                <Mask id="path-1-inside-1_2488_40" fill="white">
                    <Path d="M962 697C962 637.905 950.36 579.389 927.746 524.792C905.131 470.196 871.984 420.588 830.198 378.802C788.412 337.016 738.804 303.869 684.208 281.254C629.611 258.64 571.095 247 512 247C452.905 247 394.389 258.64 339.792 281.254C285.196 303.869 235.588 337.016 193.802 378.802C152.016 420.588 118.869 470.196 96.2542 524.792C73.6396 579.389 62 637.905 62 697L512 697H962Z"/>
                </Mask>
                <Path d="M962 697C962 637.905 950.36 579.389 927.746 524.792C905.131 470.196 871.984 420.588 830.198 378.802C788.412 337.016 738.804 303.869 684.208 281.254C629.611 258.64 571.095 247 512 247C452.905 247 394.389 258.64 339.792 281.254C285.196 303.869 235.588 337.016 193.802 378.802C152.016 420.588 118.869 470.196 96.2542 524.792C73.6396 579.389 62 637.905 62 697L512 697H962Z" stroke="black" strokeWidth="40" mask="url(#path-1-inside-1_2488_40)"/>
                <Mask id="path-2-inside-2_2488_40" fill="white">
                    <Path d="M662 697C662 677.302 658.12 657.796 650.582 639.597C643.044 621.399 631.995 604.863 618.066 590.934C604.137 577.005 587.601 565.956 569.403 558.418C551.204 550.88 531.698 547 512 547C492.302 547 472.796 550.88 454.597 558.418C436.399 565.956 419.863 577.005 405.934 590.934C392.005 604.863 380.956 621.399 373.418 639.597C365.88 657.796 362 677.302 362 697L512 697H662Z"/>
                </Mask>
                <Path d="M662 697C662 677.302 658.12 657.796 650.582 639.597C643.044 621.399 631.995 604.863 618.066 590.934C604.137 577.005 587.601 565.956 569.403 558.418C551.204 550.88 531.698 547 512 547C492.302 547 472.796 550.88 454.597 558.418C436.399 565.956 419.863 577.005 405.934 590.934C392.005 604.863 380.956 621.399 373.418 639.597C365.88 657.796 362 677.302 362 697L512 697H662Z" stroke="black" strokeWidth="40" mask="url(#path-2-inside-2_2488_40)"/>
                <Path 
                    d="M757.292 485.843C761.071 481.815 760.87 475.487 756.843 471.708C752.815 467.929 746.487 468.13 742.708 472.157L757.292 485.843ZM629.292 622.253L757.292 485.843L742.708 472.157L614.708 608.567L629.292 622.253Z" fill="black"/>
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