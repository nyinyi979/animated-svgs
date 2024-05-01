"use client"
import React from "react";
import { motion } from "framer-motion";
export default function Drawer({inanimate,opacity,react,reactNative,display,svg,translateX,name}:
{
    opacity: number, 
    translateX: number, 
    react: string|string[], 
    reactNative: string|string[],
    svg: string,
    display: boolean,
    name: string,
    inanimate: ()=>void
}){
    return(
        <>
            <div 
                className="w-[200vh] h-[100vh] z-20 fixed left-0 top-0 bg-black/10 overscroll-y-contain"
                onClick={inanimate}
                style={{display:opacity===0?"none":"block"}}
            />
                <motion.div
                    drag="x"
                    onDragEnd={(_e,i)=>{if(i.velocity.x>.5)inanimate()}}
                    dragConstraints={{right:50,left:0}}
                    initial={{translateX:100,opacity:0}}
                    animate={{
                        opacity:opacity,
                        translateX:translateX,
                    }}
                    style={{display:display?"block":"none"}}
                    className="w-[30%] h-[100vh] rounded-l-md bg-gray-100/90 p-5 fixed top-0 right-0 overflow-auto z-50"    
                >
                    <p className="text-2xl font-semibold">{name}</p>
                    <Code heading="React" codes={react}/>
                    <Code heading="React native" codes={reactNative}/>
                    <Code heading="Svg" codes={svg}/>
                </motion.div>
        </>
    )
}

function Code({codes,heading}:{codes:string|string[],heading:"React"|"React native"|"Svg"}){
    const isArray = Array.isArray(codes);
    const [activeCode, setActiveCode] = React.useState(0);
    const [copy, setCopy] = React.useState(false);
    const copyCode = () =>{
        if(copy) return;
        setCopy(true);
        navigator.clipboard.writeText(isArray? codes[activeCode] : codes);
        setTimeout(()=>{
            setCopy(false);
        },3000)
    }
    return(
        <>
            <div className="p-1 m-1 font-medium text-lg relative">
                {heading}
                {isArray? heading==="React native"? activeCode===0? "(Normal)" : "(Unistyle)" : 
                heading==="React"&&activeCode===0? "(motion)" : "(other)" : ""}
                {isArray&&
                <button 
                    onClick={()=>setActiveCode(activeCode===0? 1 : 0)}
                    className="absolute px-2 right-1 top-1 bg-gray-50 hover:bg-gray-100 rounded-md duration-300"
                >
                    {activeCode===0? ">" : "<"}
                </button>}
    
        </div>            
            <div className="roboto w-full overflow-x-auto h-[40%] text-cyan-700 rounded-md whitespace-pre relative p-2 bg-gray-200 shadow-lg">
                <button 
                    onClick={copyCode}
                    className="sticky float-right right-2 top-2 p-1 bg-gray-50 hover:bg-gray-100 rounded-md duration-300"
                >
                    {copy? "Copied" : "Copy"}
                </button>
                {isArray? codes[activeCode] : codes}
        </div>
    </>
    )
}