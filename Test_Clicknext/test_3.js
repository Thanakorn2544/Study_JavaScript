function tv_program_list(Array) {
    let result = "";
    for (let i = 0; i < Array.length; i++) {
        if (i != Array.length) {
            if (Array[i] == Array[i+1]-1) {
                result += Array[i] + "-";
                while (i < Array.length) {
                    if (Array[i] == Array[i+1]-1) {
                        i++;
                    }
                    else {
                        result += Array[i];
                        break;
                    }
                }
            }
            else {
                result += Array[i];
            }
        }
        if (i == Array.length-1) {
            break;
        }
        result += ", ";
    }
    return result;
}

let Array = [1, 4, 6, 9, 10, 14, 16, 17, 18]
let Array2 = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]

console.log(tv_program_list(Array))