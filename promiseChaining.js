function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    });
}

//promoise Chaining 
setTimeoutPromisified(2000).then(function(){
    console.log("hiii");
    return setTimeoutPromisified(3000); //it'll retun us a promise so next we can use then.()
}).then(function(){
    console.log("helloooo");
    return setTimeoutPromisified(5000); //it's againg returning us a promise so we can use then.()
}).then(function(){
    console.log("helloo there");
});

/**
 * whenever a promise is return you can use .then()
 */