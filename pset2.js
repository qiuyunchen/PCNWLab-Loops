/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/

const removeNegatives = arr =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] *= -1;
        }
    }
    return arr;
}
//test
console.log('----------------1. removeNegatives test----------------');
console.log(removeNegatives([-3,-2,1,2,3,-4]), [3,2,1,2,3,4])
console.log('-------------------------------------------------------');

/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
const findVal = (arr, val) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}
//test
console.log('----------------2. findVal test----------------');
console.log(findVal([1,2,3,4], 1), 0);
console.log(findVal([1,2,3,4], 4), 3);
console.log(findVal([1,2,3,4], 9), -1);
console.log('-------------------------------------------------------');

/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/

const removeOdds = arr =>{
    const newArr = [];
    for(let i =0; i < arr.length; i++){
        if(typeof arr[i] === 'number' && arr[i]%2 === 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//test
console.log('----------------3. removeOdds test----------------');
console.log(removeOdds([1,2,3,4]), [2,4]);
console.log(removeOdds([1,"2",3,4]), [4]);
console.log('-------------------------------------------------------');

/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
const addSquares = arr =>{
    let newArr = [...arr];
    for(let i =0; i < arr.length; i++){
        newArr.push( arr[i] **2 );
    }
    return newArr;
}
//test
console.log('----------------4. addSquares test----------------');
console.log(addSquares([1,2,3,4]), [1,2,3,4,1,4,9,16]);
console.log(addSquares([0,3,4]), [0,3,4,0,9,16]);
console.log('-------------------------------------------------------');
/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/

const doubleify = arr =>{
    let newArr = [];
    for(let i =0; i < arr.length; i++){
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}
//test
console.log('----------------5. doubleify test----------------');
console.log(doubleify([1,2,3,4]), [1,1,2,2,3,3,4,4]);
console.log(doubleify([0,3,4]), [0,0,3,3,4,4]);
console.log('-------------------------------------------------------');
/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/
const findMax = arr =>{
    let largestNum = arr[0];
    for(let i =0; i < arr.length; i++){
        if(arr[i] > largestNum){
            largestNum = arr[i];
        }
    }
    return largestNum;
}
//test
console.log('----------------6. findMax test----------------');
console.log(findMax([1,2,3,99,4]), 99);
console.log(findMax([-50,3,4,100]), 100);
console.log('-------------------------------------------------------');