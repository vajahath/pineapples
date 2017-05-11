// .isArray()
// custom validator to check if the value is array

const _ = require('lodash');

module.exports = function(value) {
	if (value) {
		return _.isArray(value);
	} else {
		return true;
	}
};
