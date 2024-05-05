import CompassAnimate from "@/svg/map/used/compass-animate";
import DirectionAnimate from "@/svg/map/used/direction-animate";
import GPSAnimate from "@/svg/map/used/gps-animate";
import MapAnimate from "@/svg/map/used/map-animate";
import OdometerAnimate from "@/svg/map/used/odometer-animate";
import PINAnimate from "@/svg/map/used/pin-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function MapSVGs(props: eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#map",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#menu",{scroll:false})
    }
    return(
        <div id="menu">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Map svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <MapAnimate {...props} />
                <GPSAnimate {...props} />
                <CompassAnimate {...props} />
                <PINAnimate {...props} />
                <DirectionAnimate {...props} />
                <OdometerAnimate {...props} />
            </div>
        </div>
    )
}