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

const averageSquare = ( arr = [] ) => {
    const deepcopy = [...arr];
    return average(squareEach(deepcopy));
}
//test
console.log('---------------3. averageSquare test---------------');
console.log(averageSquare(), NaN);
console.log(averageSquare(['hola','mi','amore']), NaN);
console.log(averageSquare([1,2,3,4]), 30/4);
console.log(averageSquare(['dime',10,5]), NaN);
console.log(averageSquare('playing around'), NaN);
console.log('----------------------------------------------');

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/

const negateArr = ( arr = [] ) => {
    const deepCopy = arr.slice(0);
    for(let i = 0; i < deepCopy.length; i++){
        deepCopy[i] = deepCopy[i] * -1;
    }
    return deepCopy;
}
//test
console.log('---------------4. negateArr test---------------');
console.log(negateArr(), []);
console.log(negateArr(['hola','mi','amore']), [NaN,NaN,NaN]);
console.log(negateArr([1,2,3,4]), [-1,-2,-3,-4]);
console.log(negateArr(['dime',10,5]), [NaN,-10,-5]);
console.log(negateArr('playing around'), 'playing around'); //Why???
console.log('----------------------------------------------');

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

const reverseArr = ( arr=[] )=> {
    const deepCopy = [...arr];
    for(let i = 0; i < arr.length; i++){
        deepCopy[i] = arr[arr.length-1-i];
    }
    return deepCopy;
}
//test
console.log('---------------5. reverseArr test---------------');
console.log(reverseArr(), []);
console.log(reverseArr(['hola','mi','amore']), ['amore','mi','hola']);
console.log(reverseArr([1,2,3,4]), [4,3,2,1]);
console.log(reverseArr(['dime',10,5]), [5,10,'dime']);
console.log(reverseArr('playing around')); // interesting scenario; get back to it if have time
console.log('----------------------------------------------');

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/



