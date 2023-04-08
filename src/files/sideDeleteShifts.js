import React from "react";
import {GoAlert} from 'react-icons/go';


export default function SideDeleteNotes(props){
    // console.log(props.formData.id)
    return(
        <div className="deleteBox">
            <GoAlert className="goAlert"/>
            <p>Do you want to delete this note?</p>
            <div className="deleteBtns">
                <button className="yesBtn" onClick={props.openYesBtn}>Yes</button>
                <button className="noBtn" onClick={props.closeNoBtn}>No</button>
            </div>
        </div>
    )
}