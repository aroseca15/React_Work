// import logo from './logo.svg';
import './App.css';
// import AppointmentForm from './components/AppointmentForm';
import NoteTaker from './components/NoteTaker';
import NoteDisplayCard from './components/NoteDisplayCard';
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import getDay from "date-fns/getDay";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import React, { useState } from "react";

// let MyCustomHeader = ({ label,  onNavigate, onView }) => (

//   <div className="rbc-toolbar">
//     <span className="rbc-btn-group"></span>
//   <button onClick= {()=> {onNavigate("PREV")}} type="button">Back</button>
//   <span className="rbc-toolbar-label">{label}</span>
//   <button onClick= {()=> {onNavigate("NEXT")}} type="button">Next</button>
//   <span className="rbc-btn-group"> <button onClick= {()=> {onNavigate("TODAY")}} type="button">Today</button><button type="button" onClick= {()=> {onView("month")}} className="rbc-active">Month</button><button onClick= {()=> {onView("week")}} type="button" className="">Week</button><button onClick= {()=> {onView("day")}} type="button" className="">Day</button><button onClick= {()=> {onView("agenda")}} type="button" className="">Agenda</button></span></div> 
// )


// const locales = {
//   "en-US": require('date-fns/locale/en-US')

// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales
// })



// const events = [
//   {
//     title: "Jase Murph",
//     allDay: false,
//     start: new Date(2021, 8, 1),
//     end: new Date(2021, 8, 1)
//   },
//   {
//     title: "Morice Johnson",
//     start: new Date(2021, 8, 20),
//     end: new Date(2021, 8, 20)
//   },

//   {
//     title: "April Brockshaw",
//     allDay: false,
//     start: new Date(2021, 8, 24),
//     end: new Date(2021, 8, 24)
//   }
// ]


function App() {
  return (
    <div className="App">
      <h1>Welcome Mandy!</h1>
      <h3>Try not to be upset. Do what you can and let Jehovah handle the rest.</h3>
      <NoteTaker />
      <div style={{ display: 'inline-block' }}>
        <NoteDisplayCard />
      </div>
      <div style={{ display: 'inline-block' }}>
        <NoteDisplayCard />
      </div>
      <div style={{ display: 'inline-block' }}>
        <NoteDisplayCard />
      </div>
      <div style={{ display: 'inline-block' }}>
        <NoteDisplayCard />
      </div>
      {/* <AppointmentForm />
      <Calendar components={{ toolbar: MyCustomHeader }} localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ width: 600, height: 500, margin: "50px" }} /> */}
    </div>
  );
}

export default App;
