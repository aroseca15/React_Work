

// import React, { useState } from "react";

function NoteDisplayCard() {
    return (
        <form>
            <div className="card recentDisplayCard">
                <form>
                    <div className="DspCarHead mb-5">
                        <h6>Patient Name</h6>
                        <button className="DisCarHeadBtn">See All</button>
                    </div>
                    <div className="DspCarBody mb-3">
                        <p className="DspCarP">Date and Time</p>
                        <button className="DspCarBodyBtn DCBBtnEdit">Edit</button>
                        <button className="DspCarBodyBtn DCBBtnDelete">Delete</button>
                        <button className="DspCarBodyBtn DCBBtnView">View</button>
                    </div>
                    <div className="DspCarBody mb-3">
                        <p className="DspCarP">Date and Time</p>
                        <button className="DspCarBodyBtn DCBBtnEdit">Edit</button>
                        <button className="DspCarBodyBtn DCBBtnDelete">Delete</button>
                        <button className="DspCarBodyBtn DCBBtnView">View</button>
                    </div>
                    <div className="DspCarBody mb-3">
                        <p className="DspCarP">Date and Time</p>
                        <button className="DspCarBodyBtn DCBBtnEdit">Edit</button>
                        <button className="DspCarBodyBtn DCBBtnDelete">Delete</button>
                        <button className="DspCarBodyBtn DCBBtnView">View</button>
                    </div>
                    <div className="DspCarBody mb-3">
                        <p className="DspCarP">Date and Time</p>
                        <button className="DspCarBodyBtn DCBBtnEdit">Edit</button>
                        <button className="DspCarBodyBtn DCBBtnDelete">Delete</button>
                        <button className="DspCarBodyBtn DCBBtnView">View</button>
                    </div>
                </form>
            </div>
        </form>
    )
}

export default NoteDisplayCard;