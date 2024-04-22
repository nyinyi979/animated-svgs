import Add_PathFill from "@/svg/add/react/add-pathFill";
import AddRoundFill_PathFill from "@/svg/add/react/add-round-fill-pathFill";
import AddRoundFill_Scale from "@/svg/add/react/add-round-fill-scale";
import AddRound_PathFill from "@/svg/add/react/add-round-pathFill";
import AddRound_Scale from "@/svg/add/react/add-round-scale";
import Add_Scale from "@/svg/add/react/add-scale";
import AddSquareFill_Scale from "@/svg/add/react/add-sqaure-fill-scale";
import AddSquareFill_PathFill from "@/svg/add/react/add-square-fill-pathFill";
import AddSquare_PathFill from "@/svg/add/react/add-square-pathFill";
import AddSquare_Scale from "@/svg/add/react/add-square-scale";

export default function AddSVGs(){
    return(
        <div>
            <p>Add (+) svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <Add_PathFill />
                <Add_Scale />
                <AddRoundFill_PathFill />
                <AddRoundFill_Scale />
                <AddRound_PathFill />
                <AddRound_Scale />
                <AddSquareFill_PathFill />
                <AddSquareFill_Scale />
                <AddSquare_PathFill />
                <AddSquare_Scale />
            </div>
        </div>
    )
}