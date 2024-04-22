import SettingAnimate from "@/svg/menu/react/setting-animate";
import Edit1Animate from "@/svg/setting/react/edit1-animate";
import Edit2Animate from "@/svg/setting/react/edit2-animate";
import Info1Animate from "@/svg/setting/react/info1-animate";
import Info2Animate from "@/svg/setting/react/info2-animate";
import Info3Animate from "@/svg/setting/react/info3-animate";
import OnAnimate from "@/svg/setting/react/on-animate";
import QuestionAnimate from "@/svg/setting/react/question-animate";
import Search1Animate from "@/svg/setting/react/search1-animate";
import Search2Animate from "@/svg/setting/react/search2-animate";
import SettingLinesAnimate from "@/svg/setting/react/setting-lines-animate";

export default function SettingSVGs(){
    return(
        <div>
            <p>Setting svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <Edit1Animate />
                <Edit2Animate />
                <Info1Animate />
                <Info2Animate />
                <Info3Animate />
                <OnAnimate />
                <QuestionAnimate />
                <Search1Animate />
                <Search2Animate />
                <SettingAnimate />
                <SettingLinesAnimate />
            </div>
        </div>
    )
}