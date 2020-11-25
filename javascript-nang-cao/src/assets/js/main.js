// ****************************** 1. Promise
// Promise() là một object construnctor, mục đích để xử lý các thao tác bất đồng bộ(trước đó thì sử dụng callback để xử lý),
// vấn đề callback -> tình huống callback hell , code viết lồng quá sâu
// truyền vào là một function, gọi là executor. ngay khi gọi tới new Promise thì function sẽ được gọi
// function executor được gọi trong Promise sẽ có 2 tham số là 2 function: resolve (giải quyết) và reject (từ chối)
// khi nào đoạn mã logic trong hàm executor thành công thì sẽ thực thi nhiệm vụ trong hàm resolve, ngươc lại thất bại thì thực hiện reject
// trong hàm executor luôn phải truyène vào 1 trong 2 hàm thành công-thất bại,
// nếu k sẽ bị treo vì kb bao giờ thành công/ thất bại để kết thúc-> ở trang thái pedding- chờ gây rò rỉ bộ nhớ - memory leak
// nếu là resolve thì sẽ rơi vào case then, reject thì rơi vào case catch, và cuối cùng sẽ rơi vào case finanlly
// đối với trường hợp thành công thì giá trị return của hàm trước sẽ có thể dùng được trong hàm sau nó. và phải đợi th trước n thực hiện xong ms chạy xuống cái dưới
// tức là chạy xong then ở trên mới chạy đến cái then ở dưới
var promise = new Promise(
    //executor
    function(resolve, reject){
        //logic
        resolve();
        //reject();
    }
);
promise
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve([1,2,3]);
            },1000);
        });  
    })
    .then(function(data){ // data này sẽ nhận giá trị return của hàm trước n, data = [1,2,3] và sẽ log ra sau 1s        
           console.log(data);
    })   
    .catch(function(){
        console.log("error");
    })
    .finally(function(){
        console.log("done");
    });
// promise.resolve()
var promise2 = Promise.resolve("Success");
promise2
    .then(function(result){
        console.log("Result: ", result);
    });
var promise3 = Promise.reject("Faile");
promise3 
    .catch(function(result){
        console.log(result);
    })
//Promise.all() -> tra ve mot promise, va nhan doi so truyen vao la mang cac promise. 
//khi tat ca cac promise truyen vao thuc hien xong resolve thi moi nhay vao then
Promise.all([promise, promise2])
    .then(function(){
        console.log('abc');
    })
    .catch(function(){
        console.log('err');
    })

// ****************************** 2. Async await: đuọc sử dụng bên trong async function. 
// trả về giá trị của promise được thực hiện hoặc giá trị của chính nó nếu kp promisepromise

function resolveAfter2s(x) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
} 
async function f1() {
var x = await resolveAfter2s(10);
console.log(x); // 10
}  
f1();

// *************************** 3. setTimeout, clearTimeout, setInterval, clearInteral
// setTimeout(function, time[, parameter1, parameter2...]) /
// setInterval(function, time[, parameter1, parameter2..]) -> doan ma js se duoc thuc thi sau khoang time truyen vao. 
// setInterval() thi doan ma se thuc hien lap di lap lai cho den khi dung n lai bang ham clearInterval() hoac dong trinh duyet.
// setTimeout() thi chi thuc hien 1 lan.
// clearInterval()  va clearTimeout() de dung lai viec thuc thi doan ma. Con parameter la tham so bo sung cho function

var interval = setInterval(function(){
    alert("setInterval");
}, 3000);

clearInterval(interval);

function say(name){
    let p = document.getElementById('interval');
    p.innerText = "Hello " + name;
}
var timeout = setTimeout(say,2000, "abc");
clearTimeout(timeout);

function clock(){
    let day = new Date();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let timeNow = h + ":" + m + ":" + s;
    let p = document.getElementById('timeout');
    p.innerText = "Time Now is: " +timeNow;
    
}
setInterval(clock, 1000);


// ************************ 3. ES6
// ------ 3.1. arrow function
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

// ---------- 3.2. template string
let x=10;
let templateStr = `gia tri cua x la: ${x}`;
console.log(templateStr);

// ------------ 3.3. defaul parameter: cho phep truyen gia tri mac dinh cho bien khi viet function. 
//neu tham so do k duoc truyen vao thi se nhan gia tri mac dinh do
function sum(a, b =10){
    return a+b;
}
console.log(sum(1)); //log: 11
console.log(sum(1,3)); //log: 4

// ------------- 3.4. bind - call - apply
// ------------ this: trỏ tới một đối tượng cụ thể, phụ thuộc vào nơi, vị trí mà this được gọi
// nếu this đươc gọi trong 1 function có phạm vi là global scope thì this trỏ tới đối tượng toàn cục chính là window. 
// hoặc this được gọi trong một inner function( tức function viết bên trong 1 function)  thì this cũng trỏ tới window
// Nhưng nếu viết trong "strictt mode" thì this là undefined. trong các hàm  ẩn danh không ràng buộc đối tượng nào thì this là undefined 

