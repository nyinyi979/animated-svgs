import CheckDouble_PathFill from "@/svg/check/react/check-double-pathfill";
import Check_PathFill from "@/svg/check/react/check-pathfill";
import CheckRingFill_PathFill from "@/svg/check/react/check-ring-fill-pathFill";
import CheckRing_PathFill from "@/svg/check/react/check-ring-pathFill";
import CheckRound_PathFill from "@/svg/check/react/check-round-pathFill";

export default function CheckSVGs(){
    return(
        <div>
            <p>Check svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <Check_PathFill />
                <CheckDouble_PathFill />
                <CheckRing_PathFill />
                <CheckRingFill_PathFill />
                <CheckRound_PathFill />
            </div>
        </div>
    )
}