"use client"
import React, { Dispatch, SetStateAction } from "react";
import Drawer from "./_components/_drawer";
import AddSVGs from "./_components/add";
import ArchiveSVGs from "./_components/archive";
import ArrowSVGs from "./_components/arrow";
import BookSVGs from "./_components/book";
import CheckSVGs from "./_components/check";
import CommunicationSVGs from "./_components/communication";
import CrossSVGs from "./_components/cross";
import DeviceSVGs from "./_components/device";
import DownUpSVGs from "./_components/down-up";
import EyeSVGs from "./_components/eyes";
import MapSVGs from "./_components/map";
import MMSVGs from "./_components/multimedia";
import NoSVGs from "./_components/no";
import NotificationSVGs from "./_components/notification";
import PhoneSVGs from "./_components/phone";
import ReactionSVGs from "./_components/reaction";
import ScreenSVGs from "./_components/screen";
import SecuritySVGs from "./_components/security";
import SettingSVGs from "./_components/setting";
import SignInSVGs from "./_components/signin";
import SocialSVGs from "./_components/social";
import SortSVGs from "./_components/sort";
import SoundSVGs from "./_components/sound";
import TimeSVGs from "./_components/time";
import MenuSVGs from "./_components/menu";
import ChartsSVGs from "./_components/charts";
import Header from "./_components/_header";
import LeftBar from "./_components/_leftBar";
export default function Home() {
    const [animationValue, setAnimationValue] = React.useState({
        opacity: 0,
        translateX: 50,
    })
    const [currentID, setCurrentID] = React.useState("");
    const [display, setDisplay] = React.useState(false)
    const [details, setDetails] = React.useState<details>({
        react: ``,
        reactNative: ``,
        svg: ``,
        name: ``,
    })
    const animate = () =>{
        setDisplay(true);
        setAnimationValue({
            opacity: 1,
            translateX: 0
        })
        document.body.style.overflow = "hidden";
    }
    const inanimate = () =>{
        setAnimationValue({
            opacity: 0,
            translateX: 100,
        })
        document.body.style.overflow = "auto";
        setTimeout(()=>{
            setDisplay(false);
        },500)
    }
  return (
      <div>
        <Header />
        <div className="grid lg:grid-cols-1.5 grid-cols-1">
            <LeftBar currentID={currentID} setCurrentID={setCurrentID}/>
            <div id="svg_container" className="lg:col-span-1 col-span-2 mt-5 mb-2 p-2">
              <AddSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <ArchiveSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <ArrowSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <BookSVGs 
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <ChartsSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <CheckSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <CommunicationSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <CrossSVGs 
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <DeviceSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <DownUpSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <EyeSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <MapSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <MenuSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <MMSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <NoSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <NotificationSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />  
              <PhoneSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <ReactionSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <ScreenSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <SecuritySVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <SettingSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <SignInSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <SocialSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <SortSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <SoundSVGs 
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />
              <TimeSVGs
                drawerAnimate={animate}
                setDetails={setDetails}
                setCurrentID={setCurrentID} />

              <Drawer 
                inanimate={inanimate}
                opacity={animationValue.opacity}
                translateX={animationValue.translateX} 
                react={details.react}
                reactNative={details.reactNative}
                svg={details.svg} 
                name={details.name}
                display={display}
              />
            </div> 
          </div>
      </div>
  );
}


export type details = {
    name: string,
    react: string|string[],
    reactNative: string|string[],
    svg: string
}

export type eachSVGType = {
    setDetails: Dispatch<SetStateAction<details>>,
    drawerAnimate: ()=>void,
    setCurrentID: Dispatch<SetStateAction<string>>
}

