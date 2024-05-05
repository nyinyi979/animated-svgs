import FullScreen1Animate from "@/svg/screen/used/fullscreen1-animate";
import FullScreen2Animate from "@/svg/screen/used/fullscreen2-animate";
import FullScreen3Animate from "@/svg/screen/used/fullscreen3-animate";
import FullScreen4Animate from "@/svg/screen/used/fullscreen4-animate";
import InAnimate from "@/svg/screen/used/in-animate";
import OutAnimate from "@/svg/screen/used/out-animate";
import ReduceAnimate from "@/svg/screen/used/reduce-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function ScreenSVGs(props: eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#screen",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#security",{scroll:false})
    }
    return(
        <div id="security">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Screen svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <FullScreen1Animate {...props} />
                <FullScreen2Animate {...props} />
                <FullScreen3Animate {...props} />
                <FullScreen4Animate {...props} />
                <InAnimate {...props} />
                <OutAnimate {...props} />
                <ReduceAnimate {...props} />
            </div>
        </div>
    )
}