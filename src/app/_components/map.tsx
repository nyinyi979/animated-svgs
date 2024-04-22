import CompassAnimate from "@/svg/map/react/compass-animate";
import DirectionAnimate from "@/svg/map/react/direction-animate";
import GPSAnimate from "@/svg/map/react/gps-animate";
import MapAnimate from "@/svg/map/react/map-animate";
import OdometerAnimate from "@/svg/map/react/odometer-animate";
import PINAnimate from "@/svg/map/react/pin-animate";

export default function MapSVGs(){
    return(
        <div>
            <p>Map svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <MapAnimate />
                <GPSAnimate />
                <CompassAnimate />
                <PINAnimate />
                <DirectionAnimate />
                <OdometerAnimate />
            </div>
        </div>
    )
}