import DownloadAnimate from "@/svg/down-up/react/download";
import DownloadCircleAnimate from "@/svg/down-up/react/download-circle-animate";
import LoadingAnimate from "@/svg/down-up/react/loading";
import UploadAnimate from "@/svg/down-up/react/upload";
import UploadCloudAnimate from "@/svg/down-up/react/upload-cloud";
import UploadCircleAnimate from "@/svg/down-up/react/upload-cricle";

export default function DownUpSVGs(){
    return(
        <div>
            <p>Upload/Download svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <DownloadCircleAnimate />
                <DownloadAnimate />
                <UploadCircleAnimate />
                <UploadCloudAnimate />
                <UploadAnimate />
                <LoadingAnimate />
            </div>
        </div>
    )
}