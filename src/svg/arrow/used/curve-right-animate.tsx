"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function CurveRightAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Curve right",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function CurveRightAnimate(){
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
                    d="M853.334 341.333L860.405 348.404L867.476 341.333L860.405 334.262L853.334 341.333ZM352.667 810.666L352.667 800.666L352.667 810.666ZM640 820.666C645.523 820.666 650 816.189 650 810.666C650 805.144 645.523 800.666 640 800.666L640 820.666ZM647.071 561.738L860.405 348.404L846.262 334.262L632.929 547.595L647.071 561.738ZM860.405 334.262L647.071 120.929L632.929 135.071L846.262 348.404L860.405 334.262ZM853.334 331.333L352.667 331.333L352.667 351.333L853.334 351.333L853.334 331.333ZM160.667 523.333L160.667 628.666L180.667 628.666L180.667 523.333L160.667 523.333ZM352.667 820.666L640 820.666L640 800.666L352.667 800.666L352.667 820.666ZM160.667 628.666C160.667 734.705 246.628 820.666 352.667 820.666L352.667 800.666C257.674 800.666 180.667 723.659 180.667 628.666L160.667 628.666ZM352.667 331.333C246.628 331.333 160.667 417.294 160.667 523.333L180.667 523.333C180.667 428.34 257.674 351.333 352.667 351.333L352.667 331.333Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CurveRightAnimate(){
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
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M853.334 341.333L860.405 348.404L867.476 341.333L860.405 334.262L853.334 341.333ZM352.667 810.666L352.667 800.666L352.667 810.666ZM640 820.666C645.523 820.666 650 816.189 650 810.666C650 805.144 645.523 800.666 640 800.666L640 820.666ZM647.071 561.738L860.405 348.404L846.262 334.262L632.929 547.595L647.071 561.738ZM860.405 334.262L647.071 120.929L632.929 135.071L846.262 348.404L860.405 334.262ZM853.334 331.333L352.667 331.333L352.667 351.333L853.334 351.333L853.334 331.333ZM160.667 523.333L160.667 628.666L180.667 628.666L180.667 523.333L160.667 523.333ZM352.667 820.666L640 820.666L640 800.666L352.667 800.666L352.667 820.666ZM160.667 628.666C160.667 734.705 246.628 820.666 352.667 820.666L352.667 800.666C257.674 800.666 180.667 723.659 180.667 628.666L160.667 628.666ZM352.667 331.333C246.628 331.333 160.667 417.294 160.667 523.333L180.667 523.333C180.667 428.34 257.674 351.333 352.667 351.333L352.667 331.333Z" fill="black"/>
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
    <path d="M853.334 341.333L860.405 348.404L867.476 341.333L860.405 334.262L853.334 341.333ZM352.667 810.666L352.667 800.666L352.667 810.666ZM640 820.666C645.523 820.666 650 816.189 650 810.666C650 805.144 645.523 800.666 640 800.666L640 820.666ZM647.071 561.738L860.405 348.404L846.262 334.262L632.929 547.595L647.071 561.738ZM860.405 334.262L647.071 120.929L632.929 135.071L846.262 348.404L860.405 334.262ZM853.334 331.333L352.667 331.333L352.667 351.333L853.334 351.333L853.334 331.333ZM160.667 523.333L160.667 628.666L180.667 628.666L180.667 523.333L160.667 523.333ZM352.667 820.666L640 820.666L640 800.666L352.667 800.666L352.667 820.666ZM160.667 628.666C160.667 734.705 246.628 820.666 352.667 820.666L352.667 800.666C257.674 800.666 180.667 723.659 180.667 628.666L160.667 628.666ZM352.667 331.333C246.628 331.333 160.667 417.294 160.667 523.333L180.667 523.333C180.667 428.34 257.674 351.333 352.667 351.333L352.667 331.333Z" fill="black"/>
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
                    d="M853.334 341.333L860.405 348.404L867.476 341.333L860.405 334.262L853.334 341.333ZM352.667 810.666L352.667 800.666L352.667 810.666ZM640 820.666C645.523 820.666 650 816.189 650 810.666C650 805.144 645.523 800.666 640 800.666L640 820.666ZM647.071 561.738L860.405 348.404L846.262 334.262L632.929 547.595L647.071 561.738ZM860.405 334.262L647.071 120.929L632.929 135.071L846.262 348.404L860.405 334.262ZM853.334 331.333L352.667 331.333L352.667 351.333L853.334 351.333L853.334 331.333ZM160.667 523.333L160.667 628.666L180.667 628.666L180.667 523.333L160.667 523.333ZM352.667 820.666L640 820.666L640 800.666L352.667 800.666L352.667 820.666ZM160.667 628.666C160.667 734.705 246.628 820.666 352.667 820.666L352.667 800.666C257.674 800.666 180.667 723.659 180.667 628.666L160.667 628.666ZM352.667 331.333C246.628 331.333 160.667 417.294 160.667 523.333L180.667 523.333C180.667 428.34 257.674 351.333 352.667 351.333L352.667 331.333Z" fill="black"/>
            </motion.svg>
        </div>
    )
}