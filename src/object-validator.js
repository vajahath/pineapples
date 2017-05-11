
const validator = require('validator');

let isNotEmpty = (value) => {
	if (
		value === undefined
		|| value === 'null'
		|| value === ''
		|| value === '[]'
	) {
		return false;
	} else {
		return true;
	}
};

validator.isNotEmpty = isNotEmpty;

let validateProperties = function(obj, policies) {
	let invalidProperties = [];
	// part 1
	let obj_keys = Object.keys(obj);
	policies.forEach(policy => {
		if (obj_keys.indexOf(policy.field) === -1) {
			invalidProperties.push({
				msg: 'Field missing',
				invalidFields: policy.field
			});
		}
		return;
	});
	if (invalidProperties.length !== 0) {
		return invalidProperties;
	}

	// part 2
	policies.forEach((policy) => {
		policy.conditions.forEach(condition => {
			if (!validator[condition](typeof obj[policy.field]=== 'object' ? JSON.stringify(obj[policy.field]):obj[policy.field])) {
				invalidProperties.push({
					msg: 'field doesn\'t meets condition',
					field: policy.field,
					value: obj[policy.field],
					condition: condition
				});
			}
		});
	});
	return invalidProperties;
};

module.exports = validateProperties;

