import ConsoleAnimate from "@/svg/device/used/console-animate";
import CPUAnimate from "@/svg/device/used/cpu-animate";
import DesktopAnimate from "@/svg/device/used/desktop-animate";
import MobileAnimate from "@/svg/device/used/mobile-animate";
import MouseAnimate from "@/svg/device/used/mouse-animate";
import WatchAnimate from "@/svg/device/used/watch-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"

export default function DeviceSVGs(props:eachSVGType){
    const unsetURL = () =>{
        props.setCurrentID("down-up");
    }
    return(
        <div id="down-up">
            <motion.p
                onViewportLeave={unsetURL}
            >
                Device svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <MobileAnimate {...props} />
                <DesktopAnimate {...props} />
                <MouseAnimate {...props} />
                <CPUAnimate {...props} />
                <ConsoleAnimate {...props} />
                <WatchAnimate {...props} />
            </div>
        </div>
    )
}