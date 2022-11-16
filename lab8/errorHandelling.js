// async function hisThrows() {
//   throw new Error("Here is an error");
// }
// async function run() {
//   try {
//     await hisThrows();
//   } catch (e) {
//     console.log("Here is error");
//     console.error(e);
//   } finally {
//     console.log("we do cleanup here.");
//   }
// }
// run();
async function thisThrows() {
  throw new Error("throw from this throws");
}
thisThrows()
  .catch(console.error)
  .finally(() => console.log("we do clean up here"));
