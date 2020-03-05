import React, { Component } from 'react'

export default class CalendarRow extends Component {
  render() {
    const { row, offset } = this.props
    return (
      <tr>
        {[...Array(52).keys()].map(idx => {
          const cellData = row[idx * 7 + offset] || 0
          return (
            <td
              key={idx}
              className="day-cell"
              style={{ background: `${this.colorForCommits(cellData)}` }}
            >
              <span className="tooltip">{cellData}</span>
            </td>
          )
        })}
      </tr>
    )
  }

  colorForCommits(n) {
    return n >= 10
      ? '#196127'
      : n >= 8
      ? '#1c752e'
      : n >= 5
      ? '#239a3b'
      : n >= 3
      ? '#7bc96f'
      : n >= 1
      ? '#c6e48b'
      : '#ebedf0'
  }
}
