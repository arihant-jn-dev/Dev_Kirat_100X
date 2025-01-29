function calledAfter3s(resolve){ //resolve=main here 
    setTimeout(resolve,3000); 
}

function main(){
    console.log("main is called after 3 secs");
}

calledAfter3s(main);