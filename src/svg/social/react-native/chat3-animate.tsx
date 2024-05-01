import React from "react";
import { Svg, Path, Ellipse, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Chat3Animate(){
    const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        eScale: 1
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,eScale:0}
        animationValue.value = withTiming({scale:1.1,eScale:1});
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,eScale:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const scaleAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.eScale}]
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
                <Path d="M824.571 246.516L816.256 252.072L816.256 252.072L824.571 246.516ZM824.571 692.151L816.256 686.595L816.256 686.595L824.571 692.151ZM777.484 739.238L771.928 730.923L771.928 730.923L777.484 739.238ZM597.333 767.942L597.29 757.942C591.784 757.966 587.333 762.436 587.333 767.942H597.333ZM597.333 768L606.278 772.472C606.972 771.084 607.333 769.553 607.333 768H597.333ZM426.667 768H416.667C416.667 769.553 417.028 771.084 417.722 772.472L426.667 768ZM426.667 767.942H436.667C436.667 762.436 432.216 757.966 426.71 757.942L426.667 767.942ZM246.516 739.238L240.96 747.552L240.96 747.552L246.516 739.238ZM199.429 692.151L191.115 697.707L191.115 697.707L199.429 692.151ZM199.429 246.516L191.115 240.961L191.115 240.961L199.429 246.516ZM246.516 199.43L240.96 191.115L240.96 191.115L246.516 199.43ZM777.484 199.43L783.04 191.115L783.04 191.115L777.484 199.43ZM863.333 469.334C863.333 409.618 863.345 364.079 859.687 328.112C856.011 291.979 848.548 264.401 832.886 240.961L816.256 252.072C829.357 271.678 836.275 295.585 839.789 330.137C843.321 364.856 843.333 409.202 843.333 469.334H863.333ZM832.886 697.707C848.548 674.267 856.011 646.688 859.687 610.555C863.345 574.589 863.333 529.049 863.333 469.334H843.333C843.333 529.465 843.321 573.812 839.789 608.531C836.275 643.083 829.357 666.989 816.256 686.595L832.886 697.707ZM783.04 747.552C802.767 734.371 819.704 717.434 832.886 697.707L816.256 686.595C804.534 704.138 789.472 719.201 771.928 730.923L783.04 747.552ZM597.377 777.942C643.36 777.742 679.623 776.856 709.2 772.768C738.937 768.657 762.564 761.234 783.04 747.552L771.928 730.923C754.799 742.368 734.383 749.096 706.461 752.956C678.379 756.838 643.368 757.741 597.29 757.942L597.377 777.942ZM607.333 768V767.942H587.333V768H607.333ZM521.839 941.35L606.278 772.472L588.389 763.528L503.95 932.406L521.839 941.35ZM502.161 941.35C506.215 949.458 517.785 949.458 521.839 941.35L503.95 932.406C507.267 925.773 516.733 925.773 520.05 932.406L502.161 941.35ZM417.722 772.472L502.161 941.35L520.05 932.406L435.611 763.528L417.722 772.472ZM416.667 767.942V768H436.667V767.942H416.667ZM240.96 747.552C261.436 761.234 285.064 768.657 314.801 772.768C344.377 776.856 380.64 777.742 426.623 777.942L426.71 757.942C380.632 757.741 345.622 756.838 317.539 752.956C289.617 749.096 269.201 742.368 252.072 730.923L240.96 747.552ZM191.115 697.707C204.296 717.434 221.233 734.371 240.96 747.552L252.072 730.923C234.529 719.201 219.466 704.138 207.744 686.595L191.115 697.707ZM160.667 469.334C160.667 529.049 160.655 574.589 164.313 610.555C167.989 646.688 175.452 674.267 191.115 697.707L207.744 686.595C194.644 666.989 187.726 643.083 184.211 608.531C180.679 573.812 180.667 529.465 180.667 469.334H160.667ZM191.115 240.961C175.452 264.401 167.989 291.979 164.313 328.112C160.655 364.079 160.667 409.618 160.667 469.334H180.667C180.667 409.202 180.679 364.856 184.211 330.137C187.726 295.585 194.644 271.678 207.744 252.072L191.115 240.961ZM240.96 191.115C221.233 204.296 204.296 221.234 191.115 240.961L207.744 252.072C219.466 234.529 234.529 219.466 252.072 207.744L240.96 191.115ZM469.333 160.667C409.618 160.667 364.078 160.655 328.112 164.314C291.979 167.989 264.4 175.453 240.96 191.115L252.072 207.744C271.678 194.644 295.584 187.726 330.136 184.211C364.855 180.679 409.202 180.667 469.333 180.667V160.667ZM554.667 160.667H469.333V180.667H554.667V160.667ZM783.04 191.115C759.6 175.453 732.021 167.989 695.888 164.314C659.922 160.655 614.382 160.667 554.667 160.667V180.667C614.799 180.667 659.145 180.679 693.864 184.211C728.416 187.726 752.322 194.644 771.928 207.744L783.04 191.115ZM832.886 240.961C819.704 221.234 802.767 204.296 783.04 191.115L771.928 207.744C789.472 219.466 804.534 234.529 816.256 252.072L832.886 240.961Z" fill="black"/>
                <AnimatedEllipse
                    animatedProps={scaleAnimatedProps}
                    originX="612" originY="450"
                    cx="682.667" cy="469.334" rx="42.6667" ry="42.6667" fill="black" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedCircle
                    animatedProps={scaleAnimatedProps}
                    originX="512" originY="469"
                    cx="512" cy="469.334" r="42.6667" fill="black" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedCircle
                    animatedProps={scaleAnimatedProps}
                    originX="380" originY="469"
                    cx="341.333" cy="469.334" r="42.6667" fill="black" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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