/*global it describe*/

const expect = require('chai').expect;
const { isCharArray } = require('../../src').customValidators;

describe('Testing is isCharArray validator >', () => {
	it('true if ["f","fads"]', (done) => {
		expect(isCharArray(['f', 'fads'])).to.be.true;
		done();
	});
	it('true if [""]', (done) => {
		expect(isCharArray([''])).to.be.true;
		done();
	});
	it('true if [\'1\',\'2\',\'3\']', (done) => {
		expect(isCharArray(['1', '2', '3'])).to.be.true;
		done();
	});
	it('true if null', (done) => {
		expect(isCharArray(null)).to.be.true;
		done();
	});
	it('true if undefined', (done) => {
		expect(isCharArray(undefined)).to.be.true;
		done();
	});
	it('true if passed nothing', (done) => {
		expect(isCharArray()).to.be.true;
		done();
	});

	it('false if [{a:1}]', (done) => {
		expect(isCharArray([{ a: 1 }])).to.be.false;
		done();
	});
	it('false if \'[]\'', (done) => {
		expect(isCharArray('[]')).to.be.false;
		done();
	});
	it('false if \'apple\'', (done) => {
		expect(isCharArray('apple')).to.be.false;
		done();
	});
	it('false if 123', (done) => {
		expect(isCharArray(123)).to.be.false;
		done();
	});
	it('false if {}', (done) => {
		expect(isCharArray({})).to.be.false;
		done();
	});
	it('false if [1,2,3]', (done) => {
		expect(isCharArray([1, 2, 3])).to.be.false;
		done();
	});
});
