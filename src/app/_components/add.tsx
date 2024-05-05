import AddAnimate from "@/svg/add/used/add-animate";
import AddRoundAnimate from "@/svg/add/used/add-round-animate";
import AddRoundFillAnimate from "@/svg/add/used/add-round-fill-animate";
import AddSquareAnimate from "@/svg/add/used/add-square-animate";
import AddSquareFillAnimate from "@/svg/add/used/add-square-fill-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";
export default function AddSVGs(props:eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#add",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#archive",{scroll:false})
    }
    return(
        <div>
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Add (+) svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <AddAnimate {...props} />
                <AddSquareAnimate {...props} />
                <AddSquareFillAnimate {...props} />
                <AddRoundAnimate {...props} />
                <AddRoundFillAnimate {...props} />
            </div>        
        </div>
    )
}