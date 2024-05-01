import BookmarkAnimate from "@/svg/reaction/used/bookmark-animate";
import Flag1Animate from "@/svg/reaction/used/flag1-animate";
import Flag2Animate from "@/svg/reaction/used/flag2-animate";
import Flag3Animate from "@/svg/reaction/used/flag3-animate";
import HeartBrokenAnimate from "@/svg/reaction/used/heart-broken-animate";
import LabelAnimate from "@/svg/reaction/used/label-animate";
import PinAnimate from "@/svg/reaction/used/pin-animate";
import StarAnimate from "@/svg/reaction/used/star-animate";
import { eachSVGType } from "../page";

export default function ReactionSVGs(props: eachSVGType){
    return(
        <div>
            <p>Reaction svgs</p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <BookmarkAnimate {...props} />
                <Flag1Animate {...props} />
                <Flag2Animate {...props} />
                <Flag3Animate {...props} />
                <HeartBrokenAnimate {...props} />
                <LabelAnimate {...props} />
                <PinAnimate {...props} />
                <StarAnimate {...props} />
            </div>
        </div>
    )
}