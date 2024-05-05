import AlarmClock1Animate from "@/svg/time/used/alarm-clock1-animate";
import AlarmClock2Animate from "@/svg/time/used/alarm-clock2-animate";
import ClockAnimate from "@/svg/time/used/clock-animate";
import TimeProgressAnimate from "@/svg/time/used/time-progress-animate";
import Timer1Animate from "@/svg/time/used/timer1-animate";
import Timer2Animate from "@/svg/time/used/timer2-animate";
import WatchAnimate from "@/svg/time/used/watch-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function TimeSVGs(props: eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#time",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/",{scroll:false})
    }
    return(
        <div id="time">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Time svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <AlarmClock1Animate {...props} />
                <AlarmClock2Animate {...props} />
                <ClockAnimate {...props} />
                <TimeProgressAnimate {...props} />
                <Timer1Animate {...props} />
                <Timer2Animate {...props} />
                <WatchAnimate {...props} />
            </div>
        </div>
    )
}