"use strict";
let bankAccount;
bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself;
myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
