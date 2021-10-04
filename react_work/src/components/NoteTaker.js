

// import React, { useState } from "react";

function NoteTaker() {
    return (

        <div className="card m-5 p-5">
            <h3 className="mb-5">New Note</h3>
            <form>
                <div className="notetakerR1 mb-5">
                    <h4>Session Information:</h4>
                    <div className="form-group col-md-4 me-1">
                        <input type="email" className="form-control controls" id="inputEmail4" placeholder="Enter Session Date"></input>
                    </div>
                    <div className="form-group col-md-4 me-1 mx-5">
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
                        <textarea type="email" className="form-control" id="textareaEmail4" placeholder="Start Taking Notes"></textarea>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default NoteTaker;