// import logo from './logo.svg';
import './App.css';
import AppointmentForm from './components/AppointmentForm';

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
 
const locales = {
  "en-US": require('date-fns/locale/en-US')

}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "Jase Murph",
    allDay: false,
    start: new Date(2021, 8, 1),
    end: new Date(2021, 8, 1)
  },
  {
    title: "Morice Johnson",
    start: new Date(2021, 8, 20),
    end: new Date(2021, 8, 20)
  },

  {
    title: "April Brockshaw",
    allDay: false,
    start: new Date(2021, 8, 24),
    end: new Date(2021, 8, 24)
  }
]



function App() {
  return (
    <div className="App">
      <h1>Welcome Mandy!</h1>
      <h3>Try not to be upset. Do what you can and let Jehovah handle the rest.</h3>
      <AppointmentForm/>
      
      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ width: 600, height: 500, margin: "50px" }} />
    </div>
  );
}

export default App;
