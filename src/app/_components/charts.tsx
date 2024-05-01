import BarChart1Animate from "@/svg/charts/used/bar-chart1-animate";
import BarChart2Animate from "@/svg/charts/used/bar-chart2-animate";
import CandleAnimate from "@/svg/charts/used/candle-animate";
import LineChartAnimate from "@/svg/charts/used/line-chart-animate";
import LinesAnimate from "@/svg/charts/used/lines-animate";
import PartsAnimate from "@/svg/charts/used/parts-animate";
import PieChartAnimate from "@/svg/charts/used/pie-chart-animate";
import { eachSVGType } from "../page";

export default function ChartsSVGs(props:eachSVGType){
    return(
        <div>
            <p>Charts svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <BarChart1Animate {...props} />
                <BarChart2Animate {...props} />
                <CandleAnimate {...props} />
                <LineChartAnimate {...props} />
                <LinesAnimate {...props} />
                <PartsAnimate {...props} />
                <PieChartAnimate {...props} />
            </div>        
        </div>
    )
}