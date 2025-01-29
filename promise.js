/*
// mthd : 1
function setTimeOutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,5000))
}
function afterDone(){
    console.log("execute after 1 seconds");
}

//Promise calling 
setTimeOutPromisified(1000).then(afterDone);

let promiseObj = setTimeOutPromisified(1000); // returns instance of Promise class 
promiseObj.then(afterDone);
*/
// mthd : 2
function waitFor3S(resolve){
    return setTimeout(resolve,3000)
}
function setTimeOutPromisified(){
    return new Promise(waitFor3S);
}
function x(){
    console.log("x is called after 3 seconds");
}
//calling promise
setTimeOutPromisified().then(x);
//callback based approach
setTimeout(main,3000);

//the function which passed in Promise--> Promise(waitFor3s)---> waitFor3s first arg is always resolve --> and whenever the resolve arg is called then .then(main)
//--> main() function gets called (whatever passed in .then )