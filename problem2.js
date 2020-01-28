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
    

    //helper function to change case type of key with converterFunction, then updates the obj with newKey

        //set newKey in obj equal to values at old key
       
        //delete old key
       
        //return new key

    //-- Checks to handle different data types --
    //if obj is an array
    
        //create empty results array to add all converted values to
        
        //loop through elements in the array
        
            //add the element (converted) to the array, using traverser recursively to handle nested data
        
        //update obj to converted array
        
    //if obj is an object
   
        //create cache for checked keys to keep from infinite loop since keys are being updated
       
        //loop through each key
      
            //use cache to see if key has been converted already
         
                //use helper function to convert case type of the key (also updates it in the obj)
                
                //get converted value, using traverser recursively to handle nested data (set firstRun to false to avoid incorrect checks of values)
              
                //update object with converted key/value pair
              
                //add newKey to checkedKeys cache
        
    //obj isn't array, object, or function so it will be primitive data type
  
        //convert it to different case


    //return converted obj;
    return obj;
}

module.exports = {
    traverser: traverser
};


