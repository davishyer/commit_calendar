import React from 'react'
import Calendar from './Calendar'
import './App.css'
import data from './config/calendar.json'

function App() {
  return (
    <div className="App">
      <div className="calendar-container">
        {Object.keys(data).map(year => (
          <Calendar key={year} data={data[year]} year={year} />
        ))}
      </div>
    </div>
  )
}

export default App
