import React from "react";


export default function Tasks(props){

// for (let i=0; i<props.notes.length; i++){
//     if (props.notes[i].status==="completed"){
//         //console.log("found completed")
//     }
//     else if (props.notes[i].status==="not completed"){
//     //console.log("found not completed")}
//     else{//console.log("found new")}}
// let completed= 1
// let notCompleted= 2
// let newNotes= props.notes.length-completed-notCompleted 
// let total= newNotes+notCompleted+completed

let totalEarned=props.notes.reduce((a,v) =>  a = a + v.AmountDue , 0 )
let totalTax=props.notes.reduce((a,v) =>  a = a + v.Tax , 0 )
let totalAfterTax=props.notes.reduce((a,v) =>  a = a + v.AmountLeft , 0 )


    return (
        <div className="tasks">
            <div className="tasks2">
                <div className="shiftsTotal">
                    <h4>Total Shifts</h4>
                    <h2>{props.notes.length}</h2>
                </div>
                <div className="totalEarned">
                    <h4>Total Earned</h4>
                    <h2>£{totalEarned}</h2>
                </div>
                <div className="totalTax">
                    <h4>Total Tax</h4>
                    <h2>£{totalTax}</h2>
                </div>
                <div className="totalAfterTax">
                    <h4>Total After Tax</h4>
                    <h2>£{totalAfterTax}</h2>
                </div>
            </div>
        </div>
    )
}
