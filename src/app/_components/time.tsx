import AlarmClock1Animate from "@/svg/time/used/alarm-clock1-animate";
import AlarmClock2Animate from "@/svg/time/used/alarm-clock2-animate";
import ClockAnimate from "@/svg/time/used/clock-animate";
import TimeProgressAnimate from "@/svg/time/used/time-progress-animate";
import Timer1Animate from "@/svg/time/used/timer1-animate";
import Timer2Animate from "@/svg/time/used/timer2-animate";
import WatchAnimate from "@/svg/time/used/watch-animate";

export default function TimeSVGs(){
    return(
        <div>
            <p>Time svgs</p>
            <div className="grid grid-cols-16 gap-2">
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