

// Array.prototype.removeDuplicatesAsync = async function(){
//     let outputArray = [];
//     let promises = [];
//     this.forEach((item) => {
//        promises.push(new Promise((resolve)=>{
//             setTimeout(function(){
//                 if(!(outputArray.includes(item))){
//                     resolve(item);
//                 }
//             })   
//         }).then(item => {
//             outputArray.push(item);
//         })
//         ) 
//     }) 
//     await Promise.all(
//         promises
//     ).then(console.log);
// }

Array.prototype.removeDuplicatesAsync = async function() {
    console.log(await [...new Set(this)]);
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]