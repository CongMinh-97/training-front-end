// ****************************** 1. Promise
// ****************************** 2. Async await
// *************************** 3. setTimeout, clearTimeout, setInterval, clearInteral
// setTimeout(function, time[, parameter1, parameter2...]) /
//setInterval(function, time[, parameter1, parameter2..]) -> ham se thuc thi sau khoang time truyen vao. se thuc hien vong lai. 
//neu clearTimeout() / clearInterval thi se ket thuc, hoac dong window closed . trong do: parameter la tham so bo sung cho function
var interval = setInterval(function(){
    alert("setInterval");
}, 2000);

setInterval(function(){
    clearInterval(interval);
}, 2000);
var timeout = setTimeout(function(){
    alert("time out");
}, 2000);

setInterval(function(){
    clearTimeout(timeout);
}, 2000);
 

// ************************ 3. ES6

// ------ arrow function
// arrow function không có this , super
var course = {
    name: 'PHP',
    price: 1000,
    getName: function(){
        return this.name; // this là th gọi đến phương thức getName -> là course
    },
    getPrice: ()=>{
        return this.price; // this là th gọi đến phương thức getName -> là course
    }
}
console.log(course.getName());
console.log(course.getPrice());//undefinder vì trong arrowfunction k có this

// arrow function không sử dụng như contructors
//dùng function thường để tạo constructors
var User = function(name, age){
    this.name= name;
    this.age= age;
}
var user = new User('Nguyen Van A', 12);
console.log(user);
//dùng arrow function để tạo constructors ->> error
var User02 = (name, age)=> {
    this.name = name,
    this.age = age
}
//console.log(new User02("Nguyen",12));// err: User02 kp constructor


// function không có paramater
let sayHello = ()=> {
    return "Hello";
};
console.log(sayHello());
// function có paramater
let z= (x,y)=> x+y;
console.log(z(3,5));
let userObj = (name, age)=>({name:name, age:age });
//or 
let userObj02 = (name, age)=>{
    return { name: name, age: age};
}
console.log(userObj("AAA", 1));
console.log(userObj02("ABB", 1));

// ---------- rest parameter with function
let arrayNumber = [1,2,4,5,8];

// ---------- template string
let x=10;
let templateStr = `gia tri cua x la: ${x}`;
console.log(templateStr);


