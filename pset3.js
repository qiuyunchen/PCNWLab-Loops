/*
    @func getMiddle
    @param {array} arr
    @return {array}
    @desc - get the middle item of an array
            if even number of elements, return the middle TWO items
            
    @example - getMiddle([1,2,3); // [2]
               getMiddle([1,2,3,4]); // [2,3]
*/

const getMiddle = arr =>{
    let newArr = [];
    const midIndex = Math.floor(arr.length/2);
    if (arr.length %2 === 0) {
        newArr.push(arr[midIndex-1]);
    }
    newArr.push(arr[midIndex]);
    return newArr;
}

//test
console.log('-------------------1. getMiddle test-------------------');
console.log(getMiddle([1,2,3]), [2]);
console.log(getMiddle([1,2,3,4]), [2,3]);
console.log('-------------------------------------------------------');

/*
    @func addToMiddle
    @param {array} arr
    @param {anything} element
    @return {array}
    @desc - add element to the middle of array
            if odd number of elements, add after middle
            
    @example - addToMiddle([1,2,3], 0); // [1,2,0,3];
               addToMiddle([1,2,3,4], 0); // [1,2,0,3,4]
*/

const addToMiddle = (arr, element) =>{
    const midIndex = Math.ceil(arr.length/2);
    const half1 = arr.slice(0, midIndex);
    const half2 = arr.slice(midIndex);
    return half1.concat(element).concat(half2);
}
//test
console.log('-------------------2. addToMiddle test-------------------');
console.log(addToMiddle([1,2,3], 0), [1,2,0,3]);
console.log(addToMiddle([1,2,3,4], 0), [1,2,0,3,4]);
console.log('---------------------------------------------------------');

/*
    @func hasAtSymbol
    @param {string} email
    @return {boolean}
    @desc - return true if '@' present in string
    @example - hasAtSymbol('taq@karim.com'); // true
               hasAtSymbol('foobar'); // false
*/

const hasAtSymbol = email =>{
    for(let i =0; i < email.length; i++){
        if (email[i] === '@') return true;
    }
    return false;
}
//test
console.log('------------------- 3. hasAtSymbol test -------------------');
console.log(hasAtSymbol('taq@karim.com'), true);
console.log(hasAtSymbol('foobar'), false);
console.log('---------------------------------------------------------');

/*
    @func capitalize
    @param {string} str
    @returns {string}
    
    @desc - capitalize the FIRST letter of string
    @example - capitalize('taq'); // 'Taq'
               capitalize('Taq'); // 'Taq'
*/
const capitalize = str =>{
    const letter1 = str[0].toUpperCase();
    return letter1 + str.slice(1); 
}
//test
console.log('------------------- 4. capitalize test -------------------');
console.log(capitalize('taq'), 'Taq');
console.log(capitalize('Taq'), 'Taq');
console.log(capitalize('tech'), 'Tech');
console.log(capitalize('weird!'), 'Weird!');
console.log('---------------------------------------------------------');

/*
    @func isAllUpperCased
    @param {string} str
    @returns {boolean}
    
    @desc - return true if all caps else false
    @example isAllUpperCased('TAQ'); // true
             isAllUpperCased('tAq'); // false
*/
const isAllUpperCased = str => (str === str.toUpperCase());
//test
console.log('------------------- 5. isAllUpperCased test -------------------');
console.log(isAllUpperCased('TAQ'), true);
console.log(isAllUpperCased('tAq'), false);
console.log(isAllUpperCased('El Mundo'), false);
console.log(isAllUpperCased('SUSHI'), true);
console.log('---------------------------------------------------------');

/*
    @func capitalizeEachWord
    @param {string} str
    @returns {string}
    
    @desc - returns string with each WORD capitalized
    @example - capitalizeEachWord('the cow jumped over the fence')
               // 'The Cow Jumped Over The Fence'
*/

const capitalizeEachWord = str =>{
    if (typeof str !== 'string') return 'need string input!';
    const arr = str.split(' ');
    const newArr = arr.map( each => capitalize(each) );
    let newStr = '';
    newArr.forEach( each => newStr += each+' ' );
    return newStr;
}
//test
console.log('------------------- 6. capitalizeEachWord test -------------------');
console.log(capitalizeEachWord(), 'need string input!');
console.log(capitalizeEachWord(1000), 'need string input!');
console.log(capitalizeEachWord('hello'), 'Hello');
console.log(capitalizeEachWord('El Mundo'), 'El Mundo');
console.log(capitalizeEachWord('the cow jumped over the fence'), 'The Cow Jumped Over The Fence');
console.log('---------------------------------------------------------');

/*
    @func capitalizeEachWordWithExceptions
    @param {string} str
    @param {array} exceptions
    @returns {string}
    
    @desc - returns string with each WORD capitalized EXCEPT the exceptions
    @example - capitalizeEachWord(
                'the cow and a fox went on the trip', 
                ['the', 'and', 'a', 'on']
               )
               // 'The Cow and a Fox Went on the Trip'
*/

/*
    @func findAtMentions
    @param {string} tweet
    @returns {array}
    
    @desc - returns array with all the @mentions
    @example - 
        findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar')
        // ['the_taqquikarim', 'someOtherGuy', 'etc', 'foobar']
*/

/*
    @func roundToN
    @param {number} num
    @param {number} decimalPlaces
    @returns {number}
    
    @desc - rounds to the decimalPlaces
    @example - roundToN(1123.1234, 3); // 1123.123
*/

/*
    @func addArrays
    @param {array} arrays
    @returns {array}
    
    @desc - adds arrays together
    @example - addArrays([
        [1,2,3],
        [4,5],
        [6,7,8,9]
    ]); // [1,2,3,4,5,6,7,8,9]
*/


