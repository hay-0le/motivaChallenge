const expect = require('chai').expect;
const { createIntervals } = require('../problem1.js');

//check for deep equality of nested arrays
let arraysMatch = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    for (var i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i])) {
            deepEquals = arraysMatch(arr1[i], arr2[i])
        } else if (arr1[i] !== arr2[i]) {
            return;
        }
    }
    return true;
}


describe('Tests for correct data types:', () => {

    it('CreateIntervals returns an array', () => {
        let result = createIntervals('2019-12-14 06:14:56', '2020-02-14 06:14:56', 7);
        expect(Array.isArray(result)).to.equal(true);
    })

    it('CreateIntervals is a function', () => {
        expect(typeof createIntervals === 'function').to.equal(true);
    })
})


describe('Tests for correct input:', () => {

    it('Start date must be earlier than end date', () => {
        let result = createIntervals('2022-12-14 06:14:56', '2020-02-14 06:14:56', 7);

        expect(result).to.equal('Invalid input dates. Start dates must occur before end date');
    })

    it('Should return one tuple in an array, if periodOfDays is more than different between start and end', () => {
        let result = createIntervals('2019-12-14 06:14:56', '2020-02-14 06:14:56', 90)
        
        expect(arraysMatch(result, [ [ '2019-12-14', '2020-2-14' ] ])).to.equal(true);
    })

    it('Both dates are correctly formatted', () => {
        let result = createIntervals('19-12-14 06:14:56', '2020-02-14 06:14:56', 90)

        expect(result).to.equal('Start and end are not in correct "YYYY-MM-DD hh:mm:ss" format');
    })

    it('Returns error when inputs are incorrect data types', () => {
        let result = createIntervals('19-12-14 06:14:56', '2020-02-14 06:14:56', '90')

        expect(result).to.equal('Invalid input types: The first two arguments should be strings, while the second should be a number.');
    })
})


describe('Tests for correct outputs:', () => {

    it('Returns correct result when periodOfDays is less than gap between start and end dates', () => {
        let result = createIntervals('2019-12-14 06:14:56', '2020-02-14 06:14:56', 7);
        let expectedResult = [
            [ '2019-12-14', '2019-12-21' ],
            [ '2019-12-21', '2019-12-28' ],
            [ '2019-12-28', '2020-1-5' ],
            [ '2020-1-5', '2020-1-12' ],
            [ '2020-1-12', '2020-1-19' ],
            [ '2020-1-19', '2020-1-26' ],
            [ '2020-1-26', '2020-2-3' ],
            [ '2020-2-3', '2020-2-10' ],
            [ '2020-2-10', '2020-2-14' ]
          ]

        expect(arraysMatch(result, expectedResult)).to.equal(true);
    })

    it('Returns correct result when periodOfDays is more than gap between start and end dates', () => {
        let result = createIntervals('2019-12-14 06:14:56', '2020-02-14 06:14:56', 90)
        let expectedResult = [ ['2019-12-14', '2020-2-14'] ]

        expect(arraysMatch(result, expectedResult)).to.equal(true);
    })

})