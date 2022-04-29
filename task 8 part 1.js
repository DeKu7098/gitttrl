// example 1 //

// var obj = {num:2};

// var addToThis = function(a,b,c)
// {
//     return this.num + a + b + c;
// }
// console.log(addToThis.call(obj, 1,2,3));

// var arr = [1,2,3];
// console.log(addToThis.apply(obj, arr));

// Example 2 //

// var obj = {num:2};

// var addToThis = function(a,b,c)
// {
//     return this.num + a + b + c;
// }
// var arr = [1,2,3];

// var bound = addToThis.bind(obj);


// console.log(bound(1,2,3));

var student = {age:20};

var age = function(a)
{
    return this.age;
}
var bound = age.bind(student);
console.log(bound(this.age));