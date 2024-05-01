"use client"
import React from "react";
import { motion } from "framer-motion";
import { eachSVGType } from "@/app/page";
export default function FolderFileAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        scale: 1,
        pathLength: 1
    });
    const animate = () => {
        setAnimationValue({
            scale: 1.1,
            pathLength: 0
        })
    }
    const inanimate = () => {
        setAnimationValue({
            scale: 1,
            pathLength: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Folder file",
            react:`"import React from "react";
import { motion } from "framer-motion";
export default function FolderFileAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        scale: 1,
        pathLength: 1
    });
    const animate = () => {
        setAnimationValue({
            scale: 1.1,
            pathLength: 0
        })
    }
    const inanimate = () => {
        setAnimationValue({
            scale: 1,
            pathLength: 1
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
                <path d="M170.667 450.667C170.667 442.266 170.667 438.065 172.302 434.857C173.74 432.034 176.034 429.74 178.857 428.302C182.066 426.667 186.266 426.667 194.667 426.667H416.726C420.394 426.667 422.229 426.667 423.955 427.081C425.486 427.449 426.949 428.055 428.291 428.877C429.805 429.805 431.102 431.102 433.696 433.696L547.637 547.637C550.232 550.231 551.529 551.529 553.042 552.456C554.384 553.279 555.848 553.885 557.378 554.252C559.105 554.667 560.939 554.667 564.608 554.667H829.333C837.734 554.667 841.934 554.667 845.143 556.302C847.966 557.74 850.26 560.034 851.698 562.857C853.333 566.065 853.333 570.266 853.333 578.667V872C853.333 880.401 853.333 884.601 851.698 887.81C850.26 890.632 847.966 892.927 845.143 894.365C841.934 896 837.734 896 829.333 896H194.667C186.266 896 182.066 896 178.857 894.365C176.034 892.927 173.74 890.632 172.302 887.81C170.667 884.601 170.667 880.401 170.667 872V450.667Z" stroke="black" strokeWidth="20"/>
                <path d="M768 554.667V298.667L640 170.667H272C266.399 170.667 263.599 170.667 261.46 171.757C259.578 172.715 258.049 174.245 257.09 176.127C256 178.266 256 181.066 256 186.667V426.667" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    d="M554.667 170.667V376C554.667 378.8 554.667 380.2 555.212 381.27C555.691 382.211 556.456 382.976 557.397 383.455C558.466 384 559.866 384 562.667 384H768" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function FolderFileAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
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
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/Svg"
            >
                <path d="M170.667 450.667C170.667 442.266 170.667 438.065 172.302 434.857C173.74 432.034 176.034 429.74 178.857 428.302C182.066 426.667 186.266 426.667 194.667 426.667H416.726C420.394 426.667 422.229 426.667 423.955 427.081C425.486 427.449 426.949 428.055 428.291 428.877C429.805 429.805 431.102 431.102 433.696 433.696L547.637 547.637C550.232 550.231 551.529 551.529 553.042 552.456C554.384 553.279 555.848 553.885 557.378 554.252C559.105 554.667 560.939 554.667 564.608 554.667H829.333C837.734 554.667 841.934 554.667 845.143 556.302C847.966 557.74 850.26 560.034 851.698 562.857C853.333 566.065 853.333 570.266 853.333 578.667V872C853.333 880.401 853.333 884.601 851.698 887.81C850.26 890.632 847.966 892.927 845.143 894.365C841.934 896 837.734 896 829.333 896H194.667C186.266 896 182.066 896 178.857 894.365C176.034 892.927 173.74 890.632 172.302 887.81C170.667 884.601 170.667 880.401 170.667 872V450.667Z" stroke="black" strokeWidth="20"/>
                <path d="M768 554.667V298.667L640 170.667H272C266.399 170.667 263.599 170.667 261.46 171.757C259.578 172.715 258.049 174.245 257.09 176.127C256 178.266 256 181.066 256 186.667V426.667" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M554.667 170.667V376C554.667 378.8 554.667 380.2 555.212 381.27C555.691 382.211 556.456 382.976 557.397 383.455C558.466 384 559.866 384 562.667 384H768" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
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
    <path d="M170.667 450.667C170.667 442.266 170.667 438.065 172.302 434.857C173.74 432.034 176.034 429.74 178.857 428.302C182.066 426.667 186.266 426.667 194.667 426.667H416.726C420.394 426.667 422.229 426.667 423.955 427.081C425.486 427.449 426.949 428.055 428.291 428.877C429.805 429.805 431.102 431.102 433.696 433.696L547.637 547.637C550.232 550.231 551.529 551.529 553.042 552.456C554.384 553.279 555.848 553.885 557.378 554.252C559.105 554.667 560.939 554.667 564.608 554.667H829.333C837.734 554.667 841.934 554.667 845.143 556.302C847.966 557.74 850.26 560.034 851.698 562.857C853.333 566.065 853.333 570.266 853.333 578.667V872C853.333 880.401 853.333 884.601 851.698 887.81C850.26 890.632 847.966 892.927 845.143 894.365C841.934 896 837.734 896 829.333 896H194.667C186.266 896 182.066 896 178.857 894.365C176.034 892.927 173.74 890.632 172.302 887.81C170.667 884.601 170.667 880.401 170.667 872V450.667Z" stroke="black" stroke-width="20"/>
    <path d="M768 554.667V298.667L640 170.667H272C266.399 170.667 263.599 170.667 261.46 171.757C259.578 172.715 258.049 174.245 257.09 176.127C256 178.266 256 181.066 256 186.667V426.667" stroke="black" stroke-width="20" stroke-linejoin="round"/>
    <path d="M554.667 170.667V376C554.667 378.8 554.667 380.2 555.212 381.27C555.691 382.211 556.456 382.976 557.397 383.455C558.466 384 559.866 384 562.667 384H768" stroke="black" stroke-width="20" stroke-linejoin="round"/>
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
                <path d="M170.667 450.667C170.667 442.266 170.667 438.065 172.302 434.857C173.74 432.034 176.034 429.74 178.857 428.302C182.066 426.667 186.266 426.667 194.667 426.667H416.726C420.394 426.667 422.229 426.667 423.955 427.081C425.486 427.449 426.949 428.055 428.291 428.877C429.805 429.805 431.102 431.102 433.696 433.696L547.637 547.637C550.232 550.231 551.529 551.529 553.042 552.456C554.384 553.279 555.848 553.885 557.378 554.252C559.105 554.667 560.939 554.667 564.608 554.667H829.333C837.734 554.667 841.934 554.667 845.143 556.302C847.966 557.74 850.26 560.034 851.698 562.857C853.333 566.065 853.333 570.266 853.333 578.667V872C853.333 880.401 853.333 884.601 851.698 887.81C850.26 890.632 847.966 892.927 845.143 894.365C841.934 896 837.734 896 829.333 896H194.667C186.266 896 182.066 896 178.857 894.365C176.034 892.927 173.74 890.632 172.302 887.81C170.667 884.601 170.667 880.401 170.667 872V450.667Z" stroke="black" strokeWidth="20"/>
                <path d="M768 554.667V298.667L640 170.667H272C266.399 170.667 263.599 170.667 261.46 171.757C259.578 172.715 258.049 174.245 257.09 176.127C256 178.266 256 181.066 256 186.667V426.667" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}} 
                    d="M554.667 170.667V376C554.667 378.8 554.667 380.2 555.212 381.27C555.691 382.211 556.456 382.976 557.397 383.455C558.466 384 559.866 384 562.667 384H768" stroke="black" strokeWidth="20" strokeLinejoin="round"/>
            </motion.svg>
        </div>
    )
}