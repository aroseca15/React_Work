

// import React, { useState } from "react";

function NoteTaker() {
    return (

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
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Patient Dropdown"></input>
                    </div>
                </div>
                <div className="notetakerR1 m-5">
                    <div className="form-group col-md-12">
                        <textarea type="email" style={{ height: '30rem'}} className="form-control" id="New ID?" placeholder="Start Taking Notes"></textarea>
                    </div>
                </div>
                <div className="notetakerR1">
                    <div className="m-1">
                        <button className="saveNoteBtn">Save</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default NoteTaker;