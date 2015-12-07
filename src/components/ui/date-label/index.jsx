/**
 * External dependencies
 */

import React, { PropTypes } from 'react';
import moment from 'moment';
import classnames from 'classnames';

/**
 * Internal dependencies
 */

import Icon from 'components/ui/icon';

function DateLabel( { date, className } ) {
	const classes = classnames( 'date-label', className );

	return (
		<div className={ classes }>
			<Icon icon="clock-o" className="date-label__icon" />
			<time dateTime={ date }>
				{ moment( date ).utc().format( 'll' ) }
			</time>
		</div>
	);
}

DateLabel.propTypes = {
	date: PropTypes.string,
	className: PropTypes.string
};

export default DateLabel;
