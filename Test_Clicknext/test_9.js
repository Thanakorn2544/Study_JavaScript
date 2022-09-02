function revert_string(str) {
    let arr_str = str.split(' ');
    let str_reverse = [];
    let temp = "";
    for (let r = 0; r < arr_str.length; r++) {
        for (let c = arr_str[r].length-1; c >= 0; c--) {
            temp += arr_str[r][c];
        }
        str_reverse[r] = temp;
        temp = "";
    }
    return str_reverse.join(" ");
}

const prompt = require('prompt-sync')();
let str = prompt("input:");

console.log(revert_string(str))