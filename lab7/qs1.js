function isPrime(num){
    let promise = new Promise(function(resolve, reject){
        let result= true;
        for(let i=2; i<num; i++){
            if(num % i== 0 ){
                result = false;
            }   
        }
        setTimeout(function(){
            if(result){
                resolve( {prime: true})
            }
            else{
                reject({prime:false})
            }
        }, 500)
    }); 
    return promise;  
}

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');

// Output:
// start
// end
// { prime: true }