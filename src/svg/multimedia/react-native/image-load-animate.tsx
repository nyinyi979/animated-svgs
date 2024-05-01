import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function ImageLoadAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
        translateX: 0,
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateY:-50,translateX:30})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateY:0,translateX:0},
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
            translateY: animationValue.value.translateY,
            translateX: animationValue.value.translateX
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
                <Path fillRule="evenodd" clipRule="evenodd" d="M938.541 89.1079L917.333 725.333H856.647C855.012 725.333 854.195 725.333 853.459 725.029C852.724 724.724 852.146 724.146 850.99 722.99L685.495 557.495C684.162 556.162 683.495 555.495 682.667 555.495C681.838 555.495 681.172 556.162 679.838 557.495L515.414 721.919C513.961 723.372 513.235 724.099 512.617 723.843C512 723.587 512 722.56 512 720.505V938.667H930.667C934.438 938.667 936.323 938.667 937.495 937.495C938.667 936.323 938.667 934.438 938.667 930.667V93.3333C938.667 91.5408 938.667 90.1742 938.541 89.1079ZM509.462 512C508.407 511.641 506.936 511.494 504.797 511.28L504.796 511.28L92.5373 470.054H92.5372C89.1136 469.711 87.4017 469.54 86.3676 468.397C85.3334 467.255 85.3334 465.534 85.3334 462.093V512H509.462Z" fill="black"/>
                <Path d="M93.3334 92.8333H930.667C930.841 92.8333 931.007 92.8334 931.167 92.8335C931.167 92.9926 931.167 93.159 931.167 93.3333V930.667C931.167 930.841 931.167 931.007 931.167 931.166C931.007 931.167 930.841 931.167 930.667 931.167H519.5V514C519.5 513.977 519.5 513.949 519.5 513.917C519.502 513.575 519.505 512.714 519.397 511.903C519.248 510.799 518.783 508.762 517.01 506.99C515.238 505.217 513.201 504.752 512.097 504.603C511.286 504.494 510.424 504.498 510.083 504.5C510.05 504.5 510.023 504.5 510 504.5H92.8334V93.3333C92.8334 93.159 92.8334 92.9926 92.8335 92.8335C92.9926 92.8334 93.159 92.8333 93.3334 92.8333ZM934.104 92.9203C934.104 92.9204 934.101 92.9198 934.093 92.9182C934.1 92.9194 934.104 92.9202 934.104 92.9203ZM92.9203 89.8958C92.9203 89.8959 92.9197 89.8998 92.9182 89.9074C92.9195 89.8995 92.9202 89.8957 92.9203 89.8958ZM89.9074 92.9182C89.8998 92.9197 89.8959 92.9203 89.8958 92.9203C89.8957 92.9202 89.8995 92.9195 89.9074 92.9182Z" stroke="black" strokeWidth="25"/>
                <Circle cx="682.667" cy="341.333" r="85.3333" fill="black"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M341.333 682.667V675.167H348.833V682.667H341.333ZM132.685 859.19C129.451 861.777 124.731 861.253 122.144 858.019C119.556 854.784 120.08 850.064 123.315 847.477L132.685 859.19ZM333.833 896V682.667H348.833V896H333.833ZM341.333 690.167H128V675.167H341.333V690.167ZM346.019 688.523L132.685 859.19L123.315 847.477L336.648 676.81L346.019 688.523Z" strokeWidth="20" fill="black"/>
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