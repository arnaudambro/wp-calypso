/** @format */
/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import connectUserMentions from './connect';
import addUserMentions from './add';

const withUserMentions = WrappedComponent => {
	class TextInputWrapper extends React.PureComponent {
		static propTypes = {
			siteId: PropTypes.number,
		};

		render() {
			return <WrappedComponent { ...this.props } />;
		}
	}

	return connectUserMentions( addUserMentions( TextInputWrapper ) );
};

export default withUserMentions;
