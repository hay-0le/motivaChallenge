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
    
   //Check that inputs are a function and an object (not an array) on the first run ---> leaving firstRun argument off defaults to true which will run check
    if (firstRun && !(typeof converterFunction === 'function' && !Array.isArray(obj) && typeof obj === 'object')) {
        return 'Error: incorrect input types. Please invoke with a function and an object.';
    }

    //helper function to change case type of key with converterFunction, then updates the obj with newKey
    let updateKey = (key) => {
        let newKey = converterFunction(key);
        //set newKey in obj equal to values at old key
        obj[newKey] = obj[key];
        //delete old key
        delete obj[key];
        
        return newKey;
    }


    //-- Checks to handle different data types --
    //if obj is an array
    if (Array.isArray(obj)) {
        //create empty results array to add all converted values to
        let results = [];
        //loop through elements in the array
        for (let element of obj) {
            //add the element (converted) to the array, using traverser recursively to handle nested data
            results.push(traverser(converterFunction, element, false))
        }
        //update obj to converted array
        obj = results;


    //if obj is an object
    } else if (typeof obj === 'object') {
        //create cache for checked keys to keep from infinite loop since keys are being updated
        let checkedKeys = {};
        //loop through each key
        for (let key in obj) {
            //use cache to see if key has been converted already
            if (!checkedKeys[key]) {
                //use helper function to convert case type of the key (also updates it in the obj)
                let newKey = updateKey(key);
                //get converted value, using traverser recursively to handle nested data (set firstRun to false to avoid incorrect checks of values)
                let newValue = traverser(converterFunction, obj[newKey], false);
                //update object with converted key/value pair
                obj[newKey] = newValue;
                //add newKey to checkedKeys cache
                checkedKeys[newKey] = true;
            }
        }
        

    //obj isn't array, object, or function so it will be primitive data type
    } else {
        //convert it to different case
        obj = converterFunction(obj);
    }

    //return converted obj;
    return obj;
}

module.exports = {
    traverser: traverser
};


