import CancelAnimate from "@/svg/no/used/cancel-animate";
import RemoveAnimate from "@/svg/no/used/remove-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function NoSVGs(props: eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#no",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#notification",{scroll:false})
    }
    return(
        <div id="notification">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                No svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <CancelAnimate {...props} />
                <RemoveAnimate {...props} /> 
            </div>
        </div>
    )
}