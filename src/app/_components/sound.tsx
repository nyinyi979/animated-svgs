import MicAnimate from "@/svg/sound/used/mic-animate";
import MusicAnimate from "@/svg/sound/used/music-animate";
import NoteAnimate from "@/svg/sound/used/note-animate";
import PlayAnimate from "@/svg/sound/used/play-animate";
import SoundMaxAnimate from "@/svg/sound/used/sound-max-animate";
import SoundMinAnimate from "@/svg/sound/used/sound-min-animate";
import StopAnimate from "@/svg/sound/used/stop-animate";
import StopPlayAnimate from "@/svg/sound/used/stop-play-animate";
import VideoAnimate from "@/svg/sound/used/video-animate";
import { eachSVGType } from "../page";

export default function SoundSVGs(props:eachSVGType){
    return(
        <div>
            <p>Sound svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <MicAnimate {...props} />
                <MusicAnimate />
                <NoteAnimate />
                <PlayAnimate />
                <SoundMaxAnimate />
                <SoundMinAnimate />
                <StopAnimate />
                <StopPlayAnimate />
                <VideoAnimate />
            </div>
        </div>
    )
}