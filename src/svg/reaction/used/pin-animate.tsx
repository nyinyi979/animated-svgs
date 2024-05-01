"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function PinAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        rotate: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            rotate: [0,-4,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            rotate: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Pin",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function PinAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        rotate: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            rotate: [0,-4,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
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
                initial={{scale:1,rotate:0}}
                animate={{scale:animationValue.scale,rotate:animationValue.rotate}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M681.302 128.909C681.955 128.474 682.282 128.256 682.638 128.292C682.994 128.327 683.271 128.604 683.826 129.159L894.841 340.174C895.396 340.729 895.673 341.006 895.708 341.362C895.744 341.718 895.526 342.045 895.091 342.698L727.089 594.7C726.214 596.012 725.776 596.669 725.477 597.393C725.177 598.117 725.022 598.89 724.713 600.437L683.264 807.682C682.994 809.03 682.859 809.703 682.359 809.905C681.859 810.107 681.294 809.716 680.164 808.934L415.798 625.911C410.58 622.299 407.971 620.493 405.739 618.261C403.507 616.029 401.701 613.42 398.089 608.202L215.066 343.836C214.284 342.706 213.893 342.141 214.095 341.641C214.297 341.141 214.97 341.006 216.318 340.736L423.563 299.287C425.11 298.978 425.883 298.823 426.607 298.523C427.331 298.224 427.988 297.786 429.3 296.911L681.302 128.909Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.333 810.666L405.333 618.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function PinAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotate: 0,
        strokeDasharray:  1000,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,rotate:0,strokeDasharray:1000,strokeDashoffset:1000}
        animationValue.value = withSequence(
            withTiming({scale:1.1,rotate:-4,strokeDasharray:1000,strokeDashoffset:1}),
            withTiming({scale:1.1,rotate:0,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,rotate:0,strokeDasharray:1000,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}],
            rotation: animationValue.value.rotate
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
                <Path d="M681.302 128.909C681.955 128.474 682.282 128.256 682.638 128.292C682.994 128.327 683.271 128.604 683.826 129.159L894.841 340.174C895.396 340.729 895.673 341.006 895.708 341.362C895.744 341.718 895.526 342.045 895.091 342.698L727.089 594.7C726.214 596.012 725.776 596.669 725.477 597.393C725.177 598.117 725.022 598.89 724.713 600.437L683.264 807.682C682.994 809.03 682.859 809.703 682.359 809.905C681.859 810.107 681.294 809.716 680.164 808.934L415.798 625.911C410.58 622.299 407.971 620.493 405.739 618.261C403.507 616.029 401.701 613.42 398.089 608.202L215.066 343.836C214.284 342.706 213.893 342.141 214.095 341.641C214.297 341.141 214.97 341.006 216.318 340.736L423.563 299.287C425.11 298.978 425.883 298.823 426.607 298.523C427.331 298.224 427.988 297.786 429.3 296.911L681.302 128.909Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M213.333 810.666L405.333 618.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M681.302 128.909C681.955 128.474 682.282 128.256 682.638 128.292C682.994 128.327 683.271 128.604 683.826 129.159L894.841 340.174C895.396 340.729 895.673 341.006 895.708 341.362C895.744 341.718 895.526 342.045 895.091 342.698L727.089 594.7C726.214 596.012 725.776 596.669 725.477 597.393C725.177 598.117 725.022 598.89 724.713 600.437L683.264 807.682C682.994 809.03 682.859 809.703 682.359 809.905C681.859 810.107 681.294 809.716 680.164 808.934L415.798 625.911C410.58 622.299 407.971 620.493 405.739 618.261C403.507 616.029 401.701 613.42 398.089 608.202L215.066 343.836C214.284 342.706 213.893 342.141 214.095 341.641C214.297 341.141 214.97 341.006 216.318 340.736L423.563 299.287C425.11 298.978 425.883 298.823 426.607 298.523C427.331 298.224 427.988 297.786 429.3 296.911L681.302 128.909Z" stroke="black" stroke-width="20"/>
    <path d="M213.333 810.666L405.333 618.666" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                initial={{scale:1,rotate:0}}
                animate={{scale:animationValue.scale,rotate:animationValue.rotate}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M681.302 128.909C681.955 128.474 682.282 128.256 682.638 128.292C682.994 128.327 683.271 128.604 683.826 129.159L894.841 340.174C895.396 340.729 895.673 341.006 895.708 341.362C895.744 341.718 895.526 342.045 895.091 342.698L727.089 594.7C726.214 596.012 725.776 596.669 725.477 597.393C725.177 598.117 725.022 598.89 724.713 600.437L683.264 807.682C682.994 809.03 682.859 809.703 682.359 809.905C681.859 810.107 681.294 809.716 680.164 808.934L415.798 625.911C410.58 622.299 407.971 620.493 405.739 618.261C403.507 616.029 401.701 613.42 398.089 608.202L215.066 343.836C214.284 342.706 213.893 342.141 214.095 341.641C214.297 341.141 214.97 341.006 216.318 340.736L423.563 299.287C425.11 298.978 425.883 298.823 426.607 298.523C427.331 298.224 427.988 297.786 429.3 296.911L681.302 128.909Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M213.333 810.666L405.333 618.666" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}