// Monkey - patch the following methods to the Array class.Remember, we 
// want to use prototype here.

// Array#uniq - returns a new array containing each individual element of 
// the original array only once(creating all unique elements)
// the elements should be in the order in which they first appear in the 
// original array
// should not mutate the original array
//     ([1, 2, 2, 3, 3, 3].uniq() => [1, 2, 3])

//these functions are NAMED


Array.prototype.uniq = function(){
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if  (!newArray.includes(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

// arr = [3, 3, 6, 8, 3] // Q? ask about the length returned
// console.log(arr.uniq())
// another = [6, 6, 3, 8, 7, 8, 3, 21, 0]
// console.log(another.uniq())


// Array#twoSum - returns an array of position pairs where the elements 
// sum to zero

Array.prototype.twoSum = function() {
    let newArray = [];
    let pair = [];

    for (let i = 0; i < this.length; i ++) {
        for (let r = i + 1; r < this.length; r ++) {
            if (this[i] + this[r] === 0) {
                // pair = [i, r];
                newArray.push([i, r]);
            }
        }
    }
    return newArray;
}

// arr = [3, -3, 6, 8, 3]; // Q? ask about the length returned
// console.log(arr.twoSum());

// another = [6, -6, 3, 8, 7, -8, 3, 21, 0, -6];
// console.log(another.twoSum());



// Array#transpose - where we have a two - dimensional array representing 
// a matrix. returns the transpose
// should not mutate the original array


Array.prototype.transpose = function() {

    let newArray = Array.from({ length: this[0].length }, () => Array.from({ length: this.length }));

    for (let i = 0; i < this.length; i++) { //iterate through the matrix (each row)
        for (let j = 0; j < this[i].length; j++) { //iterate through one row (each element)
            newArray[j][i] = this[i][j];
        }
    }
    return newArray;
}

// mtx = [[3, 3, 6, 8, 3], [0, 1, 2, 4, 3], [7, 8, 7, 8, 7]];
// console.log(mtx.transpose()); // [[3, 0, 7], [3, 1, 8], [6, 2, 7], [8, 4, 8], [3, 3, 7]]

// another = [[6], [6], [3], [8], [7], [8], [3], [21], [0]];
// console.log(another.transpose());

// Array.from({length: this[0].length}, )
// [f,o,o]

// ftn = function(){
//     return new Array
// }

// let newArray = mtx[0].map(ftn())
// console.log(newArray)

// let newArray = Array.from({ length: this[0].length });

    //    let newArray = new Array(this[0].length);