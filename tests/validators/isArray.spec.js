/*global it describe*/

const expect = require('chai').expect;
const { isArray } = require('../../src').customValidators;

describe('Testing is isArray validator >', () => {
	it('true if []', (done) => {
		expect(isArray([])).to.be.true;
		done();
	});

	it('true if [1,2,3]', (done) => {
		expect(isArray([1, 2, 3])).to.be.true;
		done();
	});
	it('true if [\'1\',\'2\',\'3\']', (done) => {
		expect(isArray(['1', '2', '3'])).to.be.true;
		done();
	});
	it('true if null', (done) => {
		expect(isArray(null)).to.be.true;
		done();
	});
	it('true if undefined', (done) => {
		expect(isArray(undefined)).to.be.true;
		done();
	});
	it('true if passed nothing', (done) => {
		expect(isArray()).to.be.true;
		done();
	});
	it('true if [{a:1}]', (done) => {
		expect(isArray([{ a: 1 }])).to.be.true;
		done();
	});

	it('false if \'[]\'', (done) => {
		expect(isArray('[]')).to.be.false;
		done();
	});
	it('false if \'apple\'', (done) => {
		expect(isArray('apple')).to.be.false;
		done();
	});
	it('false if 123', (done) => {
		expect(isArray(123)).to.be.false;
		done();
	});
	it('false if {}', (done) => {
		expect(isArray({})).to.be.false;
		done();
	});
});
