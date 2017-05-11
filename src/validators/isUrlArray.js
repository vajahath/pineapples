// .isUrlArray()
// custom validator to check if the value is array

const _ = require('lodash');
const validator = require('validator');


module.exports = function(value) {
	if (value) {
		// check if it is array
		if (!_.isArray(value)) return false;
		// check if items inside the array are of type string
		for (let item of value) {
			if (!validator.isURL(item)) return false;
		}
		return true;
	} else {
		return true;
	}
};
