import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function ViewHideAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1},
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
                <Path fillRule="evenodd" clipRule="evenodd" d="M657.713 600.9C673.543 575.008 682.667 544.57 682.667 512C682.667 417.743 606.257 341.333 512 341.333C479.43 341.333 448.992 350.457 423.1 366.287L437.706 380.894C459.631 368.443 484.985 361.333 512 361.333C595.211 361.333 662.667 428.789 662.667 512C662.667 539.015 655.557 564.369 643.106 586.293L657.713 600.9ZM420.68 392.152C384.609 419.679 361.333 463.121 361.333 512C361.333 595.211 428.789 662.667 512 662.667C560.878 662.667 604.321 639.391 631.848 603.32L646.103 617.574C614.851 657.217 566.397 682.667 512 682.667C417.743 682.667 341.333 606.257 341.333 512C341.333 457.602 366.783 409.149 406.426 377.897L420.68 392.152Z" fill="black"/>
                <Path fillRule="evenodd" clipRule="evenodd" d="M743.607 686.798C757.291 676.271 770.262 665.394 782.439 654.497C852.075 592.174 897.348 527.7 903.552 518.674L903.561 518.662C903.637 518.554 904.149 517.827 904.56 517.029C905.168 515.85 905.792 514.14 905.792 512C905.792 509.86 905.168 508.15 904.56 506.971C904.149 506.173 903.637 505.446 903.561 505.338L903.552 505.326C897.348 496.3 852.075 431.826 782.439 369.504C713.056 307.408 617.879 246 512 246C453.49 246 398.247 264.753 348.82 292.012L363.569 306.761C409.345 282.297 459.546 266 512 266C610.414 266 700.898 323.367 769.101 384.407C829.609 438.559 871.313 494.463 883.806 512C871.313 529.537 829.609 585.441 769.101 639.593C756.57 650.808 743.287 661.899 729.341 672.533L743.607 686.798ZM727.383 698.859L713.045 684.521C654.414 726.077 585.413 758 512 758C413.586 758 323.102 700.633 254.899 639.593C194.391 585.441 152.687 529.537 140.194 512C152.687 494.463 194.391 438.559 254.899 384.407C281.901 360.241 312.396 336.65 345.492 316.968L330.92 302.395C297.966 322.45 267.904 345.927 241.561 369.503C171.925 431.826 126.652 496.3 120.448 505.326L120.439 505.338C120.363 505.446 119.851 506.173 119.44 506.971C118.832 508.15 118.208 509.86 118.208 512C118.208 514.14 118.832 515.85 119.44 517.029C119.851 517.827 120.364 518.555 120.439 518.662L120.448 518.674C126.652 527.7 171.925 592.174 241.561 654.496C310.944 716.592 406.121 778 512 778C592.097 778 666.069 742.857 727.383 698.859Z" fill="black"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M153.333 100.3334L896 850" stroke="black" strokeWidth="20"/>
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