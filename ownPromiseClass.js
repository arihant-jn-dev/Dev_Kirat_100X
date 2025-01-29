class Promise_AJ{
    constructor(fn){
        function afterDone(){
            this.resolve();
        }
        fn(afterDone);
    }
    then(callback_f){
        this.resolve = callback_f;
    }
}

function readTheFile(resolve) {
    setTimeout(function() {
        console.log("called after 3 secs");
        resolve();
    },3000);
}
function setTimeoutPromisified(){
    return new Promise_AJ(readTheFile);
}
let ownPromiseObj = new setTimeoutPromisified();

function callback_fn(){
    console.log("----my own promise class callback runs after resolve--------");
}
ownPromiseObj.then(callback_fn);