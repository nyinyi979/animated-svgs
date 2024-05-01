import BellAnimate from "@/svg/notification/used/bell-animate";
import BellPinAnimate from "@/svg/notification/used/bell-pin-animate";
import FireAnimate from "@/svg/notification/used/fire-animate";
import LampAnimate from "@/svg/notification/used/lamp-animate";
import { eachSVGType } from "../page";

export default function NotificationSVGs(props: eachSVGType){
    return(
        <div>
            <p>Notifications svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <BellAnimate {...props} />
                <BellPinAnimate {...props} />
                <FireAnimate {...props} />
                <LampAnimate {...props} />
            </div>
        </div>
    )
}