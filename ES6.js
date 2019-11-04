/* Defining functions inside object */
var obj = {
    name: "soheb",
    college: "vnrvjiet",
    roll_no: 596,
    brach: "cse",
    info: function () {

        return this.name + " is a student of " + this.college + " bearing the roll no " + this.roll_no + " studying in branch " + this.brach;
    }
}
console.log(obj.info());
//------------------------------------------------------------------------------------------------------------------------

/* Replacing particular words of a string with a particular word */
var s = "hello world this Is soheb moin"
var myMap = {
    "world": "universe",
    "this": "that",
    "soheb": "shahrukh",
    "moin": "khan"
}
s = s.replace(/world|this|soheb|moin/ig, function (s) {
    return myMap[s];
})
console.log(s);
//------------------------------------------------------------------------------------------------------------------------

/* Defining properties of objects */
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});//property is x with a value of 0 and is READONLY
console.log(obj.x);//To access
//------------------------------------------------------------------------------------------------------------------------

/* Function Closures */
let f = (function () {
    console.log("Up");
    let i = 0;
    return function () {
        console.log("Down");
        i++;
        return i;
    }
})();
console.log(f());
console.log(f());
console.log(f());//Up will be printed only once and Down will be printed 3 times
//------------------------------------------------------------------------------------------------------------------------

/* Object Closures */
a = {
    i: 0,
    info: function () {
        this.i++;//agar this avoid karna hai tho go for function closures
        return this.i;
    }
}
console.log(a.info());
console.log(a.info());
console.log(a.info());//Here the variable name will be printed as 3
//------------------------------------------------------------------------------------------------------------------------

/* setInterval can be used to run a piece of code after every few seconds */
function doit() {
    console.log("Heya");
}
setInterval(() => doit(), 200);
//------------------------------------------------------------------------------------------------------------------------

/* Higher order functions */
function multiplier(factor) {
    return (x) => {
        return x * factor;
    }
}
let doubler = multiplier(2);
let tripler = multiplier(3);
console.log(doubler(23));//output of 46
console.log(tripler(23));//output of 69
//------------------------------------------------------------------------------------------------------------------------








