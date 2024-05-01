import React from "react";
import { Svg, Path, Circle, Line } from "react-native-svg";
import { StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Globe1Animate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotate: 0
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,rotate:20}),
            withTiming({scale:1.1,rotate:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,rotate:0},{easing:Easing.bounce,duration:1000})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}],
        }
    })
    const viewAnimatedStyles = useAnimatedStyle(()=>{
        return{
            transform: [{rotate:`${animationValue.value.rotate}deg`}]
        }
    })
    return(
        <Animated.View 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            style={[styles.container,viewAnimatedStyles]}
        >
            <AnimatedSvg 
                animatedProps={svgAnimatedProps}
                style={styles.svg}
                viewBox="0 0 1024 1024" fill="none"
            >
                <Circle cx="512" cy="512" r="390" stroke="black" strokeWidth="20"/>
                <Line x1="509" y1="112" x2="509" y2="899" stroke="black" strokeWidth="20"/>
                <Line x1="898" y1="516" x2="127" y2="516" stroke="black" strokeWidth="20"/>
                <Path d="M768.333 254.333C768.333 285.324 742.95 316.073 695.756 339.67C649.16 362.968 584.089 377.667 511.667 377.667C439.245 377.667 374.173 362.968 327.577 339.67C280.383 316.073 255 285.324 255 254.333C255 223.343 280.383 192.594 327.577 168.997C374.173 145.699 439.245 131 511.667 131C584.089 131 649.16 145.699 695.756 168.997C742.95 192.594 768.333 223.343 768.333 254.333Z" stroke="black" strokeWidth="20"/>
                <Path d="M768.333 778.333C768.333 809.324 742.95 840.073 695.756 863.67C649.16 886.968 584.089 901.667 511.667 901.667C439.245 901.667 374.173 886.968 327.577 863.67C280.383 840.073 255 809.324 255 778.333C255 747.343 280.383 716.594 327.577 692.997C374.173 669.699 439.245 655 511.667 655C584.089 655 649.16 669.699 695.756 692.997C742.95 716.594 768.333 747.343 768.333 778.333Z" stroke="black" strokeWidth="20"/>
            </AnimatedSvg>
        </Animated.View>
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