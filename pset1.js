/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
const average = (arr = []) => {
    const deepArr = arr.slice(0);
    let sum = 0;
    for (let i = 0; i < deepArr.length; i++) {
        sum += deepArr[i];
    }
    return sum/deepArr.length;
}
//test
console.log('---------------average test---------------');
console.log(average(), NaN);
console.log(average(['hola','mi','amore']), NaN);
console.log(average([1,2,3,4]), 10/4);
console.log(average([1,4,3,2]), 10/4);
console.log(average([10,0,10,0,20]), 8);
console.log('---------------------------');

/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/

const squareEach = (arr = [] ) => {
    const deepCopy = [...arr];
    for(let i = 0; i < arr.length; i++){
        deepCopy[i] = deepCopy[i] ** 2
    }
    return deepCopy;
}
//test
console.log('---------------squareEach test---------------');
console.log(squareEach(), []);
console.log(squareEach(['hola','mi','amore']), NaN);
console.log(squareEach([1,2,3,4]), [1,4,9,16]);
console.log(squareEach(['dime',10,5]), [NaN,100,25]);
console.log(squareEach('playing around'), NaN, "interesting - get back to it"); //interesting scenario; why?!
console.log('----------------------------------------------');

/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/



