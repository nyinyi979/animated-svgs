import EyeAnimate from "@/svg/view/used/eye-animate";
import EyeScanAnimate from "@/svg/view/used/eye-scan-animate";
import ViewHideAnimate from "@/svg/view/used/view-hide-animate";
import { eachSVGType } from "../page";

export default function EyeSVGs(props: eachSVGType){
    return(
        <div>
            <p>Eyes svgs</p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <ViewHideAnimate {...props} />
                <EyeAnimate {...props} />
                <EyeScanAnimate {...props} />
            </div>
        </div>
    )
}