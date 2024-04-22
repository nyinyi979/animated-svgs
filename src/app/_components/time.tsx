import AlarmClock1Animate from "@/svg/time/react/alarm-clock1-animate";
import AlarmClock2Animate from "@/svg/time/react/alarm-clock2-animate";
import ClockAnimate from "@/svg/time/react/clock-animate";
import TimeProgressAnimate from "@/svg/time/react/time-progress-animate";
import Timer1Animate from "@/svg/time/react/timer1-animate";
import Timer2Animate from "@/svg/time/react/timer2-animate";
import WatchAnimate from "@/svg/time/react/watch-animate";

export default function TimeSVGs(){
    return(
        <div>
            <p>Time svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <AlarmClock1Animate />
                <AlarmClock2Animate />
                <ClockAnimate />
                <TimeProgressAnimate />
                <Timer1Animate />
                <Timer2Animate />
                <WatchAnimate />
            </div>
        </div>
    )
}