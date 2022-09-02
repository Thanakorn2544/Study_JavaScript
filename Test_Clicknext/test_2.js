function string_Similarity(s1, s2) {

    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let count = 0;

    if (s1.length != s2.length) {
        return false;
    }

    let str_length = s1.length;
    var i = 0;
    for (let r = 0; r < str_length; r++) {
        for (let c = 0; c < s2.length; c++) {
            if (s1[r] == s2[c]) {
                if (c == 0) {
                    s2 = s2.substring(1)
                    count += 1;
                    break;
                }
                else if (c == s2.length) {
                    s2 = s2.substring(0,s2.length-1)
                    count += 1;
                    break;
                }
                s2 = s2.substring(0,c) + s2.substring(c+1);
                count += 1;
                break;
            }
        }
    }

    if (count == s1.length) {
        return true;
    }

    return false;
}

let s1 = "Maryy", s2 = "ArmyY";

console.log(string_Similarity(s1, s2));