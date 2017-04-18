'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component1 = function (_Component) {
	_inherits(Component1, _Component);

	function Component1() {
		_classCallCheck(this, Component1);

		return _possibleConstructorReturn(this, (Component1.__proto__ || Object.getPrototypeOf(Component1)).apply(this, arguments));
	}

	_createClass(Component1, [{
		key: 'renderMenu',
		value: function renderMenu(pages) {
			var _this2 = this;

			var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			if (!Array.isArray(pages)) {
				return undefined;
			}
			return _react2.default.createElement(
				'ul',
				null,
				pages.map(function (page, key) {
					var url = context + '/' + page.slug;
					return _react2.default.createElement(
						'li',
						{ key: key },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: url },
							page.title
						),
						_this2.renderMenu(page.children, url)
					);
				})
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'Component1' },
				_react2.default.createElement(
					'header',
					null,
					this.renderMenu(this.props.pages)
				),
				_react2.default.createElement(
					'h1',
					{ className: 'Component1-title' },
					'Component1 Title: ',
					this.props.data[0].title
				),
				_react2.default.createElement(
					'p',
					{ className: 'Component1-content' },
					'Component1 Content: ',
					this.props.data[0].content
				),
				_react2.default.createElement(
					'div',
					{ className: 'Component1-children' },
					'Chomponent1 Children: ',
					this.props.children
				),
				_react2.default.createElement(
					'div',
					{ className: 'Component1-childPage' },
					'Chomponent1 Child Page: ',
					this.props.childPage
				)
			);
		}
	}]);

	return Component1;
}(_react.Component);

Component1.propTypes = {
	children: _react.PropTypes.array,
	data: _react.PropTypes.array,
	pages: _react.PropTypes.array,
	childPage: _react.PropTypes.element
};
exports.default = Component1;