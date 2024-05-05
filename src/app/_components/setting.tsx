import SettingAnimate from "@/svg/menu/used/setting-animate";
import Edit1Animate from "@/svg/setting/used/edit1-animate";
import Edit2Animate from "@/svg/setting/used/edit2-animate";
import Info1Animate from "@/svg/setting/used/info1-animate";
import Info2Animate from "@/svg/setting/used/info2-animate";
import Info3Animate from "@/svg/setting/used/info3-animate";
import OnAnimate from "@/svg/setting/used/on-animate";
import QuestionAnimate from "@/svg/setting/used/question-animate";
import Search1Animate from "@/svg/setting/used/search1-animate";
import Search2Animate from "@/svg/setting/used/search2-animate";
import SettingLinesAnimate from "@/svg/setting/used/setting-lines-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"

export default function SettingSVGs(props: eachSVGType){
    const unsetURL = () =>{
        props.setCurrentID("signin");
    }
    return(
        <div id="signin">
            <motion.p
                onViewportLeave={unsetURL}
            >
                Setting svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <Edit1Animate {...props} />
                <Edit2Animate {...props} />
                <Info1Animate {...props} />
                <Info2Animate {...props} />
                <Info3Animate {...props} />
                <OnAnimate {...props} />
                <QuestionAnimate {...props} />
                <Search1Animate {...props} />
                <Search2Animate {...props} />
                <SettingAnimate {...props} />
                <SettingLinesAnimate {...props} />
            </div>
        </div>
    )
}