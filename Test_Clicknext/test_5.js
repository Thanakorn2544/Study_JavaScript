function inverted_number_triangle(row) {
    let result = "";
    let column = 1;
    let number = 1;
    if (row > 4 || row <= 0) {
        return "Please enter a row <= 4";
    }
    for (let r = row; r > 0; r--) {
        for (let s = 0; s < r; s++) {
            result += " ";
        }
        for (let c = 0; c < column; c++) {
            if (number != 10) {
                result += `${number++} `;
            }
            else {
                result += "0"
            }
        }
        result += "\n";
        column++;
    }
    return result;
}

const prompt = require('prompt-sync')();
let row = prompt("input:");

console.log(inverted_number_triangle(Number(row)));