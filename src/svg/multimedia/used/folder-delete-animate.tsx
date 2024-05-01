"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function FolderDeleteAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translate: -50,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translate: 0,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Folder delete",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function FolderDeleteAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translate: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translate: -50,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translate: 0,
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
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translate,translateY:animationValue.translate}}
                    d="M682.671 896L896 682.667M895.996 896L682.667 682.667" stroke="black" strokeWidth="20"/>
                <path d="M853.333 576V345.333C853.333 343.448 853.333 342.505 852.747 341.919C852.162 341.333 851.219 341.333 849.333 341.333H556.323C555.506 341.333 555.097 341.333 554.73 341.181C554.362 341.029 554.073 340.74 553.495 340.162L427.838 214.505C427.26 213.927 426.971 213.638 426.604 213.486C426.236 213.333 425.827 213.333 425.01 213.333H174.667C172.781 213.333 171.838 213.333 171.252 213.919C170.667 214.505 170.667 215.448 170.667 217.333V806.667C170.667 808.552 170.667 809.495 171.252 810.081C171.838 810.667 172.781 810.667 174.667 810.667H554.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function FolderDeleteAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translate: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translate:-50})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translate:0},
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
            translateX: animationValue.value.translate,
            translateY: animationValue.value.translate
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
                    d="M682.671 896L896 682.667M895.996 896L682.667 682.667" stroke="black" strokeWidth="20"/>
                <Path d="M853.333 576V345.333C853.333 343.448 853.333 342.505 852.747 341.919C852.162 341.333 851.219 341.333 849.333 341.333H556.323C555.506 341.333 555.097 341.333 554.73 341.181C554.362 341.029 554.073 340.74 553.495 340.162L427.838 214.505C427.26 213.927 426.971 213.638 426.604 213.486C426.236 213.333 425.827 213.333 425.01 213.333H174.667C172.781 213.333 171.838 213.333 171.252 213.919C170.667 214.505 170.667 215.448 170.667 217.333V806.667C170.667 808.552 170.667 809.495 171.252 810.081C171.838 810.667 172.781 810.667 174.667 810.667H554.667" stroke="black" strokeWidth="20"/>
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
    <path d="M682.671 896L896 682.667M895.996 896L682.667 682.667" stroke="black" stroke-width="20"/>
    <path d="M853.333 576V345.333C853.333 343.448 853.333 342.505 852.747 341.919C852.162 341.333 851.219 341.333 849.333 341.333H556.323C555.506 341.333 555.097 341.333 554.73 341.181C554.362 341.029 554.073 340.74 553.495 340.162L427.838 214.505C427.26 213.927 426.971 213.638 426.604 213.486C426.236 213.333 425.827 213.333 425.01 213.333H174.667C172.781 213.333 171.838 213.333 171.252 213.919C170.667 214.505 170.667 215.448 170.667 217.333V806.667C170.667 808.552 170.667 809.495 171.252 810.081C171.838 810.667 172.781 810.667 174.667 810.667H554.667" stroke="black" stroke-width="20"/>
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
                    initial={{translateX:0,translateY:0}}
                    animate={{translateX:animationValue.translate,translateY:animationValue.translate}}
                    d="M682.671 896L896 682.667M895.996 896L682.667 682.667" stroke="black" strokeWidth="20"/>
                <path d="M853.333 576V345.333C853.333 343.448 853.333 342.505 852.747 341.919C852.162 341.333 851.219 341.333 849.333 341.333H556.323C555.506 341.333 555.097 341.333 554.73 341.181C554.362 341.029 554.073 340.74 553.495 340.162L427.838 214.505C427.26 213.927 426.971 213.638 426.604 213.486C426.236 213.333 425.827 213.333 425.01 213.333H174.667C172.781 213.333 171.838 213.333 171.252 213.919C170.667 214.505 170.667 215.448 170.667 217.333V806.667C170.667 808.552 170.667 809.495 171.252 810.081C171.838 810.667 172.781 810.667 174.667 810.667H554.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}