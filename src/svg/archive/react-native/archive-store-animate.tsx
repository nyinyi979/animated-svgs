import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ArchiveStoreAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    //translateY: [0,20,0],
    const animate = () =>{
        animationValue.value = {scale:1,translateY:0,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:20,strokeDasharray:1000,strokeDashoffset:0}),
            withTiming({scale:1.1,translateY:0,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateY:0,strokeDasharray:1000,strokeDashoffset:1})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathTranslateAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY}]
        }
    })
    const pathFillTranslateAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY}],
            strokeDashoffset: animationValue.value.strokeDashoffset,
            strokeDasharray: animationValue.value.strokeDasharray
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
                <Path d="M257.6 469.333H383.011C383.37 469.333 383.55 469.333 383.708 469.388C383.848 469.436 383.976 469.515 384.082 469.619C384.201 469.736 384.282 469.897 384.442 470.218L426.224 553.782L426.225 553.782C426.385 554.103 426.465 554.264 426.585 554.381C426.691 554.485 426.819 554.564 426.959 554.612C427.117 554.667 427.297 554.667 427.656 554.667H596.344C596.703 554.667 596.883 554.667 597.041 554.612C597.182 554.564 597.309 554.485 597.415 554.381C597.535 554.264 597.615 554.103 597.776 553.782L639.558 470.218L639.558 470.217C639.718 469.897 639.799 469.736 639.918 469.619C640.024 469.515 640.152 469.436 640.292 469.388C640.45 469.333 640.63 469.333 640.989 469.333H766.4C766.96 469.333 767.24 469.333 767.454 469.442C767.642 469.538 767.795 469.691 767.891 469.879C768 470.093 768 470.373 768 470.933V894.4C768 894.96 768 895.24 767.891 895.454C767.795 895.642 767.642 895.795 767.454 895.891C767.24 896 766.96 896 766.4 896H257.6H257.6C257.04 896 256.76 896 256.546 895.891C256.358 895.795 256.205 895.642 256.109 895.454C256 895.24 256 894.96 256 894.4V470.933C256 470.373 256 470.093 256.109 469.879C256.205 469.691 256.358 469.538 256.546 469.442C256.76 469.333 257.04 469.333 257.6 469.333Z" stroke="black" strokeWidth="20"/>
                <Path d="M595.733 682.667H428.267C427.707 682.667 427.427 682.667 427.213 682.775C427.024 682.871 426.871 683.024 426.776 683.213C426.667 683.426 426.667 683.706 426.667 684.267V766.4C426.667 766.96 426.667 767.24 426.776 767.454C426.871 767.642 427.024 767.795 427.213 767.891C427.427 768 427.707 768 428.267 768H595.733C596.293 768 596.573 768 596.787 767.891C596.975 767.795 597.128 767.642 597.224 767.454C597.333 767.24 597.333 766.96 597.333 766.4V684.267C597.333 683.706 597.333 683.426 597.224 683.213C597.128 683.024 596.975 682.871 596.787 682.775C596.573 682.667 596.293 682.667 595.733 682.667Z" fill="black"/>
                <Path d="M298.667 469.333H129.6C129.04 469.333 128.76 469.333 128.546 469.442C128.358 469.538 128.205 469.691 128.109 469.879C128 470.093 128 470.373 128 470.933V894.4C128 894.96 128 895.24 128.109 895.454C128.205 895.642 128.358 895.795 128.546 895.891C128.76 896 129.04 896 129.6 896H894.4C894.96 896 895.24 896 895.454 895.891C895.642 895.795 895.795 895.642 895.891 895.454C896 895.24 896 894.96 896 894.4V470.933C896 470.373 896 470.093 895.891 469.879C895.795 469.691 895.642 469.538 895.454 469.442C895.24 469.333 894.96 469.333 894.4 469.333H725.333" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathTranslateAnimatedProps}
                    d="M725.333 469.333V235.329C725.333 235.085 725.333 234.963 725.306 234.847C725.281 234.745 725.241 234.648 725.186 234.558C725.124 234.457 725.038 234.371 724.865 234.198L619.135 128.469C618.962 128.296 618.876 128.209 618.775 128.147C618.685 128.093 618.588 128.052 618.486 128.028C618.371 128 618.248 128 618.004 128H301.067C300.227 128 299.807 128 299.486 128.163C299.203 128.307 298.974 128.537 298.83 128.819C298.667 129.14 298.667 129.56 298.667 130.4V469.333" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathFillTranslateAnimatedProps}
                    d="M554.667 128L554.667 297.067C554.667 297.627 554.667 297.907 554.776 298.121C554.872 298.309 555.025 298.462 555.213 298.558C555.427 298.667 555.707 298.667 556.267 298.667L725.333 298.667" stroke="black" strokeWidth="20"/>
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
