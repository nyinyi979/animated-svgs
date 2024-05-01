"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function MusicAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        rotateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotateX: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotateX: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function MusicAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotateX: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotateX: [0,20,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotateX: [0],
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
                animate={{scale:animationValue.scale,rotateX:animationValue.rotateX}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M384 682.667H174.667C172.781 682.667 171.838 682.667 171.252 683.253C170.667 683.838 170.667 684.781 170.667 686.667V891.121C170.667 893.378 170.667 894.507 171.399 895.107C172.131 895.707 173.237 895.486 175.451 895.043L380.784 853.976C382.324 853.669 383.093 853.515 383.547 852.962C384 852.409 384 851.624 384 850.054V259.279C384 257.71 384 256.925 384.453 256.372C384.906 255.819 385.676 255.665 387.215 255.357L805.882 171.624C808.096 171.181 809.202 170.96 809.935 171.56C810.667 172.16 810.667 173.289 810.667 175.546V384M810.667 597.333V764.721C810.667 766.291 810.667 767.075 810.213 767.628C809.76 768.181 808.99 768.335 807.451 768.643L602.118 809.71C599.904 810.153 598.797 810.374 598.065 809.774C597.333 809.174 597.333 808.045 597.333 805.787V601.333C597.333 599.448 597.333 598.505 597.919 597.919C598.505 597.333 599.448 597.333 601.333 597.333H810.667ZM810.667 597.333V384M810.667 384L384 469.333" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path, Rect } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function MusicAnimate(){
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        rotateX: 0,
        scale: 1,
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({rotateX:20,scale:1.1}),
            withTiming({rotateX:0,scale:1.1})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {rotateX:0,scale:1},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const viewAnimatedStyle = useAnimatedStyle(()=>{
        return{
            transform: [{rotateX:\`\${animationValue.value.rotateX}deg\`}]
        }
    })
    return(
        <Animated.View 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
            style={[styles.container,viewAnimatedStyle]}
        >
            <AnimatedSvg 
                animatedProps={svgAnimatedProps}
                style={styles.svg}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >     
                <Path d="M384 682.667H174.667C172.781 682.667 171.838 682.667 171.252 683.253C170.667 683.838 170.667 684.781 170.667 686.667V891.121C170.667 893.378 170.667 894.507 171.399 895.107C172.131 895.707 173.237 895.486 175.451 895.043L380.784 853.976C382.324 853.669 383.093 853.515 383.547 852.962C384 852.409 384 851.624 384 850.054V259.279C384 257.71 384 256.925 384.453 256.372C384.906 255.819 385.676 255.665 387.215 255.357L805.882 171.624C808.096 171.181 809.202 170.96 809.935 171.56C810.667 172.16 810.667 173.289 810.667 175.546V384M810.667 597.333V764.721C810.667 766.291 810.667 767.075 810.213 767.628C809.76 768.181 808.99 768.335 807.451 768.643L602.118 809.71C599.904 810.153 598.797 810.374 598.065 809.774C597.333 809.174 597.333 808.045 597.333 805.787V601.333C597.333 599.448 597.333 598.505 597.919 597.919C598.505 597.333 599.448 597.333 601.333 597.333H810.667ZM810.667 597.333V384M810.667 384L384 469.333" stroke="black" strokeWidth="20"/>
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
    <path d="M384 682.667H174.667C172.781 682.667 171.838 682.667 171.252 683.253C170.667 683.838 170.667 684.781 170.667 686.667V891.121C170.667 893.378 170.667 894.507 171.399 895.107C172.131 895.707 173.237 895.486 175.451 895.043L380.784 853.976C382.324 853.669 383.093 853.515 383.547 852.962C384 852.409 384 851.624 384 850.054V259.279C384 257.71 384 256.925 384.453 256.372C384.906 255.819 385.676 255.665 387.215 255.357L805.882 171.624C808.096 171.181 809.202 170.96 809.935 171.56C810.667 172.16 810.667 173.289 810.667 175.546V384M810.667 597.333V764.721C810.667 766.291 810.667 767.075 810.213 767.628C809.76 768.181 808.99 768.335 807.451 768.643L602.118 809.71C599.904 810.153 598.797 810.374 598.065 809.774C597.333 809.174 597.333 808.045 597.333 805.787V601.333C597.333 599.448 597.333 598.505 597.919 597.919C598.505 597.333 599.448 597.333 601.333 597.333H810.667ZM810.667 597.333V384M810.667 384L384 469.333" stroke="black" stroke-width="20"/>
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
                animate={{scale:animationValue.scale,rotateX:animationValue.rotateX}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M384 682.667H174.667C172.781 682.667 171.838 682.667 171.252 683.253C170.667 683.838 170.667 684.781 170.667 686.667V891.121C170.667 893.378 170.667 894.507 171.399 895.107C172.131 895.707 173.237 895.486 175.451 895.043L380.784 853.976C382.324 853.669 383.093 853.515 383.547 852.962C384 852.409 384 851.624 384 850.054V259.279C384 257.71 384 256.925 384.453 256.372C384.906 255.819 385.676 255.665 387.215 255.357L805.882 171.624C808.096 171.181 809.202 170.96 809.935 171.56C810.667 172.16 810.667 173.289 810.667 175.546V384M810.667 597.333V764.721C810.667 766.291 810.667 767.075 810.213 767.628C809.76 768.181 808.99 768.335 807.451 768.643L602.118 809.71C599.904 810.153 598.797 810.374 598.065 809.774C597.333 809.174 597.333 808.045 597.333 805.787V601.333C597.333 599.448 597.333 598.505 597.919 597.919C598.505 597.333 599.448 597.333 601.333 597.333H810.667ZM810.667 597.333V384M810.667 384L384 469.333" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}