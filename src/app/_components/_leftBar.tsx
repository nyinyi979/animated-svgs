import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

export default function LeftBar({currentID,setCurrentID}:{currentID:string,setCurrentID:Dispatch<SetStateAction<string>>}){
    const leftBarLinks = React.useRef(["Add","Archive","Arrow","Book","Chart","Check","Communication","Cross","Device","Down-up","Eye","Map","Menu","Multimedia","No","Notification","Phone","Reaction","Screen","Security","Setting","Signin","Social","Sort","Sound","Time"]);
    return(
        <div className="lg:block hidden p-2 my-3 sticky top-16 left-0 h-[100vh] overflow-auto z-0">
            <div>
                {leftBarLinks.current.map((li)=>
                    <Link 
                        href={`/#${li.toLowerCase()}`}
                        className={`block py-2 px-2 ${currentID==li.toLowerCase()? "bg-gray-300" : " hover:bg-gray-200"}`} 
                        onClick={()=>setCurrentID(li.toLowerCase())}
                        key={li}>
                            {li}
                    </Link>
                )}
            </div>
        </div>
    )
}
