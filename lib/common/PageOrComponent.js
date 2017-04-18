'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageOrComponent = function PageOrComponent(_ref) {
	var childPage = _ref.childPage,
	    children = _ref.children;

	var exact = childPage ? childPage.props.match.isExact : false;
	return _react2.default.createElement(
		'div',
		null,
		exact ? children : childPage
	);
};

PageOrComponent.propTypes = {
	childPage: _react.PropTypes.object,
	children: _react.PropTypes.array.isRequired
};

exports.default = PageOrComponent;