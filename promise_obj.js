function random(resolve){
//reslove is also a function & whenever this resolve fn is called .then(callback) gets execute..!
    //resolve(); // calls immediately .then(callback)
    setTimeout(resolve,3000); //calls after 3 sec
}
let p = new Promise(random);
console.log(p);

function callback(){
    console.log("Promise succeeddd....");
}
p.then(callback);

/***
 * 
 * Promise class --> takes a function as a input here random , whose(random dn) first arg is also function resolve
 */