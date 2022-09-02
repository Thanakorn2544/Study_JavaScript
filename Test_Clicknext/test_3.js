function tv_program_list(Array) {
    let result = "";
    for (let i = 0; i < Array.length; i++) {
        if (i != Array.length-1) {
            if (Array[i]-Array[i+1] == 1) {
                result += Array[i] + "-" + Array[i+1];
            }
        }
    }
    return 0;
}

let Array = [1, 4, 6, 9, 10, 14, 16, 17]

console.log(Array)