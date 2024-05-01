import AddAnimate from "@/svg/add/used/add-animate";
import AddRoundAnimate from "@/svg/add/used/add-round-animate";
import AddRoundFillAnimate from "@/svg/add/used/add-round-fill-animate";
import AddSquareAnimate from "@/svg/add/used/add-square-animate";
import AddSquareFillAnimate from "@/svg/add/used/add-square-fill-animate";
import { eachSVGType } from "../page";

export default function AddSVGs(props:eachSVGType){
    return(
        <div>
            <p>Add (+) svgs</p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <AddAnimate {...props} />
                <AddSquareAnimate {...props} />
                <AddSquareFillAnimate {...props} />
                <AddRoundAnimate {...props} />
                <AddRoundFillAnimate {...props} />
            </div>        
        </div>
    )
}