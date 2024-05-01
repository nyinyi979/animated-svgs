import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function StarAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotateX: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,rotateX:-20})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,rotateX:-20},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const viewAnimatedStyles = useAnimatedStyle(()=>{
        return{
            transform: [{rotateX:`${animationValue.value.rotateX}deg`}]
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
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >
                <Path d="M432.801 282.777C466.363 199.108 483.143 157.273 512 157.273C540.857 157.273 557.638 199.108 591.199 282.777L592.762 286.674C611.723 333.943 621.203 357.577 640.525 371.942C659.846 386.308 685.21 388.579 735.937 393.122L745.108 393.944C828.129 401.379 869.64 405.096 878.522 431.506C887.404 457.916 856.577 485.963 794.922 542.056L774.344 560.777C743.133 589.173 727.528 603.371 720.254 621.979C718.897 625.45 717.769 629.006 716.878 632.625C712.097 652.024 716.666 672.62 725.806 713.813L728.651 726.636C745.448 802.341 753.846 840.193 739.182 856.52C733.703 862.621 726.581 867.014 718.67 869.173C697.499 874.949 667.441 850.457 607.326 801.472C567.852 769.306 548.115 753.223 525.455 749.605C516.541 748.182 507.459 748.182 498.545 749.605C475.885 753.223 456.148 769.306 416.674 801.472C356.559 850.457 326.501 874.949 305.33 869.173C297.419 867.014 290.297 862.621 284.818 856.52C270.154 840.193 278.552 802.341 295.349 726.636L298.194 713.813C307.334 672.62 311.903 652.024 307.122 632.625C306.231 629.006 305.103 625.45 303.746 621.979C296.472 603.371 280.867 589.173 249.656 560.777L229.078 542.056C167.423 485.963 136.596 457.916 145.478 431.506C154.36 405.096 195.871 401.379 278.892 393.944L288.063 393.122C338.79 388.579 364.154 386.308 383.475 371.942C402.797 357.577 412.277 333.943 431.238 286.673L432.801 282.777Z" stroke="black" strokeWidth="20"/>
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