import CrossAnimate from "@/svg/cross/used/cross-animate";
import CrossRoundAnimate from "@/svg/cross/used/cross-round-animate";
import CrossRoundFillAnimate from "@/svg/cross/used/cross-round-fill-animate";
import CrossSquareAnimate from "@/svg/cross/used/cross-square-animate";
import CrossSquareFillAnimate from "@/svg/cross/used/cross-square-fill-animate";
import { eachSVGType } from "../page";

export default function CrossSVGs(props:eachSVGType){
    return(
        <div>
            <p>Cross (x) svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <CrossAnimate {...props} />
                <CrossRoundAnimate {...props} />
                <CrossSquareAnimate {...props} />
                <CrossRoundFillAnimate {...props} />
                <CrossSquareFillAnimate {...props} />    
            </div>        
        </div>
    )
}