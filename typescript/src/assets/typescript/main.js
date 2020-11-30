var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer01 = /** @class */ (function () {
    function Customer01(firstName, lastName) {
        this.name = firstName + " " + lastName;
    }
    Customer01.prototype.getName = function () {
        return this.name;
    };
    return Customer01;
}());
var cust = new Customer01("Jimi", "Scott");
// ******** kieu du lieu: number( cu the la so nguyen, so thuc ... thi se phu thuoc vao gia tri truyen vao)
// boolean, string, array, obj, null, undefined, co them kieu void, tuple, any, enum
var address = "Bac Giang";
var isDone = true;
var num = 12;
// mang: 2 cach khai bao: kieudulieu[]   or  Array<kieudulieu>
var arr01 = ['Jimi', 'Scott'];
var arr02 = ['ABC', 'DEF'];
// obj: 
var prams = {
    name: 'abc',
    age: 22
};
// console.log(o);
// tuple: chua nhieu gia tri voi nhieu kieu du lieu khac nhau
// tuple la mang da xac dinh so phan tu va kieu du lieu cho phan tu do
var tupleArray;
tupleArray = [8, 'Chug', 'BG', true];
// gia tri phan tu truyen vao phai dung voi kieu dl, va truyen du gia tri voi so luong khai bao
//tupleArr = ['Chug', 8, 'BG', true]; // sai vi phan tu dau tien la kieu number...
console.log(tupleArray[0]);
// enum: kiểu dữ liệu đặc biệt dùng để tạo một nhóm tên tương ứng với các giá trị là những con số mà ta thiết lập cho nó,-> tập số
//nếu ta không thiết lập giá trị cho chúng thì nó sẽ tính theo thứ tự và bắt đầu bằng 0.các giá trị sau tăng theo thứ tự lên 1
var Color1;
(function (Color1) {
    Color1[Color1["Yellow"] = 0] = "Yellow";
    Color1[Color1["Blue"] = 1] = "Blue";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Red"] = 3] = "Red";
    Color1[Color1["Black"] = 4] = "Black";
})(Color1 || (Color1 = {}));
;
var color01 = Color1.Yellow; // log: 0
console.log(color01);
var Color2;
(function (Color2) {
    Color2[Color2["Yellow"] = 3] = "Yellow";
    Color2[Color2["Blue"] = 4] = "Blue";
    Color2[Color2["Green"] = 5] = "Green";
    Color2[Color2["Red"] = 6] = "Red";
    Color2[Color2["Black"] = 7] = "Black";
})(Color2 || (Color2 = {}));
;
var color02 = Color2.Yellow; // color02 =3
console.log(Color2.Red); //log: 6 vi Yellow o vi tri dau tien da bat dau gia tri la 3
// co the  thay doi tat ca gia tri trong enum
var Color3;
(function (Color3) {
    Color3[Color3["Yellow"] = 3] = "Yellow";
    Color3[Color3["Blue"] = 1] = "Blue";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Red"] = 7] = "Red";
    Color3[Color3["Black"] = 6] = "Black";
})(Color3 || (Color3 = {}));
; // log: Yellow: 3; Blue: 1; Green: 2; Red: 7; Black: 6
//lay ten gia tri qua gia tri 
console.log(Color3[1]); // log: Blue
//any: kieu bat ki
var a = 4;
a = 'String';
a = true;
console.log(a);
var b = [1, 2, 'abc', false];
// void: ham k tra ve gia tri gi, co the gan cho null hoac undefined
function sayHello() {
    console.log("Say hello");
}
sayHello();
// interface: định nghĩ thuộc tính là gì và phương thức là gì mà đối tượng cần để được thực thi (implement). 
// Nếu đối tượng tuân thủ đúng khuôn mẫu interface thì đối tượng đã implement interface ấy sẽ được thi hành đúng. 
// Nếu interface không được thi hành đúng đắn thì typescript sẽ phát sinh lỗi ngay lập tức. 
//    khong dung interface
function printLabel1(labelObj) {
    console.log("label: " + labelObj.label + " ,size: " + labelObj.size);
}
;
printLabel1({ label: 'abc', size: 10 });
function printLabel2(labelObj) {
    console.log("label: " + labelObj.label + " ,size: " + labelObj.size);
}
printLabel2({ label: 'abc', size: 10 });
// function
// arrow function in typescript
var sum = function (x, y) { return x + y; };
console.log(sum);
// tham số optional, nghĩa là có truyền giá trị vào cho nó hay không đều được. -> them dau ? vao truoc kieu dl cua n
function buildName1(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else
        return firstName;
}
console.log(buildName1("Bob", undefined)); // log: Bob vi undefined - k co -> hieu la k co bien lastName
console.log(buildName1("Bob", "Adams"));
// bien mac dinh
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Adams'; }
    return firstName + " " + lastName;
}
console.log(buildName2("Bob"));
console.log(buildName2("Bob", "Mama"));
//Nếu một tham số được khởi tạo mặc định đứng trước một tham số bắt buộc, 
//thì người dùng cần phải chuyển một cách rõ ràng undefinedđể nhận được giá trị được khởi tạo mặc định. 
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Bob'; }
    return firstName + " " + lastName;
}
console.log(buildName3(undefined, "Bob")); // phai truyen undefined vao, neu k se loi thieu tham so
// rest trong function
function buildName4(firstName, lastName) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log('firstName' + firstName);
    console.log('lastName' + lastName);
    console.log('rest' + rest);
}
console.log(buildName4("Bob", "Mama", "Bob", "Mama", "Bob", "Mama"));
// this in function
// class 
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (speed) {
        if (speed === void 0) { speed = 0; }
        console.log(this.name + " speed: " + speed + "km/s");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (speed) {
        console.log('Slithering');
        _super.prototype.move.call(this, speed);
    };
    return Snake;
}(Animal));
var snack1 = new Snake('abc');
console.log(snack1.name); // log: abc
snack1.move(22);
// union types
// Khi bạn muốn một biến nào đó có thể có nhiều kiểu dữ liệu khác nhau,
var unionVar = function (arg) { return arg; }; // unionVar  có thể nhận một trong 2 kiểu dữ liệu là string hoặc number
unionVar("hello");
unionVar(100);
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
var result = rollDice();
console.log(result);
// generic
// cú pháppháp
//   function identity<T>(arg: T): T {
//     return arg;
//   }
// gọi
//identity<kiểu dữ liệu mà muốn gán cho T>(); // gọi hàm indentity
// Normal arrow function
var myIdentity1 = function (arg) { return arg; };
var myIdentity2 = function (arg) { return arg; };
// Generic function
var myIdentity = function (arg) { return arg; };
// How to call generic function?
console.log(myIdentity(1603));
console.log(myIdentity("generic"));
// có thể dùng any khai báo kiểu dữ liệu cho biến từ đầu nhưng như vậy sẽ làm mất đi thông tin về kiểu đó là gì khi hàm trả về   
