"use client"
import React from "react"
import { motion } from "framer-motion"
import { eachSVGType } from "@/app/page"

export default function MobileAnimate({drawerAnimate,setDetails}:eachSVGType){
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
            name:"Mobile",
            react:`import React from "react"
import { motion } from "framer-motion"

export default function MobileAnimate(){
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
                <path d="M554.667 118H469.333L468.557 118C428.988 118 398.269 118 374.367 121.213C350.021 124.487 331.254 131.258 316.589 145.922C301.925 160.587 295.153 179.354 291.88 203.7C288.666 227.603 288.666 258.321 288.667 297.89L288.667 298.667V725.333L288.667 726.11C288.666 765.679 288.666 796.397 291.88 820.3C295.153 844.646 301.925 863.413 316.589 878.078C331.254 892.742 350.021 899.513 374.367 902.787C398.269 906 428.988 906 468.557 906H469.333H554.667H555.443C595.012 906 625.73 906 649.633 902.787C673.979 899.513 692.746 892.742 707.411 878.078C722.075 863.413 728.847 844.646 732.12 820.3C735.333 796.397 735.333 765.679 735.333 726.11V725.333V298.667V297.89C735.333 258.321 735.333 227.603 732.12 203.7C728.847 179.354 722.075 160.587 707.411 145.922C692.746 131.258 673.979 124.487 649.633 121.213C625.73 118 595.012 118 555.443 118L554.667 118Z" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M298.667 682.667H725.333" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function MobileAnimate(){
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
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0}),
            withTiming({scale:1.1,strokeDasharray:1000,strokeDashoffset:0})
        );
    }
    const inanimate = () =>{
        animationValue.value = withTiming({scale:1,strokeDasharray:1000,strokeDashoffset:1},{easing:Easing.bounce,duration:1000})
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
                <path d="M554.667 118H469.333L468.557 118C428.988 118 398.269 118 374.367 121.213C350.021 124.487 331.254 131.258 316.589 145.922C301.925 160.587 295.153 179.354 291.88 203.7C288.666 227.603 288.666 258.321 288.667 297.89L288.667 298.667V725.333L288.667 726.11C288.666 765.679 288.666 796.397 291.88 820.3C295.153 844.646 301.925 863.413 316.589 878.078C331.254 892.742 350.021 899.513 374.367 902.787C398.269 906 428.988 906 468.557 906H469.333H554.667H555.443C595.012 906 625.73 906 649.633 902.787C673.979 899.513 692.746 892.742 707.411 878.078C722.075 863.413 728.847 844.646 732.12 820.3C735.333 796.397 735.333 765.679 735.333 726.11V725.333V298.667V297.89C735.333 258.321 735.333 227.603 732.12 203.7C728.847 179.354 722.075 160.587 707.411 145.922C692.746 131.258 673.979 124.487 649.633 121.213C625.73 118 595.012 118 555.443 118L554.667 118Z" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={pathAnimatedProps}
                    d="M298.667 682.667H725.333" stroke="black" strokeWidth="20"/>
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
    <path d="M554.667 118H469.333L468.557 118C428.988 118 398.269 118 374.367 121.213C350.021 124.487 331.254 131.258 316.589 145.922C301.925 160.587 295.153 179.354 291.88 203.7C288.666 227.603 288.666 258.321 288.667 297.89L288.667 298.667V725.333L288.667 726.11C288.666 765.679 288.666 796.397 291.88 820.3C295.153 844.646 301.925 863.413 316.589 878.078C331.254 892.742 350.021 899.513 374.367 902.787C398.269 906 428.988 906 468.557 906H469.333H554.667H555.443C595.012 906 625.73 906 649.633 902.787C673.979 899.513 692.746 892.742 707.411 878.078C722.075 863.413 728.847 844.646 732.12 820.3C735.333 796.397 735.333 765.679 735.333 726.11V725.333V298.667V297.89C735.333 258.321 735.333 227.603 732.12 203.7C728.847 179.354 722.075 160.587 707.411 145.922C692.746 131.258 673.979 124.487 649.633 121.213C625.73 118 595.012 118 555.443 118L554.667 118Z" stroke="black" stroke-width="20"/>
    <path d="M298.667 682.667H725.333" stroke="black" stroke-width="20"/>
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
                <path d="M554.667 118H469.333L468.557 118C428.988 118 398.269 118 374.367 121.213C350.021 124.487 331.254 131.258 316.589 145.922C301.925 160.587 295.153 179.354 291.88 203.7C288.666 227.603 288.666 258.321 288.667 297.89L288.667 298.667V725.333L288.667 726.11C288.666 765.679 288.666 796.397 291.88 820.3C295.153 844.646 301.925 863.413 316.589 878.078C331.254 892.742 350.021 899.513 374.367 902.787C398.269 906 428.988 906 468.557 906H469.333H554.667H555.443C595.012 906 625.73 906 649.633 902.787C673.979 899.513 692.746 892.742 707.411 878.078C722.075 863.413 728.847 844.646 732.12 820.3C735.333 796.397 735.333 765.679 735.333 726.11V725.333V298.667V297.89C735.333 258.321 735.333 227.603 732.12 203.7C728.847 179.354 722.075 160.587 707.411 145.922C692.746 131.258 673.979 124.487 649.633 121.213C625.73 118 595.012 118 555.443 118L554.667 118Z" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M298.667 682.667H725.333" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}