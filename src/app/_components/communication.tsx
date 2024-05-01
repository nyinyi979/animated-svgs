import CallAnimate from "@/svg/communication/used/call-animate";
import Globe1Animate from "@/svg/communication/used/globe1-animate";
import Globe2Animate from "@/svg/communication/used/globe2-animate";
import Message1Animate from "@/svg/communication/used/message-1-animate";
import Message2Animate from "@/svg/communication/used/message-2-animate";
import MessageOpenAnimate from "@/svg/communication/used/message-open-animate";
import SendHorizontalAnimate from "@/svg/communication/used/send-horizontal-animate";
import SendRotatedAnimate from "@/svg/communication/used/send-rotated-animate";
import { eachSVGType } from "../page";

export default function CommunicationSVGs(props:eachSVGType){
    return(
        <div>
            <p>Communication svgs</p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <CallAnimate {...props} />
                <Globe1Animate {...props} />
                <Globe2Animate {...props} />
                <SendHorizontalAnimate {...props} />
                <SendRotatedAnimate {...props} />
                <Message1Animate {...props} />
                <Message2Animate {...props} />
                <MessageOpenAnimate {...props} />
            </div>        
        </div>
    )
}