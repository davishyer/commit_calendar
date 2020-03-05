const fs = require('fs')

const config = JSON.parse(
  fs.readFileSync('./scripts/config/config.json').toString('utf-8')
)

/**
 * The author to generate the calendar for. Names can be
 * found for each user with `git config user.name`
 */
const author = config['author']

/**
 * List of repositories to include in the report. All
 * are expected to live under the same root directory.
 */
const repositories = config['repositories']

// Root directory for all repositories
const projectRoot = config['projectRoot']

// List of years to include in the report
const years = config['years']

module.exports = {
  author,
  repositories,
  projectRoot,
  years
}
