import React, { Component } from 'react'

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
  canvasTimeStart: React.PropTypes.number.isRequired,
  canvasTimeEnd: React.PropTypes.number.isRequired,
  selectedTime: React.PropTypes.number.isRequired,
  canvasWidth: React.PropTypes.number.isRequired,
  lineHeight: React.PropTypes.number.isRequired,
  lineCount: React.PropTypes.number.isRequired
}
SelectedLine.defaultProps = {
}
