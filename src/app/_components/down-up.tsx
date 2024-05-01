import DownloadAnimate from "@/svg/down-up/used/download";
import DownloadCircleAnimate from "@/svg/down-up/used/download-circle-animate";
import LoadingAnimate from "@/svg/down-up/used/loading";
import UploadAnimate from "@/svg/down-up/used/upload";
import UploadCloudAnimate from "@/svg/down-up/used/upload-cloud";
import UploadCircleAnimate from "@/svg/down-up/used/upload-circle";
import { eachSVGType } from "../page";

export default function DownUpSVGs(props:eachSVGType){
    return(
        <div>
            <p>Upload/Download svgs</p>
            <div className="grid grid-cols-16 gap-2">
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