function inverted_star_triangle(row) {
    let result = "";
    let column = row*2-1;
    for (let r = 0; r < row; r++) {
        for (let s = 0; s < r; s++) {
            result += " ";
        }
        for (let c = 0; c < column; c++) {
            result += "*"
        }
        result += "\n";
        column -= 2;
    }
    return result;
}
const prompt = require('prompt-sync')();
let row = prompt("input:");

console.log(inverted_star_triangle(Number(row)));