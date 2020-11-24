// ****************************** 1. Promise
// ****************************** 2. Async await
// *************************** 3. setTimeout



// ************************ ES6
// ------ arrow function
// arrow function không có this , super
var user = {
    name: "ABc",
    age: 10,
}

// arrow function không sử dụng như contructors
// function không có paramater
let sayHello = ()=> {
    return "Hello";
};
console.log(sayHello());
// function có paramater
let z= (x,y)=> x+y;
console.log(z(3,5));


