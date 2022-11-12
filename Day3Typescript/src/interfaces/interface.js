// interface myInnterface{
//     readonly value: string,
//     name? : number,
//     surname: boolean
var GynoDoc = {
    empCode: 123,
    empName: "sar",
    speciality: "gyno",
    address: "kathmandu",
    setEmpName: function (name) {
        this.empName = name;
    },
    getEmpName: function () {
        return this.empName;
    }
};
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue";
})(Color2 || (Color2 = {}));
;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 3] = "Red";
    Color3[Color3["Green"] = 4] = "Green";
    Color3[Color3["Blue"] = 5] = "Blue";
})(Color3 || (Color3 = {}));
;
console.log(Color.Green);
// let emp: IEmployee = {
// empCode: 1001,
// empName: 'John',
// setEmpName: function (name: string): void {
// this.empName = name;
// },
// getEmpName: function () {
// return this.empName;
// }
// }
// emp.setEmpName('Edward');
// console.log(emp.getEmpName());
var holiday = (function () {
    var budget = 3000;
    var expens;
    return {
        expenses: function (food, uber, tickets) {
            budget = budget - (food + uber + tickets);
        },
        getBudget: function () {
            if (budget === 0)
                return "Finish your holiday.";
            else
                return budget;
        }
    };
})();
holiday.expenses(400, 200, 200);
console.log(holiday.getBudget());
