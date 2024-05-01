"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function SettingAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Setting",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function SettingAnimate(){
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
                <path d="M86.4152 513.945C85.8865 512.994 85.6221 512.519 85.6221 512C85.6221 511.481 85.8865 511.006 86.4152 510.056L189.053 325.547L297.524 144.405C298.082 143.472 298.362 143.005 298.811 142.746C299.26 142.486 299.804 142.478 300.892 142.46L512 139.093L723.109 142.46C724.196 142.478 724.74 142.486 725.189 142.746C725.638 143.005 725.918 143.472 726.477 144.405L834.947 325.547L937.585 510.056C938.114 511.006 938.378 511.481 938.378 512C938.378 512.519 938.114 512.994 937.585 513.945L834.947 698.453L726.477 879.595C725.918 880.528 725.639 880.995 725.189 881.254C724.74 881.514 724.196 881.522 723.109 881.54L512 884.907L300.892 881.54C299.804 881.522 299.26 881.514 298.811 881.254C298.362 880.995 298.082 880.528 297.524 879.595L189.053 698.453L86.4152 513.945Z" stroke="black" strokeWidth="20"/>
                <motion.circle 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    cx="512" cy="512" r="128" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function SettingAnimate(){
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1},
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <Path d="M86.4152 513.945C85.8865 512.994 85.6221 512.519 85.6221 512C85.6221 511.481 85.8865 511.006 86.4152 510.056L189.053 325.547L297.524 144.405C298.082 143.472 298.362 143.005 298.811 142.746C299.26 142.486 299.804 142.478 300.892 142.46L512 139.093L723.109 142.46C724.196 142.478 724.74 142.486 725.189 142.746C725.638 143.005 725.918 143.472 726.477 144.405L834.947 325.547L937.585 510.056C938.114 511.006 938.378 511.481 938.378 512C938.378 512.519 938.114 512.994 937.585 513.945L834.947 698.453L726.477 879.595C725.918 880.528 725.639 880.995 725.189 881.254C724.74 881.514 724.196 881.522 723.109 881.54L512 884.907L300.892 881.54C299.804 881.522 299.26 881.514 298.811 881.254C298.362 880.995 298.082 880.528 297.524 879.595L189.053 698.453L86.4152 513.945Z" stroke="black" strokeWidth="20"/>
                <AnimatedCircle
                    animatedProps={pathAnimatedProps}
                    cx="512" cy="512" r="128" stroke="black" strokeWidth="20"/>
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
    <path d="M86.4152 513.945C85.8865 512.994 85.6221 512.519 85.6221 512C85.6221 511.481 85.8865 511.006 86.4152 510.056L189.053 325.547L297.524 144.405C298.082 143.472 298.362 143.005 298.811 142.746C299.26 142.486 299.804 142.478 300.892 142.46L512 139.093L723.109 142.46C724.196 142.478 724.74 142.486 725.189 142.746C725.638 143.005 725.918 143.472 726.477 144.405L834.947 325.547L937.585 510.056C938.114 511.006 938.378 511.481 938.378 512C938.378 512.519 938.114 512.994 937.585 513.945L834.947 698.453L726.477 879.595C725.918 880.528 725.639 880.995 725.189 881.254C724.74 881.514 724.196 881.522 723.109 881.54L512 884.907L300.892 881.54C299.804 881.522 299.26 881.514 298.811 881.254C298.362 880.995 298.082 880.528 297.524 879.595L189.053 698.453L86.4152 513.945Z" stroke="black" stroke-width="20"/>
    <circle cx="512" cy="512" r="128" stroke="black" stroke-width="20"/>
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
                <path d="M86.4152 513.945C85.8865 512.994 85.6221 512.519 85.6221 512C85.6221 511.481 85.8865 511.006 86.4152 510.056L189.053 325.547L297.524 144.405C298.082 143.472 298.362 143.005 298.811 142.746C299.26 142.486 299.804 142.478 300.892 142.46L512 139.093L723.109 142.46C724.196 142.478 724.74 142.486 725.189 142.746C725.638 143.005 725.918 143.472 726.477 144.405L834.947 325.547L937.585 510.056C938.114 511.006 938.378 511.481 938.378 512C938.378 512.519 938.114 512.994 937.585 513.945L834.947 698.453L726.477 879.595C725.918 880.528 725.639 880.995 725.189 881.254C724.74 881.514 724.196 881.522 723.109 881.54L512 884.907L300.892 881.54C299.804 881.522 299.26 881.514 298.811 881.254C298.362 880.995 298.082 880.528 297.524 879.595L189.053 698.453L86.4152 513.945Z" stroke="black" strokeWidth="20"/>
                <motion.circle 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}  
                    cx="512" cy="512" r="128" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}