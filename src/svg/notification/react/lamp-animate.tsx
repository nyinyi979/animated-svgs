"use client"
import React from "react"
import { motion } from "framer-motion"

export default function LampAnimate(){
    const [animationValue, setAnimationValue] = React.useState({
        pathLength: 1,
        scale: 1
    })
    const animate = () =>{
        setAnimationValue({
            pathLength: 0,
            scale: 1.1
        })
    }
    const inanimate = () =>{
        setAnimationValue({
            pathLength: 1,
            scale: 1
        })
    }
    return(
        <div 
            onPointerEnter={animate}
            onPointerLeave={inanimate}
        >
            <motion.svg 
                initial={{scale:1}}
                animate={{scale:animationValue.scale}}
                viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M422.055 717.263L413.373 722.224L413.373 722.224L422.055 717.263ZM510.211 895.105L505.739 904.05L505.739 904.05L510.211 895.105ZM513.789 895.105L509.317 886.161L509.317 886.161L513.789 895.105ZM601.945 717.263L610.627 722.224L610.627 722.224L601.945 717.263ZM596.228 853.886L600.7 862.83L596.228 853.886ZM597.184 853.241L588.677 847.984L597.184 853.241ZM427.772 853.886L432.244 844.942L427.772 853.886ZM426.816 853.241L418.31 858.498L426.816 853.241ZM381.614 647.021L376.514 655.622L381.614 647.021ZM382.334 647.752L391.017 642.79L382.334 647.752ZM382.047 647.316L389.175 640.302L382.047 647.316ZM642.386 647.021L637.285 638.42L642.386 647.021ZM641.666 647.752L650.348 652.713L641.666 647.752ZM641.953 647.316L649.08 654.33L641.953 647.316ZM758 426.667C758 516.76 709.575 595.553 637.285 638.42L647.486 655.622C725.599 609.303 778 524.109 778 426.667H758ZM512 180.667C647.862 180.667 758 290.804 758 426.667H778C778 279.759 658.908 160.667 512 160.667V180.667ZM266 426.667C266 290.804 376.138 180.667 512 180.667V160.667C365.092 160.667 246 279.759 246 426.667H266ZM386.715 638.42C314.425 595.553 266 516.76 266 426.667H246C246 524.109 298.401 609.303 376.514 655.622L386.715 638.42ZM430.738 712.302L391.017 642.79L373.652 652.713L413.373 722.224L430.738 712.302ZM436.667 734.628C436.667 726.797 434.623 719.101 430.738 712.302L413.373 722.224C415.531 726.002 416.667 730.277 416.667 734.628H436.667ZM436.667 852.097V734.628H416.667V852.097H436.667ZM514.683 886.161L432.244 844.942L423.3 862.83L505.739 904.05L514.683 886.161ZM509.317 886.161C511.006 885.317 512.994 885.317 514.683 886.161L505.739 904.05C509.68 906.02 514.32 906.02 518.261 904.05L509.317 886.161ZM591.756 844.942L509.317 886.161L518.261 904.05L600.7 862.83L591.756 844.942ZM587.333 734.628V852.097H607.333V734.628H587.333ZM593.262 712.302C589.377 719.101 587.333 726.797 587.333 734.628H607.333C607.333 730.277 608.469 726.002 610.627 722.224L593.262 712.302ZM632.983 642.79L593.262 712.302L610.627 722.224L650.348 652.713L632.983 642.79ZM600.7 862.83C600.785 862.788 601.531 862.429 602.22 861.99C603.105 861.427 604.544 860.354 605.691 858.498L588.677 847.984C589.675 846.369 590.905 845.484 591.483 845.116C591.742 844.952 591.928 844.855 591.933 844.853C591.936 844.851 591.916 844.862 591.756 844.942L600.7 862.83ZM587.333 852.097C587.333 852.276 587.333 852.299 587.333 852.295C587.333 852.29 587.336 852.08 587.368 851.775C587.438 851.093 587.68 849.598 588.677 847.984L605.691 858.498C606.837 856.642 607.154 854.876 607.262 853.832C607.346 853.02 607.333 852.193 607.333 852.097H587.333ZM416.667 852.097C416.667 852.193 416.654 853.02 416.738 853.832C416.846 854.876 417.163 856.642 418.31 858.498L435.323 847.984C436.32 849.598 436.562 851.093 436.632 851.775C436.664 852.08 436.667 852.29 436.667 852.295C436.667 852.299 436.667 852.276 436.667 852.097H416.667ZM432.244 844.942C432.084 844.862 432.064 844.851 432.067 844.853C432.072 844.855 432.258 844.952 432.517 845.116C433.095 845.484 434.325 846.369 435.323 847.984L418.31 858.498C419.456 860.354 420.895 861.427 421.78 861.99C422.469 862.429 423.215 862.788 423.3 862.83L432.244 844.942ZM376.514 655.622C376.583 655.664 376.586 655.666 376.579 655.661C376.57 655.655 376.48 655.601 376.354 655.518C376.076 655.333 375.522 654.942 374.92 654.33L389.175 640.302C388.482 639.598 387.826 639.127 387.411 638.852C387.084 638.635 386.746 638.438 386.715 638.42L376.514 655.622ZM391.017 642.79C390.999 642.76 390.808 642.419 390.596 642.087C390.325 641.666 389.866 641.004 389.175 640.302L374.92 654.33C374.32 653.721 373.939 653.163 373.757 652.879C373.675 652.751 373.621 652.659 373.615 652.649C373.611 652.641 373.612 652.644 373.652 652.713L391.017 642.79ZM637.285 638.42C637.254 638.438 636.916 638.635 636.589 638.852C636.175 639.127 635.518 639.598 634.825 640.302L649.08 654.33C648.478 654.942 647.924 655.333 647.646 655.518C647.52 655.601 647.43 655.655 647.421 655.661C647.414 655.666 647.417 655.664 647.486 655.622L637.285 638.42ZM650.348 652.713C650.388 652.644 650.389 652.641 650.385 652.649C650.379 652.659 650.325 652.751 650.243 652.879C650.061 653.163 649.68 653.721 649.08 654.33L634.825 640.302C634.134 641.004 633.675 641.666 633.405 642.087C633.192 642.419 633.001 642.76 632.983 642.79L650.348 652.713Z" fill="black"/>
                <motion.path 
                    initial={{pathLength:1}}
                    animate={{pathLength:[animationValue.pathLength,1]}}
                    d="M639.67 682.667L540.904 748.684C526.899 758.046 519.896 762.726 512.007 762.726C504.118 762.726 497.115 758.046 483.11 748.684L384.344 682.667" stroke="black" strokeWidth="20"/>
            </motion.svg>
        </div>
    )
}