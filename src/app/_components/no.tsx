import CancelAnimate from "@/svg/no/used/cancel-animate";
import RemoveAnimate from "@/svg/no/used/remove-animate";
import { eachSVGType } from "../page";

export default function NoSVGs(props: eachSVGType){
    return(
        <div>
            <p>No svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <CancelAnimate {...props} />
                <RemoveAnimate {...props} /> 
            </div>
        </div>
    )
}