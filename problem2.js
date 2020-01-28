//input: function (to determine how to convert case types) and a schema object (to convert)
//output: original input object converted: where all keys/value changed to case of coverter function (camelCase or kebabCase)
//constraints: use recursion
            // define function so that user only has to enter two parameters (function to convert values, and the object to traverse)
//edge cases: incorrect input types --> Return error message to user? Return null? Alert?
            //if any value is a function 
                //XX- input object will be schema so values will not be functions -XX
//camel case: thisIsCamelCase
//kebab case: this-is-kebab-case

       
const { camelCase, kebabCase} = require('case-anything');

let traverser = (converterFunction, obj, firstRun = true) => {
   
    return obj;
}


module.exports = {
    traverser: traverser
};


