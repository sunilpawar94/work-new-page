import React from "react";
import oddimg1 from './assets/odd1.png'

function headtwo() {
    return(
        <div className="hedtwo">
            <div className="unlock">
                <h2><span>UNLOCKING </span>YOUR BRAND'S</h2>
                <h2>POTENTIAL WITH</h2>
                <h2>ODD MEDIA</h2>
                <button>WORK WITH US </button>
            </div>
            <div className="oddpic1">
            <img className="oddimg1 " src={oddimg1 } alt="oddimg1 " ></img>
            </div>
        </div>
    )
}
export default headtwo;