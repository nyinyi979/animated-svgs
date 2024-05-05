import CollapseAnimate from "@/svg/sort/used/collapse-animate";
import ShuffleAnimate from "@/svg/sort/used/shuffle-animate";
import SortAAnimate from "@/svg/sort/used/sort-a-animate";
import SortDownAnimate from "@/svg/sort/used/sort-down-animate";
import SortList1Animate from "@/svg/sort/used/sort-list1-animate";
import SortList2Animate from "@/svg/sort/used/sort-list2-animate";
import SortUp1Animate from "@/svg/sort/used/sort-up1-animate";
import SortUp2Animate from "@/svg/sort/used/sort-up2-animate";
import VerticalSort1Animate from "@/svg/sort/used/vertical-sort1-animate";
import VerticalSort2Animate from "@/svg/sort/used/vertical-sort2-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"

export default function SortSVGs(props: eachSVGType){
    const unsetURL = () =>{
        props.setCurrentID("sound");
    }
    return(
        <div id="sound">
            <motion.p
                onViewportLeave={unsetURL}
            >
                Sort svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <CollapseAnimate {...props} />
                <ShuffleAnimate {...props} />
                <SortAAnimate {...props} />
                <SortDownAnimate {...props} />
                <SortList1Animate {...props} />
                <SortList2Animate {...props} />
                <SortUp1Animate {...props} />
                <SortUp2Animate {...props} />
                <VerticalSort1Animate {...props} />
                <VerticalSort2Animate {...props} />  
            </div>
        </div>
    )
}