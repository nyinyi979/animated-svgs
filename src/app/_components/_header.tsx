import Link from "next/link";

export default function Header(){
    return(
        <div className="lg:col-span-1 col-span-2 sticky top-0 left-0">
            <div className="px-5 py-3 relative z-[100] shadow-xl shadow-gray-300 rounded-br-md rounded-bl-md">
                <Link 
                  href={"/"}
                  className="text-2xl hover:scale-50"
                  >
                    Animated SVGs
                </Link>
            </div>
            <div className="absolute bg-gray-100/10 w-full h-full left-0 top-0 backdrop-blur-sm shadow-gray-200 shadow-xl border-b border-b-gray-100"/>
        </div>
    )
}