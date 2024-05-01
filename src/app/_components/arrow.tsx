import ArrowDownAnimate from "@/svg/arrow/used/arrow-down-animate";
import ArrowDownFillAnimate from "@/svg/arrow/used/arrow-down-fill-animate";
import ArrowDownLAnimate from "@/svg/arrow/used/arrow-down-l-animate";
import ArrowLeftAnimate from "@/svg/arrow/used/arrow-left-animate";
import ArrowLeftFillAnimate from "@/svg/arrow/used/arrow-left-fill-animate";
import ArrowLeftLAnimate from "@/svg/arrow/used/arrow-left-l-animate";
import ArrowRightAnimate from "@/svg/arrow/used/arrow-right-animate";
import ArrowRightFillAnimate from "@/svg/arrow/used/arrow-right-fill-animate";
import ArrowRightLAnimate from "@/svg/arrow/used/arrow-right-l-animate";
import ArrowTopAnimate from "@/svg/arrow/used/arrow-top-animate";
import ArrowTopFillAnimate from "@/svg/arrow/used/arrow-top-fill-animate";
import ArrowTopLAnimate from "@/svg/arrow/used/arrow-top-l-animate";
import CurveDownAnimate from "@/svg/arrow/used/curve-down-animate";
import CurveLeftAnimate from "@/svg/arrow/used/curve-left-animate";
import CurveRightAnimate from "@/svg/arrow/used/curve-right-animate";
import CurveSDownAnimate from "@/svg/arrow/used/curve-s-down-animate";
import CurveSLeftAnimate from "@/svg/arrow/used/curve-s-left-animate";
import CurveSRightAnimate from "@/svg/arrow/used/curve-s-right-animate";
import CurveSTopAnimate from "@/svg/arrow/used/curve-s-top-animate";
import CurveTopAnimate from "@/svg/arrow/used/curve-top-animate";
import DoubleDownAnimate from "@/svg/arrow/used/double-down-animate";
import DoubleLeftAnimate from "@/svg/arrow/used/double-left-animate";
import DoubleRightAnimate from "@/svg/arrow/used/double-right-animate";
import DoubleTopAnimate from "@/svg/arrow/used/double-top-animate";
import DoubleLDownAnimate from "@/svg/arrow/used/doublel-down-animate";
import DoubleLLeftAnimate from "@/svg/arrow/used/doublel-left-animate";
import DoubleLRightAnimate from "@/svg/arrow/used/doublel-right-animate";
import DoubleLTopAnimate from "@/svg/arrow/used/doublel-top-animate";
import DownArrowLineAnimate from "@/svg/arrow/used/down-arrow-line-animate";
import DownDoubleAnimate from "@/svg/arrow/used/down-double-animate";
import ExpandDDownAnimate from "@/svg/arrow/used/expand-d-down-animate";
import ExpandDLeftAnimate from "@/svg/arrow/used/expand-d-left-animate";
import ExpandDRightAnimate from "@/svg/arrow/used/expand-d-right-animate";
import ExpandDownAnimate from "@/svg/arrow/used/expand-down-animate";
import ExpandLeftAnimate from "@/svg/arrow/used/expand-left-animate";
import ExpandRightAnimate from "@/svg/arrow/used/expand-right-animate";
import ExpandTopAnimate from "@/svg/arrow/used/expand-top-animate";
import LeftArrowLineAnimate from "@/svg/arrow/used/left-arrow-line-animate";
import LeftDoubleAnimate from "@/svg/arrow/used/left-double-animate";
import LineSDownAnimate from "@/svg/arrow/used/line-s-down-animate";
import LineSLeftAnimate from "@/svg/arrow/used/line-s-left-animate";
import LineSRightAnimate from "@/svg/arrow/used/line-s-right-animate";
import LineSTopAnimate from "@/svg/arrow/used/line-s-top-animate";
import RightArrowLineAnimate from "@/svg/arrow/used/right-arrow-line-animate";
import RightDoubleAnimate from "@/svg/arrow/used/right-double-animate";
import TopArrowLineAnimate from "@/svg/arrow/used/top-arrow-line-animate";
import TopDoubleAnimate from "@/svg/arrow/used/top-double-animate";
import { eachSVGType } from "../page";
import ExpandDTopAnimate from "@/svg/arrow/used/expand-d-top-animate";

export default function ArrowSVGs(props:eachSVGType){
    return(
        <div>
            <p>Arrow svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <ArrowDownAnimate {...props}/>
                <ArrowDownLAnimate {...props} />
                <ArrowDownFillAnimate {...props} />
                <CurveDownAnimate {...props} />
                <CurveSDownAnimate {...props} />
                <DoubleDownAnimate {...props} />
                <DoubleLDownAnimate {...props} />
                <DownArrowLineAnimate {...props} />
                <LineSDownAnimate {...props} />
                <ExpandDDownAnimate {...props} />
                <DownDoubleAnimate {...props} />
                <ExpandDownAnimate {...props} />

                <ArrowLeftAnimate {...props} />
                <ArrowLeftLAnimate {...props} />
                <ArrowLeftFillAnimate {...props} />
                <CurveLeftAnimate {...props} />
                <CurveSLeftAnimate {...props} />
                <DoubleLeftAnimate {...props} />
                <DoubleLLeftAnimate {...props} />
                <LeftArrowLineAnimate {...props} />
                <LineSLeftAnimate {...props} />
                <ExpandDLeftAnimate {...props} />
                <LeftDoubleAnimate {...props} />
                <ExpandLeftAnimate {...props} />

                <ArrowRightAnimate {...props} />
                <ArrowRightLAnimate {...props} />
                <ArrowRightFillAnimate {...props} />
                <CurveRightAnimate {...props} />
                <CurveSRightAnimate {...props} />
                <DoubleRightAnimate {...props} />
                <DoubleLRightAnimate {...props} />
                <RightArrowLineAnimate {...props} />
                <LineSRightAnimate {...props} />
                <ExpandDRightAnimate {...props} />
                <RightDoubleAnimate {...props} />
                <ExpandRightAnimate {...props} />

                <ArrowTopAnimate {...props} />
                <ArrowTopLAnimate {...props} />
                <ArrowTopFillAnimate {...props} />
                <CurveTopAnimate {...props} />
                <CurveSTopAnimate {...props} />
                <DoubleTopAnimate {...props} />
                <DoubleLTopAnimate {...props} />
                <TopArrowLineAnimate {...props} />
                <LineSTopAnimate {...props} />
                <ExpandDTopAnimate {...props} />
                <TopDoubleAnimate {...props} />
                <ExpandTopAnimate {...props} />
            </div>        
        </div>
    )
}