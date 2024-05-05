import Battery100HorizontalAnimate from "@/svg/phone/used/battery100-horizontal-animate";
import Battery100VerticalAnimate from "@/svg/phone/used/battery100-vertical animate";
import CameraAnimate from "@/svg/phone/used/camera-animate";
import LightningAnimate from "@/svg/phone/used/lightning-animate";
import LightningCircleAnimate from "@/svg/phone/used/lightning-circle-animate";
import Lightning2Animate from "@/svg/phone/used/lightning2-animate";
import NFCAnimate from "@/svg/phone/used/nfc-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function PhoneSVGs(props: eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#phone",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#reaction",{scroll:false})
    }
    return(
        <div id="reaction">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Phone svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <Battery100VerticalAnimate {...props} />
                <Battery100HorizontalAnimate {...props} />
                <CameraAnimate {...props} />
                <LightningCircleAnimate {...props} />
                <LightningAnimate {...props} />
                <Lightning2Animate {...props} />
                <NFCAnimate {...props} />
            </div>
        </div>
    )
}