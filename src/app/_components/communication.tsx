import CallAnimate from "@/svg/communication/react/call-animate";
import Globe1Animate from "@/svg/communication/react/globe1-animate";
import Globe2Animate from "@/svg/communication/react/globe2-animate";
import Message1Animate from "@/svg/communication/react/message-1-animate";
import Message2Animate from "@/svg/communication/react/message-2-animate";
import MessageOpenAnimate from "@/svg/communication/react/message-open-animate";
import SendHorizontalAnimate from "@/svg/communication/react/send-horizontal-animate";
import SendRotatedAnimate from "@/svg/communication/react/send-rotated-animate";

export default function CommunicationSVGs(){
    return(
        <div>
            <p>Communication svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <CallAnimate />
                <Globe1Animate />
                <Globe2Animate />
                <SendHorizontalAnimate />
                <SendRotatedAnimate />
                <Message1Animate />
                <Message2Animate />
                <MessageOpenAnimate />
            </div>
        </div>
    )
}