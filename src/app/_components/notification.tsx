import BellAnimate from "@/svg/notification/used/bell-animate";
import BellPinAnimate from "@/svg/notification/used/bell-pin-animate";
import FireAnimate from "@/svg/notification/used/fire-animate";
import LampAnimate from "@/svg/notification/used/lamp-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function NotificationSVGs(props: eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#notification",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#phone",{scroll:false})
    }
    return(
        <div id="phone">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Notification svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <BellAnimate {...props} />
                <BellPinAnimate {...props} />
                <FireAnimate {...props} />
                <LampAnimate {...props} />
            </div>
        </div>
    )
}