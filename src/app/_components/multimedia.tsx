import FileAddAnimate from "@/svg/multimedia/used/file-add-animate";
import FileAnimate from "@/svg/multimedia/used/file-animate";
import FolderDeleteAnimate from "@/svg/multimedia/used/folder-delete-animate";
import FileSearchAnimate from "@/svg/multimedia/used/file-search-animation";
import FolderAddAnimate from "@/svg/multimedia/used/folder-add-animate";
import FolderAnimate from "@/svg/multimedia/used/folder-animate";
import FolderFileAnimate from "@/svg/multimedia/used/folder-file-animate";
import ImageAnimate from "@/svg/multimedia/used/image-animate";
import ImageLoadAnimate from "@/svg/multimedia/used/image-load-animate";
import ImageOutAnimate from "@/svg/multimedia/used/image-out-animate";
import VideoAnimate from "@/svg/multimedia/used/video-animate";
import FolderCheckAnimate from "@/svg/multimedia/used/folder-check-animate";
import FolderUploadAnimate from "@/svg/multimedia/used/folder-upload-animate";
import FolderSearchAnimate from "@/svg/multimedia/used/folder-search-animate";
import FolderCopyAnimate from "@/svg/multimedia/used/folder-copy-animate";
import FolderOpenAnimate from "@/svg/multimedia/used/folder-open-animat";
import FolderDeleteFillAnimate from "@/svg/multimedia/used/folder-delete-fill-animate";
import FolderCheckFillAnimate from "@/svg/multimedia/used/folder-check-fill-animate";
import FolderUploadFillAnimate from "@/svg/multimedia/used/folder-upload-fill-animate";
import FolderSearchFillAnimate from "@/svg/multimedia/used/folder-search-fill-animate";
import { eachSVGType } from "../page";

export default function MMSVGs(props: eachSVGType){
    return(
        <div>
            <p>Multimedia svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <FolderAnimate {...props} />
                <FolderFileAnimate {...props} />
                <FolderOpenAnimate {...props} />
                <FolderAddAnimate {...props} />
                <FolderDeleteAnimate {...props} />
                <FolderDeleteFillAnimate {...props} />
                <FolderCheckAnimate {...props} />
                <FolderCheckFillAnimate {...props} />
                <FolderUploadAnimate {...props} />
                <FolderUploadFillAnimate {...props} />
                <FolderSearchAnimate {...props} />
                <FolderSearchFillAnimate {...props}/>
                <FolderCopyAnimate {...props} />
                <FileAddAnimate {...props} />
                <FileAnimate {...props} />
                <FileSearchAnimate {...props} />
                <ImageAnimate {...props} />
                <ImageLoadAnimate {...props} />
                <ImageOutAnimate {...props} />
                <VideoAnimate {...props} />
            </div>
        </div>
    )
}