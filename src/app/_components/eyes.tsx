import EyeAnimate from "@/svg/view/used/eye-animate";
import EyeScanAnimate from "@/svg/view/used/eye-scan-animate";
import ViewHideAnimate from "@/svg/view/used/view-hide-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function EyeSVGs(props: eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#eye",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#map",{scroll:false})
    }
    return(
        <div id="map">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Eye svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <ViewHideAnimate {...props} />
                <EyeAnimate {...props} />
                <EyeScanAnimate {...props} />
            </div>
        </div>
    )
}