'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectedLine = function (_Component) {
  _inherits(SelectedLine, _Component);

  function SelectedLine() {
    _classCallCheck(this, SelectedLine);

    return _possibleConstructorReturn(this, (SelectedLine.__proto__ || Object.getPrototypeOf(SelectedLine)).apply(this, arguments));
  }

  _createClass(SelectedLine, [{
    key: 'render',
    value: function render() {

      if (this.props.selectedTime > this.props.canvasTimeStart && this.props.selectedTime < this.props.canvasTimeEnd) {
        var ratio = this.props.canvasWidth / (this.props.canvasTimeEnd - this.props.canvasTimeStart);
        var left = Math.round((this.props.selectedTime - this.props.canvasTimeStart) * ratio);
        var top = this.props.headerHeight;
        var height = this.props.height - this.props.headerHeight;
        var styles = {
          top: top + 'px',
          left: left + 'px',
          height: height + 'px'
        };

        return _react2.default.createElement('div', { className: 'rct-selected-time', style: styles });
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }]);

  return SelectedLine;
}(_react.Component);

exports.default = SelectedLine;

SelectedLine.propTypes = {
  canvasTimeStart: _react2.default.PropTypes.number.isRequired,
  canvasTimeEnd: _react2.default.PropTypes.number.isRequired,
  selectedTime: _react2.default.PropTypes.number.isRequired,
  canvasWidth: _react2.default.PropTypes.number.isRequired,
  lineHeight: _react2.default.PropTypes.number.isRequired,
  lineCount: _react2.default.PropTypes.number.isRequired
};
SelectedLine.defaultProps = {};