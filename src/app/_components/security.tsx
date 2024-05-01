import KeyAnimate from "@/svg/security/used/key-animate";
import KeyRectAnimate from "@/svg/security/used/key-rect-animate";
import LockAnimate from "@/svg/security/used/lock-animate";
import LockPlainAnimate from "@/svg/security/used/lock-plain-animate";
import ShieldAnimate from "@/svg/security/used/shield-animate";
import ShieldCheckAnimate from "@/svg/security/used/shield-check-animate";
import UnlockAnimate from "@/svg/security/used/unlock-animate";

export default function SecuritySVGs(){
    return(
        <div>
            <p>Security svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <KeyAnimate />
                <KeyRectAnimate />
                <LockPlainAnimate />
                <LockAnimate />
                <UnlockAnimate />
                <ShieldAnimate />
                <ShieldCheckAnimate />
            </div>
        </div>
    )
}