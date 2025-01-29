/*
Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
*/

//callback Hell 
//here we are passing fn in settimeout without any name --> it's called anonymous fn 
setTimeout(function(){
    console.log("hi after 1 sec");
    setTimeout(function(){
        console.log("Hello");
        setTimeout(function(){
            console.log("hi there");
        },5000)
    },3000)
},1000);