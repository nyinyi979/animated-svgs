"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function FolderUploadAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: -50,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            translateY: 0,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Folder upload",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function FolderUploadAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: -50,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
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
                <path d="M682.667 853.333H829.333C837.734 853.333 841.934 853.333 845.143 851.698C847.966 850.26 850.26 847.966 851.698 845.143C853.333 841.935 853.333 837.734 853.333 829.333V365.333C853.333 356.933 853.333 352.732 851.698 349.524C850.26 346.701 847.966 344.406 845.143 342.968C841.934 341.333 837.734 341.333 829.333 341.333H564.608C560.939 341.333 559.105 341.333 557.378 340.919C555.848 340.551 554.384 339.945 553.042 339.123C551.529 338.195 550.232 336.898 547.637 334.304L433.696 220.363C431.102 217.769 429.805 216.471 428.291 215.544C426.949 214.721 425.486 214.115 423.955 213.748C422.229 213.333 420.394 213.333 416.726 213.333H194.667C186.266 213.333 182.066 213.333 178.857 214.968C176.034 216.406 173.74 218.701 172.302 221.524C170.667 224.732 170.667 228.933 170.667 237.333V829.333C170.667 837.734 170.667 841.935 172.302 845.143C173.74 847.966 176.034 850.26 178.857 851.698C182.066 853.333 186.266 853.333 194.667 853.333H341.333" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 512L384 640M512 512L640 640M512 512L512 810.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function FolderUploadAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateY:-50})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateY:0},
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
            transform: [{translateY:animationValue.value.translateY}]
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
                <Path d="M682.667 853.333H829.333C837.734 853.333 841.934 853.333 845.143 851.698C847.966 850.26 850.26 847.966 851.698 845.143C853.333 841.935 853.333 837.734 853.333 829.333V365.333C853.333 356.933 853.333 352.732 851.698 349.524C850.26 346.701 847.966 344.406 845.143 342.968C841.934 341.333 837.734 341.333 829.333 341.333H564.608C560.939 341.333 559.105 341.333 557.378 340.919C555.848 340.551 554.384 339.945 553.042 339.123C551.529 338.195 550.232 336.898 547.637 334.304L433.696 220.363C431.102 217.769 429.805 216.471 428.291 215.544C426.949 214.721 425.486 214.115 423.955 213.748C422.229 213.333 420.394 213.333 416.726 213.333H194.667C186.266 213.333 182.066 213.333 178.857 214.968C176.034 216.406 173.74 218.701 172.302 221.524C170.667 224.732 170.667 228.933 170.667 237.333V829.333C170.667 837.734 170.667 841.935 172.302 845.143C173.74 847.966 176.034 850.26 178.857 851.698C182.066 853.333 186.266 853.333 194.667 853.333H341.333" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M512 512L384 640M512 512L640 640M512 512L512 810.667" stroke="black" strokeWidth="20"/>
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
    <path d="M682.667 853.333H829.333C837.734 853.333 841.934 853.333 845.143 851.698C847.966 850.26 850.26 847.966 851.698 845.143C853.333 841.935 853.333 837.734 853.333 829.333V365.333C853.333 356.933 853.333 352.732 851.698 349.524C850.26 346.701 847.966 344.406 845.143 342.968C841.934 341.333 837.734 341.333 829.333 341.333H564.608C560.939 341.333 559.105 341.333 557.378 340.919C555.848 340.551 554.384 339.945 553.042 339.123C551.529 338.195 550.232 336.898 547.637 334.304L433.696 220.363C431.102 217.769 429.805 216.471 428.291 215.544C426.949 214.721 425.486 214.115 423.955 213.748C422.229 213.333 420.394 213.333 416.726 213.333H194.667C186.266 213.333 182.066 213.333 178.857 214.968C176.034 216.406 173.74 218.701 172.302 221.524C170.667 224.732 170.667 228.933 170.667 237.333V829.333C170.667 837.734 170.667 841.935 172.302 845.143C173.74 847.966 176.034 850.26 178.857 851.698C182.066 853.333 186.266 853.333 194.667 853.333H341.333" stroke="black" stroke-width="20" stroke-linejoin="round"/>
    <path d="M512 512L384 640M512 512L640 640M512 512L512 810.667" stroke="black" stroke-width="20"/>
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
                <path d="M682.667 853.333H829.333C837.734 853.333 841.934 853.333 845.143 851.698C847.966 850.26 850.26 847.966 851.698 845.143C853.333 841.935 853.333 837.734 853.333 829.333V365.333C853.333 356.933 853.333 352.732 851.698 349.524C850.26 346.701 847.966 344.406 845.143 342.968C841.934 341.333 837.734 341.333 829.333 341.333H564.608C560.939 341.333 559.105 341.333 557.378 340.919C555.848 340.551 554.384 339.945 553.042 339.123C551.529 338.195 550.232 336.898 547.637 334.304L433.696 220.363C431.102 217.769 429.805 216.471 428.291 215.544C426.949 214.721 425.486 214.115 423.955 213.748C422.229 213.333 420.394 213.333 416.726 213.333H194.667C186.266 213.333 182.066 213.333 178.857 214.968C176.034 216.406 173.74 218.701 172.302 221.524C170.667 224.732 170.667 228.933 170.667 237.333V829.333C170.667 837.734 170.667 841.935 172.302 845.143C173.74 847.966 176.034 850.26 178.857 851.698C182.066 853.333 186.266 853.333 194.667 853.333H341.333" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path 
                    initial={{translateY:0}}
                    animate={{translateY:animationValue.translateY}}
                    d="M512 512L384 640M512 512L640 640M512 512L512 810.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}