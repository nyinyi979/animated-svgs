import BellAnimate from "@/svg/notification/react/bell-animate";
import BellPinAnimate from "@/svg/notification/react/bell-pin-animate";
import FireAnimate from "@/svg/notification/react/fire-animate";
import LampAnimate from "@/svg/notification/react/lamp-animate";

export default function NotificationSVGs(){
    return(
        <div>
            <p>Notifications svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <BellAnimate />
                <BellPinAnimate />
                <FireAnimate />
                <LampAnimate />
            </div>
        </div>
    )
}