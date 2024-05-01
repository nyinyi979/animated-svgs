import Battery100HorizontalAnimate from "@/svg/phone/used/battery100-horizontal-animate";
import Battery100VerticalAnimate from "@/svg/phone/used/battery100-vertical animate";
import CameraAnimate from "@/svg/phone/used/camera-animate";
import LightningAnimate from "@/svg/phone/used/lightning-animate";
import LightningCircleAnimate from "@/svg/phone/used/lightning-circle-animate";
import Lightning2Animate from "@/svg/phone/used/lightning2-animate";
import NFCAnimate from "@/svg/phone/used/nfc-animate";

export default function PhoneSVGs(){
    return(
        <div>
            <p>Phone svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <Battery100VerticalAnimate />
                <Battery100HorizontalAnimate />
                <CameraAnimate />
                <LightningCircleAnimate />
                <LightningAnimate />
                <Lightning2Animate />
                <NFCAnimate />
            </div>
        </div>
    )
}