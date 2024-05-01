import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function HeartBrokenAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1}
        animationValue.value = withSequence(
            withTiming({scale:1.1}),
            withTiming({scale:1.1})
        );
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
                <Path fillRule="evenodd" clipRule="evenodd" d="M431.653 253.365C359.453 197.664 249.313 205.074 187.594 284.623L174.395 301.635C107.36 388.036 117.039 511.248 196.743 586.121L493.388 864.788C498.642 869.724 502.063 872.922 504.892 875.1C507.586 877.176 508.938 877.671 509.818 877.844C511.259 878.127 512.742 878.127 514.183 877.844C515.064 877.671 516.415 877.176 519.11 875.1C521.938 872.922 525.359 869.724 530.614 864.788L827.258 586.121C906.962 511.248 916.641 388.036 849.606 301.635L836.407 284.623C774.305 204.58 663.181 197.567 590.992 254.422L578.617 238.71C658.981 175.416 782.882 183.008 852.209 272.363L865.408 289.375C938.767 383.926 928.175 518.762 840.952 600.698L544.307 879.365L543.965 879.686C539.148 884.211 535.013 888.096 531.314 890.945C527.393 893.965 523.178 896.46 518.034 897.47C514.05 898.252 509.951 898.252 505.967 897.47C500.823 896.46 496.608 893.965 492.688 890.945C488.988 888.096 484.853 884.211 480.035 879.685L479.694 879.365L183.049 600.698C95.8263 518.761 85.2343 383.926 158.593 289.375L171.792 272.363C243.085 180.474 372.09 175.042 452.132 244.281L459.361 250.535L453.441 258.038L356.225 381.262L558.015 502.336C558.029 502.344 558.049 502.356 558.075 502.371C558.357 502.538 559.284 503.086 560.091 503.735C561.198 504.623 563.241 506.579 563.987 509.894C564.732 513.21 563.723 515.852 563.103 517.129C562.61 518.145 561.938 519.113 561.825 519.282L477.656 645.537L461.015 634.443L540.53 515.169L338.139 393.734C338.123 393.724 338.1 393.711 338.072 393.694C337.765 393.512 336.799 392.941 335.965 392.267C334.833 391.351 332.656 389.258 332.004 385.699C331.352 382.141 332.645 379.412 333.379 378.154C333.92 377.228 334.62 376.352 334.843 376.073C334.864 376.047 334.88 376.027 334.892 376.011L431.653 253.365ZM350.323 388.745C350.326 388.742 350.328 388.739 350.33 388.736C350.319 388.752 350.316 388.755 350.323 388.745Z" fill="black"/>
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