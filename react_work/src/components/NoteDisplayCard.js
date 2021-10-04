

// import React, { useState } from "react";

function NoteDisplayCard() {
    return (
        <form>
            <div className="card recentDisplayCard">
                <form>
                    <div className="">
                        <h6>Patient1 Name</h6>
                        <button>See All</button>
                    </div>
                    <div>
                        <p>Date and Time</p>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>View</button>
                    </div>
                </form>
            </div>
        </form>
    )
}

export default NoteDisplayCard;