function pairNumber(Array, Sum) {
    let result = "";
    for (let r = 0; r < Array.length; r++) {
        for (let c = r; c < Array.length; c++) {
            if (r != c) {
                if ( Array[r]+Array[c] == Sum) {
                    result += Array[r] + ", " + Array[c] + "\n";
                }
            }
        }
    }
    return result;
}

let Array = [1,2,3,4,5,6,7,8,9];
let Sum = 5;

console.log(pairNumber(Array, Sum));