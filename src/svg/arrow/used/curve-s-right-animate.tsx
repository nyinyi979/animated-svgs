"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function CurveSRightAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Curve right(square)",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function CurveSRightAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,40,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [0],
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
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M853.333 426.667L860.404 433.738L867.475 426.667L860.404 419.596L853.333 426.667ZM160.667 768C160.667 773.523 165.144 778 170.667 778C176.189 778 180.667 773.523 180.667 768L160.667 768ZM647.071 647.071L860.404 433.738L846.262 419.596L632.929 632.929L647.071 647.071ZM860.404 419.596L647.071 206.262L632.929 220.404L846.262 433.738L860.404 419.596ZM853.333 416.667L176.667 416.667L176.667 436.667L853.333 436.667L853.333 416.667ZM160.667 432.667L160.667 768L180.667 768L180.667 432.667L160.667 432.667ZM176.667 416.667C167.83 416.667 160.667 423.83 160.667 432.667L180.667 432.667C180.667 434.876 178.876 436.667 176.667 436.667L176.667 416.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CurveSRightAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0,
    }); 
    //translateX: [0,40,0],
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,translateX:40}),
            withTiming({scale:1.1,translateX:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,translateX:0})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const pathAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateX: animationValue.value.translateX}]
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
                    d="M853.333 426.667L860.404 433.738L867.475 426.667L860.404 419.596L853.333 426.667ZM160.667 768C160.667 773.523 165.144 778 170.667 778C176.189 778 180.667 773.523 180.667 768L160.667 768ZM647.071 647.071L860.404 433.738L846.262 419.596L632.929 632.929L647.071 647.071ZM860.404 419.596L647.071 206.262L632.929 220.404L846.262 433.738L860.404 419.596ZM853.333 416.667L176.667 416.667L176.667 436.667L853.333 436.667L853.333 416.667ZM160.667 432.667L160.667 768L180.667 768L180.667 432.667L160.667 432.667ZM176.667 416.667C167.83 416.667 160.667 423.83 160.667 432.667L180.667 432.667C180.667 434.876 178.876 436.667 176.667 436.667L176.667 416.667Z" fill="black"/>
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
    <path d="M853.333 426.667L860.404 433.738L867.475 426.667L860.404 419.596L853.333 426.667ZM160.667 768C160.667 773.523 165.144 778 170.667 778C176.189 778 180.667 773.523 180.667 768L160.667 768ZM647.071 647.071L860.404 433.738L846.262 419.596L632.929 632.929L647.071 647.071ZM860.404 419.596L647.071 206.262L632.929 220.404L846.262 433.738L860.404 419.596ZM853.333 416.667L176.667 416.667L176.667 436.667L853.333 436.667L853.333 416.667ZM160.667 432.667L160.667 768L180.667 768L180.667 432.667L160.667 432.667ZM176.667 416.667C167.83 416.667 160.667 423.83 160.667 432.667L180.667 432.667C180.667 434.876 178.876 436.667 176.667 436.667L176.667 416.667Z" fill="black"/>
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
                    initial={{translateX:0}}
                    animate={{translateX:animationValue.translateX}}
                    d="M853.333 426.667L860.404 433.738L867.475 426.667L860.404 419.596L853.333 426.667ZM160.667 768C160.667 773.523 165.144 778 170.667 778C176.189 778 180.667 773.523 180.667 768L160.667 768ZM647.071 647.071L860.404 433.738L846.262 419.596L632.929 632.929L647.071 647.071ZM860.404 419.596L647.071 206.262L632.929 220.404L846.262 433.738L860.404 419.596ZM853.333 416.667L176.667 416.667L176.667 436.667L853.333 436.667L853.333 416.667ZM160.667 432.667L160.667 768L180.667 768L180.667 432.667L160.667 432.667ZM176.667 416.667C167.83 416.667 160.667 423.83 160.667 432.667L180.667 432.667C180.667 434.876 178.876 436.667 176.667 436.667L176.667 416.667Z" fill="black"/>
            </motion.svg>
        </div>
    )
}