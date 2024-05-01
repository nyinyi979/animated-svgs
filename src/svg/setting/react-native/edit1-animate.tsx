import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Edit1Animate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1700,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1700,strokeDashoffset:1700}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1700,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:1700,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1700,strokeDashoffset:1},
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
                    d="M203.834 807.433L213.536 809.858L203.834 807.433ZM203.834 807.433L246.164 638.112L246.167 638.1C246.187 638.021 246.278 637.651 246.39 637.285C246.545 636.782 246.824 635.988 247.331 635.091C247.838 634.195 248.376 633.548 248.728 633.157C248.984 632.872 249.254 632.604 249.312 632.546L249.321 632.537L249.321 632.537L631.515 250.343C631.526 250.332 631.541 250.317 631.561 250.297C631.78 250.075 632.517 249.328 633.322 248.714C634.43 247.869 636.728 246.414 640 246.414C643.273 246.414 645.57 247.868 646.678 248.714C647.233 249.137 647.755 249.623 648.098 249.957L648.104 249.962L648.149 250.007C648.279 250.135 648.379 250.236 648.44 250.297C648.459 250.317 648.474 250.332 648.485 250.343L648.485 250.343L773.657 375.515C773.668 375.526 773.683 375.541 773.703 375.56C773.924 375.779 774.672 376.516 775.286 377.322C776.132 378.43 777.586 380.727 777.586 384C777.586 387.273 776.132 389.57 775.286 390.678C774.672 391.483 773.925 392.22 773.703 392.439C773.684 392.459 773.668 392.474 773.657 392.485L391.463 774.679L391.453 774.689C391.394 774.748 391.127 775.018 390.843 775.273C390.452 775.624 389.805 776.162 388.909 776.669C388.013 777.176 387.218 777.455 386.716 777.61C386.35 777.722 385.98 777.813 385.901 777.833L385.888 777.836L216.999 820.058L216.997 820.059L216.567 820.166L216.563 820.167C216.513 820.18 216.292 820.236 216.066 820.286C215.855 820.332 215.34 820.443 214.695 820.506C213.553 820.618 209.666 820.808 206.429 817.571L206.429 817.571C203.192 814.333 203.382 810.445 203.494 809.303C203.557 808.658 203.668 808.142 203.715 807.932C203.762 807.722 203.813 807.518 203.831 807.447L203.834 807.433ZM213.5 810.5L213.5 810.5L213.5 810.5ZM213.5 810.5L213.499 810.501L213.5 810.5Z" stroke="black" strokeWidth="20"/>
                <Path d="M533.333 320L661.333 234.667L789.333 362.667L704 490.667L533.333 320Z" fill="black"/>
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