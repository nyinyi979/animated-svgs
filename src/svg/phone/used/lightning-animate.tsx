"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function LightningAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Lightning",
            react:`import React from "react"
import React from "react"
import { motion } from "framer-motion"

export default function LightningAnimate(){
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
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{duration:.4}}
                    d="M513.955 119.125L513.955 119.125C509.712 118.191 506.528 120.145 505.085 121.403C503.827 122.5 503.126 123.663 502.918 124.009C502.494 124.716 502.117 125.541 501.998 125.801C501.987 125.826 501.978 125.845 501.972 125.859C501.972 125.859 501.971 125.859 501.971 125.859L290.907 581.759C290.893 581.788 290.876 581.826 290.855 581.869C290.643 582.321 290.097 583.484 289.76 584.631C289.341 586.053 288.495 589.861 290.962 593.723C293.43 597.585 297.242 598.417 298.708 598.634C299.89 598.809 301.175 598.803 301.674 598.8C301.723 598.8 301.764 598.8 301.796 598.8H502V893.73L502 893.793C501.998 894.079 501.994 894.987 502.082 895.807C502.125 896.208 502.272 897.557 502.953 899.081C503.734 900.829 505.803 903.941 510.046 904.875C514.288 905.809 517.472 903.855 518.915 902.597C520.173 901.5 520.874 900.337 521.082 899.991C521.506 899.284 521.884 898.457 522.002 898.198L522.028 898.141L733.093 442.241L724.018 438.04L733.093 442.241C733.107 442.212 733.124 442.174 733.145 442.13C733.357 441.678 733.902 440.515 734.24 439.369C734.659 437.947 735.505 434.139 733.038 430.277L733.037 430.277C730.569 426.415 726.758 425.583 725.292 425.366C724.11 425.191 722.825 425.197 722.326 425.2C722.277 425.2 722.236 425.2 722.203 425.2H522V130.27C522 130.255 522 130.234 522 130.207C522.002 129.921 522.006 129.014 521.918 128.193C521.875 127.793 521.728 126.443 521.047 124.919C520.266 123.171 518.197 120.06 513.955 119.125Z" stroke="black" strokeWidth="20"/>

            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function LightningAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        strokeDasharray:  2200,
        strokeDashoffset: 1,
    });
    
    const animate = () =>{
        animationValue.value = {scale:1,strokeDasharray:2200,strokeDashoffset:2200}
        animationValue.value = withSequence(
            withTiming({scale:1.1,strokeDasharray:2200,strokeDashoffset:1}),
            withTiming({scale:1.1,strokeDasharray:2200,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,strokeDasharray:2200,strokeDashoffset:1},
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M513.955 119.125L513.955 119.125C509.712 118.191 506.528 120.145 505.085 121.403C503.827 122.5 503.126 123.663 502.918 124.009C502.494 124.716 502.117 125.541 501.998 125.801C501.987 125.826 501.978 125.845 501.972 125.859C501.972 125.859 501.971 125.859 501.971 125.859L290.907 581.759C290.893 581.788 290.876 581.826 290.855 581.869C290.643 582.321 290.097 583.484 289.76 584.631C289.341 586.053 288.495 589.861 290.962 593.723C293.43 597.585 297.242 598.417 298.708 598.634C299.89 598.809 301.175 598.803 301.674 598.8C301.723 598.8 301.764 598.8 301.796 598.8H502V893.73L502 893.793C501.998 894.079 501.994 894.987 502.082 895.807C502.125 896.208 502.272 897.557 502.953 899.081C503.734 900.829 505.803 903.941 510.046 904.875C514.288 905.809 517.472 903.855 518.915 902.597C520.173 901.5 520.874 900.337 521.082 899.991C521.506 899.284 521.884 898.457 522.002 898.198L522.028 898.141L733.093 442.241L724.018 438.04L733.093 442.241C733.107 442.212 733.124 442.174 733.145 442.13C733.357 441.678 733.902 440.515 734.24 439.369C734.659 437.947 735.505 434.139 733.038 430.277L733.037 430.277C730.569 426.415 726.758 425.583 725.292 425.366C724.11 425.191 722.825 425.197 722.326 425.2C722.277 425.2 722.236 425.2 722.203 425.2H522V130.27C522 130.255 522 130.234 522 130.207C522.002 129.921 522.006 129.014 521.918 128.193C521.875 127.793 521.728 126.443 521.047 124.919C520.266 123.171 518.197 120.06 513.955 119.125Z" stroke="black" strokeWidth="20"/>
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
    <path d="M513.955 119.125L513.955 119.125C509.712 118.191 506.528 120.145 505.085 121.403C503.827 122.5 503.126 123.663 502.918 124.009C502.494 124.716 502.117 125.541 501.998 125.801C501.987 125.826 501.978 125.845 501.972 125.859C501.972 125.859 501.971 125.859 501.971 125.859L290.907 581.759C290.893 581.788 290.876 581.826 290.855 581.869C290.643 582.321 290.097 583.484 289.76 584.631C289.341 586.053 288.495 589.861 290.962 593.723C293.43 597.585 297.242 598.417 298.708 598.634C299.89 598.809 301.175 598.803 301.674 598.8C301.723 598.8 301.764 598.8 301.796 598.8H502V893.73L502 893.793C501.998 894.079 501.994 894.987 502.082 895.807C502.125 896.208 502.272 897.557 502.953 899.081C503.734 900.829 505.803 903.941 510.046 904.875C514.288 905.809 517.472 903.855 518.915 902.597C520.173 901.5 520.874 900.337 521.082 899.991C521.506 899.284 521.884 898.457 522.002 898.198L522.028 898.141L733.093 442.241L724.018 438.04L733.093 442.241C733.107 442.212 733.124 442.174 733.145 442.13C733.357 441.678 733.902 440.515 734.24 439.369C734.659 437.947 735.505 434.139 733.038 430.277L733.037 430.277C730.569 426.415 726.758 425.583 725.292 425.366C724.11 425.191 722.825 425.197 722.326 425.2C722.277 425.2 722.236 425.2 722.203 425.2H522V130.27C522 130.255 522 130.234 522 130.207C522.002 129.921 522.006 129.014 521.918 128.193C521.875 127.793 521.728 126.443 521.047 124.919C520.266 123.171 518.197 120.06 513.955 119.125Z" stroke="black" stroke-width="20"/>
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
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    transition={{duration:.4}}
                    d="M513.955 119.125L513.955 119.125C509.712 118.191 506.528 120.145 505.085 121.403C503.827 122.5 503.126 123.663 502.918 124.009C502.494 124.716 502.117 125.541 501.998 125.801C501.987 125.826 501.978 125.845 501.972 125.859C501.972 125.859 501.971 125.859 501.971 125.859L290.907 581.759C290.893 581.788 290.876 581.826 290.855 581.869C290.643 582.321 290.097 583.484 289.76 584.631C289.341 586.053 288.495 589.861 290.962 593.723C293.43 597.585 297.242 598.417 298.708 598.634C299.89 598.809 301.175 598.803 301.674 598.8C301.723 598.8 301.764 598.8 301.796 598.8H502V893.73L502 893.793C501.998 894.079 501.994 894.987 502.082 895.807C502.125 896.208 502.272 897.557 502.953 899.081C503.734 900.829 505.803 903.941 510.046 904.875C514.288 905.809 517.472 903.855 518.915 902.597C520.173 901.5 520.874 900.337 521.082 899.991C521.506 899.284 521.884 898.457 522.002 898.198L522.028 898.141L733.093 442.241L724.018 438.04L733.093 442.241C733.107 442.212 733.124 442.174 733.145 442.13C733.357 441.678 733.902 440.515 734.24 439.369C734.659 437.947 735.505 434.139 733.038 430.277L733.037 430.277C730.569 426.415 726.758 425.583 725.292 425.366C724.11 425.191 722.825 425.197 722.326 425.2C722.277 425.2 722.236 425.2 722.203 425.2H522V130.27C522 130.255 522 130.234 522 130.207C522.002 129.921 522.006 129.014 521.918 128.193C521.875 127.793 521.728 126.443 521.047 124.919C520.266 123.171 518.197 120.06 513.955 119.125Z" stroke="black" strokeWidth="20"/>

            </motion.svg>
        </div>
    )
}