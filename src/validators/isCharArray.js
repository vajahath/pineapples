// .isCharArray()
// custom validator to check if the value is array

const _ = require('lodash');

module.exports = function(value) {
	if (value) {
        // check if it is array
		if (!_.isArray(value)) return false;
        // check if items inside the array are of type string
		for (let item of value) {
			if (typeof(item) != 'string') return false;
		}
		return true;
	} else {
		return true;
	}
};
