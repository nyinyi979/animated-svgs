import CollapseAnimate from "@/svg/sort/react/collapse-animate";
import ShuffleAnimate from "@/svg/sort/react/shuffle-animate";
import SortAAnimate from "@/svg/sort/react/sort-a-animate";
import SortDownAnimate from "@/svg/sort/react/sort-down-animate";
import SortList1Animate from "@/svg/sort/react/sort-list1-animate";
import SortList2Animate from "@/svg/sort/react/sort-list2-animate";
import SortUp1Animate from "@/svg/sort/react/sort-up1-animate";
import SortUp2Animate from "@/svg/sort/react/sort-up2-animate";
import VerticalSort1Animate from "@/svg/sort/react/vertical-sort1-animate";
import VerticalSort2Animate from "@/svg/sort/react/vertical-sort2-animate";

export default function SortSVGs(){
    return(
        <div>
            <p>Sort svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <CollapseAnimate />
                <ShuffleAnimate />
                <SortAAnimate />
                <SortDownAnimate />
                <SortList1Animate />
                <SortList2Animate />
                <SortUp1Animate />
                <SortUp2Animate />
                <VerticalSort1Animate />
                <VerticalSort2Animate />  
            </div>
        </div>
    )
}