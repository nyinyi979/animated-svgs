"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Message1Animate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotate: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Message",
            react:`import React from "react"
import React from "react"
import { motion } from "framer-motion"

export default function Message1Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotate: [0],
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg 
                initial={{scale:1,rotateX:0}}
                animate={{scale:animationValue.scale,rotateX:animationValue.rotate}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="170.667" y="256" width="682.667" height="512" rx="2" stroke="black" strokeWidth="20"/>
                <path d="M170.667 384L511.105 554.219C511.668 554.501 512.331 554.501 512.894 554.219L853.333 384" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Message1Animate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotateX: 0
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,rotateX:20}),
            withTiming({scale:1.1,rotateX:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,rotateX:0},{easing:Easing.bounce,duration:1000})
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}],
        }
    })
    const viewAnimatedStyles = useAnimatedStyle(()=>{
        return{
            transform: [{rotateX:\`\${animationValue.value.rotateX}deg\`}]
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
                <Rect x="170.667" y="256" width="682.667" height="512" rx="2" stroke="black" strokeWidth="20"/>
                <Path d="M170.667 384L511.105 554.219C511.668 554.501 512.331 554.501 512.894 554.219L853.333 384" stroke="black" strokeWidth="20"/>
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
})`,
            svg:`<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="170.667" y="256" width="682.667" height="512" rx="2" stroke="black" stroke-width="20"/>
    <path d="M170.667 384L511.105 554.219C511.668 554.501 512.331 554.501 512.894 554.219L853.333 384" stroke="black" stroke-width="20"/>
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
                initial={{scale:1,rotateX:0}}
                animate={{scale:animationValue.scale,rotateX:animationValue.rotate}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="170.667" y="256" width="682.667" height="512" rx="2" stroke="black" strokeWidth="20"/>
                <path d="M170.667 384L511.105 554.219C511.668 554.501 512.331 554.501 512.894 554.219L853.333 384" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}