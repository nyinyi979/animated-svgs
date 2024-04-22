import BookmarkAnimate from "@/svg/reaction/react/bookmark-animate";
import Flag1Animate from "@/svg/reaction/react/flag1-animate";
import Flag2Animate from "@/svg/reaction/react/flag2-animate";
import Flag3Animate from "@/svg/reaction/react/flag3-animate";
import HeartBrokenAnimate from "@/svg/reaction/react/heart-broken-animate";
import LabelAnimate from "@/svg/reaction/react/label-animate";
import PinAnimate from "@/svg/reaction/react/pin-animate";
import StarAnimate from "@/svg/reaction/react/star-animate";

export default function ReactionSVGs(){
    return(
        <div>
            <p>Reaction svgs</p>
            <div className="grid grid-cols-12 gap-2">
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