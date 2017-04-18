'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentList = function ComponentList(_ref) {
	var children = _ref.children;
	return _react2.default.createElement(
		'div',
		null,
		children
	);
};

ComponentList.propTypes = {
	children: _react.PropTypes.array.isRequired
};

exports.default = ComponentList;