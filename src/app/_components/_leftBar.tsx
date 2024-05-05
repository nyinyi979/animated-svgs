import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export default function LeftBar(){
    const router = useRouter();
    React.useEffect(()=>{
        
    },[])
    const leftBarLinks = React.useRef(["Add","Archive","Arrow","Book","Chart","Check","Communication","Cross","Device","Down-up","Eye","Map","Menu","Multimedia","No","Notification","Phone","Reaction","Screen","Security","Setting","Signin","Social","Sort","Sound","Time"]);
    return(
        <div className="lg:block hidden p-2 my-3 sticky top-16 left-0 h-[100vh] overflow-auto z-0">
            <div>
                {leftBarLinks.current.map((li)=>
                    <Link 
                        href={`/#${li.toLowerCase()}`}
                        className="block py-2 px-2 hover:bg-gray-100" key={li}>
                            {li}
                    </Link>
                )}
            </div>
        </div>
    )
}
