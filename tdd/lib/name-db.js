var mk = require('mortalkombat');
var _ = require('lodash')
// hotfix
exports.getRandomNames = function getRandomNames(num) {
	var randomNames = _.times(num, mk.get.bind(mk));
	return randomNames;
}
