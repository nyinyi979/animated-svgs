import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Archive0Animate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
    });
    //translateY: [0,50,-20,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:50}),
            withTiming({scale:1.1,translateY:-20}),
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
                <Path d="M255.274 299.15C255.544 298.971 255.679 298.881 255.825 298.817C255.954 298.761 256.09 298.719 256.229 298.695C256.386 298.667 256.548 298.667 256.872 298.667H767.128C767.452 298.667 767.614 298.667 767.771 298.695C767.91 298.719 768.046 298.761 768.175 298.817C768.321 298.881 768.456 298.971 768.726 299.15L894.718 383.145C895.186 383.458 895.421 383.614 895.591 383.82C895.741 384.003 895.854 384.214 895.922 384.44C896 384.696 896 384.978 896 385.541V722.453C896 723.461 896 723.966 895.804 724.351C895.631 724.689 895.356 724.965 895.017 725.137C894.632 725.333 894.128 725.333 893.12 725.333H130.88C129.872 725.333 129.368 725.333 128.983 725.137C128.644 724.965 128.369 724.689 128.196 724.351C128 723.966 128 723.461 128 722.453V385.541C128 384.978 128 384.696 128.078 384.44C128.146 384.214 128.259 384.003 128.409 383.82C128.579 383.614 128.814 383.458 129.282 383.145L255.274 299.15Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M874.667 469.333H726.569C725.968 469.333 725.667 469.333 725.426 469.483C725.184 469.632 725.05 469.901 724.781 470.439L683.219 553.561C682.951 554.099 682.816 554.368 682.574 554.517C682.333 554.667 682.032 554.667 681.431 554.667H342.569C341.968 554.667 341.667 554.667 341.426 554.517C341.184 554.368 341.05 554.099 340.781 553.561L299.219 470.439C298.951 469.901 298.816 469.632 298.574 469.483C298.333 469.333 298.032 469.333 297.431 469.333H128" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
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