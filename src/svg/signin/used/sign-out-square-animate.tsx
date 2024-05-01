"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function SignOutSquareAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-50],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [-50,0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Sign out square",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function SignOutSquareAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: [0,-50],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: [-50,0],
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
                    d="M85.3334 512L77.5247 505.753L72.5271 512L77.5247 518.247L85.3334 512ZM469.333 522C474.856 522 479.333 517.523 479.333 512C479.333 506.477 474.856 502 469.333 502V522ZM248.191 292.42L77.5247 505.753L93.1421 518.247L263.809 304.914L248.191 292.42ZM77.5247 518.247L248.191 731.58L263.809 719.086L93.1421 505.753L77.5247 518.247ZM85.3334 522H469.333V502H85.3334V522Z" fill="black"/>
                <path d="M426.667 346.962V174.055C426.667 172.437 426.667 171.628 427.141 171.068C427.615 170.509 428.413 170.376 430.009 170.11L931.68 86.4977C934.923 85.9571 936.545 85.6869 937.606 86.5856C938.667 87.4843 938.667 89.1282 938.667 92.416V931.584C938.667 934.872 938.667 936.516 937.606 937.414C936.545 938.313 934.923 938.043 931.68 937.502L430.009 853.89C428.413 853.624 427.615 853.491 427.141 852.932C426.667 852.372 426.667 851.563 426.667 849.945V685.481" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function SignOutSquareAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateX: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateX:-50})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1.1,translateX:0},
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
            transform: [{translateX:animationValue.value.translateX}]
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
                    d="M85.3334 512L77.5247 505.753L72.5271 512L77.5247 518.247L85.3334 512ZM469.333 522C474.856 522 479.333 517.523 479.333 512C479.333 506.477 474.856 502 469.333 502V522ZM248.191 292.42L77.5247 505.753L93.1421 518.247L263.809 304.914L248.191 292.42ZM77.5247 518.247L248.191 731.58L263.809 719.086L93.1421 505.753L77.5247 518.247ZM85.3334 522H469.333V502H85.3334V522Z" fill="black"/>
                <Path d="M426.667 346.962V174.055C426.667 172.437 426.667 171.628 427.141 171.068C427.615 170.509 428.413 170.376 430.009 170.11L931.68 86.4977C934.923 85.9571 936.545 85.6869 937.606 86.5856C938.667 87.4843 938.667 89.1282 938.667 92.416V931.584C938.667 934.872 938.667 936.516 937.606 937.414C936.545 938.313 934.923 938.043 931.68 937.502L430.009 853.89C428.413 853.624 427.615 853.491 427.141 852.932C426.667 852.372 426.667 851.563 426.667 849.945V685.481" stroke="black" strokeWidth="20"/>
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
    <path d="M85.3334 512L77.5247 505.753L72.5271 512L77.5247 518.247L85.3334 512ZM469.333 522C474.856 522 479.333 517.523 479.333 512C479.333 506.477 474.856 502 469.333 502V522ZM248.191 292.42L77.5247 505.753L93.1421 518.247L263.809 304.914L248.191 292.42ZM77.5247 518.247L248.191 731.58L263.809 719.086L93.1421 505.753L77.5247 518.247ZM85.3334 522H469.333V502H85.3334V522Z" fill="black"/>
    <path d="M426.667 346.962V174.055C426.667 172.437 426.667 171.628 427.141 171.068C427.615 170.509 428.413 170.376 430.009 170.11L931.68 86.4977C934.923 85.9571 936.545 85.6869 937.606 86.5856C938.667 87.4843 938.667 89.1282 938.667 92.416V931.584C938.667 934.872 938.667 936.516 937.606 937.414C936.545 938.313 934.923 938.043 931.68 937.502L430.009 853.89C428.413 853.624 427.615 853.491 427.141 852.932C426.667 852.372 426.667 851.563 426.667 849.945V685.481" stroke="black" stroke-width="20"/>
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
                    d="M85.3334 512L77.5247 505.753L72.5271 512L77.5247 518.247L85.3334 512ZM469.333 522C474.856 522 479.333 517.523 479.333 512C479.333 506.477 474.856 502 469.333 502V522ZM248.191 292.42L77.5247 505.753L93.1421 518.247L263.809 304.914L248.191 292.42ZM77.5247 518.247L248.191 731.58L263.809 719.086L93.1421 505.753L77.5247 518.247ZM85.3334 522H469.333V502H85.3334V522Z" fill="black"/>
                <path d="M426.667 346.962V174.055C426.667 172.437 426.667 171.628 427.141 171.068C427.615 170.509 428.413 170.376 430.009 170.11L931.68 86.4977C934.923 85.9571 936.545 85.6869 937.606 86.5856C938.667 87.4843 938.667 89.1282 938.667 92.416V931.584C938.667 934.872 938.667 936.516 937.606 937.414C936.545 938.313 934.923 938.043 931.68 937.502L430.009 853.89C428.413 853.624 427.615 853.491 427.141 852.932C426.667 852.372 426.667 851.563 426.667 849.945V685.481" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}