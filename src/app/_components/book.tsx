import BookAnimate from "@/svg/book/used/book-animate";
import BookCheckAnimate from "@/svg/book/used/book-check-animate";
import BookOpenAnimate from "@/svg/book/used/book-open-animate";
import Clipboard1Animate from "@/svg/book/used/clipboard1-animate";
import Clipboard2Animate from "@/svg/book/used/clipboard2-animate";
import FormAnimate from "@/svg/book/used/form-animate";
import NotebookAnimate from "@/svg/book/used/notebook-animate";
import Paper1Animate from "@/svg/book/used/paper1-animate";
import Paper2Animate from "@/svg/book/used/paper2-animate";
import PrintAnimate from "@/svg/book/used/print-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BookSVGs(props:eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#book",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#chart",{scroll:false})
    }
    return(
        <div id="charts">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Books svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <BookAnimate {...props} />
                <BookCheckAnimate {...props} />
                <BookOpenAnimate {...props} />
                <Clipboard1Animate {...props} />
                <Clipboard2Animate {...props} />
                <FormAnimate {...props} />
                <NotebookAnimate {...props} />
                <Paper1Animate {...props} />
                <Paper2Animate {...props} />
                <PrintAnimate {...props} />
            </div>        
        </div>
    )
}