"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function BookAnimate({drawerAnimate,setDetails}:eachSVGType){
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
    const openDrawer = () => {
        setDetails({
            name:"Book",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function BookAnimate(){
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
                <path d="M853.334 512V892C853.334 893.886 853.334 894.828 852.748 895.414C852.162 896 851.219 896 849.334 896H176.667C173.839 896 172.424 896 171.546 895.121C170.667 894.243 170.667 892.828 170.667 890V688.667C170.667 685.838 170.667 684.424 171.546 683.545C172.424 682.667 173.839 682.667 176.667 682.667H849.334C851.219 682.667 852.162 682.667 852.748 682.081C853.334 681.495 853.334 680.552 853.334 678.667V132C853.334 130.114 853.334 129.172 852.748 128.586C852.162 128 851.219 128 849.334 128H174.667C172.781 128 171.839 128 171.253 128.586C170.667 129.172 170.667 130.114 170.667 132V789.333" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 341.333L640 341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function BookAnimate(){
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
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,strokeDasharray:1000,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
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
                <Path d="M853.334 512V892C853.334 893.886 853.334 894.828 852.748 895.414C852.162 896 851.219 896 849.334 896H176.667C173.839 896 172.424 896 171.546 895.121C170.667 894.243 170.667 892.828 170.667 890V688.667C170.667 685.838 170.667 684.424 171.546 683.545C172.424 682.667 173.839 682.667 176.667 682.667H849.334C851.219 682.667 852.162 682.667 852.748 682.081C853.334 681.495 853.334 680.552 853.334 678.667V132C853.334 130.114 853.334 129.172 852.748 128.586C852.162 128 851.219 128 849.334 128H174.667C172.781 128 171.839 128 171.253 128.586C170.667 129.172 170.667 130.114 170.667 132V789.333" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M384 341.333L640 341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M853.334 512V892C853.334 893.886 853.334 894.828 852.748 895.414C852.162 896 851.219 896 849.334 896H176.667C173.839 896 172.424 896 171.546 895.121C170.667 894.243 170.667 892.828 170.667 890V688.667C170.667 685.838 170.667 684.424 171.546 683.545C172.424 682.667 173.839 682.667 176.667 682.667H849.334C851.219 682.667 852.162 682.667 852.748 682.081C853.334 681.495 853.334 680.552 853.334 678.667V132C853.334 130.114 853.334 129.172 852.748 128.586C852.162 128 851.219 128 849.334 128H174.667C172.781 128 171.839 128 171.253 128.586C170.667 129.172 170.667 130.114 170.667 132V789.333" stroke="black" stroke-width="20"/>
    <path d="M384 341.333L640 341.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <path d="M853.334 512V892C853.334 893.886 853.334 894.828 852.748 895.414C852.162 896 851.219 896 849.334 896H176.667C173.839 896 172.424 896 171.546 895.121C170.667 894.243 170.667 892.828 170.667 890V688.667C170.667 685.838 170.667 684.424 171.546 683.545C172.424 682.667 173.839 682.667 176.667 682.667H849.334C851.219 682.667 852.162 682.667 852.748 682.081C853.334 681.495 853.334 680.552 853.334 678.667V132C853.334 130.114 853.334 129.172 852.748 128.586C852.162 128 851.219 128 849.334 128H174.667C172.781 128 171.839 128 171.253 128.586C170.667 129.172 170.667 130.114 170.667 132V789.333" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M384 341.333L640 341.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}