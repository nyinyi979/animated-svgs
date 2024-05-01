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

export default function SignInSVGs(){
    return(
        <div>
            <p>Signin svgs</p>
            <div className="grid grid-cols-16 gap-2">
                <NewUserAnimate />
                <SignInCirclenimate />
                <SignInSquareAnimate />
                <SignOutCircleAnimate />
                <SignOutSquareAnimate />
                <UserBoxAnimate />
                <UserAddAnimate />
                <UserCircleAnimate />
                <UserCircleFillAnimate />
                <UserGroupAnimate />
                <UserSquareAnimate />
            </div>
        </div>
    )
}