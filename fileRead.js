const fs = require("fs");
const fs_1 = require("fs").promises;

/** 
 * Aync task : first read is done , then callback hits 
*/
//This is async task read when file read is done a callback hits and print data from that file , in meantime it moves to next line (this function gets execute in backgroud)
fs.readFile("a.txt","utf-8",(err,contentFromFile)=>{
    console.log(contentFromFile);
})

//This is sync task read when file read , print data in sync
//const data = fs.readFileSync("b.txt","utf-8")
//console.log(data)

function printData_callback(err,data){
    if(err){
        console.log("filee not found");
    }
    else{
        console.log(data);
    }
    
}


function printData_callback_1(err,data){
    if(err){
        console.log("filee not found");
    }
    else{
        console.log(data);
    }
}
//you can define callback outside and pass as well :: using callback 
//fs.readFile("a.txt","utf-8",printData_callback)

//using : Promise
///promise approach 
// Using promise-based approach
fs_1.readFile("a.txt", "utf-8")
  .then((data) => {
    printData_callback_1(null, data); // Simulate callback behavior
  })
  .catch((err) => {
    printData_callback_1(err); // Pass error to the callback
});