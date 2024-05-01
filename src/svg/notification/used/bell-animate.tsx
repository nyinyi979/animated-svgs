"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function BellAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: [0,5,-5,10,-10,12,-12,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            rotate: [0],
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Bell",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function BellAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        rotate: [0],
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            rotate: [0,5,-5,10,-10,12,-12,0],
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
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
                <path d="M297.085 142.233C297.837 135.463 298.214 132.078 300.492 130.039C302.77 128 306.176 128 312.987 128H711.013C717.824 128 721.23 128 723.508 130.039C725.786 132.078 726.163 135.463 726.915 142.233L767.614 508.529C767.806 510.258 767.902 511.122 768.178 511.94C768.454 512.757 768.902 513.503 769.797 514.994L894.183 722.304C894.988 723.647 895.391 724.319 895.104 724.826C894.817 725.333 894.034 725.333 892.468 725.333H131.532C129.966 725.333 129.183 725.333 128.896 724.826C128.609 724.319 129.012 723.647 129.817 722.304L254.203 514.994C255.098 513.503 255.546 512.757 255.822 511.94C256.098 511.122 256.194 510.258 256.386 508.529L297.085 142.233Z" stroke="black" strokeWidth="20"/>
                <path d="M341.333 725.333C341.333 747.746 345.748 769.938 354.325 790.645C362.901 811.351 375.473 830.165 391.32 846.013C407.168 861.861 425.982 874.432 446.689 883.009C467.395 891.586 489.588 896 512 896C534.412 896 556.605 891.586 577.311 883.009C598.018 874.432 616.832 861.861 632.68 846.013C648.527 830.165 661.099 811.351 669.675 790.645C678.252 769.938 682.667 747.746 682.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function BellAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        rotation: 0,
    });
    
    const animate = () =>{
        animationValue.value = withSequence(
            withTiming({scale:1.1,rotation:5}),
            withTiming({scale:1.1,rotation:-5}),
            withTiming({scale:1.1,rotation:10}),
            withTiming({scale:1.1,rotation:-10}),
            withTiming({scale:1.1,rotation:12}),
            withTiming({scale:1.1,rotation:-12}),
            withTiming({scale:1.1,rotation:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,rotation:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}],
            rotation: animationValue.value.rotation
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
                <Path d="M297.085 142.233C297.837 135.463 298.214 132.078 300.492 130.039C302.77 128 306.176 128 312.987 128H711.013C717.824 128 721.23 128 723.508 130.039C725.786 132.078 726.163 135.463 726.915 142.233L767.614 508.529C767.806 510.258 767.902 511.122 768.178 511.94C768.454 512.757 768.902 513.503 769.797 514.994L894.183 722.304C894.988 723.647 895.391 724.319 895.104 724.826C894.817 725.333 894.034 725.333 892.468 725.333H131.532C129.966 725.333 129.183 725.333 128.896 724.826C128.609 724.319 129.012 723.647 129.817 722.304L254.203 514.994C255.098 513.503 255.546 512.757 255.822 511.94C256.098 511.122 256.194 510.258 256.386 508.529L297.085 142.233Z" stroke="black" strokeWidth="20"/>
                <Path d="M341.333 725.333C341.333 747.746 345.748 769.938 354.325 790.645C362.901 811.351 375.473 830.165 391.32 846.013C407.168 861.861 425.982 874.432 446.689 883.009C467.395 891.586 489.588 896 512 896C534.412 896 556.605 891.586 577.311 883.009C598.018 874.432 616.832 861.861 632.68 846.013C648.527 830.165 661.099 811.351 669.675 790.645C678.252 769.938 682.667 747.746 682.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
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
    <path d="M297.085 142.233C297.837 135.463 298.214 132.078 300.492 130.039C302.77 128 306.176 128 312.987 128H711.013C717.824 128 721.23 128 723.508 130.039C725.786 132.078 726.163 135.463 726.915 142.233L767.614 508.529C767.806 510.258 767.902 511.122 768.178 511.94C768.454 512.757 768.902 513.503 769.797 514.994L894.183 722.304C894.988 723.647 895.391 724.319 895.104 724.826C894.817 725.333 894.034 725.333 892.468 725.333H131.532C129.966 725.333 129.183 725.333 128.896 724.826C128.609 724.319 129.012 723.647 129.817 722.304L254.203 514.994C255.098 513.503 255.546 512.757 255.822 511.94C256.098 511.122 256.194 510.258 256.386 508.529L297.085 142.233Z" stroke="black" stroke-width="20"/>
    <path d="M341.333 725.333C341.333 747.746 345.748 769.938 354.325 790.645C362.901 811.351 375.473 830.165 391.32 846.013C407.168 861.861 425.982 874.432 446.689 883.009C467.395 891.586 489.588 896 512 896C534.412 896 556.605 891.586 577.311 883.009C598.018 874.432 616.832 861.861 632.68 846.013C648.527 830.165 661.099 811.351 669.675 790.645C678.252 769.938 682.667 747.746 682.667 725.333" stroke="black" stroke-width="20" stroke-linecap="round"/>
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
                <path d="M297.085 142.233C297.837 135.463 298.214 132.078 300.492 130.039C302.77 128 306.176 128 312.987 128H711.013C717.824 128 721.23 128 723.508 130.039C725.786 132.078 726.163 135.463 726.915 142.233L767.614 508.529C767.806 510.258 767.902 511.122 768.178 511.94C768.454 512.757 768.902 513.503 769.797 514.994L894.183 722.304C894.988 723.647 895.391 724.319 895.104 724.826C894.817 725.333 894.034 725.333 892.468 725.333H131.532C129.966 725.333 129.183 725.333 128.896 724.826C128.609 724.319 129.012 723.647 129.817 722.304L254.203 514.994C255.098 513.503 255.546 512.757 255.822 511.94C256.098 511.122 256.194 510.258 256.386 508.529L297.085 142.233Z" stroke="black" strokeWidth="20"/>
                <path d="M341.333 725.333C341.333 747.746 345.748 769.938 354.325 790.645C362.901 811.351 375.473 830.165 391.32 846.013C407.168 861.861 425.982 874.432 446.689 883.009C467.395 891.586 489.588 896 512 896C534.412 896 556.605 891.586 577.311 883.009C598.018 874.432 616.832 861.861 632.68 846.013C648.527 830.165 661.099 811.351 669.675 790.645C678.252 769.938 682.667 747.746 682.667 725.333" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </motion.svg>
        </div>
    )
}