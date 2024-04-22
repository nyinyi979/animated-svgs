import BarChart1Animate from "@/svg/charts/react/bar-chart1-animate";
import BarChart2Animate from "@/svg/charts/react/bar-chart2-animate";
import CandleAnimate from "@/svg/charts/react/candle-animate";
import LineChart1Animate from "@/svg/charts/react/line-chart1-animate";
import LineChart2Animate from "@/svg/charts/react/line-chart2-animate";
import LinesAnimate from "@/svg/charts/react/lines-animate";
import PartsAnimate from "@/svg/charts/react/parts-animate";
import PieChartAnimate from "@/svg/charts/react/pie-chart-animate";

export default function ChartsSVGs(){
    return(
        <div>
            <p>Charts svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <BarChart1Animate />
                <BarChart2Animate />
                <CandleAnimate />
                <LineChart1Animate />
                <LineChart2Animate />
                <LinesAnimate />
                <PartsAnimate />
                <PieChartAnimate />
            </div>
        </div>
    )
}