import React from 'react';
import { array, element } from 'prop-types';
import { Link } from 'react-router-dom';

const renderMenu = (pages, context = '') => {
	if (!Array.isArray(pages)) {
		return undefined;
	}
	return (
		<ul>
			{pages.map(page => {
				const url = `${context}/${page.slug}`;
				return (
					<li key={page.slug}>
						<Link to={url}>{page.title}</Link>
						{this.renderMenu(page.children, url)}
					</li>
				);
			})}
		</ul>
	);
};

const Component1 = ({ pages, data, children, childPage }) => (
	<div className="Component1">
		<header>{renderMenu(pages)}</header>
		<h1 className="Component1-title">Component1 Title: {data[0].title}</h1>
		<p className="Component1-content">Component1 Content: {data[0].content}</p>
		<div className="Component1-children">Chomponent1 Children: {children}</div>
		<div className="Component1-childPage">Chomponent1 Child Page: {childPage}</div>
	</div>
);

Component1.propTypes = {
	children: array,
	data: array,
	pages: array,
	childPage: element
};

Component1.defaultProps = {
	children: [],
	data: [],
	pages: [],
	childPage: null
};

export default Component1;
