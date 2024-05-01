"use client"
import React from "react";
import { motion } from "framer-motion";
import { eachSVGType } from "@/app/page";
export default function ImageOutAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: 0,
        translateX: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: -30,
            translateX: 10,
            scale: 1.01
        })
    };
    const inanimate = () =>{
        setAnimationValue({
            translateY: 0,
            translateX: 0,
            scale: 1
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Image out",
            react:`import React from "react";
import { motion } from "framer-motion";
export default function ImageOutAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateY: 0,
        translateX: 0,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            translateY: -30,
            translateX: 10,
            scale: 1.01
        })
    };
    const inanimate = () =>{
        setAnimationValue({
            translateY: 0,
            translateX: 0,
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg animate={{scale:animationValue.scale}} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M149.333 661.333L379.822 430.844C381.715 428.952 382.662 428.005 383.704 428.206C384.746 428.406 385.273 429.637 386.327 432.097L510.836 722.618C511.364 723.848 511.627 724.463 512.148 724.564C512.669 724.664 513.142 724.191 514.089 723.245L679.838 557.495C681.172 556.162 681.838 555.495 682.667 555.495C683.495 555.495 684.162 556.162 685.495 557.495L850.99 722.99C852.146 724.146 852.724 724.724 853.459 725.029C854.195 725.333 855.012 725.333 856.647 725.333H896V887.987C896 891.759 896 893.644 894.828 894.816C893.657 895.987 891.771 895.987 888 895.987H136C132.229 895.987 130.343 895.987 129.172 894.816C128 893.644 128 891.759 128 887.987V135.987C128 132.216 128 130.33 129.172 129.159C130.343 127.987 132.229 127.987 136 127.987H149.333V661.333Z" fill="black"/>
                <path d="M512 128H136C132.229 128 130.343 128 129.172 129.172C128 130.343 128 132.229 128 136V888C128 891.771 128 893.657 129.172 894.828C130.343 896 132.229 896 136 896H888C891.771 896 893.657 896 894.828 894.828C896 893.657 896 891.771 896 888V512" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{translateX:0,translateY:0}} 
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}}
                    d="M896 128V120.5H903.5V128H896ZM687.352 304.523C684.117 307.111 679.398 306.586 676.81 303.352C674.223 300.117 674.747 295.398 677.981 292.81L687.352 304.523ZM888.5 341.333V128H903.5V341.333H888.5ZM896 135.5H682.667V120.5H896V135.5ZM900.685 133.857L687.352 304.523L677.981 292.81L891.315 122.143L900.685 133.857Z" fill="black"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function ImageOutAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
        translateX: 0,
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateY:-50,translateX:30})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateY:0,translateX:0},
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
                viewBox="0 0 1024 1024" fill="none"
            >
                <Path fillRule="evenodd" clipRule="evenodd" d="M149.333 661.333L379.822 430.844C381.715 428.952 382.662 428.005 383.704 428.206C384.746 428.406 385.273 429.637 386.327 432.097L510.836 722.618C511.364 723.848 511.627 724.463 512.148 724.564C512.669 724.664 513.142 724.191 514.089 723.245L679.838 557.495C681.172 556.162 681.838 555.495 682.667 555.495C683.495 555.495 684.162 556.162 685.495 557.495L850.99 722.99C852.146 724.146 852.724 724.724 853.459 725.029C854.195 725.333 855.012 725.333 856.647 725.333H896V887.987C896 891.759 896 893.644 894.828 894.816C893.657 895.987 891.771 895.987 888 895.987H136C132.229 895.987 130.343 895.987 129.172 894.816C128 893.644 128 891.759 128 887.987V135.987C128 132.216 128 130.33 129.172 129.159C130.343 127.987 132.229 127.987 136 127.987H149.333V661.333Z" fill="black"/>
                <Path d="M512 128H136C132.229 128 130.343 128 129.172 129.172C128 130.343 128 132.229 128 136V888C128 891.771 128 893.657 129.172 894.828C130.343 896 132.229 896 136 896H888C891.771 896 893.657 896 894.828 894.828C896 893.657 896 891.771 896 888V512" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M896 128V120.5H903.5V128H896ZM687.352 304.523C684.117 307.111 679.398 306.586 676.81 303.352C674.223 300.117 674.747 295.398 677.981 292.81L687.352 304.523ZM888.5 341.333V128H903.5V341.333H888.5ZM896 135.5H682.667V120.5H896V135.5ZM900.685 133.857L687.352 304.523L677.981 292.81L891.315 122.143L900.685 133.857Z" fill="black"/>
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M149.333 661.333L379.822 430.844C381.715 428.952 382.662 428.005 383.704 428.206C384.746 428.406 385.273 429.637 386.327 432.097L510.836 722.618C511.364 723.848 511.627 724.463 512.148 724.564C512.669 724.664 513.142 724.191 514.089 723.245L679.838 557.495C681.172 556.162 681.838 555.495 682.667 555.495C683.495 555.495 684.162 556.162 685.495 557.495L850.99 722.99C852.146 724.146 852.724 724.724 853.459 725.029C854.195 725.333 855.012 725.333 856.647 725.333H896V887.987C896 891.759 896 893.644 894.828 894.816C893.657 895.987 891.771 895.987 888 895.987H136C132.229 895.987 130.343 895.987 129.172 894.816C128 893.644 128 891.759 128 887.987V135.987C128 132.216 128 130.33 129.172 129.159C130.343 127.987 132.229 127.987 136 127.987H149.333V661.333Z" fill="black"/>
    <path d="M512 128H136C132.229 128 130.343 128 129.172 129.172C128 130.343 128 132.229 128 136V888C128 891.771 128 893.657 129.172 894.828C130.343 896 132.229 896 136 896H888C891.771 896 893.657 896 894.828 894.828C896 893.657 896 891.771 896 888V512" stroke="black" stroke-width="20"/>
    <path d="M896 128V120.5H903.5V128H896ZM687.352 304.523C684.117 307.111 679.398 306.586 676.81 303.352C674.223 300.117 674.747 295.398 677.981 292.81L687.352 304.523ZM888.5 341.333V128H903.5V341.333H888.5ZM896 135.5H682.667V120.5H896V135.5ZM900.685 133.857L687.352 304.523L677.981 292.81L891.315 122.143L900.685 133.857Z" fill="black"/>
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
            <motion.svg animate={{scale:animationValue.scale}} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M149.333 661.333L379.822 430.844C381.715 428.952 382.662 428.005 383.704 428.206C384.746 428.406 385.273 429.637 386.327 432.097L510.836 722.618C511.364 723.848 511.627 724.463 512.148 724.564C512.669 724.664 513.142 724.191 514.089 723.245L679.838 557.495C681.172 556.162 681.838 555.495 682.667 555.495C683.495 555.495 684.162 556.162 685.495 557.495L850.99 722.99C852.146 724.146 852.724 724.724 853.459 725.029C854.195 725.333 855.012 725.333 856.647 725.333H896V887.987C896 891.759 896 893.644 894.828 894.816C893.657 895.987 891.771 895.987 888 895.987H136C132.229 895.987 130.343 895.987 129.172 894.816C128 893.644 128 891.759 128 887.987V135.987C128 132.216 128 130.33 129.172 129.159C130.343 127.987 132.229 127.987 136 127.987H149.333V661.333Z" fill="black"/>
                <path d="M512 128H136C132.229 128 130.343 128 129.172 129.172C128 130.343 128 132.229 128 136V888C128 891.771 128 893.657 129.172 894.828C130.343 896 132.229 896 136 896H888C891.771 896 893.657 896 894.828 894.828C896 893.657 896 891.771 896 888V512" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{translateX:0,translateY:0}} 
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}}
                    d="M896 128V120.5H903.5V128H896ZM687.352 304.523C684.117 307.111 679.398 306.586 676.81 303.352C674.223 300.117 674.747 295.398 677.981 292.81L687.352 304.523ZM888.5 341.333V128H903.5V341.333H888.5ZM896 135.5H682.667V120.5H896V135.5ZM900.685 133.857L687.352 304.523L677.981 292.81L891.315 122.143L900.685 133.857Z" fill="black"/>
            </motion.svg>
        </div>
    )
}