import EyeAnimate from "@/svg/view/react/eye-animate";
import EyeScanAnimate from "@/svg/view/react/eye-scan-animate";
import ViewHideAnimate from "@/svg/view/react/view-hide-animate";

export default function EyeSVGs(){
    return(
        <div>
            <p>Eyes svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <ViewHideAnimate />
                <EyeAnimate />
                <EyeScanAnimate />
            </div>
        </div>
    )
}