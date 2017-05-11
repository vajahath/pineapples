const serializeError = require('serialize-error');

let send500 = (res, err) => {
	res.status(500).send({
		status: 'Something went wrong',
		msg: serializeError(err).message
	});
};

let send400 = (res, err) => {
	let goodErr = serializeError(err);
	res.status(400).send({
		status: 'This is a bad request.',
		msg: goodErr.message,
		detail: goodErr.detail,
	});
};

let error_handler = function(err, res) {
	switch (err.code) {
		case '42703': // undefined_column
		case '23505': // unique_violation
		case '22003': // value out of range of integer
		case '22P02': // invalid text representation
			send400(res, err);
			break;

		default:
			send500(res, err);
			break;
	}
};

module.exports = error_handler;
