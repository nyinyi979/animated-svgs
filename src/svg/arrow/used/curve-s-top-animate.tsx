"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function CurveSTopAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Curve top(square)",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function CurveSTopAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: [0,-40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: [0],
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg 
                initial={{scale:1}}
                animate={{scale:animationValue.scale}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M426.667 170.667L433.738 163.595L426.667 156.524L419.596 163.595L426.667 170.667ZM768 863.333C773.523 863.333 778 858.856 778 853.333C778 847.81 773.523 843.333 768 843.333L768 863.333ZM647.071 376.929L433.738 163.595L419.596 177.738L632.929 391.071L647.071 376.929ZM419.596 163.595L206.262 376.929L220.404 391.071L433.738 177.738L419.596 163.595ZM416.667 170.667L416.667 847.333L436.667 847.333L436.667 170.667L416.667 170.667ZM432.667 863.333L768 863.333L768 843.333L432.667 843.333L432.667 863.333ZM416.667 847.333C416.667 856.17 423.83 863.333 432.667 863.333L432.667 843.333C434.876 843.333 436.667 845.124 436.667 847.333L416.667 847.333Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CurveSTopAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
    });
    //translateY: [0,-40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateY:-40}),
            withTiming({scale:1.1,translateY:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateY:0})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY: animationValue.value.translateY}]
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
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M426.667 170.667L433.738 163.595L426.667 156.524L419.596 163.595L426.667 170.667ZM768 863.333C773.523 863.333 778 858.856 778 853.333C778 847.81 773.523 843.333 768 843.333L768 863.333ZM647.071 376.929L433.738 163.595L419.596 177.738L632.929 391.071L647.071 376.929ZM419.596 163.595L206.262 376.929L220.404 391.071L433.738 177.738L419.596 163.595ZM416.667 170.667L416.667 847.333L436.667 847.333L436.667 170.667L416.667 170.667ZM432.667 863.333L768 863.333L768 843.333L432.667 843.333L432.667 863.333ZM416.667 847.333C416.667 856.17 423.83 863.333 432.667 863.333L432.667 843.333C434.876 843.333 436.667 845.124 436.667 847.333L416.667 847.333Z" fill="black"/>
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
})`,
            svg:`<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M426.667 170.667L433.738 163.595L426.667 156.524L419.596 163.595L426.667 170.667ZM768 863.333C773.523 863.333 778 858.856 778 853.333C778 847.81 773.523 843.333 768 843.333L768 863.333ZM647.071 376.929L433.738 163.595L419.596 177.738L632.929 391.071L647.071 376.929ZM419.596 163.595L206.262 376.929L220.404 391.071L433.738 177.738L419.596 163.595ZM416.667 170.667L416.667 847.333L436.667 847.333L436.667 170.667L416.667 170.667ZM432.667 863.333L768 863.333L768 843.333L432.667 843.333L432.667 863.333ZM416.667 847.333C416.667 856.17 423.83 863.333 432.667 863.333L432.667 843.333C434.876 843.333 436.667 845.124 436.667 847.333L416.667 847.333Z" fill="black"/>
</svg>
`
        })
        drawerAnimate();
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            onClick={openDrawer}
        >
            <motion.svg 
                initial={{scale:1}}
                animate={{scale:animationValue.scale}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M426.667 170.667L433.738 163.595L426.667 156.524L419.596 163.595L426.667 170.667ZM768 863.333C773.523 863.333 778 858.856 778 853.333C778 847.81 773.523 843.333 768 843.333L768 863.333ZM647.071 376.929L433.738 163.595L419.596 177.738L632.929 391.071L647.071 376.929ZM419.596 163.595L206.262 376.929L220.404 391.071L433.738 177.738L419.596 163.595ZM416.667 170.667L416.667 847.333L436.667 847.333L436.667 170.667L416.667 170.667ZM432.667 863.333L768 863.333L768 843.333L432.667 843.333L432.667 863.333ZM416.667 847.333C416.667 856.17 423.83 863.333 432.667 863.333L432.667 843.333C434.876 843.333 436.667 845.124 436.667 847.333L416.667 847.333Z" fill="black"/>
            </motion.svg>
        </div>
    )
}