import CancelAnimate from "@/svg/no/react/cancel-animate";
import RemoveAnimate from "@/svg/no/react/remove-animate";

export default function NoSVGs(){
    return(
        <div>
            <p>No svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <CancelAnimate />
                <RemoveAnimate /> 
            </div>
        </div>
    )
}