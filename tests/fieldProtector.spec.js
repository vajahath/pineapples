/*global describe it*/

const expect = require('chai').expect;
const fieldProtector = require('../src').fieldProtector;

describe('testing fieldProtector function', () => {
	it('[] if no fields should be removed', (done) => {
		let result = fieldProtector({
			name: 'billy',
			age: 22
		}, []);
		expect(JSON.stringify(result)).to.equal('[]');
		done();
	});
	it('[\'name\', \'id\'] if those fields are asked to be removed from an obj with those fields', (done) => {
		let result = fieldProtector({
			name: 'billy',
			id: 22,
			address: 'fadsf'
		}, ['name', 'id']);
		expect(JSON.stringify(result)).to.equal('["name","id"]');
		done();
	});
	it('[] if \'name\', \'id\' fields are asked to be removed from an obj WITHOUT those fields', (done) => {
		let result = fieldProtector({
			first_name: 'billy',
			uid: 22,
			address: 'fadsf'
		}, ['name', 'id']);
		expect(JSON.stringify(result)).to.equal('[]');
		done();
	});
	it('[] if empty obj', (done) => {
		let result = fieldProtector({}, ['name', 'id']);
		expect(JSON.stringify(result)).to.equal('[]');
		done();
	});
	it('[] if empty obj and protected fields', (done) => {
		let result = fieldProtector({}, []);
		expect(JSON.stringify(result)).to.equal('[]');
		done();
	});
});
