import NewUserAnimate from "@/svg/signin/react/new-user-animate";
import SignInCirclenimate from "@/svg/signin/react/sign-in-circle-animate";
import SignInSquareAnimate from "@/svg/signin/react/sign-in-square-animate";
import SignOutCircleAnimate from "@/svg/signin/react/sign-out-cirle-animate";
import SignOutSquareAnimate from "@/svg/signin/react/sign-out-square-animate";
import UserAddAnimate from "@/svg/signin/react/user-add-animate";
import UserBoxAnimate from "@/svg/signin/react/user-box-animate";
import UserCircleAnimate from "@/svg/signin/react/user-circle-animate";
import UserCircleFillAnimate from "@/svg/signin/react/user-circle-fill-animate";
import UserGroupAnimate from "@/svg/signin/react/user-group-animate";
import UserSquareAnimate from "@/svg/signin/react/user-square-animate";

export default function SignInSVGs(){
    return(
        <div>
            <p>Signin svgs</p>
            <div className="grid grid-cols-12 gap-2">
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