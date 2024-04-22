import ConsoleAnimate from "@/svg/device/react/console-animate";
import CPUAnimate from "@/svg/device/react/cpu-animate";
import DesktopAnimate from "@/svg/device/react/desktop-animate";
import MobileAnimate from "@/svg/device/react/mobile-animate";
import MouseAnimate from "@/svg/device/react/mouse-animate";
import WatchAnimate from "@/svg/device/react/watch-animate";

export default function DeviceSVGs(){
    return(
        <div>
            <p>Devices svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <MobileAnimate />
                <DesktopAnimate />
                <MouseAnimate />
                <CPUAnimate />
                <ConsoleAnimate />
                <WatchAnimate />
            </div>
        </div>
    )
}