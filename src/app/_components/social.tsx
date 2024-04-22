import ChatAdd1Animate from "@/svg/social/react/chat-add1-animate";
import ChatAdd2Animate from "@/svg/social/react/chat-add2-animate";
import ChatAdd3Animate from "@/svg/social/react/chat-add3-animate";
import ChatSearchAnimate from "@/svg/social/react/chat-search-animate";
import Chat1Animate from "@/svg/social/react/chat1-animate";
import Chat2Animate from "@/svg/social/react/chat2-animate";
import Chat3Animate from "@/svg/social/react/chat3-animate";
import Chat4Animate from "@/svg/social/react/chat4-animate";
import IGAnimate from "@/svg/social/react/ig-animate";

export default function SocialSVGs(){
    return(
        <div>
            <p>Social svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <ChatAdd1Animate />
                <ChatAdd2Animate />
                <ChatAdd3Animate />
                <ChatSearchAnimate />
                <Chat1Animate />
                <Chat2Animate />
                <Chat3Animate />
                <Chat4Animate />
                <IGAnimate />
            </div>
        </div>
    )
}