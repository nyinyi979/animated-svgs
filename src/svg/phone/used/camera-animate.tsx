"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function CameraAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Camera",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function CameraAnimate(){
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
                <path d="M128 381.333C128 362.477 128 353.049 133.858 347.191C139.716 341.333 149.144 341.333 168 341.333H231.279C243.307 341.333 249.321 341.333 254.154 338.346C258.987 335.359 261.677 329.98 267.056 319.222L340.228 172.878C340.766 171.802 341.035 171.264 341.518 170.965C342.001 170.667 342.603 170.667 343.805 170.667H680.195C681.397 170.667 681.999 170.667 682.482 170.965C682.965 171.264 683.234 171.802 683.772 172.878L756.944 319.222C762.323 329.98 765.013 335.359 769.846 338.346C774.679 341.333 780.693 341.333 792.721 341.333H856C874.856 341.333 884.284 341.333 890.142 347.191C896 353.049 896 362.477 896 381.333V847.333C896 850.162 896 851.576 895.121 852.455C894.243 853.333 892.828 853.333 890 853.333H134C131.172 853.333 129.757 853.333 128.879 852.455C128 851.576 128 850.162 128 847.333V381.333Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} d="M682.067 554.667C682.067 648.592 605.925 724.733 512 724.733C418.075 724.733 341.933 648.592 341.933 554.667C341.933 460.741 418.075 384.6 512 384.6C605.925 384.6 682.067 460.741 682.067 554.667Z" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function CameraAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  1200,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:1200,strokeDashoffset:1200}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:1200,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:1200,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:1000,strokeDashoffset:1},
            {easing:Easing.bounce,duration:1200}
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
                <Path d="M128 381.333C128 362.477 128 353.049 133.858 347.191C139.716 341.333 149.144 341.333 168 341.333H231.279C243.307 341.333 249.321 341.333 254.154 338.346C258.987 335.359 261.677 329.98 267.056 319.222L340.228 172.878C340.766 171.802 341.035 171.264 341.518 170.965C342.001 170.667 342.603 170.667 343.805 170.667H680.195C681.397 170.667 681.999 170.667 682.482 170.965C682.965 171.264 683.234 171.802 683.772 172.878L756.944 319.222C762.323 329.98 765.013 335.359 769.846 338.346C774.679 341.333 780.693 341.333 792.721 341.333H856C874.856 341.333 884.284 341.333 890.142 347.191C896 353.049 896 362.477 896 381.333V847.333C896 850.162 896 851.576 895.121 852.455C894.243 853.333 892.828 853.333 890 853.333H134C131.172 853.333 129.757 853.333 128.879 852.455C128 851.576 128 850.162 128 847.333V381.333Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M682.067 554.667C682.067 648.592 605.925 724.733 512 724.733C418.075 724.733 341.933 648.592 341.933 554.667C341.933 460.741 418.075 384.6 512 384.6C605.925 384.6 682.067 460.741 682.067 554.667Z" stroke="black" strokeWidth="20"/>
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
    <path d="M128 381.333C128 362.477 128 353.049 133.858 347.191C139.716 341.333 149.144 341.333 168 341.333H231.279C243.307 341.333 249.321 341.333 254.154 338.346C258.987 335.359 261.677 329.98 267.056 319.222L340.228 172.878C340.766 171.802 341.035 171.264 341.518 170.965C342.001 170.667 342.603 170.667 343.805 170.667H680.195C681.397 170.667 681.999 170.667 682.482 170.965C682.965 171.264 683.234 171.802 683.772 172.878L756.944 319.222C762.323 329.98 765.013 335.359 769.846 338.346C774.679 341.333 780.693 341.333 792.721 341.333H856C874.856 341.333 884.284 341.333 890.142 347.191C896 353.049 896 362.477 896 381.333V847.333C896 850.162 896 851.576 895.121 852.455C894.243 853.333 892.828 853.333 890 853.333H134C131.172 853.333 129.757 853.333 128.879 852.455C128 851.576 128 850.162 128 847.333V381.333Z" stroke="black" stroke-width="20"/>
    <path d="M682.067 554.667C682.067 648.592 605.925 724.733 512 724.733C418.075 724.733 341.933 648.592 341.933 554.667C341.933 460.741 418.075 384.6 512 384.6C605.925 384.6 682.067 460.741 682.067 554.667Z" stroke="black" stroke-width="20"/>
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
                <path d="M128 381.333C128 362.477 128 353.049 133.858 347.191C139.716 341.333 149.144 341.333 168 341.333H231.279C243.307 341.333 249.321 341.333 254.154 338.346C258.987 335.359 261.677 329.98 267.056 319.222L340.228 172.878C340.766 171.802 341.035 171.264 341.518 170.965C342.001 170.667 342.603 170.667 343.805 170.667H680.195C681.397 170.667 681.999 170.667 682.482 170.965C682.965 171.264 683.234 171.802 683.772 172.878L756.944 319.222C762.323 329.98 765.013 335.359 769.846 338.346C774.679 341.333 780.693 341.333 792.721 341.333H856C874.856 341.333 884.284 341.333 890.142 347.191C896 353.049 896 362.477 896 381.333V847.333C896 850.162 896 851.576 895.121 852.455C894.243 853.333 892.828 853.333 890 853.333H134C131.172 853.333 129.757 853.333 128.879 852.455C128 851.576 128 850.162 128 847.333V381.333Z" stroke="black" strokeWidth="20"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} d="M682.067 554.667C682.067 648.592 605.925 724.733 512 724.733C418.075 724.733 341.933 648.592 341.933 554.667C341.933 460.741 418.075 384.6 512 384.6C605.925 384.6 682.067 460.741 682.067 554.667Z" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}