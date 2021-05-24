// Start learning TypeScript
// Primitives
var a = 5;
var b = 'string';
var c = 'type string';
var d = true;
var arr = ['first', 'second'];
var e = 3; // Not recommended to use
function fn(a) {
    var b = a + a;
}
var arrowFunc = function (a) { return a * 2; };
var mapArr = arr.map(function (x) { return x.toUpperCase(); });
function countCoordination(coordinates) {
}
function printed(id) {
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
function getSum(a) {
    if (Array.isArray(a)) {
        console.log(a);
    }
}
var undefinedValue = undefined;
var nullValue = null;
function printOut(coordinates) {
}
// type Test {    don't work
//     a:number
// }
// type Test {
//     b:number,
// }
var fnType = function (point) {
    var d = point;
};
var myCanvas = document.getElementById('canvas');
