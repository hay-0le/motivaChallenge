// input: 3 arguments ---> start date-time(string), end date-time(string), period-in-days(integer)
    //date-time format : `YYYY-MM-DD hh:mm:ss`
//output: list of tuples where Y - X should never equal more than period-in-days (types in formate of date ONLY)
    //date format should be: ‘YYYY-MM-DD’ for tuples (confirm with Paul on format?)
//constraints: try to use higher order function (bonus points --> show off without overdoing it?)
//edge case: period in days larger than gap between start and end date
        //invalid formats


let createIntervals = (start, end, periodInDays = 3) => {
    //Check all inputs are correct data types else return "Invalid input types"
    if (!(typeof start === 'string' && typeof end === 'string' && typeof periodInDays === 'number')) {
        return 'Invalid input types: \nThe first two arguments should be strings, while the second should be a number.'
    }

    //Check all inputs are correct format else return "Invalid date-time formats" --> Use RegEx
    let pattern = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]/;
    if (!(pattern.test(start) && pattern.test(end))) {
        return 'Start and end are not in correct "YYYY-MM-DD hh:mm:ss" format';
    }

    //create object to hold dates for start and end change to numbers, for easy updating/retrieval and so not worry about format until later
    let dates = {
        start: {
            year: parseInt(start.slice(0, 4)),
            month: parseInt(start.slice(5, 7)),
            day: parseInt(start.slice(8, 10))
        },
        end: {
            year: parseInt(end.slice(0,4)),
            month: parseInt(end.slice(5, 7)),
            day: parseInt(end.slice(8, 10))
        }
    }
  

    //Check endDateTime comes after startDateTime else return "Invalid input dates"
    let startNum = (dates.start.year * 365) + (dates.start.month * 30) + dates.start.day;
    let endNum = (dates.end.year * 365) + (dates.end.month * 30) + dates.end.day;
    if (startNum > endNum) return "Invalid input dates. Start dates must occur before end date"

    //helper to reformat dates
    let reformat = (dateObj) => {
        return `${dateObj.year}-${dateObj.month}-${dateObj.day}`
    }

    //Check if periodInDays is bigger than gap between startDateTime and endDateTime
    if (endNum - startNum < periodInDays) {
        //return one tuple with start and end dates in an array (in proper format)
        return [reformat(dates.start), reformat(dates.end)];
    }

    
    //helper function dateIncrementer takes in start date -- also checks to make sure start does not pass end
    let dateIncrementer = () => {
        let i = 0;

        while (i <= periodInDays) {
            //return false if start surpasses end
            if (startNum > endNum) {
                return false;
            }

            //add day
            if (dates.start.day < 30) {
                dates.start.day++
                startNum++;
                i++

            //if end of the month  
            } else if (dates.start.day === 30) {
                //if December
                if (dates.start.month === 12) {
                    dates.start.day = 1;
                    dates.start.month = 1;
                    dates.start.year++;
                    startNum++;
                    i++
                //if not December
                } else {
                    dates.start.day = 1;
                    dates.start.month++;
                    startNum++;
                    i++
                }
            }
        }
        //returns new start date incremented by periodInDays?
        return reformat(dates.start);
    }
        
    //create empty results array named intervals
    let intervals = ["test"];

    //main recursive function called setInterval takes in ---> testFunction, repeatedActionFunction
    let setInterval = (testFunction, repeatedActionFunction) => {
        // if test doesn't fail call repeatedActionFunction
        console.log("in setInterval")
        let result = testFunction();
       
        if (result) {
            repeatedActionFunction();
            setInterval(testFunction, repeatedActionFunction);
        }

    }

    let tempStart = reformat(dates.start);
    //invoke setInterval with dateChecker as test function, 
    //and annonymous function  -->
    setInterval(dateIncrementer, () => {
        //create variable intervalStart set to start
        let startInterval = tempStart;
        //create variable intervalEnd set to dateIncremeter(start)
        let endInterval = reformat(dates.start)
        //creates new tuple of (intervalStart, intervalEnd)
        //add tuple to results array;
        intervals.push([startInterval, endInterval]);
        //start date now equal to incrementedDate? Complete this in helper function
        tempStart = endInterval;
    })

    //add final interval to results array 

    //return results array 
    return intervals;
}

module.exports = {
    createIntervals: createIntervals
};

// console.log(createIntervals("2019-12-14 06:14:56", "2020-02-14 06:14:56", 7))
// console.log(createIntervals("2019-12-14 06:14:56", "2020-02-14 06:14:56", 90)) //[ '2019-12-14', '2020-2-14' ]
// console.log(createIntervals("2019-12-14 06:14:56", "2020-02-14 06:14:56", 7))