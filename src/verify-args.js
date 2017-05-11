const fieldProtector = require('./fieldProtector');
const Promise = require('bluebird');

module.exports = (obj, protectedFields) => {
	return new Promise((resolve, reject) => {
		let protectedFieldsErr = fieldProtector(obj, protectedFields);

		if (protectedFieldsErr.length != 0) {
			reject({
				status: 'invalid parameters detected!',
				message: 'you cannot edit the following parameters',
				params: protectedFieldsErr
			});
			return;
		}
		if (Object.keys(obj).length === 0) {
			reject({
				status: 'failed',
				message: 'No parameters',
			});
			return;
		}

		// in case dealing with objects in the body
		Object.keys(obj).forEach(function(key) {
			if (obj[key]) {
				if (obj[key].constructor === Array || obj[key].constructor === Object) {
					obj[key] = `${JSON.stringify(obj[key])}`;
				}
			}
		});
		resolve();
	});
};
