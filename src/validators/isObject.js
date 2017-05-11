// .isObject()
// custom validator to check if the value is json obj

const _ = require('lodash');

module.exports = function(value) {
	if (value) {
		return _.isObject(value);
	} else {
		return true;
	}
};
