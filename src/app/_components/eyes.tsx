import EyeAnimate from "@/svg/view/used/eye-animate";
import EyeScanAnimate from "@/svg/view/used/eye-scan-animate";
import ViewHideAnimate from "@/svg/view/used/view-hide-animate";

export default function EyeSVGs(){
    return(
        <div>
            <p>Eyes svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <ViewHideAnimate />
                <EyeAnimate />
                <EyeScanAnimate />
            </div>
        </div>
    )
}