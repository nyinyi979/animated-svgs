import Cross_PathFill from "@/svg/cross/react/cross-pathFill";
import Cross_Scale from "@/svg/cross/react/cross-scale";
import CrossRoundFill_PathFill from "@/svg/cross/react/cross-round-fill-pathFill";
import CrossRoundFill_Scale from "@/svg/cross/react/cross-round-fill-scale";
import CrossRound_PathFill from "@/svg/cross/react/cross-round-pathFill";
import CrossRound_Scale from "@/svg/cross/react/cross-round-scale";
import CrossSquareFill_PathFill from "@/svg/cross/react/cross-square-fill-pathFill";
import CrossSquareFill_Scale from "@/svg/cross/react/cross-square-fill-scale";
import CrossSquare_PathFill from "@/svg/cross/react/cross-square-pathFill";
import CrossSquare_Scale from "@/svg/cross/react/cross-square-scale";

export default function CrossSVGs(){
    return(
        <div>
            <p>Cross (x) svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <Cross_PathFill />
                <Cross_Scale />
                <CrossRoundFill_PathFill />
                <CrossRoundFill_Scale />
                <CrossRound_PathFill />
                <CrossRound_Scale />
                <CrossSquareFill_PathFill />
                <CrossSquareFill_Scale />
                <CrossSquare_PathFill />
                <CrossSquare_Scale />
            </div>
        </div>
    )
}