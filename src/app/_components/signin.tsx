import NewUserAnimate from "@/svg/signin/used/new-user-animate";
import SignInCirclenimate from "@/svg/signin/used/sign-in-circle-animate";
import SignInSquareAnimate from "@/svg/signin/used/sign-in-square-animate";
import SignOutCircleAnimate from "@/svg/signin/used/sign-out-cirle-animate";
import SignOutSquareAnimate from "@/svg/signin/used/sign-out-square-animate";
import UserAddAnimate from "@/svg/signin/used/user-add-animate";
import UserBoxAnimate from "@/svg/signin/used/user-box-animate";
import UserCircleAnimate from "@/svg/signin/used/user-circle-animate";
import UserCircleFillAnimate from "@/svg/signin/used/user-circle-fill-animate";
import UserGroupAnimate from "@/svg/signin/used/user-group-animate";
import UserSquareAnimate from "@/svg/signin/used/user-square-animate";
import { eachSVGType } from "../page";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function SignInSVGs(props: eachSVGType){
    const router = useRouter();
    const setURL = () =>{
        router.replace("/#signin",{scroll:false})
    }
    const unsetURL = () =>{
        router.replace("/#social",{scroll:false})
    }
    return(
        <div id="social">
            <motion.p
                onViewportEnter={setURL}
                onViewportLeave={unsetURL}
            >
                Sign in svgs
            </motion.p>
            <div className="grid lg:grid-cols-16 md:grid-cols-12 grid-cols-6 gap-2">
                <NewUserAnimate {...props} />
                <SignInCirclenimate {...props} />
                <SignInSquareAnimate {...props} />
                <SignOutCircleAnimate {...props} />
                <SignOutSquareAnimate {...props} />
                <UserBoxAnimate {...props} />
                <UserAddAnimate {...props} />
                <UserCircleAnimate {...props} />
                <UserCircleFillAnimate {...props} />
                <UserGroupAnimate {...props} />
                <UserSquareAnimate {...props} />
            </div>
        </div>
    )
}