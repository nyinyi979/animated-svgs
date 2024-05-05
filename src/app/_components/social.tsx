import ChatAdd1Animate from "@/svg/social/used/chat-add1-animate";
import ChatAdd2Animate from "@/svg/social/used/chat-add2-animate";
import ChatAdd3Animate from "@/svg/social/used/chat-add3-animate";
import ChatSearchAnimate from "@/svg/social/used/chat-search-animate";
import Chat1Animate from "@/svg/social/used/chat1-animate";
import Chat2Animate from "@/svg/social/used/chat2-animate";
import Chat3Animate from "@/svg/social/used/chat3-animate";
import Chat4Animate from "@/svg/social/used/chat4-animate";
import IGAnimate from "@/svg/social/used/ig-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function SocialSVGs(props: eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#social",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#sort",{scroll:false})
    }
    return(
        <div id="sort">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Social svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <ChatAdd1Animate {...props} />
                <ChatAdd2Animate {...props} />
                <ChatAdd3Animate {...props} />
                <ChatSearchAnimate {...props} />
                <Chat1Animate {...props} />
                <Chat2Animate {...props} />
                <Chat3Animate {...props} />
                <Chat4Animate {...props} />
                <IGAnimate {...props} />
            </div>
        </div>
    )
}