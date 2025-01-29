function setTimeOutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
}


async function solve_1() {
    await setTimeOutPromisified(1000); //here we are using await but thread won't get stuck here as it is async task(returning promise) 
    console.log("hi");
    await setTimeOutPromisified(3000);
    console.log("hellooo");
    await setTimeOutPromisified(5000);
    console.log("helooo there");
}

solve_1();

console.log("hii from end");
