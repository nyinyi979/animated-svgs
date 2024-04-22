import DashboardAnimate from "@/svg/menu/react/dashboard-animate";
import Filter1Animate from "@/svg/menu/react/filter1-animate";
import Filter2Animate from "@/svg/menu/react/filter2-animate";
import Filter3Animate from "@/svg/menu/react/filter3-animate";
import MenuAnimate from "@/svg/menu/react/menu-animate";
import MenuDotsAnimate from "@/svg/menu/react/menu-dots-animate";
import SettingAnimate from "@/svg/menu/react/setting-animate";
import SortAnimate from "@/svg/menu/react/sort-animate";
import StatsAnimate from "@/svg/menu/react/stats-animate";
import StatusAnimate from "@/svg/menu/react/status-animate";
import WidgetAnimate from "@/svg/menu/react/widget-animate";

export default function MenuSVGs(){
    return(
        <div>
            <p>Menu svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <DashboardAnimate />
                <Filter1Animate />
                <Filter2Animate />
                <Filter3Animate />
                <MenuAnimate />
                <MenuDotsAnimate />
                <SettingAnimate />
                <SortAnimate />
                <StatsAnimate />
                <StatusAnimate />
                <WidgetAnimate />
            </div>
        </div>
    )
}