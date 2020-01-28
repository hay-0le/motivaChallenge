const expect = require('chai').expect;
const { traverser } = require('../problem2.js');
const { camelCase, kebabCase} = require('case-anything');


describe('Basic data type tests:', () => {
    it('Returns an object', () => {
        let callback = () => {};
        let obj = {};

        var isArray = Array.isArray(traverser(callback, obj))
        var isObject = typeof traverser(callback, obj) === 'object';
        expect(!isArray && isObject).to.equal(true);
    })

    it('Traverser is a function', () => {
        expect(typeof traverser === 'function').to.equal(true);
    })

    it('Returns error message when converterFunction is not a function', () => {
        let errorMessage = 'Error: incorrect input types. Please invoke with a function and an object.';
        let schemaObj = {
            'testKey': 'testValue'
        }

        expect(traverser('camelCase', schemaObj) === errorMessage).to.equal(true);
    })

    it('Returns error message when input object is anything other than an object', () => {
        let errorMessage = 'Error: incorrect input types. Please invoke with a function and an object.';
        let schemaObj = {
            'testKey': 'testValue'
        }

        expect(traverser(camelCase, 'schemaObj') === errorMessage).to.equal(true);
    })

})


describe('Testing conversion took place:', () => {
    it('Check if key changed from kebab to camel', () => {
        let kebabCaseObj = {
            'will-be-camel-case': 'hello-its-me'
        };
        let camelCaseKey = camelCase('will-be-camel-case');

        let camelCaseObj = traverser(camelCase, kebabCaseObj)
      
        expect(camelCaseObj.hasOwnProperty(camelCaseKey)).to.equal(true);
    })


    it('Check if key changed from camel to kebab', () => {
        let camelCaseObj = {
            'willBeKebabCase': 'helloItsMe'
        };
        let kebabCaseKey = kebabCase('willBeKebabCase');

        let kebabCaseObj = traverser(kebabCase, camelCaseObj)

        expect(kebabCaseObj.hasOwnProperty(kebabCaseKey)).to.equal(true);
    })


    it('Check if value of primitive date type gets converted', () => {
        let kebabCaseObj = {
            'will-be-camel-case': 'will-be-camel-case-value'
        };
        let camelCaseKey = camelCase('will-be-camel-case');
        let camelCaseValue = camelCase('will-be-camel-case-value');

        let camelCaseObj = traverser(camelCase, kebabCaseObj)
        expect(camelCaseObj[camelCaseKey] === camelCaseValue).to.equal(true);
    })


    it('Check if value nested in an array gets converted', () => {
        let kebabCaseObj = {
            'this-will-be-camel-case': ['first-value', 'secondValue']
        }

        let camelCaseKey = camelCase('this-will-be-camel-case');
        let targetValueCamelCase = camelCase('first-value');

        let camelCaseObj = traverser(camelCase, kebabCaseObj);
        expect(camelCaseObj[camelCaseKey][0] === targetValueCamelCase).to.equal(true);
    })


    it('Check if value nested in an obj gets converted', () => {
        let camelCaseObj = {
            'willBeKebabCaseKey1': {
                'kebabCaseKey2': 'kebabCaseValue'
            }
        };
        let kebabCaseKey1 = kebabCase('willBeKebabCaseKey1');
        let kebabCaseKey2 = kebabCase('kebabCaseKey2');
        let kebabCaseValue = kebabCase('kebabCaseValue');
        let kebabCaseObj = traverser(kebabCase, camelCaseObj);

        expect(kebabCaseObj[kebabCaseKey1][kebabCaseKey2] === kebabCaseValue).to.equal(true);
    })
})