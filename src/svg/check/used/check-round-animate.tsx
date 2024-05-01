"use client"
import React from "react";
import { motion } from "framer-motion";
import { eachSVGType } from "@/app/page";
export default function CheckRoundAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        path: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            path: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            path: 1,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Check",
            react:`import React from "react";
import { motion } from "framer-motion";
export default function CheckRoundAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        path: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            path: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            path: 1,
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
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.5}}  
                    d="M384 426.667L553.925 554.11C554.343 554.424 554.933 554.362 555.277 553.969L853.333 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}}  
                    d="M896 512C896 592.234 870.868 670.453 824.133 735.671C777.398 800.89 711.409 849.831 635.433 875.621C559.457 901.412 477.31 902.756 400.531 879.465C323.751 856.174 256.196 809.419 207.352 745.764C158.509 682.11 130.831 604.755 128.206 524.564C125.58 444.373 148.14 365.373 192.716 298.661C237.291 231.949 301.644 180.875 376.736 152.612C451.828 124.35 533.886 120.318 611.386 141.084" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CheckRoundAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1920,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1920,strokeDashoffset:1920}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1920,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:1920,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,strokeDasharray:1920,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
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
                    d="M384 426.667L553.925 554.11C554.343 554.424 554.933 554.362 555.277 553.969L853.333 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M896 512C896 592.234 870.868 670.453 824.133 735.671C777.398 800.89 711.409 849.831 635.433 875.621C559.457 901.412 477.31 902.756 400.531 879.465C323.751 856.174 256.196 809.419 207.352 745.764C158.509 682.11 130.831 604.755 128.206 524.564C125.58 444.373 148.14 365.373 192.716 298.661C237.291 231.949 301.644 180.875 376.736 152.612C451.828 124.35 533.886 120.318 611.386 141.084" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M384 426.667L553.925 554.11C554.343 554.424 554.933 554.362 555.277 553.969L853.333 213.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
    <path d="M896 512C896 592.234 870.868 670.453 824.133 735.671C777.398 800.89 711.409 849.831 635.433 875.621C559.457 901.412 477.31 902.756 400.531 879.465C323.751 856.174 256.196 809.419 207.352 745.764C158.509 682.11 130.831 604.755 128.206 524.564C125.58 444.373 148.14 365.373 192.716 298.661C237.291 231.949 301.644 180.875 376.736 152.612C451.828 124.35 533.886 120.318 611.386 141.084" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.5}}  
                    d="M384 426.667L553.925 554.11C554.343 554.424 554.933 554.362 555.277 553.969L853.333 213.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
                <motion.path 
                    initial={{pathLength:1}} 
                    animate={{pathLength:[animationValue.path,1]}} 
                    transition={{duration:.4}}  
                    d="M896 512C896 592.234 870.868 670.453 824.133 735.671C777.398 800.89 711.409 849.831 635.433 875.621C559.457 901.412 477.31 902.756 400.531 879.465C323.751 856.174 256.196 809.419 207.352 745.764C158.509 682.11 130.831 604.755 128.206 524.564C125.58 444.373 148.14 365.373 192.716 298.661C237.291 231.949 301.644 180.875 376.736 152.612C451.828 124.35 533.886 120.318 611.386 141.084" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}