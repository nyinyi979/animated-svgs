import CheckAnimate from "@/svg/check/used/check-animate";
import CheckDoubleAnimate from "@/svg/check/used/check-double-animate";
import CheckRingAnimate from "@/svg/check/used/check-ring-animate";
import CheckRingFillAnimate from "@/svg/check/used/check-ring-fill-animate";
import CheckRoundAnimate from "@/svg/check/used/check-round-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion";

export default function CheckSVGs(props:eachSVGType){
    const unsetURL = () =>{
        props.setCurrentID("communication");
    }
    return(
        <div id="communication">
            <motion.p
                onViewportLeave={unsetURL}
            >
                Check svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <CheckAnimate {...props} />
                <CheckRoundAnimate {...props} />
                <CheckDoubleAnimate {...props} />
                <CheckRingAnimate {...props} />
                <CheckRingFillAnimate {...props} />
            </div>        
        </div>
    )
}