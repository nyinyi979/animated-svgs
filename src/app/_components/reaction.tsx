import BookmarkAnimate from "@/svg/reaction/used/bookmark-animate";
import Flag1Animate from "@/svg/reaction/used/flag1-animate";
import Flag2Animate from "@/svg/reaction/used/flag2-animate";
import Flag3Animate from "@/svg/reaction/used/flag3-animate";
import HeartBrokenAnimate from "@/svg/reaction/used/heart-broken-animate";
import LabelAnimate from "@/svg/reaction/used/label-animate";
import PinAnimate from "@/svg/reaction/used/pin-animate";
import StarAnimate from "@/svg/reaction/used/star-animate";

export default function ReactionSVGs(){
    return(
        <div>
            <p>Reaction svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <BookmarkAnimate />
                <Flag1Animate />
                <Flag2Animate />
                <Flag3Animate />
                <HeartBrokenAnimate />
                <LabelAnimate />
                <PinAnimate />
                <StarAnimate />
            </div>
        </div>
    )
}