import React from "react";

export default function Introduction(){
    const [display, setDisplay] = React.useState(false);
    const toggleDrawer = () =>{
      setDisplay(!display)
    }
    console.log(display);
    return(
        <div className="lg:leading-10 leading-8 text-gray-500">
          This is a collection of animated SVGs. <br />
          All of them are ready to be copied and pasted directly 
          into use. 
          No need to install an entire library anymore. <br /> 
          Click on a icon, drawer containing the code that you need to copy paste will appear from right! <br />
          <div 
            className="text-gray-700 cursor-pointer underline underline-offset-4 hover:underline-offset-8 duration-300" 
            onClick={toggleDrawer}
            unselectable="on"
          >
            Contribution Note <span className="px-3 inline-block">{display? "-" : "+"}</span>
          </div>
          <p
           style={{display:display?"block":"none"}}
          >
            Pull the repository from the link in the header. Name the folder of SVG, React, React native <br />
            &quot;N-&lt;SVG-Name&gt;-&lt;Contributor-Name&gt;&quot; <br />
            N - new(will be removed after all the icons are arranged properly in each react, reactNative and svg folders) <br />
            SVG-Name - the name of the SVG group <br />
            Contributer name - leave blank if you want it to be unknown <br />
          </p>
        </div>
    )
}