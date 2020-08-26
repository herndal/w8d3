// Array#myEach(callback) - receives a callback function and executes the callback 
// for each element in the array
// Note that JavaScript's forEach function has no return value (returns undefined)


Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

// [1,2,3,4,5].my_each(console.log);
// [1,2,3,4,5].my_each((num) => console.log(num));


// Array#myMap(callback) - receives a callback function, returns a new array of the 
// results of calling the callback function on each element of the array
// should use myEach and a closure

Array.prototype.myMap = function(callback) {
    let newArray = [];
    this.myEach((num) => newArray.push(callback(num)));
    return newArray;
}

// arr = [1,2,3,4,5].myMap((num) => (num + 1));
// console.log(arr);

Array.prototype.myReduce = function(callback, intValue = this[0]) {
    let accumulator = intValue;

    if (intValue != this[0]) {
        this.myEach((num) => accumulator = callback(accumulator, num));
    } else {
        for (let i = 1; i < this.length; i ++) {
            accumulator = callback(accumulator, this[i]);
        }
    }
    return accumulator;
}

// arr = [1, 2, 3, 4];
// console.log(arr.myReduce((acc, num) => acc + num));