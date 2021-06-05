import React from "react"
import {faSortDown, faPlay} from '@fortawesome/free-solid-svg-icons';
import profilepic from "../images/profilepic.JPG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Topsection () {
    return (
        <div className="profile">
        <h3>UPGRADE</h3>
        <div><img src={profilepic} style={{"height":"30px","width":"30px", "border-radius":"100%","margin-right":"10px"}}/>Yogesh Negi<FontAwesomeIcon icon={faSortDown} style={{"margin":"0 10px", "font-size":"140%"}}/></div>
        </div>
    )
}

export default Topsection