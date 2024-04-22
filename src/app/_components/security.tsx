import KeyAnimate from "@/svg/security/react/key-animate";
import KeyRectAnimate from "@/svg/security/react/key-rect-animate";
import LockAnimate from "@/svg/security/react/lock-animate";
import LockPlainAnimate from "@/svg/security/react/lock-plain-animate";
import ShieldAnimate from "@/svg/security/react/shield-animate";
import ShieldCheckAnimate from "@/svg/security/react/shield-check copy";
import UnlockAnimate from "@/svg/security/react/unlock-animate";

export default function SecuritySVGs(){
    return(
        <div>
            <p>Security svgs</p>
            <div className="grid grid-cols-12 gap-2">
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