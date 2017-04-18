'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

require('./TopMenu.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopMenu = function TopMenu(_ref) {
	var pages = _ref.pages,
	    data = _ref.data;

	var home = pages.filter(function (page) {
		return page.__id__ === 'home';
	})[0];
	var docs = home.children.filter(function (page) {
		return page.__id__ === 'docs';
	})[0];
	var others = home.children.filter(function (page) {
		return page.__id__ !== 'docs';
	});

	return _react2.default.createElement(
		'header',
		{ className: 'TopMenu' },
		_react2.default.createElement(
			'div',
			{ className: 'logo' },
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: '/' },
				'Citation'
			)
		),
		_react2.default.createElement(
			'ul',
			null,
			docs.children.map(function (doc, i) {
				return _react2.default.createElement(
					_reactRouterDom.Link,
					{ key: i, to: '/docs/' + doc.slug },
					_react2.default.createElement(
						'li',
						null,
						doc.title
					)
				);
			})
		),
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement('input', { type: 'search' })
		),
		_react2.default.createElement(
			'ul',
			null,
			others.map(function (other, i) {
				return _react2.default.createElement(
					_reactRouterDom.Link,
					{ key: i, to: '/' + other.slug },
					_react2.default.createElement(
						'li',
						null,
						other.title
					)
				);
			})
		),
		_react2.default.createElement(
			'ul',
			null,
			data.map(function (data, i) {
				return _react2.default.createElement(
					'a',
					{ key: i, href: data.content, target: '_blank', rel: 'noopener noreferrer' },
					_react2.default.createElement(
						'li',
						null,
						data.title
					)
				);
			})
		)
	);
};

TopMenu.propTypes = {
	pages: _react.PropTypes.array.isRequired,
	data: _react.PropTypes.array.isRequired
};

exports.default = TopMenu;