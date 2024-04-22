import Battery100HorizontalAnimate from "@/svg/phone/react/battery100-horizontal-animate";
import Battery100VerticalAnimate from "@/svg/phone/react/battery100-vertical animate";
import CameraAnimate from "@/svg/phone/react/camera-animate";
import LightningAnimate from "@/svg/phone/react/lightning-animate";
import LightningCircleAnimate from "@/svg/phone/react/lightning-circle-animate";
import Lightning2Animate from "@/svg/phone/react/lightning2-animate";
import NFCAnimate from "@/svg/phone/react/nfc-animate";

export default function PhoneSVGs(){
    return(
        <div>
            <p>Phone svgs</p>
            <div className="grid grid-cols-12 gap-2">
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