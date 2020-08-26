//  range(start, end) - receives a start and end value, 
//  returns an array from start up to end

function range(start, end) { //this is exclusive of the end
    //base case
    if (start === end) {
        return [];
    }

    //recursive step
    let newArray = range(start, end - 1);

    newArray.push(end - 1);
    return newArray;
}

//console.log(range(0, 6))


//sumRec(arr) - receives an array of numbers and recursively sums them

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    newArray = []
    for (let i = 1; i < arr.length; i ++) {
        newArray.push(arr[i]);
    }
    return arr[0] + sumRec(newArray);
}

//console.log(sumRec([1,2,3,4]));

// exponent(base, exp) - receives a base and exponent, returns the base raise to the power of the exponent(base ^ exp)

// write two versions:
// # this is math, not Ruby methods.

// # version 1
// exp(b, 0) = 1
// exp(b, n) = b * exp(b, n - 1)

// # recursion 2
// exp(b, 0) = 1
// exp(b, 1) = b
// exp(b, n) = exp(b, n / 2) ** 2[for even n]
// exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2)[for odd n]

function exp1(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp === 1) {
        return base;
    }
    return base * exp1(base, exp - 1);
}


function exp2(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp === 1) {
        return base;
    }

    if ((exp % 2) === 0) {
        //even
        return exp2(base, (exp / 2)) ** 2;
    }
    else {
        //odd
        return base * (exp2(base, (exp - 1) / 2) ** 2);
    }
}

// console.log(exp1(2, 0)); //1
// console.log(exp1(2, 1)); //2
// console.log(exp1(2, 3)); //8
// console.log(exp2(2, 0));
// console.log(exp2(2, 1));
// console.log(exp2(2, 3));
// console.log(exp2(2, 6));
// console.log(exp2(2, 7));


//fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers

function fibonacci(n) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [1];
    }
    if (n === 2) {
        return [1, 1];
    }
    let current = fibonacci(n - 1);
    current.push(current[current.length - 1] + current[current.length - 2]);
    
    return current;
}

// console.log(fibonacci(7));


//deepDup(arr) - deep dup of an Array

function deepDup(arr) {
    if (!(arr instanceof Array)) { //object is not an array
        return arr;
    }

 //   let newArray = arr.map((ele) => deepDup(ele));
    arr.myEach(ele) {
        if (!(arr instanceof Array)) {
            
        }
    }
    
}

arr = [[1, 2], 6, [4, [5, 7]], 3];
newArr = deepDup(arr);
newArr[3][1] = 8; // [[1, 2], 6, [4, 8], 3]
console.log(arr);
console.log(newArr);


// console.log(instanceof) ==> boolean
// console.log(typeof('blubber')) ==> string