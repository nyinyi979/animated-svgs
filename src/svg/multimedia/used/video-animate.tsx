"use client"
import React from "react";
import { motion } from "framer-motion";
import { eachSVGType } from "@/app/page";
export default function VideoAnimate({drawerAnimate,setDetails}:eachSVGType){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: 0,
        translateY: 0,
        scale: 1,
        rotate: 0
    })
    const animate = () =>{
        setAnimationValue({
            translateX: 10,
            translateY: -10,
            scale: 1.05,
            rotate: -5
        })
    };
    const inanimate = () =>{
        setAnimationValue({
            translateX: 0,
            translateY: 0,
            scale: 1,
            rotate: 0
        })
    }
    const openDrawer = () =>{
        setDetails({
            name:"Video",
            react:`import React from "react";
import { motion } from "framer-motion";
export default function VideoAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        translateX: 0,
        translateY: 0,
        scale: 1,
        rotate: 0
    })
    const animate = () =>{
        setAnimationValue({
            translateX: 10,
            translateY: -10,
            scale: 1.05,
            rotate: -5
        })
    };
    const inanimate = () =>{
        setAnimationValue({
            translateX: 0,
            translateY: 0,
            scale: 1,
            rotate: 0
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
                <path d="M554.667 130C554.667 129.057 554.667 128.586 554.374 128.293C554.081 128 553.61 128 552.667 128H384C303.547 128 263.32 128 238.327 152.994C213.333 177.987 213.333 218.214 213.333 298.667V725.333C213.333 805.786 213.333 846.013 238.327 871.006C263.32 896 303.547 896 384 896H640C720.453 896 760.68 896 785.673 871.006C810.667 846.013 810.667 805.786 810.667 725.333V391C810.667 388.172 810.667 386.757 809.788 385.879C808.909 385 807.495 385 804.667 385H786.5H724H581.967C577.965 385 575.964 385 574.067 384.495C573.515 384.348 572.972 384.169 572.44 383.96C570.613 383.242 569.002 382.056 565.779 379.683V379.683C560.877 376.073 558.426 374.268 556.897 371.787C556.455 371.069 556.074 370.316 555.758 369.534C554.667 366.832 554.667 363.788 554.667 357.7V130Z" fill="black"/>
                <path d="M554.5 128H384C303.547 128 263.32 128 238.327 152.994C213.333 177.987 213.333 218.214 213.333 298.667V725.333C213.333 805.786 213.333 846.013 238.327 871.006C263.32 896 303.547 896 384 896H640C720.453 896 760.68 896 785.673 871.006C810.667 846.013 810.667 805.786 810.667 725.333V385.5" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{rotate:0}} 
                    animate={{rotate:animationValue.rotate}}
                    d="M649.522 591.968L475.475 517.377C432.171 498.818 384 530.582 384 577.695V706.772C384 753.885 432.171 785.649 475.475 767.09L649.522 692.499C693.715 673.559 693.715 610.908 649.522 591.968Z" fill="white" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}} 
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}} 
                    d="M811 380.5H640.333C600.107 380.5 579.994 380.5 567.497 368.003C555 355.506 555 335.393 555 295.167V128H582.366C588.276 128 591.231 128 593.907 129.068C596.584 130.135 598.727 132.169 603.015 136.237L701.833 230L802.891 337.846C806.896 342.121 808.899 344.258 809.95 346.915C811 349.572 811 352.501 811 358.359V380.5Z" fill="black" stroke="white" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}`,
            reactNative:`import React from "react";
import { Svg, Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

export default function VideoAnimate(){
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const animationValue = useSharedValue({
        scale: 1,
        translateY: 0,
        translateX: 0,
        rotate: 0,
    });
    
    const animate = () =>{
        animationValue.value = withTiming({scale:1.1,translateY:-10,translateX:10,rotate:2})
    }
    const inanimate = () =>{
        animationValue.value = withTiming(
            {scale:1,translateY:0,translateX:0,rotate:0},
            {easing:Easing.bounce,duration:1000}
        )
    }
    const svgAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{scale:animationValue.value.scale}]
        }
    })
    const rotateAnimatedProps = useAnimatedProps(()=>{
        return{
            rotation: animationValue.value.rotate
        }
    })
    const translateAnimatedProps = useAnimatedProps(()=>{
        return{
            transform: [{translateY:animationValue.value.translateY}],
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
                <Path d="M554.667 130C554.667 129.057 554.667 128.586 554.374 128.293C554.081 128 553.61 128 552.667 128H384C303.547 128 263.32 128 238.327 152.994C213.333 177.987 213.333 218.214 213.333 298.667V725.333C213.333 805.786 213.333 846.013 238.327 871.006C263.32 896 303.547 896 384 896H640C720.453 896 760.68 896 785.673 871.006C810.667 846.013 810.667 805.786 810.667 725.333V391C810.667 388.172 810.667 386.757 809.788 385.879C808.909 385 807.495 385 804.667 385H786.5H724H581.967C577.965 385 575.964 385 574.067 384.495C573.515 384.348 572.972 384.169 572.44 383.96C570.613 383.242 569.002 382.056 565.779 379.683V379.683C560.877 376.073 558.426 374.268 556.897 371.787C556.455 371.069 556.074 370.316 555.758 369.534C554.667 366.832 554.667 363.788 554.667 357.7V130Z" fill="black"/>
                <Path d="M554.5 128H384C303.547 128 263.32 128 238.327 152.994C213.333 177.987 213.333 218.214 213.333 298.667V725.333C213.333 805.786 213.333 846.013 238.327 871.006C263.32 896 303.547 896 384 896H640C720.453 896 760.68 896 785.673 871.006C810.667 846.013 810.667 805.786 810.667 725.333V385.5" stroke="black" strokeWidth="20"/>
                <AnimatedPath
                    animatedProps={rotateAnimatedProps}
                    d="M649.522 591.968L475.475 517.377C432.171 498.818 384 530.582 384 577.695V706.772C384 753.885 432.171 785.649 475.475 767.09L649.522 692.499C693.715 673.559 693.715 610.908 649.522 591.968Z" fill="white" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <AnimatedPath
                    animatedProps={translateAnimatedProps}
                    d="M811 380.5H640.333C600.107 380.5 579.994 380.5 567.497 368.003C555 355.506 555 335.393 555 295.167V128H582.366C588.276 128 591.231 128 593.907 129.068C596.584 130.135 598.727 132.169 603.015 136.237L701.833 230L802.891 337.846C806.896 342.121 808.899 344.258 809.95 346.915C811 349.572 811 352.501 811 358.359V380.5Z" fill="black" stroke="white" strokeWidth="20"/>
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
    <path d="M554.667 130C554.667 129.057 554.667 128.586 554.374 128.293C554.081 128 553.61 128 552.667 128H384C303.547 128 263.32 128 238.327 152.994C213.333 177.987 213.333 218.214 213.333 298.667V725.333C213.333 805.786 213.333 846.013 238.327 871.006C263.32 896 303.547 896 384 896H640C720.453 896 760.68 896 785.673 871.006C810.667 846.013 810.667 805.786 810.667 725.333V391C810.667 388.172 810.667 386.757 809.788 385.879C808.909 385 807.495 385 804.667 385H786.5H724H581.967C577.965 385 575.964 385 574.067 384.495C573.515 384.348 572.972 384.169 572.44 383.96C570.613 383.242 569.002 382.056 565.779 379.683V379.683C560.877 376.073 558.426 374.268 556.897 371.787C556.455 371.069 556.074 370.316 555.758 369.534C554.667 366.832 554.667 363.788 554.667 357.7V130Z" fill="black"/>
    <path d="M554.5 128H384C303.547 128 263.32 128 238.327 152.994C213.333 177.987 213.333 218.214 213.333 298.667V725.333C213.333 805.786 213.333 846.013 238.327 871.006C263.32 896 303.547 896 384 896H640C720.453 896 760.68 896 785.673 871.006C810.667 846.013 810.667 805.786 810.667 725.333V385.5" stroke="black" stroke-width="20"/>
    <path d="M649.522 591.968L475.475 517.377C432.171 498.818 384 530.582 384 577.695V706.772C384 753.885 432.171 785.649 475.475 767.09L649.522 692.499C693.715 673.559 693.715 610.908 649.522 591.968Z" fill="white" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M811 380.5H640.333C600.107 380.5 579.994 380.5 567.497 368.003C555 355.506 555 335.393 555 295.167V128H582.366C588.276 128 591.231 128 593.907 129.068C596.584 130.135 598.727 132.169 603.015 136.237L701.833 230L802.891 337.846C806.896 342.121 808.899 344.258 809.95 346.915C811 349.572 811 352.501 811 358.359V380.5Z" fill="black" stroke="white" stroke-width="20"/>
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
                <path d="M554.667 130C554.667 129.057 554.667 128.586 554.374 128.293C554.081 128 553.61 128 552.667 128H384C303.547 128 263.32 128 238.327 152.994C213.333 177.987 213.333 218.214 213.333 298.667V725.333C213.333 805.786 213.333 846.013 238.327 871.006C263.32 896 303.547 896 384 896H640C720.453 896 760.68 896 785.673 871.006C810.667 846.013 810.667 805.786 810.667 725.333V391C810.667 388.172 810.667 386.757 809.788 385.879C808.909 385 807.495 385 804.667 385H786.5H724H581.967C577.965 385 575.964 385 574.067 384.495C573.515 384.348 572.972 384.169 572.44 383.96C570.613 383.242 569.002 382.056 565.779 379.683V379.683C560.877 376.073 558.426 374.268 556.897 371.787C556.455 371.069 556.074 370.316 555.758 369.534C554.667 366.832 554.667 363.788 554.667 357.7V130Z" fill="black"/>
                <path d="M554.5 128H384C303.547 128 263.32 128 238.327 152.994C213.333 177.987 213.333 218.214 213.333 298.667V725.333C213.333 805.786 213.333 846.013 238.327 871.006C263.32 896 303.547 896 384 896H640C720.453 896 760.68 896 785.673 871.006C810.667 846.013 810.667 805.786 810.667 725.333V385.5" stroke="black" strokeWidth="20"/>
                <motion.path
                    initial={{rotate:0}} 
                    animate={{rotate:animationValue.rotate}}
                    d="M649.522 591.968L475.475 517.377C432.171 498.818 384 530.582 384 577.695V706.772C384 753.885 432.171 785.649 475.475 767.09L649.522 692.499C693.715 673.559 693.715 610.908 649.522 591.968Z" fill="white" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <motion.path 
                    initial={{translateX:0,translateY:0}} 
                    animate={{translateX:animationValue.translateX,translateY:animationValue.translateY}} 
                    d="M811 380.5H640.333C600.107 380.5 579.994 380.5 567.497 368.003C555 355.506 555 335.393 555 295.167V128H582.366C588.276 128 591.231 128 593.907 129.068C596.584 130.135 598.727 132.169 603.015 136.237L701.833 230L802.891 337.846C806.896 342.121 808.899 344.258 809.95 346.915C811 349.572 811 352.501 811 358.359V380.5Z" fill="black" stroke="white" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}