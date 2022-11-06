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


class Course{
   constructor(name, id, duration){

   }

}
let MSD = new Course();
function CourseMSd(name, id){
    this.name= name;
    this.id= id;
}
let comPro = new CourseMSd("", 12);