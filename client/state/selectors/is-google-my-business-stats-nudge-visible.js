/** @format */

/**
 * Internal dependencies
 */
import {
	isGoogleMyBusinessLocationConnected,
	isSiteGoogleMyBusinessEligible,
} from 'state/selectors';

/**
 * Returns true if the Google My Business (GMB) nudge should be visible in stats
 *
 * It should be visible if:
 * - it meets the Google My Business Site Eligiblility Critera ( see isSiteGoogleMyBusinessEligible ),
 * - site has NOT been connected to a location
 * @param  {Object}  state  Global state tree
 * @param  {String}  siteId The Site ID
 * @return {Boolean} True if we should show the nudge
 */
export default function isGoogleMyBusinessStatsNudgeVisible( state, siteId ) {
	if ( isGoogleMyBusinessLocationConnected( state, siteId ) ) {
		return false;
	}

	return isSiteGoogleMyBusinessEligible( state, siteId );
}
