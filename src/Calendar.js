import React, { Component } from 'react'
import CalendarRow from './CalendarRow'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <div className="year">{this.props.year || ''}</div>
        <div className="months">
          {months.map(m => (
            <div key={m}>{m}</div>
          ))}
        </div>
        <table className="calendar">
          <tbody>
            {[...Array(7).keys()].map(idx => (
              <CalendarRow key={idx} row={this.dataForDay(idx)} offset={idx} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  dataForDay(day) {
    const { data } = this.props
    return this.filterObject(data, Object.keys(data).filter(d => d % 7 === day))
  }

  filterObject(obj, keys) {
    var result = {}

    keys.forEach(key => {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key]
      }
    })

    return result
  }
}
