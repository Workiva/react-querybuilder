import PropTypes from 'prop-types'
import React from 'react'

const ResultDisplay = props => {
  const { value, className } = props

  if (value === null || value == undefined) return null

  return <span className={className}>{!!value ? 'Success' : 'Failure'}</span>
}

ResultDisplay.displayName = 'ResultDisplay'

ResultDisplay.propTypes = {
  value: PropTypes.bool,
  clasName: PropTypes.string,
}

export default ResultDisplay
