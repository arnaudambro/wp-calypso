/** @format */
/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import connectUserMentions from './connect';
import addUserMentions from './add';

const withUserMentions = WrappedComponent => {
	class TextInput extends React.PureComponent {
		static propTypes = {
			siteId: PropTypes.number,
		};

		render() {
			return <WrappedComponent { ...this.props } />;
		}
	}

	return connectUserMentions( addUserMentions( TextInput ) );
};

export default withUserMentions;
