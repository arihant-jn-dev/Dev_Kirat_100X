console.log("hey start");
function greet(){
    console.log("hey greetings");
}
console.log("hey call settimeout");
setTimeout(greet, 1);
let c = 0;
for(let i=0 ;i<10;i++){
    c++;
}
console.log("hey after settimeout");


/**
 * 
 * Callstack : current state of running called (the thing which is currently running)
 * WebAPis : all the async tasks offloaded to webapis once they gets complete pushed to callback(task) queue.
 * CallBack Queue : when all the cpu intensive taks gets compelted , then one by one all the operation goes into callback stack .
 * 
 * working :: first cpu intensive (print statments , for loops , nomal fn calling)task will get compelte 
 * and then async task will get complete (callback : settimeout(fn,timout_in_ms), reading file async : I/O intensive task)
 * 
 */
/**
 * 
 * To Test Callback : http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coImhleSBzdGFydCIpOwpmdW5jdGlvbiBncmVldCgpewogICAgY29uc29sZS5sb2coImhleSBncmVldGluZ3MiKTsKfQpmdW5jdGlvbiBncmVldDEoKXsKICAgIGNvbnNvbGUubG9nKCJoZXkgZ3JlZXRpbmdzICBmcm9tIDEiKTsKfQpjb25zb2xlLmxvZygiaGV5IGNhbGwgc2V0dGltZW91dCIpOwpzZXRUaW1lb3V0KGdyZWV0LCAzMDAwKTsKc2V0VGltZW91dChncmVldDEsIDUwMCk7CmxldCBjID0wOwpmb3IobGV0IGk9MDtpPDEwO2krKyl7CiAgICBjKys7Cn0KY29uc29sZS5sb2coImhleSBhZnRlciBzZXR0aW1lb3V0Iik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
 */