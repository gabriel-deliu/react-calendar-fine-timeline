import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shouldPureComponentUpdate from 'react-pure-render/function'

export default class InfoLabel extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    return (
      <div className='rct-infolabel'>
        {this.props.label}
      </div>
    )
  }
}

InfoLabel.propTypes = {
  label: PropTypes.string.isRequired
}
InfoLabel.defaultProps = {
  label: ''
}
