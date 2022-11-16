let num = 2;
console.log("Hello Rajiv")
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(num % 2=== 0){
            resolve("Rajiv: yeah true");
        }
        else{
            resolve("false");
        }
    }, 3000)
});
console.log("You took my money right?")
promise.then((result)=>{
    console.log(result);
});
