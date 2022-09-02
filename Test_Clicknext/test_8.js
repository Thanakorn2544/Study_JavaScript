function withdraw_banknote(banknote) {
    let money = 1000 - banknote;
    let withdraw = money;
    let result_withdraw = "";
    bank_500 = ~~(money / 500);
    money = money % 500;

    bank_100 = ~~(money / 100);
    money = money % 100;

    bank_50 = ~~(money / 50);
    money = money % 50;

    coin_10 = ~~(money / 10);
    money = money % 10;

    coin_5 = ~~(money / 5);
    money = money % 5;

    coin_1 = ~~(money / 1);

    result_withdraw += "จำนวนเงินทอน " + withdraw + " บาท\n";
    result_withdraw += "500 " + bank_500 + " ใบ\n100 " + bank_100 + " ใบ\n50 " + bank_50 + " ใบ\n";
    result_withdraw += "10 " + coin_10 + " เหรียญ\n5 " + coin_5 + " เหรียญ\n1 " + coin_1 + " เหรียญ\n";
    return result_withdraw;
}

const prompt = require('prompt-sync')();
let banknote = prompt("input:");

console.log(withdraw_banknote(banknote))