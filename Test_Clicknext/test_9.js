function revert_string(str) {
    let str_reverse = "";
    for (let i = str.length-1; i >= 0; i--) {
        str_reverse += str[i];
    }
    return str_reverse;
}

const prompt = require('prompt-sync')();
let str = prompt("input:");

console.log(revert_string(str))