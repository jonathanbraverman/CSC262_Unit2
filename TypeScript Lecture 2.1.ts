let a = "apple";
var b = "baker";

function myfunction(){
var m = 11;
let n = 12;

    console.log("hello");

    if(true) {
        let k = 1000;
        console.log(k);
        console.log(m);
        console.log(n);
    }

    { // my block for the heck of it
        let p = "Porpoise";           
        var q = "quince";
        console.log(p);    
        console.log(q);  
    }

    console.log(k);
    console.log(m);
    console.log(n);
    console.log(p);
    console.log(q);  
}

myfunction();

console.log(m);
console.log(n);