// var myVar = 100;
// function myFu1(){
//     var myVar = 200;
//     function myFu2(){
//         myVar+=100;
//         alert(myVar);
//         alert(this.myVar);
//     }
//     myFu2();
// }
// console.log(this); //log: đối tượng window
// myFu1();
// call(), bind() cũng đều gọi hàm và set ngữ cảnh cho đối tương this trỏ tới. 

// ------------- 3,4,1. bind
var o = {a: 'Custom'};
var e = 'Global';

function whatsThis() {
  return this.e;  // Giá trị của this phụ thuộc vào cách hàm được gọi.
}

console.log("------",whatsThis()); // 'Global'
whatsThis.call(o);  // 'Custom'
whatsThis.apply(o); // 'Custom'


// -------------3.4.2. call
// call goi 1 function với đối số truyền vào là danh sách các đối số
// func.call(thisArg[,arg1, arg2...]) -> trả về: kết quả của việc gọi hàm với this giá trị và đối số được chỉ định
function Product(name, price){
    this.name = name;
    this.price = price;
};
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
    console.log(this);
}
console.log(new Food('cheese', 5).name);
// -------------3.4.3. apply
// tương tụ như call nhưng đối số truyền vào là một mảng các đối số


// ----------- 3.5. Enhanced object literals
// k dung Enhanced object literals: cac method duoc khai bao duoi dang dat cho la mot thuoc tinh va xu ly bang ham an danh
var age = 20;
var user03 = {
    age: age,
    setName: function(name){
       this.name = name;
    },
    getName: function(){
        return this.name;
    }
}
// Enhanced object literals thi neu thuoc tinh trung vs ten bien thi co the bo. 
// voi method thi co the bo kieu viet theo function an danh-> tuong minh hon
var user04 = {
    age,
    setName(name){
        this.name=name;
    },
    getName(){
        return this.name;
    }
}
console.log(user04.age);
user04.setName("Nguyen van a");
console.log(user04.getName());

// ----------- 3.6. class, class inheritance, method overriding

// ---------- 3.7. super, static, rest, spead
// -----------3.7.3.rest parameter with function: cho phep mot ham nhan vo so doi so, gop thanh mang
//dat rest operator vao truoc tham so cuoi cung thi n se nhom chung thanh mang
function res(a, b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
res(1,2,3,4,5,6); // log: a=1, b=2, c=[3,4,5,6]. vi 1, 2 duoc truyen dung vao a, b. con c se nhan cac gia tr con lai gom thanh array
// ------------ 3.7.4.spead  bien  array thanh argument-doi so. mở rộng mảng 
function getName(firstName, lastName){
    console.log(firstName +" "+ lastName);
}
//cach thong thuong se truyen doi so la cac phan tu cua mang fullName bang cach lay phan tu theo index
var fullName = ["Ta","Chug"];
getName(fullName[0], fullName[1]);
// su dung spread operator: fullName tach ra thanh 2 doi so truyen vao function
getName(...fullName);
//co the goi spread nhieu lan
function myFunction(v, w, x, y, z, g, h) {
    console.log(v);
    console.log(w);
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(g);
    console.log(h);
 }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[4], ...args);

// ----------- 3.8. value type- tham tri, reference type- tham chieu
// -------- 3.8.1. tham tri: giá trị của biến được lưu trực tiếp xuống vùng nhớ của biến. 
// number, string, boolean, null, undefined -> tham trị
var a=5;
b=a;
b=10;
console.log(a); //5 
console.log(b); //10
// truyền tham trị - pass by value
function f2(number){
    number=12;
}
var a=8;
f2(a);
console.log("gia tri a:", a);//8 vì n sẽ tạo ra một biến khác a1 và gán bằng a. sau đó truyền vào hàm f2 là a1=8. nên a k bị thay đổi gì
// -------- 3.8.2 tham chieu: 
// đối với object và array-> tham chiếu: lưu giá trị dưới dạng địa chỉ của tham chiếu chứa biến (chứa địa chỉ vùng nhớ chứ k chứa giá trị biến)
// khi gán biến mới bằng biến cũ, mà biến cũ thay đổi thì sẽ làm thay đổi cả biến mới do cùng tham chiếu đến 1 địa chỉ vùng nhớ
// phép gán đối với object hoặc array thực chất là copy địa chỉ
var obj1 = {
    name: "A"
}
var obj2= obj1;
obj2.name = "BBB";
console.log(obj1.name);//BBB
console.log(obj2.name);//BBB
// truyền tham chiếu - pass by reference
function getCar(obj){
    console.log(obj.name);
    obj.name ="Change";
}
const  car = {
    name: "Carrr",
}
getCar(car);
console.log("name car: ", car.name); //Change
// ------------ 3.9. closure
// ------------ 3.10. Higer order functions
// ------------- 3.11. Destructuring - phân rã
// voi array
var arrNumber = [1,3,4,6,9];
var [a,b,c, ...rest] = arrNumber;
console.log(a,b,c,rest);
// voi obj
var khoahoc ={
    tenkhoahoc: "JS",
    gia: 10000,
}
var {tenkhoahoc, gia} = khoahoc;
console.log(tenkhoahoc, gia);









