// import logo from './logo.svg';
import './App.css';
import AppointmentForm from './components/AppointmentForm';
// import MyDatePicker from './components/MyDatePicker'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'
// import "react-datepicker/dist/react-datepicker.css";
// import { Calender, dateFnsLocalizer } from "react-big-calendar";
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import getDay from "date-fns/getDay";
// import "react-big-calendar/lib/css/react-big-calender.css";
import React, { useState } from "react";
// import DatePicker from 'react-date-picker';
// import enUS from 'date-fns/locale/en-US'

// const locales = {
//   "en-US": enUS
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
//     start: new Date(2021, 27, 9),
//     end: new Date(2021, 27, 9)
//   },
//   {
//     title: "Morice Johnson",
//     start: new Date(2021, 27, 9),
//     end: new Date(2021, 27, 9)
//   },

//   {
//     title: "April Brockshaw",
//     allDay: false,
//     start: new Date(2021, 27, 9),
//     end: new Date(2021, 27, 9)
//   }
// ]



function App() {
  // const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="App">
      <h1>Welcome Mandy!</h1>
      <h3>Try not to be upset. Do what you can and let Jehovah handle the rest.</h3>
      <AppointmentForm/>
        {/* <MyDatePicker className='dtPic' onChange={onChange} /> */}
      {/* <DatePicker selected={selectedDate} 
      onChange={date => setSelectedDate(date)} /> */}
      {/* <Calender localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} /> */}
    </div>
  );
}

export default App;
