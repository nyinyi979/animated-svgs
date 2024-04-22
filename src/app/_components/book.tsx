import BookAnimate from "@/svg/book/react/book-animate";
import BookCheckAnimate from "@/svg/book/react/book-check-animate";
import BookOpenAnimate from "@/svg/book/react/book-open-animate";
import Clipboard1Animate from "@/svg/book/react/clipboard1-animate";
import Clipboard2Animate from "@/svg/book/react/clipboard2-animate";
import FormAnimate from "@/svg/book/react/form-animate";
import NotebookAnimate from "@/svg/book/react/notebook-animate";
import Paper1Animate from "@/svg/book/react/paper1-animate";
import Paper2Animate from "@/svg/book/react/paper2-animate";
import PrintAnimate from "@/svg/book/react/print-animate";

export default function BookSVGs(){
    return(
        <div>
            <p>Book svgs</p>
            <div className="grid grid-cols-12 gap-2">
                <BookAnimate />
                <BookCheckAnimate />
                <BookOpenAnimate />
                <Clipboard1Animate />
                <Clipboard2Animate />
                <FormAnimate />
                <NotebookAnimate />
                <Paper1Animate />
                <Paper2Animate />
                <PrintAnimate />
            </div>
        </div>
    )
}