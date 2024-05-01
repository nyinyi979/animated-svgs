import Archive0Animate from "@/svg/archive/used/archive-0-animate";
import Archive1Animate from "@/svg/archive/used/archive-1-animate";
import ArchiveDownloadAnimate from "@/svg/archive/used/archive-download-animate";
import ArchiveExportAnimate from "@/svg/archive/used/archive-export-animate";
import ArchivePlusAnimate from "@/svg/archive/used/archive-plus-animate";
import ArchiveStoreAnimate from "@/svg/archive/used/archive-store-animate";
import ArchiveUploadAnimate from "@/svg/archive/used/archive-upload-animate";
import { eachSVGType } from "../page";

export default function ArchiveSVGs(props:eachSVGType){
    return(
        <div>
            <p>Archive svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <Archive0Animate {...props} />
                <Archive1Animate {...props} />
                <ArchiveDownloadAnimate {...props} />
                <ArchiveExportAnimate {...props} />
                <ArchivePlusAnimate {...props} />
                <ArchiveStoreAnimate {...props} />
                <ArchiveUploadAnimate {...props} />
            </div>        
        </div>
    )
}