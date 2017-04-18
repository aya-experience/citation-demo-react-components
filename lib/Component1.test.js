'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _Component = require('./Component1');

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [];

var setup = function setup() {
	return (0, _enzyme.shallow)(_react2.default.createElement(_Component2.default, { data: data }));
};

(0, _ava2.default)('has a title section containing title data', function (t) {
	var title = 'test-title';
	data = [{ title: title }];
	t.true(setup().find('h1').text().includes(title));
});