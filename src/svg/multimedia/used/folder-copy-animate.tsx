"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function FolderCopyAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: 0,
        translateY: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: -20,
            translateY: 20,
            scale: 1.05
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: 0,
            translateY: 0,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Folder copy",
            react:`import React from "react"
import React from "react"
import { motion } from "framer-motion"

export default function FolderCopyAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: 0,
        translateY: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateX: -20,
            translateY: 20,
            scale: 1.05
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateX: 0,
            translateY: 0,
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
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}}
                    d="M341.333 215.333C341.333 214.391 341.333 213.919 341.626 213.626C341.919 213.333 342.391 213.333 343.333 213.333H553.431C554.032 213.333 554.333 213.333 554.574 213.483C554.816 213.632 554.951 213.901 555.219 214.439L618.667 341.333H851.333C852.276 341.333 852.748 341.333 853.04 341.626C853.333 341.919 853.333 342.391 853.333 343.333V638C853.333 638.943 853.333 639.414 853.04 639.707C852.748 640 852.276 640 851.333 640H343.333C342.391 640 341.919 640 341.626 639.707C341.333 639.414 341.333 638.943 341.333 638V215.333Z" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <path d="M725.333 640V786.667C725.333 795.068 725.333 799.268 723.698 802.477C722.26 805.299 719.966 807.594 717.143 809.032C713.935 810.667 709.734 810.667 701.333 810.667H194.667C186.266 810.667 182.066 810.667 178.857 809.032C176.034 807.594 173.74 805.299 172.302 802.477C170.667 799.268 170.667 795.068 170.667 786.667V365.333C170.667 356.933 170.667 352.732 172.302 349.524C173.74 346.701 176.034 344.406 178.857 342.968C182.066 341.333 186.266 341.333 194.667 341.333H341.333" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function FolderCopyAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
        translateX: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateX:-20,translateY:20})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateX:0,translateY:0},
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
            translateX: animationValue.value.translateX,
            translateY: animationValue.value.translateY
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
                    d="M341.333 215.333C341.333 214.391 341.333 213.919 341.626 213.626C341.919 213.333 342.391 213.333 343.333 213.333H553.431C554.032 213.333 554.333 213.333 554.574 213.483C554.816 213.632 554.951 213.901 555.219 214.439L618.667 341.333H851.333C852.276 341.333 852.748 341.333 853.04 341.626C853.333 341.919 853.333 342.391 853.333 343.333V638C853.333 638.943 853.333 639.414 853.04 639.707C852.748 640 852.276 640 851.333 640H343.333C342.391 640 341.919 640 341.626 639.707C341.333 639.414 341.333 638.943 341.333 638V215.333Z" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <Path d="M725.333 640V786.667C725.333 795.068 725.333 799.268 723.698 802.477C722.26 805.299 719.966 807.594 717.143 809.032C713.935 810.667 709.734 810.667 701.333 810.667H194.667C186.266 810.667 182.066 810.667 178.857 809.032C176.034 807.594 173.74 805.299 172.302 802.477C170.667 799.268 170.667 795.068 170.667 786.667V365.333C170.667 356.933 170.667 352.732 172.302 349.524C173.74 346.701 176.034 344.406 178.857 342.968C182.066 341.333 186.266 341.333 194.667 341.333H341.333" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
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
            svg:``
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
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}}
                    d="M341.333 215.333C341.333 214.391 341.333 213.919 341.626 213.626C341.919 213.333 342.391 213.333 343.333 213.333H553.431C554.032 213.333 554.333 213.333 554.574 213.483C554.816 213.632 554.951 213.901 555.219 214.439L618.667 341.333H851.333C852.276 341.333 852.748 341.333 853.04 341.626C853.333 341.919 853.333 342.391 853.333 343.333V638C853.333 638.943 853.333 639.414 853.04 639.707C852.748 640 852.276 640 851.333 640H343.333C342.391 640 341.919 640 341.626 639.707C341.333 639.414 341.333 638.943 341.333 638V215.333Z" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <path d="M725.333 640V786.667C725.333 795.068 725.333 799.268 723.698 802.477C722.26 805.299 719.966 807.594 717.143 809.032C713.935 810.667 709.734 810.667 701.333 810.667H194.667C186.266 810.667 182.066 810.667 178.857 809.032C176.034 807.594 173.74 805.299 172.302 802.477C170.667 799.268 170.667 795.068 170.667 786.667V365.333C170.667 356.933 170.667 352.732 172.302 349.524C173.74 346.701 176.034 344.406 178.857 342.968C182.066 341.333 186.266 341.333 194.667 341.333H341.333" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}