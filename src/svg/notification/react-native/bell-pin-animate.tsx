import React from "react";
import { Svg, Path, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function BellPinAnimate(){
    const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotation: 0,
        opacity: 1,
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,rotation:5,opacity:0}),
            withTiming({scale:1.1,rotation:-5,opacity:1}),
            withTiming({scale:1.1,rotation:10,opacity:0}),
            withTiming({scale:1.1,rotation:-10,opacity:1}),
            withTiming({scale:1.1,rotation:12,opacity:0}),
            withTiming({scale:1.1,rotation:-12,opacity:1}),
            withTiming({scale:1.1,rotation:0,opacity:1})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,rotation:0,opacity:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}],
            rotation: animationValue.value.rotation
        }
    })
    const ellipseAnimatedProps = useAnimatedProps(()=>{
        return{
            opacity: animationValue.value.opacity
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
                <Path fillRule="evenodd" clipRule="evenodd" d="M312.987 118L312.527 118C309.526 117.999 306.403 117.998 303.768 118.336C300.714 118.728 297.049 119.7 293.822 122.588C290.596 125.475 289.225 129.011 288.499 132.002C287.872 134.585 287.528 137.688 287.197 140.671L287.146 141.129L246.447 507.425C246.429 507.587 246.412 507.735 246.397 507.87C246.371 508.106 246.348 508.306 246.326 508.488C246.321 508.535 246.315 508.578 246.31 508.619C246.306 508.656 246.301 508.692 246.297 508.725C246.262 508.785 246.223 508.853 246.177 508.931C246.03 509.179 245.858 509.466 245.628 509.849L121.242 717.159C121.222 717.194 121.197 717.235 121.168 717.282L121.168 717.283C120.875 717.767 120.181 718.911 119.71 720.048C119.164 721.363 117.737 725.414 120.194 729.753C122.651 734.092 126.859 734.953 128.267 735.162C129.484 735.342 130.823 735.336 131.389 735.334L131.479 735.333L131.532 735.333H892.468C892.507 735.333 892.556 735.333 892.611 735.334C893.177 735.336 894.516 735.342 895.733 735.162C897.141 734.953 901.349 734.092 903.806 729.753C906.263 725.414 904.836 721.363 904.29 720.048C903.819 718.911 903.125 717.765 902.832 717.282C902.803 717.234 902.778 717.193 902.758 717.159L778.372 509.849C778.142 509.466 777.97 509.179 777.823 508.931C777.777 508.853 777.738 508.785 777.703 508.725C777.694 508.656 777.685 508.578 777.674 508.488C777.64 508.202 777.603 507.869 777.553 507.425L759.386 343.919C752.225 343.226 745.315 341.678 738.758 339.378L757.676 509.634C757.688 509.749 757.701 509.871 757.715 509.998L757.715 509.999C757.858 511.322 758.065 513.247 758.704 515.138C759.342 517.029 760.344 518.686 761.032 519.825L761.119 519.969C761.154 520.027 761.189 520.084 761.222 520.139L878.338 715.333H145.662L262.778 520.139C262.809 520.088 262.841 520.036 262.873 519.982L262.968 519.825C263.656 518.687 264.658 517.029 265.296 515.138C265.935 513.247 266.142 511.321 266.285 509.998C266.299 509.871 266.312 509.749 266.324 509.634L307.024 143.337C307.216 141.61 307.367 140.26 307.524 139.103C307.577 138.711 307.627 138.367 307.676 138.066C307.981 138.051 308.328 138.039 308.724 138.029C309.891 138.001 311.249 138 312.987 138H711.013C712.751 138 714.109 138.001 715.276 138.029C715.672 138.039 716.019 138.051 716.324 138.066C716.373 138.367 716.423 138.711 716.476 139.103C716.633 140.26 716.784 141.61 716.976 143.337L721.17 181.088C727.108 177.368 733.52 174.335 740.295 172.099L736.854 141.129L736.803 140.671L736.803 140.67C736.472 137.687 736.128 134.584 735.501 132.002C734.775 129.011 733.404 125.475 730.178 122.588C726.951 119.7 723.286 118.728 720.232 118.336C717.597 117.998 714.474 117.999 711.473 118L711.013 118H312.987ZM740.634 175.149C733.846 177.446 727.441 180.574 721.54 184.411L738.389 336.056C744.935 338.478 751.858 340.12 759.047 340.869L740.634 175.149Z" fill="black"/>
                <Path d="M388.361 753.693C395.654 794.519 411.724 830.594 434.079 856.324C456.433 882.054 483.823 896 512 896C540.177 896 567.567 882.054 589.921 856.324C612.276 830.594 628.346 794.519 635.638 753.693" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedEllipse
                    animatedProps={ellipseAnimatedProps}
                    cx="768" cy="256" rx="85.3333" ry="85.3333" fill="black"/>
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