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
