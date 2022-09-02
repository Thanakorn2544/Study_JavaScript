function number_sort_descending(num) {
    let Array = num.split(',').map(x=>+x);
    let copy = 0;
    for (let r = 0; r < Array.length; r++) {
        for (let c = 0; c < Array.length; c++) {
            if (Array[c] < Array[c+1]) {
                copy = Array[c];
                Array[c] = Array[c+1];
                Array[c+1] = copy;
            }
        }
    }
    return Array.join(", ");
}

const prompt = require('prompt-sync')();
let num = prompt("input:");

console.log(number_sort_descending(num));