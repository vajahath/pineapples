// used for password validation
const passwordValidator = require('password-validator');
const validator = require('validator');
const _ = require('lodash');
const isArray = require('./validators/isArray');
const isCharArray = require('./validators/isCharArray');
const isUrlArray = require('./validators/isUrlArray');
const isIntArray = require('./validators/isIntArray');
const isObjArray = require('./validators/isObjArray');
const isObject = require('./validators/isObject');

const userPassword = new passwordValidator();
userPassword
	.isMin(8)
	.isMax(100)
	.not().spaces();

const isGoodStages = function(value) {
	if (!_.isArray(value)) return false;

	// let error = false;
	for (let i = 0; i <= value.length; i++) {
		if (i === value.length) {
			return true;
		} else {
			if (!
				(value[i].hasOwnProperty('pipeline_board_title')) &&
				(value[i].hasOwnProperty('pipeline_stage_created_by')) &&
				(!validator.isEmpty('' + value[i].pipeline_board_title)) &&
				(validator.isLength('' + value[i].pipeline_board_title, 1, 60)) &&
				(!validator.isEmpty('' + value[i].pipeline_stage_created_by)) &&
				(validator.isLength('' + value[i].pipeline_stage_created_by, 1, 60))
			) {
				return false;
			} else {
				if (value[i].hasOwnProperty('is_editable')) {
					if (!validator.isBoolean('' + value[i].is_editable)) {
						return false;
					}
				}
			}
		}
	}

};

module.exports = {
	isGoodPassword(value) {
		if (value) {
			return userPassword.validate(value);
		} else {
			return false;
		}
	},

	notEqualToString(value, stringToCompare) {
		if (value && stringToCompare && (value != stringToCompare)) {
			return true;
		} else {
			return false;
		}
	},

	isGoodStages,
	isArray,
	isCharArray,
	isIntArray,
	isObjArray,
	isUrlArray,
	isObject
};
