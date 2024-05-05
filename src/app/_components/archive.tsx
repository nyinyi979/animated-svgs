import Archive0Animate from "@/svg/archive/used/archive-0-animate";
import Archive1Animate from "@/svg/archive/used/archive-1-animate";
import ArchiveDownloadAnimate from "@/svg/archive/used/archive-download-animate";
import ArchiveExportAnimate from "@/svg/archive/used/archive-export-animate";
import ArchivePlusAnimate from "@/svg/archive/used/archive-plus-animate";
import ArchiveStoreAnimate from "@/svg/archive/used/archive-store-animate";
import ArchiveUploadAnimate from "@/svg/archive/used/archive-upload-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion";

export default function ArchiveSVGs(props:eachSVGType){
    const unsetURL = () =>{
        props.setCurrentID("arrow");
    }
    return(
        <div id="arrow">
            <motion.p
                onViewportLeave={unsetURL}
            >
                Archive svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
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