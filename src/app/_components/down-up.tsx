import DownloadAnimate from "@/svg/down-up/used/download";
import DownloadCircleAnimate from "@/svg/down-up/used/download-circle-animate";
import LoadingAnimate from "@/svg/down-up/used/loading";
import UploadAnimate from "@/svg/down-up/used/upload";
import UploadCloudAnimate from "@/svg/down-up/used/upload-cloud";
import UploadCircleAnimate from "@/svg/down-up/used/upload-circle";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"

export default function DownUpSVGs(props:eachSVGType){
    const unsetURL = () =>{
        props.setCurrentID("eye");
    }
    return(
        <div id="eye">
            <motion.p
                onViewportLeave={unsetURL}
            >
                Upload/Download svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <DownloadCircleAnimate {...props} />
                <DownloadAnimate {...props} />
                <UploadCircleAnimate {...props} />
                <UploadCloudAnimate {...props} />
                <UploadAnimate {...props} />
                <LoadingAnimate {...props} />
            </div>
        </div>
    )
}