import MyDatePicker from "./MyDatePicker";

function onChange(timestamp) {
    console.log(timestamp);
  }
const AppointmentForm = (props) => {

    return (
        <main className="container-fluid">

            <section className="card w-50 appoint">
                <form>
                    <div className="row row-AForms">
                        <h5 className="card-title">Appointment Form (both patient & Practitioner)</h5>
                        <div className="dropdown-divider"></div>
                        <div className="col-md-3">
                            <h6>Patient Name</h6>
                            <div className="btn-group">
                                <button className="btn btn-secondary btn-sm" type="button">
                                    Current Patients
                                </button>
                                <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only"></span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">Jase Murph</a>
                                    <a className="dropdown-item" href="/">April Brockshaw</a>
                                    <a className="dropdown-item" href="/">Bob Jamison</a>
                                    <a className="dropdown-item" href="/">Nicole Mesa</a>
                                    <a className="dropdown-item" href="/">Logan Batton</a>
                                    <a className="dropdown-item" href="/">Mandy McDoon</a>
                                    <a className="dropdown-item" href="/">Another Patient</a>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6>Date</h6>
                            <MyDatePicker className='dtPic' onChange={onChange} />
                        </div>

                        <div className="col-md-3">
                            <h6>Select a Time</h6>
                            <div className="btn-group">
                                <button className="btn btn-secondary btn-sm" type="button">
                                    Starts at AM
                                </button>
                                <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only"></span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">8:00am</a>
                                    <a className="dropdown-item" href="/">8:30am</a>
                                    <a className="dropdown-item" href="/">9:00am</a>
                                    <a className="dropdown-item" href="/">9:30am</a>
                                    <a className="dropdown-item" href="/">10:00am</a>
                                    <a className="dropdown-item" href="/">10:30am</a>
                                    <a className="dropdown-item" href="/">11:00am</a>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6>Duration</h6>
                            <div className="btn-group">
                                <button className="btn btn-secondary btn-sm" type="button">
                                    Select
                                </button>
                                <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only"></span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">1/2 hour</a>
                                    <a className="dropdown-item" href="/">1 hour</a>
                                    <a className="dropdown-item" href="/">2 hours</a>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-AForms">
                        <div className="col-md-3">
                            <h6>Appointment Type</h6>
                            <div className="btn-group">
                                <button className="btn btn-secondary btn-sm" type="button">
                                    Select From Choices
                                </button>
                                <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only"></span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">New Consult</a>
                                    <a className="dropdown-item" href="/">Adult Patient</a>
                                    <a className="dropdown-item" href="/">Minor Child</a>
                                    <a className="dropdown-item" href="/">Wellness Check</a>
                                    <a className="dropdown-item" href="/">Perscription Refill</a>
                                    <a className="dropdown-item" href="/">Test Request</a>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <h6>Recurring</h6>
                            <div className="btn-group">
                                <button className="btn btn-secondary btn-sm" type="button">
                                    Select
                                </button>
                                <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only"></span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">Daily</a>
                                    <a className="dropdown-item" href="/">Weekly</a>
                                    <a className="dropdown-item" href="/">Bi-Weekly</a>
                                    <a className="dropdown-item" href="/">Monthly</a>
                                    <a className="dropdown-item" href="/">Bi-Monthly</a>
                                    <a className="dropdown-item" href="/">Annually</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/">No</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h6>Tending Practitioner</h6>
                            <input className="form-control" type="text" placeholder="Name of Prac.(autofill)"></input>
                        </div>
                    </div>
                    <div className="row row-AForms">
                        <div className="col-md-5">
                            <h6>Patient Email</h6>
                            <input className="form-control" type="text" placeholder="Autofill"></input>
                        </div>
                        <div className="col-md-5">
                            <h6>Practitioner Email</h6>
                            <input className="form-control" type="text" placeholder="Autofill"></input>
                        </div>

                    </div>
                    <div id="btnSchedForm" className="row row-AForms">
                        <div className="col-md-4">
                            <button type="submit" className="btnSchedForm">Schedule Appointment</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default AppointmentForm;