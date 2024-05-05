import DashboardAnimate from "@/svg/menu/used/dashboard-animate";
import Filter1Animate from "@/svg/menu/used/filter1-animate";
import Filter2Animate from "@/svg/menu/used/filter2-animate";
import Filter3Animate from "@/svg/menu/used/filter3-animate";
import MenuAnimate from "@/svg/menu/used/menu-animate";
import MenuDotsAnimate from "@/svg/menu/used/menu-dots-animate";
import SettingAnimate from "@/svg/menu/used/setting-animate";
import SortAnimate from "@/svg/menu/used/sort-animate";
import StatsAnimate from "@/svg/menu/used/stats-animate";
import StatusAnimate from "@/svg/menu/used/status-animate";
import WidgetAnimate from "@/svg/menu/used/widget-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function MenuSVGs(props: eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#menu",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#multimedia",{scroll:false})
    }
    return(
        <div id="multimedia">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Menu svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <StatusAnimate {...props} />
                <WidgetAnimate {...props}  />
                <DashboardAnimate {...props}  />
                <Filter1Animate {...props}  />
                <Filter2Animate {...props}  />
                <Filter3Animate {...props}  />
                <MenuAnimate {...props}  />
                <MenuDotsAnimate {...props}  />
                <SettingAnimate {...props}  />
                <SortAnimate {...props}  />
                <StatsAnimate {...props}  />
            </div>        
        </div>
    )
}