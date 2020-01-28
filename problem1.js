// input: 3 arguments ---> start date-time(string), end date-time(string), period-in-days(integer)
    //date-time format : `YYYY-MM-DD hh:mm:ss`
//output: list of tuples where Y - X should never equal more than period-in-days (types in formate of date ONLY)
    //date format should be: ‘YYYY-MM-DD’ for tuples (confirm with Paul on format?)
//constraints: try to use higher order function (bonus points --> show off without overdoing it?)
//edge case: period in days larger than gap between start and end date
        //invalid formats


let createIntervals = (start, end, periodInDays = 3) => {
    //Check all inputs are correct data types else return "Invalid input types"
    //Check all inputs are correct format else return "Invalid date-time formats"
    //Check endDateTime comes after startDateTime else return "Invalid input dates"


    //format inputs from startDateTime, endDateTime to startDate, endDate 
    //set start equal to start after slicing off time stampstamp
    //set end equal to end after slicing off time stampstamp

    //Check if periodInDays is bigger than gap between startDateTime and endDateTime
        //return one tuple with start and end dates in an array (in proper format)


    //create empty results array

    //helper function dateIncrementer takes in start date
        //should update start globally as well?
        //returns start date incremented by periodInDays

    //helper function called dateChecker no parameters
        //check adding periodOfDays to start would push start past end date
            //return false
        //return true (main function can add another interval);


    //main recursive function called repeatFunction takes in ---> testFunction, repeatedActionFunction
        // if test doesn't fail call repeatedActionFunction
        //else
            //return

    //invoke repeatFunction with dateChecker as test function, 
        //and annonymous function  -->
            //create variable intervalStart set to start
            //create variable intervalEnd set to dateIncremeter(start)
            //creates new tuple of (intervalStart, intervalEnd)
            //add tuple to results array;
            //start date now equal to incrementedDate? Complete this in helper function

    //add final interval to results array 

    //return results array 
    return [];
}

module.exports = {
    createIntervals: createIntervals
};