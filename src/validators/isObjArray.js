// .isObjArray()
// custom validator to check if the value is obj array

const _ = require('lodash');

module.exports = function(value) {
	if (value) {
        // check if it is array
		if (!_.isArray(value)) return false;
        // check if items inside the array are of Object
		for (let item of value) {
			if (!_.isObject(item)) return false;
		}
		return true;
	} else {
		return true;
	}
};
