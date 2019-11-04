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

/* Defining properties of objects */
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});//property is x with a value of 0 and is READONLY
console.log(obj.x);//To access
