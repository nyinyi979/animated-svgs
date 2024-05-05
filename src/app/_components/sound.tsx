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
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function SoundSVGs(props:eachSVGType){
    const unsetURL = () =>{
        props.setCurrentID("time");
    }
    return(
        <div id="time">
            <motion.p
                onViewportLeave={unsetURL}
            >
                Sound svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <MicAnimate {...props} />
                <MusicAnimate {...props} />
                <NoteAnimate {...props} />
                <PlayAnimate {...props} />
                <SoundMaxAnimate {...props} />
                <SoundMinAnimate {...props} />
                <StopAnimate {...props} />
                <StopPlayAnimate {...props} />
                <VideoAnimate {...props} />
            </div>
        </div>
    )
}