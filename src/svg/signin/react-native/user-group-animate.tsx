import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function UserGroupAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        gScale: 1
    });
    
    const animate = () =>{
        animationValue.value = {scale:1.1,gScale:0};
        animationValue.value = withTiming({scale:1.1,gScale:1});
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,gScale:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathScaleAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.gScale}]
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
                <Path d="M672.667 341.333C672.667 430.067 600.734 502 512 502C423.266 502 351.333 430.067 351.333 341.333C351.333 252.6 423.266 180.667 512 180.667C600.734 180.667 672.667 252.6 672.667 341.333Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathScaleAnimatedProps}
                    d="M623.142 325C638.79 297.897 664.564 278.121 694.793 270.021C725.022 261.921 757.231 266.161 784.333 281.809C811.436 297.457 831.213 323.23 839.313 353.459C847.413 383.689 843.172 415.897 827.524 443C811.877 470.103 786.103 489.879 755.874 497.979C725.645 506.079 693.436 501.839 666.334 486.191C639.231 470.543 619.454 444.77 611.354 414.541C603.254 384.311 607.495 352.103 623.142 325L623.142 325Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathScaleAnimatedProps}
                    d="M196.476 325C212.123 297.897 237.897 278.121 268.126 270.021C298.355 261.921 330.564 266.161 357.666 281.809C384.769 297.457 404.546 323.23 412.646 353.459C420.746 383.689 416.505 415.897 400.857 443C385.21 470.103 359.436 489.879 329.207 497.979C298.978 506.079 266.769 501.839 239.667 486.191C212.564 470.543 192.787 444.77 184.687 414.541C176.587 384.311 180.828 352.103 196.476 325L196.476 325Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathScaleAnimatedProps}
                    d="M720.283 768L710.479 769.975L712.096 778H720.283V768ZM895.86 766.991L885.964 768.432L885.964 768.433L895.86 766.991ZM630.648 627.65L624.6 619.686L613.034 628.471L625.367 636.141L630.648 627.65ZM894.867 758H720.283V778H894.867V758ZM885.964 768.433C885.54 765.521 886.561 762.572 888.666 760.534C890.597 758.664 892.942 758 894.867 758V778C897.394 778 900.278 777.129 902.577 774.904C905.05 772.509 906.266 769.055 905.755 765.549L885.964 768.433ZM725.334 607.333C792.153 607.333 831.434 643.461 854.745 682.068C878.279 721.043 885.015 761.911 885.964 768.432L905.756 765.549C904.661 758.036 897.435 714.076 871.866 671.73C846.075 629.017 801.115 587.333 725.334 587.333V607.333ZM636.697 635.613C658.693 618.906 687.448 607.333 725.334 607.333V587.333C683.009 587.333 650.019 600.379 624.6 619.686L636.697 635.613ZM625.367 636.141C680.963 670.718 702.332 729.519 710.479 769.975L730.086 766.026C721.501 723.399 698.419 658.022 635.93 619.158L625.367 636.141Z" fill="black"/>
                <AnimatedPath
                    animatedProps={pathScaleAnimatedProps}
                    d="M393.352 627.649L398.633 636.141L410.966 628.47L399.4 619.686L393.352 627.649ZM128.14 766.991L138.036 768.432L138.036 768.432L128.14 766.991ZM303.717 768V778H311.903L313.52 769.975L303.717 768ZM298.667 607.333C336.553 607.333 365.308 618.906 387.303 635.612L399.4 619.686C373.982 600.379 340.991 587.333 298.667 587.333V607.333ZM138.036 768.432C138.985 761.911 145.722 721.043 169.256 682.068C192.567 643.461 231.848 607.333 298.667 607.333V587.333C222.886 587.333 177.926 629.017 152.135 671.73C126.566 714.076 119.339 758.036 118.244 765.549L138.036 768.432ZM129.133 758C131.059 758 133.403 758.664 135.334 760.534C137.439 762.572 138.46 765.521 138.036 768.432L118.245 765.549C117.734 769.056 118.95 772.509 121.423 774.904C123.722 777.129 126.606 778 129.133 778V758ZM303.717 758H129.133V778H303.717V758ZM313.52 769.975C321.667 729.519 343.037 670.718 398.633 636.141L388.071 619.157C325.581 658.022 302.499 723.399 293.913 766.026L313.52 769.975Z" fill="black"/>
                <Path d="M512 597.333C717.217 597.333 725.024 794.743 725.321 809.764C725.332 810.316 724.885 810.667 724.333 810.667H299.667C299.114 810.667 298.667 810.316 298.678 809.764C298.975 794.743 306.783 597.333 512 597.333Z" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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