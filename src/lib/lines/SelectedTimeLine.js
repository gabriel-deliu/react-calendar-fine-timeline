import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SelectedLine extends Component {
  render () {

    if (this.props.selectedTime > this.props.canvasTimeStart && this.props.selectedTime < this.props.canvasTimeEnd) {
      const ratio = this.props.canvasWidth / (this.props.canvasTimeEnd - this.props.canvasTimeStart)
      const left = Math.round((this.props.selectedTime - this.props.canvasTimeStart) * ratio)
      const top = this.props.headerHeight
      const height = this.props.height - this.props.headerHeight
      const styles = {
        top: `${top}px`,
        left: `${left}px`,
        height: `${height}px`
      }

      return <div className='rct-selected-time' style={styles} />
    } else {
      return <div />
    }
  }
}
SelectedLine.propTypes = {
  canvasTimeStart: PropTypes.number.isRequired,
  canvasTimeEnd: PropTypes.number.isRequired,
  selectedTime: PropTypes.number.isRequired,
  canvasWidth: PropTypes.number.isRequired,
  lineHeight: PropTypes.number.isRequired,
  lineCount: PropTypes.number.isRequired
}
SelectedLine.defaultProps = {
}
