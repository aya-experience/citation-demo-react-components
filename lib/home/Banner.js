'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Banner.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = ['js', 'content', 'deploy'];

var Banner = function Banner(_ref) {
	var data = _ref.data;
	return _react2.default.createElement(
		'div',
		{ className: 'Banner' },
		data.map(function (data, i) {
			return _react2.default.createElement(
				'div',
				{ key: i, className: 'Banner-column' },
				_react2.default.createElement('img', { src: '/assets/' + icons[i] + '.svg', alt: data.title }),
				_react2.default.createElement('br', null),
				data.content
			);
		})
	);
};

Banner.propTypes = {
	data: _react.PropTypes.array.isRequired
};

exports.default = Banner;