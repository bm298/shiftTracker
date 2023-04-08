import React from "react";

export default function AddNote(props){

    return(
    <div className="spanAddNote">
        <form className="spanForm" onSubmit={props.formSubmitAll} >
            <div><h2 className="addNoteH2">Add Shift Details</h2></div>
            <div className="Inputs"> 
                <input className="titleInput" 
                    type="text"
                    placeholder='Shift Date'
                    name="ShiftDate"
                    onChange={props.handleChange}
                    value={props.ShiftDate}
                /> 
            </div>
            <div className="Inputs">
                <input className="titleInput" 
                    placeholder="Company (Address if necessary)"
                    name="Company"
                    onChange={props.handleChange}
                    value={props.Company}
                />
            </div>
            <div className="Inputs" > 
                <input className= {props.isSubmit && props.formErrorsHours==="titleInputError" ? "titleInputError" : "titleInput"}
                    type="number"
                    placeholder='Hours Worked'
                    name="Hours"
                    onChange={props.handleChange}
                    value={props.Hours}
                /> 
            </div>
            <div className="Inputs"> 
            <input className= {props.isSubmit && props.formErrorsRate==="titleInputError" ? "titleInputError" : "titleInput"}
                    type="number"
                    placeholder='Rate p/h'
                    name="Rate"
                    onChange={props.handleChange}
                    value={props.Rate}
                /> 
            </div>
            <div className="Inputs">
            <input className= {props.isSubmit && props.formErrorsExtra==="titleInputError" ? "titleInputError" : "titleInput"}
                    type="number"
                    placeholder='Extra, e.g (Mileage)'
                    name="Extra"
                    onChange={props.handleChange}
                    value={props.Extra}
                /> 
            </div>
            <div className="Inputs"> 
                <input className="titleInput" 
                    type="text"
                    placeholder='Paid'
                    name="Paid"
                    onChange={props.handleChange}
                    value={props.Paid}
                /> 
            </div>
            <div className="Inputs"> 
            <input className= {props.isSubmit && props.formErrorsTax==="titleInputError" ? "titleInputError" : "titleInput"}
                    type="number"
                    placeholder='Tax (% amount)'
                    name="Tax"
                    onChange={props.handleChange}
                    value={props.Tax}
                />
            </div>

            <div>
            {props.toggleUpdate ?
            <button type="submit" className="updateBtn" onClick={props.updateForm}>Update</button>
            :
            <button type="submit" className="saveBtn" >Save</button>
            // onClick={props.submitForm}
            }
                <button className="cancelBtn" onClick={props.close}>Cancel</button>
            </div>
        </form>
    </div>
    )
}