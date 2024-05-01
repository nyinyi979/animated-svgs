"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function Lightning2Animate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Lightning",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function LightningAnimate(){
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
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{duration:.4}}
                    d="M432.979 858.128L467.393 651.644C468.294 646.239 468.744 643.536 467.246 641.768C465.748 640 463.008 640 457.529 640H318.667C309.94 640 305.576 640 304.195 637.236C302.813 634.472 305.431 630.981 310.667 624L414.667 485.333C419.903 478.352 422.521 474.861 421.139 472.097C419.757 469.333 415.393 469.333 406.667 469.333H272.18C264.928 469.333 261.302 469.333 259.837 466.962C258.371 464.591 259.993 461.348 263.236 454.861L423.903 133.528C425.248 130.838 425.92 129.493 427.128 128.747C428.336 128 429.84 128 432.847 128H666.486C673.738 128 677.364 128 678.83 130.371C680.295 132.743 678.674 135.986 675.431 142.472L604.569 284.195C601.326 290.681 599.705 293.924 601.17 296.295C602.636 298.667 606.262 298.667 613.514 298.667H701.191C711.466 298.667 716.603 298.667 717.882 301.753C719.16 304.84 715.528 308.472 708.262 315.738L708.262 315.738L571.738 452.262C564.472 459.528 560.84 463.16 562.118 466.247C563.397 469.333 568.534 469.333 578.809 469.333H747.194C756.225 469.333 760.741 469.333 762.103 472.167C763.466 475.001 760.645 478.528 755.002 485.58L450.651 866.019C441.047 878.025 436.245 884.027 432.716 882.452C429.187 880.876 430.451 873.294 432.979 858.128Z" stroke="black" strokeWidth="20"/>

            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LightningAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  2650,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:2650,strokeDashoffset:2650}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:2650,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:2650,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:2600,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        )
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
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M432.979 858.128L467.393 651.644C468.294 646.239 468.744 643.536 467.246 641.768C465.748 640 463.008 640 457.529 640H318.667C309.94 640 305.576 640 304.195 637.236C302.813 634.472 305.431 630.981 310.667 624L414.667 485.333C419.903 478.352 422.521 474.861 421.139 472.097C419.757 469.333 415.393 469.333 406.667 469.333H272.18C264.928 469.333 261.302 469.333 259.837 466.962C258.371 464.591 259.993 461.348 263.236 454.861L423.903 133.528C425.248 130.838 425.92 129.493 427.128 128.747C428.336 128 429.84 128 432.847 128H666.486C673.738 128 677.364 128 678.83 130.371C680.295 132.743 678.674 135.986 675.431 142.472L604.569 284.195C601.326 290.681 599.705 293.924 601.17 296.295C602.636 298.667 606.262 298.667 613.514 298.667H701.191C711.466 298.667 716.603 298.667 717.882 301.753C719.16 304.84 715.528 308.472 708.262 315.738L708.262 315.738L571.738 452.262C564.472 459.528 560.84 463.16 562.118 466.247C563.397 469.333 568.534 469.333 578.809 469.333H747.194C756.225 469.333 760.741 469.333 762.103 472.167C763.466 475.001 760.645 478.528 755.002 485.58L450.651 866.019C441.047 878.025 436.245 884.027 432.716 882.452C429.187 880.876 430.451 873.294 432.979 858.128Z" stroke="black" strokeWidth="20"/>
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
    <path d="M432.979 858.128L467.393 651.644C468.294 646.239 468.744 643.536 467.246 641.768C465.748 640 463.008 640 457.529 640H318.667C309.94 640 305.576 640 304.195 637.236C302.813 634.472 305.431 630.981 310.667 624L414.667 485.333C419.903 478.352 422.521 474.861 421.139 472.097C419.757 469.333 415.393 469.333 406.667 469.333H272.18C264.928 469.333 261.302 469.333 259.837 466.962C258.371 464.591 259.993 461.348 263.236 454.861L423.903 133.528C425.248 130.838 425.92 129.493 427.128 128.747C428.336 128 429.84 128 432.847 128H666.486C673.738 128 677.364 128 678.83 130.371C680.295 132.743 678.674 135.986 675.431 142.472L604.569 284.195C601.326 290.681 599.705 293.924 601.17 296.295C602.636 298.667 606.262 298.667 613.514 298.667H701.191C711.466 298.667 716.603 298.667 717.882 301.753C719.16 304.84 715.528 308.472 708.262 315.738L708.262 315.738L571.738 452.262C564.472 459.528 560.84 463.16 562.118 466.247C563.397 469.333 568.534 469.333 578.809 469.333H747.194C756.225 469.333 760.741 469.333 762.103 472.167C763.466 475.001 760.645 478.528 755.002 485.58L450.651 866.019C441.047 878.025 436.245 884.027 432.716 882.452C429.187 880.876 430.451 873.294 432.979 858.128Z" stroke="black" stroke-width="20"/>
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
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{duration:.4}}
                    d="M432.979 858.128L467.393 651.644C468.294 646.239 468.744 643.536 467.246 641.768C465.748 640 463.008 640 457.529 640H318.667C309.94 640 305.576 640 304.195 637.236C302.813 634.472 305.431 630.981 310.667 624L414.667 485.333C419.903 478.352 422.521 474.861 421.139 472.097C419.757 469.333 415.393 469.333 406.667 469.333H272.18C264.928 469.333 261.302 469.333 259.837 466.962C258.371 464.591 259.993 461.348 263.236 454.861L423.903 133.528C425.248 130.838 425.92 129.493 427.128 128.747C428.336 128 429.84 128 432.847 128H666.486C673.738 128 677.364 128 678.83 130.371C680.295 132.743 678.674 135.986 675.431 142.472L604.569 284.195C601.326 290.681 599.705 293.924 601.17 296.295C602.636 298.667 606.262 298.667 613.514 298.667H701.191C711.466 298.667 716.603 298.667 717.882 301.753C719.16 304.84 715.528 308.472 708.262 315.738L708.262 315.738L571.738 452.262C564.472 459.528 560.84 463.16 562.118 466.247C563.397 469.333 568.534 469.333 578.809 469.333H747.194C756.225 469.333 760.741 469.333 762.103 472.167C763.466 475.001 760.645 478.528 755.002 485.58L450.651 866.019C441.047 878.025 436.245 884.027 432.716 882.452C429.187 880.876 430.451 873.294 432.979 858.128Z" stroke="black" strokeWidth="20"/>

            </motion.svg>
        </div>
    )
}