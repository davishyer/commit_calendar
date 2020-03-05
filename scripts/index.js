const { execSync } = require('child_process')
const { author, repositories, projectRoot, years } = require('./config')
const { dateToDayOfYear } = require('./utils')
const fs = require('fs')

let yearlyData = {}

repositories.forEach(repo => {
  console.log('Pulling stats for:', repo)
  execSync('git checkout master && git pull --rebase', {
    cwd: `${projectRoot}${repo}`
  })
  years.forEach(year => {
    let heatMap = yearlyData[year] || {}
    const dates = execSync(
      `git log --author="${author}" --since="${year}-01-01" --until="${year}-12-31" --pretty='format:%C(auto)%ci'`,
      {
        cwd: `${projectRoot}${repo}`
      }
    )
      .toString()
      .split('\n')
      .filter(e => e !== '')
      .sort()
    dates.forEach(date => {
      const key = dateToDayOfYear(new Date(date))
      heatMap[key] = heatMap.hasOwnProperty(key) ? heatMap[key] + 1 : 1
    })
    yearlyData[year] = heatMap
  })
})

fs.writeFile('src/config/calendar.json', JSON.stringify(yearlyData), err => {
  if (err) throw err
  console.log('Saved contents in "calendar.json"')
})
