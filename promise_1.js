function fnPassedInPromise(resolve){
    console.log("----Hii calling settimeout----");
    return setTimeout(resolve,3000); // whenever first arg resolve arg is called , .then(main) fn gets executed
}
function testPromiseAJ(){
    return new Promise(fnPassedInPromise); //the fn which is passed in promise , it's 1st arg is always resolve (we can name this anything)
}

function fnCallAfterResolve(){
    console.log("fn call after resolve");
}
let promiseObj = testPromiseAJ();
promiseObj.then(fnCallAfterResolve);
