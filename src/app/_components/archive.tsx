import Archive0Animate from "@/svg/archive/react/archive-0-animate";
import Archive1Animate from "@/svg/archive/react/archive-1-animate";
import ArchiveDownloadAnimate from "@/svg/archive/react/archive-download-animate";
import ArchiveExportAnimate from "@/svg/archive/react/archive-export-animate";
import ArchivePlusAnimate from "@/svg/archive/react/archive-plus-animate";
import ArchiveStoreAnimate from "@/svg/archive/react/archive-store-animate";
import ArchiveUploadAnimate from "@/svg/archive/react/archive-upload-animate";

export default function ArchiveSVGs(){
    return(
        <div>
            <p>Archive svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <Archive0Animate />
                <Archive1Animate />
                <ArchiveDownloadAnimate />
                <ArchiveExportAnimate />
                <ArchivePlusAnimate />
                <ArchiveStoreAnimate />
                <ArchiveUploadAnimate />
            </div>
        </div>
    )
}