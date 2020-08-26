// Array#bubbleSort - receives an array, returns a sorted array by implementing 
// bubble sort sorting algorithm

Array.prototype.bubbleSort = function () {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i=0; i < (this.length - 1); i++) {
            if (this[i] > this[i + 1]) {
                [a, b] = [this[i], this[i + 1]];  //Q? why did parallel assignment go into an infinite loop?
                [this[i + 1], this[i]] = [a, b];
                sorted = false;
            }
        }
    }
    return this;
}

// console.log([6,9,2,5,1,7,3].bubbleSort());


// String#substrings - receives a string, returns an array of all substrings


String.prototype.subStrings = function() {
    let subs = [];

    for (let i = 0; i < this.length; i ++) {
        let sub = this[i];

        for (let j = i + 1; j <= this.length; j ++) {
            subs.push(sub);
            sub += this[j];
        }
    }
    return subs;
}

//console.log("CrazyLong".subStrings());
