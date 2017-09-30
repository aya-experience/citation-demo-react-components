import React from 'react';
import { array } from 'prop-types';

const Component2 = ({ data, children }) => (
	<div className="Component2">
		<h1 className="Component2-title">Component2 Title: {data[0].title}</h1>
		<p className="Component2-content">{data[0].content}</p>
		<div className="Component2-children">{children}</div>
	</div>
);

Component2.propTypes = {
	children: array,
	data: array
};

Component2.defaultProps = {
	children: [],
	data: []
};

export default Component2;
