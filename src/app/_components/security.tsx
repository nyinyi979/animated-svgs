import KeyAnimate from "@/svg/security/used/key-animate";
import KeyRectAnimate from "@/svg/security/used/key-rect-animate";
import LockAnimate from "@/svg/security/used/lock-animate";
import LockPlainAnimate from "@/svg/security/used/lock-plain-animate";
import ShieldAnimate from "@/svg/security/used/shield-animate";
import ShieldCheckAnimate from "@/svg/security/used/shield-check-animate";
import UnlockAnimate from "@/svg/security/used/unlock-animate";
import { eachSVGType } from "../page";

export default function SecuritySVGs(props: eachSVGType){
    return(
        <div>
            <p>Security svgs</p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <KeyAnimate {...props} />
                <KeyRectAnimate {...props} />
                <LockPlainAnimate {...props} />
                <LockAnimate {...props} />
                <UnlockAnimate {...props} />
                <ShieldAnimate {...props} />
                <ShieldCheckAnimate {...props} />
            </div>
        </div>
    )
}