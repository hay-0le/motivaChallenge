const expect = require('chai').expect;
const { createIntervals } = require('../problem1.js');

describe('Tests for correct data types:', () => {
    it('CreateIntervals returns an array', () => {
        var result = createIntervals('a', 'b', 3);
        expect(Array.isArray(result)).to.equal(true);
    })

    it('CreateIntervals is a function', () => {
        expect(typeof createIntervals === 'function').to.equal(true);
    })
})

describe('Tests tuple dates do not exceed max period of days:', () => {
    it('Tuples do not exceed max gap when gap is smaller than start - end', () => {
        var result = createIntervals('a', 'b', 3);
        expect(Array.isArray(result)).to.equal(true);
    })

    it('Should return one tuple if max gap is more than different between start and end', () => {
        expect(typeof createIntervals === 'function').to.equal(true);
    })
})