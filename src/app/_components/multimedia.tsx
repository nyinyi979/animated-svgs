import FileAddAnimate from "@/svg/multimedia/react/file-add-animate";
import FileAnimate from "@/svg/multimedia/react/file-animate";
import FolderDeleteAnimate from "@/svg/multimedia/react/folder-delete-animate";
import FileSearchAnimate from "@/svg/multimedia/react/file-search-animation";
import FolderAddAnimate from "@/svg/multimedia/react/folder-add-animate";
import FolderAnimate from "@/svg/multimedia/react/folder-animate";
import FolderFileAnimate from "@/svg/multimedia/react/folder-file-animate";
import ImageAnimate from "@/svg/multimedia/react/image-animate";
import ImageLoadAnimate from "@/svg/multimedia/react/image-load-animate";
import ImageOutAnimate from "@/svg/multimedia/react/image-out";
import VideoAnimate from "@/svg/multimedia/react/video-animate";
import FolderCheckAnimate from "@/svg/multimedia/react/folder-check-animate";
import FolderUploadAnimate from "@/svg/multimedia/react/folder-upload-animate";
import FolderSearchAnimate from "@/svg/multimedia/react/folder-search-animate";
import FolderCopyAnimate from "@/svg/multimedia/react/folder-copy-animate";
import FolderOpenAnimate from "@/svg/multimedia/react/folder-open-animat";
import FolderDeleteFillAnimate from "@/svg/multimedia/react/folder-delete-fill-animate";
import FolderCheckFillAnimate from "@/svg/multimedia/react/folder-check-fill-animate";
import FolderUploadFillAnimate from "@/svg/multimedia/react/folder-upload-fill-animate";
import FolderSearchFillAnimate from "@/svg/multimedia/react/folder-search-fill-animate";

export default function MMSVGs(){
    return(
        <div>
            <p>Multimedia svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <FolderAnimate />
                <FolderFileAnimate />
                <FolderOpenAnimate />
                <FolderAddAnimate />
                <FolderDeleteAnimate />
                <FolderDeleteFillAnimate />
                <FolderCheckAnimate />
                <FolderCheckFillAnimate />
                <FolderUploadAnimate />
                <FolderUploadFillAnimate />
                <FolderSearchAnimate />
                <FolderSearchFillAnimate />
                <FolderCopyAnimate />
                <FileAddAnimate />
                <FileAnimate />
                <FileSearchAnimate />
                <ImageAnimate />
                <ImageLoadAnimate />
                <ImageOutAnimate />
                <VideoAnimate />
            </div>
        </div>
    )
}