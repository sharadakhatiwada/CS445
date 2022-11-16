// console.log("FairField");
// async function getFullName() {
//   "sharada Khatiwada";
// }
// getFullName().then(console.log);
// console.log("IOWA");

console.log("Hello World");
function foo() {
  return "done !";
}
async function bar() {
  console.log("Inside Bar");
  console.log("Bar inside");
  let result = await foo();
  console.log(result);
  console.log("bar ends !");
}
bar();
console.log("end");
