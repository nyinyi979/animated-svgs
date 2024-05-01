import CheckAnimate from "@/svg/check/used/check-animate";
import CheckDoubleAnimate from "@/svg/check/used/check-double-animate";
import CheckRingAnimate from "@/svg/check/used/check-ring-animate";
import CheckRingFillAnimate from "@/svg/check/used/check-ring-fill-animate";
import CheckRoundAnimate from "@/svg/check/used/check-round-animate";
import { eachSVGType } from "../page";

export default function CheckSVGs(props:eachSVGType){
    return(
        <div>
            <p>Check svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <CheckAnimate {...props} />
                <CheckRoundAnimate {...props} />
                <CheckDoubleAnimate {...props} />
                <CheckRingAnimate {...props} />
                <CheckRingFillAnimate {...props} />
            </div>        
        </div>
    )
}