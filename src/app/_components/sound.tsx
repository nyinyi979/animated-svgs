import MicAnimate from "@/svg/sound/react/mic-animate";
import MusicAnimate from "@/svg/sound/react/music-animate";
import NoteAnimate from "@/svg/sound/react/note-animate";
import PlayAnimate from "@/svg/sound/react/play-animate";
import SoundMaxAnimate from "@/svg/sound/react/sound-max-animate";
import SoundMinAnimate from "@/svg/sound/react/sound-min-animate";
import StopAnimate from "@/svg/sound/react/stop-animate";
import StopPlayAnimate from "@/svg/sound/react/stop-play-animate";
import VideoAnimate from "@/svg/sound/react/video-animate";

export default function SoundSVGs(){
    return(
        <div>
            <p>Sound svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <MicAnimate />
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