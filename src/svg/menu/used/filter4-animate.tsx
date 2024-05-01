"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Filter4Animate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Filter",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function Filter4Animate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
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
                <path d="M213.333 512L213.333 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 853.333L810.667 768" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M213.333 853.333L213.333 682.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 512L810.667 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M512 298.667L512 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M512 853.333L512 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="213.333" cy="597.333" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="512" cy="384" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="810.666" cy="640" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Ellipse } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Filter4Animate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
    });
    
    const animate = () =>{
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <Path d="M213.333 512L213.333 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M810.667 853.333L810.667 768" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M213.333 853.333L213.333 682.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M810.667 512L810.667 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M512 298.667L512 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Path d="M512 853.333L512 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Ellipse cx="213.333" cy="597.333" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Ellipse cx="512" cy="384" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <Ellipse cx="810.666" cy="640" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M213.333 512L213.333 170.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M810.667 853.333L810.667 768" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M213.333 853.333L213.333 682.666" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M810.667 512L810.667 170.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M512 298.667L512 170.667" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M512 853.333L512 512" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <ellipse cx="213.333" cy="597.333" rx="85.3333" ry="85.3333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <ellipse cx="512" cy="384" rx="85.3333" ry="85.3333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <ellipse cx="810.666" cy="640" rx="85.3333" ry="85.3333" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <path d="M213.333 512L213.333 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 853.333L810.667 768" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M213.333 853.333L213.333 682.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M810.667 512L810.667 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M512 298.667L512 170.667" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <path d="M512 853.333L512 512" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="213.333" cy="597.333" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="512" cy="384" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <ellipse cx="810.666" cy="640" rx="85.3333" ry="85.3333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}