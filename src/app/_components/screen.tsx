import FullScreen1Animate from "@/svg/screen/used/fullscreen1-animate";
import FullScreen2Animate from "@/svg/screen/used/fullscreen2-animate";
import FullScreen3Animate from "@/svg/screen/used/fullscreen3-animate";
import FullScreen4Animate from "@/svg/screen/used/fullscreen4-animate";
import InAnimate from "@/svg/screen/used/in-animate";
import OutAnimate from "@/svg/screen/used/out-animate";
import ReduceAnimate from "@/svg/screen/used/reduce-animate";

export default function ScreenSVGs(){
    return(
        <div>
            <p>Screen svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <FullScreen1Animate />
                <FullScreen2Animate />
                <FullScreen3Animate />
                <FullScreen4Animate />
                <InAnimate />
                <OutAnimate />
                <ReduceAnimate />
            </div>
        </div>
    )
}