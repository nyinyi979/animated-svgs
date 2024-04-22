import FullScreen1Animate from "@/svg/screen/react/fullscreen1-animate";
import FullScreen2Animate from "@/svg/screen/react/fullscreen2-animate";
import FullScreen3Animate from "@/svg/screen/react/fullscreen3-animate";
import FullScreen4Animate from "@/svg/screen/react/fullscreen4-animate";
import InAnimate from "@/svg/screen/react/in-animate";
import OutAnimate from "@/svg/screen/react/out-animate";
import ReduceAnimate from "@/svg/screen/react/reduce-animate";

export default function ScreenSVGs(){
    return(
        <div>
            <p>Screen svgs</p>
            <div className="grid grid-cols-12 gap-2">
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