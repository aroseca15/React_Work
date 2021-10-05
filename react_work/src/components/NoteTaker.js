
// import React, { useState } from "react";
const patients = [{
    id: 1,
    first: 'Jase',
    last: 'Murph'
},
{
    id: 2,
    first: 'April',
    last: 'Brockshaw'
},
{
    id: 3,
    first: 'Mandy ',
    last: 'McDoon'
},
{
    id: 4,
    first: 'Nicole',
    last: 'Mesa'
},
{
    id: 5,
    first: 'Logan',
    last: 'Batton'
}
]

function NoteTaker() {
    return (
        <section className="container-fluid">
            <div className="card noteTakerCard m-5 p-5">
                <h3 className="mb-5">New Note</h3>
                <form>
                    <div className="notetakerR1 mb-5">
                        <h4>Session:</h4>
                        <div className="form-group col-md-4 me-1">
                            <input type="email" className="form-control controls" id="inputEmail4" placeholder="Enter Session Date"></input>
                        </div>
                        <div className="form-group col-md-4 mx-5">
                            <input type="email" className="form-control controls" id="inputEmail4" placeholder="Enter Session Time"></input>
                        </div>
                    </div>
                    <div className="notetakerR1 m-5">
                        <div className="form-group col-md-12">
                            <select type="email" className="form-control" id="inputEmail4" placeholder="Patient Dropdown">
                                <option>Select Patient</option>
                                {patients.map((patient) => <option key={patient.id}>{patient.first} {patient.last}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="notetakerR1 m-5">
                        <div className="form-group col-md-12">
                            <textarea type="email" style={{ height: '30rem' }} className="form-control" id="New ID?" placeholder="Start Taking Notes"></textarea>
                        </div>
                    </div>
                    <div className="notetakerR1">
                        <div className="m-1">
                            <button className="saveNoteBtn">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default NoteTaker;