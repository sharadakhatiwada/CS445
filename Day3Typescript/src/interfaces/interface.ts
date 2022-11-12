// interface myInnterface{
//     readonly value: string,
//     name? : number,
//     surname: boolean

// }
// let k1 : myInnterface = {value:"john", name: 2, surname:true}

// interface city {
//     name1: string;
//     name2: String;
//     name3: string;

// }
// interface Icountry extends city{
//     countryName1: string;
//     countryName2: string;
//     countryName3: string;
// }
// let bucketList: Icountry ={
//     countryName1: "US", 
//     name1: "Newyork",
//     countryName2:"France",
//     countryName3: "Nepal",
//     name2: "Paris",
//     name3: "Kathmandu"
// } 


interface IEmployee {
empCode: number;
empName: string;
setEmpName(name: string): void;
getEmpName: () => string;
}

interface IDoctor extends IEmployee{
    speciality: string;
    address: string;
}
let GynoDoc: IDoctor = {
    empCode: 123,
    empName: "sar",
    speciality:  "gyno",
    address: "kathmandu",
    setEmpName(name: string): void{
        this.empName = name; 
    },
    getEmpName(): string{
        return this.empName
    }

}
enum Color { Red, Green, Blue };
let c: Color = Color.Red;
enum Color2 { Red = 0, Green, Blue };
enum Color3 { Red = 3, Green, Blue };
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
let holiday = (function(){
    let budget = 3000;
    let expens; 
    return{
        expenses: function(food: number, uber: number, tickets: number){
          budget = budget - (food + uber + tickets);
        },
        getBudget: function(){
            if(budget === 0)
            return "Finish your holiday.";
            else 
            return budget
        }

    }
})();
holiday.expenses(400, 200, 200);
holiday.getBudget();